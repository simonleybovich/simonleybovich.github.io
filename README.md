# Portfolio (static site)

Single-page personal portfolio built with **vanilla HTML/CSS/JS**. Designed to be **fast**, **easy to customize**, and **simple to deploy** on GitHub Pages.

## Run locally

Quick option (no installs):

- Open `index.html` in your browser.

Recommended option (avoids common caching/routing quirks):

```bash
npx serve .
```

Then open the URL printed in the terminal (for example `http://localhost:3000`).

## Deploy to GitHub Pages

### 1) Push to GitHub

If you haven’t pushed this project yet:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 2) Enable GitHub Pages

- In your repo: **Settings → Pages**
- Under **Build and deployment**:
  - **Source**: Deploy from a branch
  - **Branch**: `main` / `(root)`
- Save

Your site will be live at:

- `https://YOUR_USERNAME.github.io/portfolio`

## Quick customization

Edit `index.html` to update:

- **Hero**: name, role, CTA
- **About**: text and “Focus Areas”
- **Skills**: tags per category
- **Projects**: cards (currently shows “Coming Soon”)
- **Contact**: email, GitHub, LinkedIn links

Styling lives in:

- `style.css` (theme, layout, responsive rules, animations)

## Project structure

- `index.html`: main page
- `style.css`: styles
- `script.js`: interactions (navbar, mobile menu, scroll animations, dynamic year)
- `SPEC.md`: design/UI specification
