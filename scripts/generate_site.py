import os
import re
from google import genai

def main():
    # Initialize the client using the GEMINI_API_KEY environment variable
    client = genai.Client()
    
    # Define the architectural instructions and the strict output format
    prompt = """
    You are an expert web developer building a static portfolio website.
    
    Generate the full HTML and CSS code for the following three files to implement a multi-page gallery with a GLightbox scrollable grid:
    1. `projects.html` (The landing page displaying folder links to individual projects)
    2. `drawings.html` (The scrollable gallery page utilizing GLightbox for expanded viewing)
    3. `style.css` (Append the .work-grid, .work-item, and custom .gslide classes to the existing site styles)

    CRITICAL: You must format your response exactly like this for each file so a script can parse it. Do not include standard markdown codeblocks (```html), only use these exact boundary markers:
    
    ---START: filename.ext---
    <paste raw code here>
    ---END: filename.ext---
    """
    
    print("Requesting site generation from Gemini API...")
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=prompt,
    )
    
    # Parse the output and write to files using regex
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
        
        # Write the file directly to the repository
        with open(filename, "w", encoding="utf-8") as f:
            f.write(content.strip() + "\n")
            
        print(f"Successfully generated and saved: {filename}")

if __name__ == "__main__":
    main()
