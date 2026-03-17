# Deployment to GitHub Pages

## Quick Deploy

1. **Create a GitHub repository** and push this code:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository → Settings → Pages
   - Under "Build and deployment", select:
     - Source: **Deploy from a branch**
     - Branch: **main** → **/(root)**
   - Click Save

3. **Your site will be live at**: `https://YOUR_USERNAME.github.io/portfolio`

## Customization

Edit `index.html` to update:
- Your name in the hero section
- About section content
- Skills (change the tags)
- Projects (update project cards with your real projects)
- Contact links (email, GitHub, LinkedIn)

## Files

- `index.html` - Main portfolio page
- `SPEC.md` - Design specification