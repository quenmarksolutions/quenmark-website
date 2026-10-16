# YourCompany Website

A complete, multi-page startup website built with **plain HTML, CSS, and JavaScript** — no build tools, no npm, no frameworks. Open `index.html` in any browser and it works.

---

## 📁 Project Structure

```
Company website/
│
├── index.html          ← Home page (landing page)
├── services.html       ← Services page (4 service verticals)
├── products.html       ← Products & Pricing page (3 tiers + FAQ)
├── projects.html       ← Our Projects page (with live links)
├── about.html          ← About Us page (story, team, timeline)
├── contact.html        ← Contact page (form + info)
│
├── assets/
│   ├── css/
│   │   ├── global.css      ← Design tokens, reset, layout utilities
│   │   ├── components.css  ← All UI components (navbar, cards, buttons...)
│   │   └── animations.css  ← Keyframes, hover effects, scroll reveals
│   │
│   ├── js/
│   │   ├── main.js         ← Shared: navbar, mobile menu, scroll reveal
│   │   ├── home.js         ← Home: counter animation, testimonial slider
│   │   ├── services.js     ← Services: tab switching
│   │   ├── projects.js     ← Projects: filter bar + accordion
│   │   └── contact.js      ← Contact: form validation
│   │
│   ├── images/             ← All page images (replace with your own)
│   │   ├── hero-office.jpg
│   │   ├── team-meeting.jpg
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   ├── project-3.jpg
│   │   └── project-4.jpg
│   │
│   └── icons/
│       └── favicon.svg     ← Browser tab icon (replace with your logo)
│
├── docs/
│   ├── flowchart.md        ← Site architecture diagram
│   ├── design-tokens.md    ← Color & typography reference
│   └── edit-guide.md       ← Plain-English editing guide
│
└── README.md               ← This file
```

---

## 🚀 How to Open Locally

No setup required. Just:

1. **Double-click `index.html`** — it opens in your default browser.
2. Navigate between pages using the navbar.

> For the best experience, use VS Code with the **Live Server** extension (right-click `index.html` → "Open with Live Server").

---

## 🌐 How to Deploy

### Netlify (Recommended — free)
1. Go to [netlify.com](https://netlify.com) → Create account
2. Drag and drop the entire `Company website` folder onto the Netlify dashboard
3. Your site is live in 30 seconds with a free `.netlify.app` URL

### GitHub Pages
1. Push this folder to a GitHub repository
2. Go to repository Settings → Pages → Source: `main` branch → `/ (root)`
3. Your site is live at `https://yourusername.github.io/repo-name/`

### Vercel
1. Go to [vercel.com](https://vercel.com) → Import GitHub repo
2. Leave all settings default → Deploy

---

## ✏️ How to Customize

### Change Company Name
Search all `.html` files for the comment `<!-- COMPANY NAME -->` and replace the text.

### Change Accent Color
Open `assets/css/global.css`, find `--color-primary: #F5A623;` and change the hex code.

### Add a Real Project Link (projects.html)
Open `projects.html`, search for `<!-- LIVE LINK -->`. Replace `href="#"` with your actual project URL.

### Replace Images
Put your images in `assets/images/`. Update the `src` attributes in the HTML. Look for `<!-- IMAGE: ... -->` comments.

### Update Contact Info
Open `contact.html`, search for `<!-- CONTACT -->` and update email, phone, and address.

### Add/Remove Team Members (about.html)
Each team member is a `<div class="team-card">` block. Duplicate or delete blocks as needed.

### Add More Projects (projects.html)
Duplicate any `<div class="project-card-wrapper">` block. Update image, client, title, description, tags, and live link.

### Change Fonts
Open `global.css`. Change the Google Fonts import URL and update `--font-heading` and `--font-body`.

---

## 🔍 Comment Reference

All editable areas are tagged with comments:

| Comment Tag | What to Edit |
|---|---|
| `<!-- COMPANY NAME -->` | Company name text |
| `<!-- COMPANY TAGLINE -->` | Hero headline / taglines |
| `<!-- COMPANY DESCRIPTION -->` | Body text / descriptions |
| `<!-- COMPANY LOGO -->` | Logo image or SVG |
| `<!-- IMAGE: ... -->` | Photo file references |
| `<!-- LIVE LINK -->` | Project live website URLs |
| `<!-- NAV LINK -->` | Internal navigation links |
| `<!-- EXTERNAL LINK -->` | Links that open in new tab |
| `<!-- SOCIAL: ... -->` | Social media URLs |
| `<!-- CONTACT -->` | Email, phone, address |
| `<!-- CLIENT -->` | Client/testimonial names |

---

## 📦 Dependencies (CDN — no install needed)

| Library | Purpose | Version |
|---|---|---|
| Google Fonts | Inter + Outfit typefaces | Latest |
| Phosphor Icons | SVG icon library | 2.1.1 |

Both are loaded via CDN. The site works offline except for these two (which are fonts/icons only).

---

## 📄 Pages Summary

| Page | File | Key Sections |
|---|---|---|
| Home | `index.html` | Hero, Story, Services, Products, Portfolio, Stats, Testimonials, CTA |
| Services | `services.html` | Tabbed service details, How We Work, Industries |
| Products | `products.html` | Pricing cards (toggle), Comparison table, FAQ |
| Projects | `projects.html` | Filter bar, 4 project cards with live links |
| About | `about.html` | Full story, Stats, Values, Team, CEO Quote, Timeline |
| Contact | `contact.html` | Validated form, Contact info, Office hours, FAQ |
