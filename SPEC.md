# Portfolio Website Specification

## Project Overview
- **Type**: Static portfolio website
- **Tech**: Vanilla HTML/CSS/JS (lightweight, easy GitHub Pages deployment)
- **Core**: Single-page portfolio showcasing backend engineering skills

## UI/UX Specification

### Layout
- Single page with smooth scroll sections
- Fixed navigation bar
- Sections: Hero, About, Skills, Projects, Contact

### Visual Design

**Color Palette**
- Background: `#0d1117` (dark GitHub-style)
- Surface: `#161b22`
- Primary accent: `#58a6ff` (blue)
- Secondary accent: `#238636` (green)
- Text primary: `#c9d1d9`
- Text muted: `#8b949e`

**Typography**
- Headings: "Outfit", sans-serif (Google Fonts)
- Body: "Source Sans 3", sans-serif (Google Fonts)
- Monospace for code: "JetBrains Mono"

**Spacing**
- Section padding: 80px vertical
- Container max-width: 1100px
- Card gap: 24px

### Components

**Navigation**
- Transparent navbar, becomes solid on scroll
- Smooth scroll to sections
- Mobile: hamburger menu

**Hero Section**
- Large heading with name
- Tagline as backend engineer
- Subtle animated background pattern
- CTA button to scroll to projects

**About Section**
- Two-column layout (text + decorative)
- Brief intro about being backend engineer

**Skills Section**
- Grid of skill cards
- Categories: Languages, Databases, Tools, Frameworks
- Icons for each skill

**Projects Section**
- Grid of project cards
- Project name, description, tech stack, links

**Contact Section**
- Simple contact info
- Email link
- GitHub/LinkedIn links

### Animations
- Fade-in on scroll for sections
- Subtle hover effects on cards
- Smooth scroll behavior

## Functionality Specification

### Features
- Responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Scroll-triggered animations
- External links open in new tab

### Data
- Hardcoded personal info (name, tagline, about, skills, projects, contact)

## Acceptance Criteria
- [ ] Page loads without errors
- [ ] All sections visible and styled
- [ ] Navigation works (scroll to sections)
- [ ] Responsive on mobile viewport
- [ ] Clean dark theme aesthetic
- [ ] Easy to customize content