# Project Design & Engineering Rules — VANTA

These 15 rules are mandatory for all components, styles, data structures, and documentation in the **VANTA** codebase.

---

### Rule 01 — Full-Width Visual Sections
Visual backgrounds, section dividers, hero grids, and structural containers must extend to the full available viewport width (`w-full`). Never build a narrow boxed website isolated inside giant empty side margins. Use internal container constraints (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`) strictly for content readability.

### Rule 02 — Sharp Corner Geometry & Engineered Borders
Do not use soft, bubbly, or rounded-3xl container cards. Prefer sharp corners (`rounded-none`), 2px (`rounded-sm`), or max 4px (`rounded`) corner radii paired with subtle 1px engineered borders (`border-vanta-subtle`). The visual language must feel like precision-machined industrial hardware.

### Rule 03 — Zero Rainbow RGB Styling
Avoid tacky, multi-colored neon gradients or rainbow RGB animations. The brand aesthetic is grounded in high-end consumer electronics and luxury automotive design.

### Rule 04 — Single Primary Accent Color (Acid Lime `#CCFF00`)
Use **Acid Lime (`#CCFF00`)** strictly as the primary accent color. It must be applied with restraint on CTAs, active tab indicators, live LED status indicators, selected hardware specifications, and subtle border highlights. Do not paint large background blocks in green.

### Rule 05 — Never Fabricate Credibility
Never include fake customer reviews, fabricated user counts, fake press badges, false partner logos, or invented industry awards. Credibility is built through clean design, hardware transparency, and high craft.

### Rule 06 — Restrained Motion with Purpose
Animations must serve a clear function: guiding focus during section scroll reveals, providing micro-feedback on button hover/active states, or illustrating cooling airflow vectors. Never add bouncing, excessive 3D spinning, or continuous distracting floating elements.

### Rule 07 — Zero Placeholder Lorem Ipsum
All copy across hero titles, section descriptions, hardware spec lists, and modal details must be real, coherent, engineering-driven text written specifically for VANTA hardware.

### Rule 08 — Zero Fake Statistics or Benchmarks
If empirical benchmark data is unavailable, describe hardware capabilities honestly using real component specifications (e.g. `24-Core Intel Core i9-14900KS`, `24GB GDDR6X VRAM`, `Hand-benched dual-chamber airflow`) rather than making up comparison percentages.

### Rule 09 — Minimal & Justified Dependencies
Every third-party package added to `package.json` must be strictly justified. Rely on standard React, Tailwind CSS, Framer Motion, and Lucide React. Do not install heavy component frameworks that override the custom design system.

### Rule 10 — Zero Horizontal Overflow
The layout must maintain `overflow-x-hidden` on global containers and ensure zero horizontal scrolling or clipping across all viewports from **390px** mobile up to **1440px+** ultra-wide displays.

### Rule 11 — Semantic HTML Structure
Use proper HTML5 semantic markup: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<button>`, and `<h1>` through `<h3>`. Never replace semantic buttons or links with unaccessible `<div>` elements missing keyboard events.

### Rule 12 — Extract Principles, Do Not Clone
Reference designs inspire principles—generous whitespace, dark premium palettes, bold display typography, clear product hierarchy. Do not reproduce layout structures or assets directly from reference sites.

### Rule 13 — Premium & Restrained Aesthetic
Avoid overcrowded layouts, flashing badges, or giant marketing banners. Every section must have generous padding, breathing room, and purposeful typographic hierarchy.

### Rule 14 — Selective Display Font Application
Use display typography (`Rajdhani` / bold display face) selectively for main headlines, major section headings, and system model titles. Body text, navigation links, button copy, and product specifications must use clean sans-serif (`Inter`).

### Rule 15 — Pixel Monospace as Accents Only
Use technical monospace fonts (`JetBrains Mono` / `Space Mono`) sparingly for tiny system indicators, bracketed technical tags (`[ SYS_01 ]`), and metadata labels. Pixel/mono fonts must never be used for body paragraphs or main navigation menus.
