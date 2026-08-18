# Project Design & Engineering Rules — VANTA

These 15 rules are mandatory for all components, styles, data structures, and documentation in the **VANTA** codebase.

---

### Rule 01 — Dominant Light Primary Background (Warm Ivory Canvas)
The primary visual environment must be a warm light background (`#F3F0E7` / `#FAF8F2`). The initial page load must visibly read as **LIGHT**. Dark sections are reserved strictly for contrast sections (e.g. Product Showcase).

### Rule 02 — Dark Editorial Typography
Display headlines, section titles, product titles, and body paragraphs must use **DARK CHARCOAL (`#171717` / `#242522`)** on light section backgrounds. Never render entire headings or body copy in lime green.

### Rule 03 — Sparing Accent Color (Acid Lime `#B8E600`)
Use **Acid Lime (`#B8E600`)** strictly as a high-contrast accent for CTAs, active tab indicators, hover states, and live LED dots (~5% visual area). Never paint large background areas or cards in lime.

### Rule 04 — Elimination of Dashboard & Terminal HUD Aesthetics
Remove visual reliance on developer dashboards, terminal interfaces, or diagnostic software tags (`[01]`, `SILICON_BENCH`, `GPU BUS`). Present hardware using clean editorial typography, sharp geometric framing, and generous whitespace.

### Rule 05 — Product-First Presentation
The gaming desktop chassis render must be the visual hero. Present hardware like a luxury product campaign object with clean shadows, warm lighting, and clear specification callouts.

### Rule 06 — 100% Viewport Width Strategy
Section backdrops, dividers, and headers must stretch edge-to-edge across `100vw`. Never build a narrow boxed website inside giant empty side margins. Use responsive internal gutters (`px-5 sm:px-10 lg:px-16 xl:px-20`) for content readability.

### Rule 07 — Strict Zero-Blue Policy
No blue color may be used anywhere in the visual system. Cold air intake vectors use **Emerald Green (`#00FF99`)**, while hot exhaust vectors use **Warm Burnt Orange (`#E86F2D`)**.

### Rule 08 — Sharp Corner Geometry & Warm Sand Borders
Avoid bubbly rounded container cards (`rounded-2xl`, `rounded-3xl`). Use sharp corners (`rounded-none`), 2px (`rounded-sm`), or max 4px (`rounded`) corner radii paired with subtle warm sand borders (`#C9C3B5`).

### Rule 09 — Never Fabricate Credibility
Never include fake customer reviews, fabricated user counts, fake press badges, false partner logos, or invented industry awards. Credibility is built through clean design, hardware transparency, and high craft.

### Rule 10 — Restrained Motion with Purpose
Animations must serve a clear function: guiding focus during scroll reveals, providing feedback on hover/active states, or illustrating airflow vectors. Never add bouncing, excessive 3D spinning, or continuous distracting floating elements.

### Rule 11 — Zero Placeholder Lorem Ipsum
All copy across hero titles, section descriptions, hardware spec lists, and modal details must be real, coherent, engineering-driven text written specifically for VANTA hardware.

### Rule 12 — Zero Fake Statistics or Benchmarks
Describe hardware capabilities honestly using real component specifications (e.g. `Intel Core i9-14900KS`, `RTX 4090 24GB`, `Dual-Chamber Liquid Cooling`) rather than making up comparison percentages.

### Rule 13 — Zero Horizontal Overflow
The layout must maintain `overflow-x-hidden` on global containers and ensure zero horizontal scrolling or clipping across all viewports from **390px** mobile up to **1440px+** ultra-wide displays.

### Rule 14 — Semantic HTML Structure
Use proper HTML5 semantic markup: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<button>`, and `<h1>` through `<h3>`. Never replace semantic buttons or links with unaccessible `<div>` elements missing keyboard events.

### Rule 15 — Mobile 390px Compliance
Every layout, menu drawer, button tap target, and product view must be designed and explicitly verified for 390px mobile viewports without horizontal overflow.
