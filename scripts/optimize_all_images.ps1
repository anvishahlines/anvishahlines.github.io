Add-Type -AssemblyName System.Drawing

$imagesDir = Join-Path $PSScriptRoot "..\public\images"
$files = Get-ChildItem -Path $imagesDir -Recurse -File | Where-Object {
    $_.Extension -match '^\.(jpg|jpeg|png)$'
}

Write-Host "Found $($files.Count) image files to check in $imagesDir"

$codecs = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()
$jpegCodec = $codecs | Where-Object { $_.MimeType -eq "image/jpeg" }
$pngCodec = $codecs | Where-Object { $_.MimeType -eq "image/png" }

$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]85)

$totalOldBytes = 0
$totalNewBytes = 0
$processedCount = 0

foreach ($file in $files) {
    $path = $file.FullName
    $origSize = $file.Length
    $totalOldBytes += $origSize

    try {
        $bytes = [System.IO.File]::ReadAllBytes($path)
        $ms = New-Object System.IO.MemoryStream(,$bytes)
        $img = [System.Drawing.Image]::FromStream($ms)

        # Handle EXIF orientation FIRST before measuring dimensions!
        $propId = 0x0112
        if ($img.PropertyIdList -contains $propId) {
            $prop = $img.GetPropertyItem($propId)
            $val = [BitConverter]::ToUInt16($prop.Value, 0)
            switch ($val) {
                2 { $img.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
                3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
                4 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipX) }
                5 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
                6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
                7 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
                8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
            }
            $img.RemovePropertyItem($propId)
        }

        # NOW read true oriented width and height!
        $w = $img.Width
        $h = $img.Height

        # If already <= 1800 on both sides and < 350KB, skip re-encoding (unless it had EXIF orientation to bake in)
        # Note: if it had EXIF orientation > 1, we DO want to re-encode to permanently bake the upright orientation
        $hadExifRotation = ($img.PropertyIdList -notcontains $propId) # we removed it if present

        $MaxDim = 1800
        $scale = [Math]::Min(1.0, [Math]::Min([double]$MaxDim / $w, [double]$MaxDim / $h))
        $newW = [int][Math]::Round($w * $scale)
        $newH = [int][Math]::Round($h * $scale)

        $bmp = New-Object System.Drawing.Bitmap($newW, $newH, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
        $bmp.SetResolution($img.HorizontalResolution, $img.VerticalResolution)

        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

        $g.Clear([System.Drawing.Color]::White)
        $g.DrawImage($img, 0, 0, $newW, $newH)
        $g.Dispose()
        $img.Dispose()
        $ms.Dispose()

        $tempOut = "$path.opt_tmp.jpg"
        $bmp.Save($tempOut, $jpegCodec, $encoderParams)
        $bmp.Dispose()

        $newSize = (Get-Item $tempOut).Length

        if ($newSize -lt $origSize -or $val -gt 1) {
            # Replace original
            Move-Item -Path $tempOut -Destination $path -Force
            $totalNewBytes += $newSize
            $processedCount++
            Write-Host "Optimized [$($file.Name)]: $([Math]::Round($origSize/1024))KB ($w x $h) -> $([Math]::Round($newSize/1024))KB ($newW x $newH)"
        } else {
            Remove-Item $tempOut -Force
            $totalNewBytes += $origSize
        }
    }
    catch {
        Write-Warning "Failed to optimize $($file.FullName): $_"
        $totalNewBytes += $origSize
    }
}

Write-Host "`n=== OPTIMIZATION SUMMARY ==="
Write-Host "Files optimized: $processedCount of $($files.Count)"
Write-Host "Original total:  $([Math]::Round($totalOldBytes / (1024*1024), 2)) MB"
Write-Host "Optimized total: $([Math]::Round($totalNewBytes / (1024*1024), 2)) MB"
Write-Host "Reduction:       $([Math]::Round((1 - $totalNewBytes / $totalOldBytes) * 100, 1))%"
