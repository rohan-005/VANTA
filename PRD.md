# Product Requirements Document (PRD) — VANTA

## 1. Product Overview
**VANTA** is a fictional ultra-premium gaming PC brand homepage engineered for players who care about unyielding performance, industrial craft, thermal superiority, and the luxury of owning exceptional hardware. VANTA bridges high-end consumer electronics, enthusiast PC engineering, and editorial luxury product campaigns—rejecting generic dark gaming templates, terminal/dashboard software aesthetics, and blue neon RGB gimmicks.

---

## 2. Critical Visual & Design Principles

### 2.1 Dominant Light Primary Background (Canvas)
The primary visual environment is a **LIGHT WARM IVORY (`#F3F0E7`)** canvas. When a user opens the page, the immediate visual impression is **LIGHT**, not black or dark. Supporting light background shades include Soft Cream (`#FAF8F2`), Soft Beige (`#E8E2D5`), and Warm Sand (`#C9C3B5`).

### 2.2 Dark Editorial Typography
All display headlines, section headings, and primary body text use **DARK CHARCOAL (`#171717` / `#242522`)** on the light background canvas. Lime green is NEVER used for entire headlines or dominant body copy.

### 2.3 Sparing Acid Lime Accent
**Acid Lime (`#B8E600`)** is used strictly as a high-value, restrained accent (~5% visual area) for CTA highlights, active indicators, live status LED dots, and selected hardware chips.

### 2.4 Removal of Dashboard / Terminal Aesthetics
The UI avoids looking like GPU diagnostic tools or developer dashboards. Bracketed HUD tags (`[01]`, `SILICON_BENCH`, `GPU BUS`) are replaced with clean, elegant editorial typography, generous whitespace, and sharp geometric framing.

### 2.5 100% Viewport Width Execution
All visual section backdrops, headers, and dividers stretch edge-to-edge across `100vw`. Internal content uses responsive gutter padding (`px-5 sm:px-10 lg:px-16 xl:px-20`) for content framing.

---

## 3. Section Visual Rhythm & Hierarchy

```
[ 1. HERO ] (Light Warm Ivory #F3F0E7) ───> [ 2. SHOWCASE ] (Dark Charcoal #171717) ───> [ 3. ENGINEERING ] (Light Beige #FAF8F2)
Dark headline, large PC render             Hardware domain inspector (Performance,     Airflow vector simulator &
& restrained accent CTA.                   Cooling, Architecture, Craft).              clean thermal management.
                                                                                                 │
[ 6. FOOTER ] (Dark Charcoal #242522)  <─── [ 5. BUILD CTA ] (Light Ivory #F8F6F0)   <─── [ 4. LINEUP ] (Light Cream #F3F0E7)
Full-width navigation & status             Resolution / workload configuration         Editorial product grid with
indicator badge.                           teaser matching.                            CORE / PRO / ULTRA rigs.
```

---

## 4. Acceptance Criteria & Verification
* [x] Initial page load visually reads as **LIGHT WARM IVORY (`#F3F0E7`)**.
* [x] Display headlines and primary copy are **DARK CHARCOAL (`#171717`)**.
* [x] Acid Lime (`#B8E600`) is used sparingly as an accent.
* [x] Terminal/dashboard HUD tag clutter is removed.
* [x] The gaming PC monolith render is visually prominent in the Hero.
* [x] Full-width section bounds span `100vw` with zero horizontal overflow.
* [x] Production build (`npm run build`) completes with exit code 0.
