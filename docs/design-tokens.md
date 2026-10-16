# Design Tokens Reference

All design tokens are defined in `assets/css/global.css` under `:root { }`.
Change a value there and it updates everywhere on the site automatically.

---

## Color Palette

| Token | Hex Value | Usage |
|---|---|---|
| `--color-primary` | `#F5A623` | Orange accent — CTAs, highlights, icons |
| `--color-primary-dark` | `#D4891A` | Darker orange — hover states |
| `--color-primary-glow` | `rgba(245,166,35,0.15)` | Card backgrounds, glows |
| `--color-bg` | `#0A0A0A` | Page background |
| `--color-surface` | `#111111` | Card / section background |
| `--color-surface-2` | `#1A1A1A` | Elevated cards, input backgrounds |
| `--color-surface-3` | `#242424` | Tooltips, deeply elevated elements |
| `--color-text` | `#F0F0F0` | Primary text |
| `--color-text-muted` | `#888888` | Secondary / body text |
| `--color-text-faint` | `#555555` | Very subtle text, placeholders |
| `--color-border` | `#222222` | Default borders |
| `--color-border-light` | `#2E2E2E` | Slightly more visible borders |
| `--color-white` | `#FFFFFF` | Pure white |
| `--color-success` | `#22C55E` | Form success messages |
| `--color-error` | `#EF4444` | Form error messages |

**To rebrand the accent color:** Change `--color-primary` in `global.css`.  
**To switch to a light theme:** Flip the bg and text colors.

---

## Typography Scale

| Token | Size (Desktop) | Size (Mobile) | Usage |
|---|---|---|---|
| `--text-xs` | 0.75rem (12px) | 10px | Captions, badges, labels |
| `--text-sm` | 0.875rem (14px) | 12.8px | Body small, card text |
| `--text-base` | 1rem (16px) | 14px | Body default |
| `--text-md` | 1.125rem (18px) | 16px | Lead paragraph |
| `--text-lg` | 1.25rem (20px) | 17.5px | Card titles |
| `--text-xl` | 1.5rem (24px) | 20px | Sub-headings |
| `--text-2xl` | 2rem (32px) | 24px | H3 headings |
| `--text-3xl` | 2.5rem (40px) | 32px | Section headings |
| `--text-4xl` | 3.5rem (56px) | 40px | Page H1/H2 |
| `--text-5xl` | 4.5rem (72px) | 48px | Hero headline |

**Fonts:**
- **Headings:** `Outfit` (Google Fonts)
- **Body:** `Inter` (Google Fonts)

---

## Spacing Scale

| Token | Value | Pixels |
|---|---|---|
| `--space-1` | 0.25rem | 4px |
| `--space-2` | 0.5rem | 8px |
| `--space-3` | 0.75rem | 12px |
| `--space-4` | 1rem | 16px |
| `--space-5` | 1.25rem | 20px |
| `--space-6` | 1.5rem | 24px |
| `--space-8` | 2rem | 32px |
| `--space-10` | 2.5rem | 40px |
| `--space-12` | 3rem | 48px |
| `--space-16` | 4rem | 64px |
| `--space-20` | 5rem | 80px |
| `--space-24` | 6rem | 96px |
| `--space-32` | 8rem | 128px |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 4px | Small tags, badges |
| `--radius-md` | 8px | Inputs, small cards |
| `--radius-lg` | 12px | Medium cards |
| `--radius-xl` | 20px | Main content cards |
| `--radius-2xl` | 28px | Hero images, large sections |
| `--radius-full` | 9999px | Pills, avatars, buttons |

---

## Shadows

| Token | Usage |
|---|---|
| `--shadow-sm` | Subtle lift for small elements |
| `--shadow-md` | Card hover state |
| `--shadow-lg` | Large cards, modals |
| `--shadow-xl` | Hero images |
| `--shadow-glow` | Orange glow effect (featured cards, CTA) |
| `--shadow-glow-sm` | Subtle orange glow (buttons) |

---

## Responsive Breakpoints

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | `< 640px` | Single column, hamburger menu |
| Tablet | `640px – 1024px` | 2-column grids |
| Desktop | `> 1024px` | Full layout |

---

## Z-Index Scale

| Token | Value | Usage |
|---|---|---|
| `--z-base` | 1 | Default stacking |
| `--z-above` | 10 | Dropdowns, tooltips |
| `--z-modal` | 100 | Modal overlays |
| `--z-navbar` | 1000 | Fixed navbar |
| `--z-tooltip` | 2000 | Floating tooltips |
