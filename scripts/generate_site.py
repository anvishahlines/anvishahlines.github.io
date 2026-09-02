import os
from google import genai

# Automatically uses the GEMINI_API_KEY secret you set up earlier
client = genai.Client()

prompt = "Generate a complete, modern single-page personal website in HTML and CSS. Return only clean code."

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=prompt,
)

# Save the generated code into your repository's index.html file
os.makedirs(".", exist_ok=True)
with open("index.html", "w") as f:
    f.write(response.text)

print("Website successfully generated and updated by Gemini!")
