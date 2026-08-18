# Project Design & Engineering Rules — VANTA

These 15 rules are mandatory for all components, styles, data structures, and documentation in the **VANTA** codebase.

---

### Rule 01 — 100% Viewport Width Composition
Visual section backdrops, dividers, hero grids, and structural containers must extend to the full available viewport width (`width: 100%`). Never build a narrow boxed website isolated inside giant empty side margins (`max-w-1200px margin: auto`). Use internal responsive gutters (`px-5 sm:px-10 lg:px-16 xl:px-20`) strictly for content readability.

### Rule 02 — Strict Zero-Blue Policy
No blue color may be used anywhere in the visual system. That includes blue backgrounds, blue gradients, cyan accents, navy overlays, blue glows, blue shadows, blue borders, blue buttons, or blue airflow vector lines.

### Rule 03 — Light Warm Base Palette with Section Rhythm
The primary design aesthetic is built on warm ivory (`#F3F0E7`), soft cream (`#F8F6F0`), and light stone (`#E8E3D7`), alternating with deep charcoal (`#171817` / `#242522`) hardware inspection zones to create rhythm and prevent visual monotony.

### Rule 04 — Acid Green (`#B8E600`) & Burnt Orange (`#E86F2D`) Accents
Use **Acid Green (`#B8E600`)** strictly as the primary accent color on CTAs, active tab indicators, live status LED dots, and selected hardware highlights. Use **Burnt Orange (`#E86F2D`)** as a secondary thermal accent for exhaust vectors and peak power callouts.

### Rule 05 — Sharp Corner Geometry & Thin Engineered Borders
Do not build bubbly or rounded-3xl container cards. Prefer sharp corners (`rounded-none`), 2px (`rounded-sm`), or max 4px (`rounded`) corner radii paired with thin geometric borders (`border-vanta-sand` or `border-vanta-border`).

### Rule 06 — Never Fabricate Credibility
Never include fake customer reviews, fabricated user counts, fake press badges, false partner logos, or invented industry awards. Credibility is built through clean design, hardware transparency, and high craft.

### Rule 07 — Restrained Motion with Purpose
Animations must serve a clear function: guiding focus during scroll reveals, providing feedback on hover/active states, or illustrating airflow vectors. Never add bouncing, excessive 3D spinning, or continuous distracting floating elements.

### Rule 08 — Zero Placeholder Lorem Ipsum
All copy across hero titles, section descriptions, hardware spec lists, and modal details must be real, coherent, engineering-driven text written specifically for VANTA hardware.

### Rule 09 — Zero Fake Statistics or Benchmarks
Describe hardware capabilities honestly using real component specifications (e.g. `24-Core Intel Core i9-14900KS`, `24GB GDDR6X VRAM`, `Hand-benched dual-chamber airflow`) rather than making up comparison percentages.

### Rule 10 — Zero Horizontal Overflow
The layout must maintain `overflow-x-hidden` on global containers and ensure zero horizontal scrolling or clipping across all viewports from **390px** mobile up to **1440px+** ultra-wide displays.

### Rule 11 — Semantic HTML Structure
Use proper HTML5 semantic markup: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<button>`, and `<h1>` through `<h3>`. Never replace semantic buttons or links with unaccessible `<div>` elements missing keyboard events.

### Rule 12 — Editorial Product Presentation
Treat product graphics as editorial showroom objects. Support them with clear technical annotations, dynamic lighting highlights, and structured specification breakdowns.

### Rule 13 — Selective Display Typography
Use display typography (`Rajdhani` / bold display face) selectively for main headlines, major section headings, and system model titles. Body text, navigation links, button copy, and product specifications must use clean sans-serif (`Inter`).

### Rule 14 — Pixel Monospace as Accents Only
Use technical monospace fonts (`JetBrains Mono` / `Space Mono`) sparingly for tiny system indicators, bracketed technical tags (`[ SYS_01 ]`), and metadata labels. Pixel/mono fonts must never be used for body paragraphs or main navigation menus.

### Rule 15 — Mobile 390px as First-Class Target
Every layout, menu drawer, button tap target, and product view must be designed and explicitly verified for 390px mobile viewports without horizontal overflow.
