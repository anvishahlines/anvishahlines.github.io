const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function buildCVPdf() {
  const outputDir = path.resolve('public/cv');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const dest = path.join(outputDir, 'Anvi_Stevens_CV.pdf');
  const doc = new PDFDocument({
    size: 'LETTER',
    margins: { top: 48, bottom: 48, left: 54, right: 54 },
    info: {
      Title: 'Anvi Stevens — Curriculum Vitae',
      Author: 'Anvi Stevens',
      Subject: 'Fine Artist Curriculum Vitae',
      Keywords: 'Anvi Stevens, Fine Artist, Painter, Boston MFA, CV'
    }
  });

  const writeStream = fs.createWriteStream(dest);
  doc.pipe(writeStream);

  const leftMargin = 54;
  const rightMargin = 612 - 54;
  const contentWidth = rightMargin - leftMargin;

  // Header
  doc
    .font('Times-Bold')
    .fontSize(22)
    .fillColor('#1c1917')
    .text('ANVI STEVENS', { characterSpacing: 1.5 });

  doc.moveDown(0.2);

  doc
    .font('Helvetica')
    .fontSize(10)
    .fillColor('#57534e')
    .text('Artist | Boston, MA  •  Wakefield, MA', { characterSpacing: 0.5 });

  doc.moveDown(0.2);

  doc
    .font('Helvetica')
    .fontSize(9)
    .fillColor('#78716c')
    .text('Website: anvistevens.com  •  Email: anvishahlines@gmail.com  •  Instagram: @aunvi20');

  doc.moveDown(0.6);

  // Divider
  doc
    .strokeColor('#d6d3d1')
    .lineWidth(0.75)
    .moveTo(leftMargin, doc.y)
    .lineTo(rightMargin, doc.y)
    .stroke();

  doc.moveDown(0.8);

  // Biography / Summary
  doc
    .font('Times-Italic')
    .fontSize(9.5)
    .fillColor('#44403c')
    .text(
      'Anvi Stevens is a contemporary fine artist and painter born in Gujarat, India, and based in Wakefield, Massachusetts. She holds an MFA in Painting from Boston University and a BVA from Maharaja Sayajirao University of Baroda. Her multidisciplinary practice spans oil painting, textile collage, intaglio etching, and sculptural assemblage, exploring domestic interiors, psychological projection, and the social memory embedded within reclaimed fabrics.',
      { lineGap: 3.5 }
    );

  doc.moveDown(0.8);

  // CV Sections Data
  const cvSections = [
    {
      title: 'EDUCATION',
      items: [
        {
          year: '2021',
          primary: 'Master of Fine Arts (MFA) in Painting',
          secondary: 'College of Fine Arts, Boston University, Boston, MA'
        },
        {
          year: '2017',
          primary: 'Bachelor of Visual Arts (BVA) in Painting',
          secondary: 'Faculty of Fine Arts, Maharaja Sayajirao University of Baroda, Gujarat, India'
        }
      ]
    },
    {
      title: 'TWO-PERSON EXHIBITIONS',
      items: [
        {
          year: '2021',
          primary: 're·trace',
          secondary: 'Two-person exhibition with Aisling Wilson, Commonwealth Gallery, Boston University, Boston, MA'
        }
      ]
    },
    {
      title: 'SELECTED GROUP EXHIBITIONS',
      items: [
        {
          year: '2023',
          primary: 'New Language: Contemporary Abstraction',
          secondary: 'Gallery 263, Cambridge, MA'
        },
        {
          year: '2021',
          primary: 'Characters, All',
          secondary: 'Tiger Strikes Asteroid, Brooklyn, NY'
        },
        {
          year: '2021',
          primary: 'Krik? Krak! (Creatives of Color Boston)',
          secondary: 'Multicultural Arts Center, Cambridge, MA'
        },
        {
          year: '2021',
          primary: 'MFA Painting Thesis Exhibition',
          secondary: 'Faye G., Jo, and James Stone Gallery, Boston University, Boston, MA'
        },
        {
          year: '2020',
          primary: 'MFA Painting and Sculpture Exhibition',
          secondary: 'Commonwealth Gallery, Boston University, Boston, MA'
        },
        {
          year: '2018',
          primary: 'Face To Face 3',
          secondary: 'L. & P. Hutheesing Visual Art Center, Ahmedabad, India'
        },
        {
          year: '2018',
          primary: 'First Take',
          secondary: 'Abir Foundation, Ahmedabad, India'
        },
        {
          year: '2017',
          primary: 'Interlude 1',
          secondary: 'Knots Art Collective, Exhibition Hall, Faculty of Fine Arts, MSU, Vadodara, India'
        },
        {
          year: '2017',
          primary: 'Envisage',
          secondary: 'Kanoria Gallery for Arts, Ahmedabad, India'
        },
        {
          year: '2017',
          primary: 'Zarra',
          secondary: 'Exhibition Hall, Faculty of Fine Arts, MSU, Vadodara, India'
        },
        {
          year: '2016',
          primary: 'Wat-R-color',
          secondary: 'Hub Vadodara, Exhibition Hall, Faculty of Fine Arts, MSU, Vadodara, India'
        }
      ]
    },
    {
      title: 'RESIDENCIES',
      items: [
        {
          year: '2027',
          primary: 'Elf School of the Arts',
          secondary: 'Artist Residency (Upcoming)'
        }
      ]
    },
    {
      title: 'AWARDS & SCHOLARSHIPS',
      items: [
        {
          year: '2021',
          primary: 'Howard Gotlieb Writer Artist Book Project Award',
          secondary: 'Boston University, Boston, MA'
        },
        {
          year: '2019–21',
          primary: 'Constantin Alajalov Scholarship',
          secondary: 'School of Visual Arts, Boston University, Boston, MA'
        },
        {
          year: '2017',
          primary: '99th Annual Art Exhibition Award',
          secondary: 'The Art Society of India, Mumbai, India'
        }
      ]
    },
    {
      title: 'PUBLICATIONS & PRESS',
      items: [
        {
          year: '2023',
          primary: 'Create! Magazine (Issue 41)',
          secondary: 'Juried Print Feature selected by Victoria Fry'
        }
      ]
    }
  ];

  for (const section of cvSections) {
    // Check page break space
    if (doc.y > 660) {
      doc.addPage();
    }

    doc.moveDown(0.4);

    // Section title
    doc
      .font('Helvetica-Bold')
      .fontSize(9.5)
      .fillColor('#1c1917')
      .text(section.title, { characterSpacing: 1.2 });

    doc.moveDown(0.2);

    doc
      .strokeColor('#e7e5e4')
      .lineWidth(0.5)
      .moveTo(leftMargin, doc.y)
      .lineTo(rightMargin, doc.y)
      .stroke();

    doc.moveDown(0.4);

    for (const item of section.items) {
      if (doc.y > 700) {
        doc.addPage();
      }

      const itemStartY = doc.y;

      // Year on the right
      doc
        .font('Helvetica')
        .fontSize(9)
        .fillColor('#78716c')
        .text(item.year, rightMargin - 60, itemStartY, { width: 60, align: 'right' });

      // Primary + Secondary on the left
      doc
        .font('Times-Bold')
        .fontSize(10)
        .fillColor('#1c1917')
        .text(item.primary, leftMargin, itemStartY, { width: contentWidth - 70 });

      if (item.secondary) {
        doc
          .font('Times-Roman')
          .fontSize(9.5)
          .fillColor('#57534e')
          .text(item.secondary, leftMargin, doc.y, { width: contentWidth - 70, lineGap: 1.5 });
      }

      doc.moveDown(0.4);
    }
  }

  doc.end();

  writeStream.on('finish', () => {
    console.log(`✓ Successfully generated ${dest}`);
  });
}

buildCVPdf();
