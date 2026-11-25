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


