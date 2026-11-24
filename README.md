# AMARI — Business Website

A responsive, three-page business website created for a Web Technology I final project using HTML5, CSS3 and vanilla JavaScript.

## Pages
- `index.html` — Home page with introduction, services and calls to action.
- `about.html` — Company overview, values and working process.
- `contact.html` — Contact details and a client-side validated contact form.

## Project structure
```text
amari-business-website/
├── index.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── report/
│   └── AMARI_Project_Report.docx
└── README.md
```

## Run locally
1. Extract the project ZIP.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the Live Server extension.
4. Use the navigation bar to visit Home, About Us and Contact.
5. Test the contact form with valid and invalid values.

No build tools or package installation are required. Google Fonts are loaded from an external CDN; the website otherwise uses plain HTML, CSS and JavaScript.

## Contact form limitation
The contact form validates input in the browser and displays a demonstration success message. It does **not** send email, save submissions, or connect to a backend. A production form requires a server-side endpoint or a trusted form service.

## Deploy free using GitHub Pages
1. Create or sign in to a GitHub account.
2. Create a new public repository, for example `amari-business-website`.
3. Upload the contents of this project folder. Ensure `index.html` is in the repository root.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/(root)`, then save.
7. Wait for GitHub Pages to publish the site. The public URL will normally be:
   `https://YOUR-USERNAME.github.io/amari-business-website/`
8. Replace `YOUR-USERNAME` with your GitHub username and test all three pages and links.
9. Include the actual published URL in the final assignment submission.

If you use a different repository name, the URL path changes accordingly. GitHub Pages is static hosting; this project does not require a server-side application.

## Customization before submission
- Replace the fictional company details with your own approved project details if desired.
- Add your name, roll number, college and submission date to the report.
- Test the website at desktop and mobile widths.
- Add the final deployed URL to the report and submission sheet.
