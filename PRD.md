# Product Requirements Document (PRD) — VANTA

## 1. Product Overview
**VANTA** is a fictional ultra-premium gaming PC brand homepage engineered for players who care about unyielding performance, industrial craft, thermal superiority, and the luxury of owning exceptional hardware. VANTA bridges high-end consumer electronics, enthusiast PC engineering, and editorial automotive design—rejecting cheap cyberpunk tropes, generic dark gaming templates, and blue neon RGB gimmicks.

---

## 2. Critical Design Requirements

### 2.1 100% Viewport Width Strategy
The website must visually utilize **100% of the viewport width** (`width: 100%`). No boxed containers with giant empty side margins. All section background backdrops, borders, dividers, and hero compositions stretch edge-to-edge across the screen. Internal content uses responsive gutter padding (`px-5 sm:px-10 lg:px-16 xl:px-20`) strictly for content readability.

### 2.2 Strict Zero-Blue Policy
**No blue is permitted anywhere in the visual design**. This includes backgrounds, gradients, cyan accents, navy overlays, blue glows, blue shadows, blue borders, blue buttons, or blue vector lines.
- Cold intake vectors in thermal diagrams use **Mint/Emerald (`#00FF99`)** or **Warm Ivory (`#F8F6F0`)**.

### 2.3 Light Warm Base Palette & Section Rhythm
The website adopts a **lighter, warm editorial foundation** paired with alternating high-contrast dark section zones to prevent visual fatigue:
* **Section 01 — HERO**: Warm Ivory (`#F3F0E7`) & Soft Cream (`#F8F6F0`) base.
* **Section 02 — SHOWCASE**: Deep Charcoal (`#171817`) & Obsidian hardware inspector.
* **Section 03 — ENGINEERING**: Light Stone (`#E8E3D7`) with dynamic airflow simulator.
* **Section 04 — LINEUP**: Deep Charcoal (`#171817`) interactive system tier selector.
* **Section 05 — BUILD CTA**: Soft Cream (`#F8F6F0`) configurator teaser.
* **Section 06 — FOOTER**: Charcoal (`#242522`) full-width footer.

### 2.4 Accent Colors & Geometry
- **Primary Accent**: **Acid Green / Lime (`#B8E600`)** used for CTAs, active states, status LEDs, and spec highlights.
- **Secondary Accent**: **Warm Burnt Orange (`#E86F2D`)** for exhaust thermal vectors and secondary spec indicators.
- **Corner Radii**: Sharp geometric 0px-4px radius (`rounded-sm`). Zero bubbly rounded cards.

---

## 3. Target Audience
* **Enthusiast Gamers & Esports Competitors**: Players demanding high-framerate 4K performance, thermal stability, and low latency.
* **Creative Professionals & Developers**: Users requiring workstation-class multi-core power, high-speed DDR5 memory, and reliable liquid cooling.
* **Design-Conscious Tech Enthusiasts**: Hardware connoisseurs who value minimal industrial design, aluminum chassis geometry, and clean cable management.

---

## 4. Homepage Structure & Rhythm
```
[ 1. HERO ] (Light Ivory) ───> [ 2. SHOWCASE ] (Dark Charcoal) ───> [ 3. ENGINEERING ] (Light Stone)
Headline, hardware render      Interactive domain inspector        Airflow vector simulator &
& technical badges.            (Performance, Cooling, Craft).      thermal management.
                                                                                │
[ 6. FOOTER ] (Charcoal)  <─── [ 5. BUILD CTA ] (Soft Cream) <─── [ 4. LINEUP ] (Dark Charcoal)
Full-width clean navigation    Interactive configuration           Interactive CORE / PRO / ULTRA
& lab status indicator.        teaser & resolution match.          system cards & spec modal.
```

---

## 5. Non-Functional & Quality Standards
* **Responsiveness**: Explicitly tested at **390px** mobile, **768px** tablet, **1024px** laptop, and **1440px+** desktop. Zero horizontal overflow.
* **Performance**: Lighthouse score target >= 90. Optimized SVG graphics, zero heavy 3D GLTF bundles.
* **Accessibility**: Semantic HTML5, visible focus rings, ARIA roles, skip-to-content link, and `prefers-reduced-motion` compliance.
