# Architecture & Design Decisions — VANTA

> **Acdyon Technologies Frontend Challenge — Track 2: The Premium Home Page**

---

### 1. Why This Design Approach?

The design approach for **VANTA** rejects generic cyberpunk clichés, rainbow RGB lighting, and fake marketing banners in favor of an **engineered luxury hardware aesthetic** inspired by enthusiast PC engineering and luxury automotive design.

* **Obsidian & Acid Lime Palette**: We established a near-black base (`#070708` / `#0E1013`) with subtle 1px borders (`#222631`) to give hardware dominant visual weight. **Acid Lime (`#CCFF00`)** is used strictly as a high-contrast accent on CTAs, active tab indicators, and live status LEDs—avoiding neon oversaturation.
* **Full-Width Viewport Execution**: Rather than trapping the website inside a narrow centered container with large unused side margins, all visual section backdrops, headers, and dividers stretch edge-to-edge (`100vw`), while internal readable content is constrained to `1440px`.
* **Engineered Corner Geometry**: We enforced sharp 0px to 4px corner radii (`rounded-sm`). Bubbly `rounded-3xl` cards were rejected because soft rounded shapes cheapen industrial hardware perception.
* **Typographic Hierarchy**: Bold uppercase display typography (`Rajdhani`) commands headlines and product models, monospace (`JetBrains Mono`) handles bracketed metadata tags (`[ SYS_01 ]`), and clean sans-serif (`Inter`) delivers high-legibility body descriptions and hardware specifications.

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
  * Scaffolding initial Tailwind CSS token mappings and TypeScript interface declarations.
* **What Was Manually Verified & Refined**:
  * **Visual Polish & Spacing**: Manually adjusted padding, border contrast, font tracking, and full-width layout reflows across 390px, 768px, 1024px, and 1440px breakpoints.
  * **Content Integrity Audit**: Verified that all hardware specifications (Intel Core i9-14900KS, RTX 4090, DDR5-6800, PCIe Gen5) are realistic and honest, removing any placeholder text or fabricated user counts.
  * **TypeScript & Build Verification**: Manually corrected Framer Motion variant types and removed unused imports to ensure `tsc -b && vite build` compiles cleanly with zero warnings or errors.
