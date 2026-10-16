# Editing Guide — Plain English

This guide is for anyone who wants to make changes to the website without deep coding knowledge. Everything is explained step by step.

---

## How to Open a File for Editing

1. Navigate to the `Company website` folder
2. Right-click any `.html` or `.css` file
3. Select **"Open with"** → **Notepad** or **VS Code** (VS Code is better)
4. Make your changes, press **Ctrl + S** to save
5. Refresh your browser to see the changes

---

## 1. Change the Company Name

The company name appears in many places. The easiest way:

**In VS Code:**
1. Press `Ctrl + Shift + F` (Find in Files)
2. Search for: `YourCompany`
3. Replace all with your real company name

**Manually:** Open each `.html` file and look for this comment:
```html
<!-- COMPANY NAME: Replace "YourCompany" with your actual company name -->
```
Change the text right below or next to that comment.

---

## 2. Change the Accent Color (Orange)

The orange color (#F5A623) is used on buttons, icons, links, and highlights.

1. Open `assets/css/global.css`
2. Find this line near the top:
   ```css
   --color-primary: #F5A623;
   ```
3. Replace `#F5A623` with any other hex color
4. Save — the color updates everywhere automatically

---

## 3. Add Your Real Project Links

Open `projects.html` and search for `<!-- LIVE LINK -->`.
You will find 4 places like this:

```html
<!-- LIVE LINK: Project 1 — Replace href="#" with actual live website URL -->
<a href="#" target="_blank" rel="noopener noreferrer" class="btn-live">
    Visit Live Site ↗
</a>
```

Replace `href="#"` with your real URL:
```html
<a href="https://myproject.com" target="_blank" ...>
```

Repeat for all 4 projects.

---

## 4. Swap Images

All images are in `assets/images/`. The HTML files tell you which image is used where via comments like:

```html
<!-- IMAGE: Hero right-side office building photo -->
<img src="assets/images/hero-office.jpg" ...>
```

To replace an image:
1. Put your new image file in `assets/images/`
2. Open the HTML file, find the `<!-- IMAGE -->` comment
3. Change the `src="assets/images/OLD-NAME.jpg"` to `src="assets/images/YOUR-NEW-IMAGE.jpg"`

**Recommended image sizes:**
- Hero image: at least 900×600px
- Project cards: at least 600×400px
- Team photos: at least 300×300px (square)

---

## 5. Update Contact Information

Open `contact.html` and search for `<!-- CONTACT -->`. You will find:

- **Email:** Change `hello@yourcompany.com`
- **Phone:** Change `+1 (555) 000-0000`
- **Address:** Change `123 Innovation Drive, Tech City`

Also update the `href` on the email link:
```html
<a href="mailto:hello@yourcompany.com" ...>
```
Change to your real email.

---

## 6. Update Social Media Links

Search all files for `<!-- SOCIAL -->` or look in the footer and contact page.

```html
<!-- SOCIAL: LinkedIn — replace href with your LinkedIn company page URL -->
<a href="#" class="footer__social-link" ...>
```

Replace `href="#"` with your real social media URLs.

---

## 7. Update Team Members (About Page)

Open `about.html` and find the team section. Each member is a block like:

```html
<div class="team-card">
    <div class="team-card__photo">👤</div>  <!-- IMAGE: Replace with real photo -->
    <div class="team-card__name">Elena Romova</div>  <!-- COMPANY NAME: Real name -->
    <div class="team-card__role">Founder & CEO</div>   <!-- Update role -->
    <a href="#" class="team-card__linkedin">...</a>    <!-- SOCIAL: LinkedIn URL -->
</div>
```

- To **add a member**: Duplicate the entire block and edit it
- To **remove a member**: Delete the entire `<div class="team-card">` block

---

## 8. Update Company Story Text

Look for this comment in `index.html` and `about.html`:
```html
<!-- COMPANY DESCRIPTION: Replace with your real company story -->
```
Change the paragraph text below it.

---

## 9. Add a New Page

1. Copy any existing page (e.g., `about.html`) and rename it (e.g., `careers.html`)
2. Update the content inside `<main>`
3. Add a link to the new page in the navbar of **every** HTML file:
   ```html
   <li><a href="careers.html">Careers</a></li>
   ```
4. Add it to the footer columns as well

---

## 10. Change Navigation Links Order

In every HTML file, find the `<ul class="navbar__links">` section:

```html
<ul class="navbar__links">
    <li><a href="services.html">Services</a></li>
    <li><a href="products.html">Products</a></li>
    ...
</ul>
```

Reorder the `<li>` items to change the navigation order. Remember to update **all 6 HTML files**.

---

## 11. Update Stats / Numbers

Open `index.html` or `about.html` and find the stats section:

```html
<span data-count="12" data-suffix="+">12+</span>
```

Change the `data-count="12"` to your real number. The JS will animate it on scroll.

---

## 12. Change Page Titles & SEO

At the top of each HTML file:

```html
<title>Services — YourCompany</title>
<meta name="description" content="..." />
```

Update both with real, descriptive text for each page.

---

## Quick Reference: Where Things Live

| What | File | Search For |
|---|---|---|
| Company name | All `.html` files | `<!-- COMPANY NAME -->` |
| Accent color | `global.css` | `--color-primary` |
| Project live links | `projects.html` | `<!-- LIVE LINK -->` |
| All images | `assets/images/` | `<!-- IMAGE -->` |
| Contact info | `contact.html` | `<!-- CONTACT -->` |
| Social links | All `.html` files (footer) | `<!-- SOCIAL -->` |
| Team members | `about.html` | Team section |
| Hero headline | `index.html` | `hero__title` |
| Testimonials | `index.html` | `<!-- CLIENT -->` |
| Footer links | All `.html` files | `footer__col` |
