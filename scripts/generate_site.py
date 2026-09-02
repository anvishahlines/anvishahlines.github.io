import os
import re
from google import genai

def main():
    client = genai.Client()
    
    # 1. Read existing files to pass as context
    try:
        with open("index.html", "r", encoding="utf-8") as f:
            index_content = f.read()
        with open("style.css", "r", encoding="utf-8") as f:
            style_content = f.read()
    except FileNotFoundError as e:
        print(f"Context error: {e}")
        return
    
    # 2. Inject context into the prompt
    prompt = f"""
    You are an expert web developer building a static portfolio website.
    
    Here is the site's existing index.html to use as the exact template for headers, metadata, and the mobile menu:
    {index_content}
    
    Here is the site's existing style.css to use as the base design system:
    {style_content}
    
    Task: Generate the full HTML and CSS code for the following three files to implement a multi-page gallery with a GLightbox scrollable grid.
    1. `projects.html` (The landing page displaying folder links to individual projects. Retain the exact header/nav structure from index.html).
    2. `drawings.html` (The scrollable gallery page utilizing GLightbox for expanded viewing. Retain the exact header/nav structure from index.html).
    3. `style.css` (Output the ENTIRE existing style.css verbatim, and simply append the necessary .work-grid, .work-item, and custom .gslide classes at the bottom).

    CRITICAL: You must format your response exactly like this for each file so a script can parse it. Do not include standard markdown codeblocks for the file outputs, only use these exact boundary markers:
    
    ---START: filename.ext---
    <paste raw code here>
    ---END: filename.ext---
    """
    
    print("Requesting site generation from Gemini API with existing context...")
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=prompt,
    )
    
    # 3. Parse the output and write to files using regex
    pattern = r"---START:\s*(.+?)---\n(.*?)\n---END:\s*\1---"
    matches = re.findall(pattern, response.text, re.DOTALL)
    
    if not matches:
        print("Error: Could not parse files from the response. Raw output:")
        print(response.text)
        return

    for filename, content in matches:
        filename = filename.strip()
        
        # Clean up stray markdown blocks if the model included them by accident
        content = re.sub(r"^```[a-z]*\n", "", content)
        content = re.sub(r"\n```$", "", content)
        
        # Write the file directly to the repository, overwriting or creating as needed
        with open(filename, "w", encoding="utf-8") as f:
            f.write(content.strip() + "\n")
            
        print(f"Successfully generated and saved: {filename}")

if __name__ == "__main__":
    main()
