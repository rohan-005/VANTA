# Architecture & Design Decisions — VANTA

> **Acdyon Technologies Frontend Challenge — Track 2: The Premium Home Page**

---

### 1. Why This Design Approach?

The design approach for **VANTA** rejects generic cyberpunk clichés, dark RGB templates, and blue neon lighting in favor of an **editorial luxury hardware aesthetic** inspired by enthusiast PC engineering and luxury automotive design.

* **Light Warm Base & Alternating Section Rhythm**: We established a primary foundation built on Warm Ivory (`#F3F0E7`), Soft Cream (`#F8F6F0`), and Light Stone (`#E8E3D7`), alternating with Deep Charcoal (`#171817` / `#242522`) hardware inspection zones. This creates visual rhythm, contrast, and prevents dark visual fatigue.
* **Strict Zero-Blue Policy**: We strictly eliminated all blue, cyan, navy, blue glows, blue borders, and blue airflow lines. Cold intake vectors in thermal diagrams use **Emerald Green (`#00FF99`)**, while exhaust vectors use **Warm Burnt Orange (`#E86F2D`)**.
* **100% Viewport Width Execution**: All section backdrops, headers, and dividers stretch edge-to-edge across the screen (`100vw`). Internal readable content uses responsive gutter padding (`px-5 sm:px-10 lg:px-16 xl:px-20`), eliminating giant wasted side margins.
* **Engineered Corner Geometry**: We enforced sharp 0px to 4px corner radii (`rounded-sm`). Bubbly `rounded-3xl` cards were rejected because soft rounded shapes cheapen industrial hardware perception.
* **Typographic Hierarchy**: Bold display typography (`Rajdhani`) commands headlines and product models, monospace (`JetBrains Mono`) handles bracketed metadata tags (`[ SYS_01 ]`), and clean sans-serif (`Inter`) delivers high-legibility body descriptions and hardware specifications.

---

### 2. What Trade-off Was Made?

**Trade-off**: *Custom Vector SVG Hardware Renders vs. Full WebGL 3D Canvas (Three.js)*.

* **Decision**: We chose to engineer lightweight, high-precision SVG vector illustrations and interactive thermal vector diagrams instead of importing a heavy Three.js / WebGL 3D rendering pipeline with 5MB+ GLTF CAD model assets.
* **Rationale**: This trade-off prioritized **instant sub-second initial page load times, 100% retina crispness, zero external image dependency failures, and smooth 60fps mobile execution at 390px viewport width**.
* **Result**: Users receive an interactive hardware inspection experience (switching thermal intake vs exhaust vectors, toggling LED lighting, and tabbed hardware domain views) with a total CSS/JS bundle under 150kB gzipped.

---

### 3. Where Was AI Used?

In accordance with transparent engineering principles, AI was utilized as a pair-programming partner during development:

* **What AI Helped With**:
  * Generating initial PRD, AGENTS, and RULES documentation templates.
  * Assisting with SVG coordinate math for the interactive dual-chamber thermal vector visualization.
  * Scaffolding Tailwind CSS token mappings and TypeScript interface declarations.
* **What Was Manually Verified & Refined**:
  * **Visual Polish & Zero Blue Audit**: Personally audited every component to verify 100% removal of blue tones, replacing them with warm ivory, charcoal, acid lime (`#B8E600`), and burnt orange (`#E86F2D`).
  * **100% Width & Responsive Gutter Strategy**: Manually adjusted padding, border contrast, font tracking, and full-width layout reflows across 390px, 768px, 1024px, and 1440px breakpoints.
  * **TypeScript & Build Verification**: Personally ran `tsc -b && vite build` to ensure zero warnings or errors.
