# Architecture & Design Decisions — VANTA

> **Acdyon Technologies Frontend Challenge — Track 2: The Premium Home Page**

---

### 1. Why This Design Approach?

The design approach for **VANTA** rejects generic cyberpunk clichés, dark RGB templates, and abstract software slogans in favor of **immediate product clarity** paired with an **editorial luxury hardware showroom aesthetic**.

* **2-3 Second Immediate Product Clarity**:
  - **Category Eyebrow**: `PREMIUM GAMING PCs`
  - **Hero Headline**: `BUILT FOR THE WAY YOU PLAY.`
  - **Supporting Copy**: `High-performance custom gaming desktops engineered for serious players who demand unyielding 4K framerates, thermal management, and precision craft.`
  - **Actionable CTAs**: `[ EXPLORE GAMING PCs → ]` and `[ BUILD YOUR GAMING PC ]`.
  - **Plain Navigation**: `Gaming PCs`, `Technology`, `Custom Builder`, `About VANTA`.
* **Light Warm Base & Section Rhythm**: Primary foundation built on Warm Ivory (`#F3F0E7`), Soft Cream (`#FAF8F2`), and Light Stone (`#E8E3D7`), alternating with Deep Charcoal (`#171717`) contrast zones.
* **Strict Zero-Blue Policy**: Cold air intake vectors in thermal diagrams use **Emerald Green (`#00FF99`)**, while exhaust vectors use **Warm Burnt Orange (`#E86F2D`)**.
* **100% Viewport Width Execution**: Section backdrops span edge-to-edge (`100vw`) with responsive internal gutters (`px-5 sm:px-10 lg:px-16 xl:px-20`) formatting content readability.

---

### 2. What Trade-off Was Made?

**Trade-off**: *Custom Vector SVG Hardware Renders vs. Full WebGL 3D Canvas (Three.js)*.

* **Decision**: We engineered lightweight, high-precision SVG vector illustrations and interactive thermal vector diagrams instead of importing a heavy Three.js / WebGL 3D rendering pipeline with 5MB+ GLTF CAD assets.
* **Rationale**: This trade-off prioritized **instant sub-second initial page load times, 100% retina crispness, zero external image dependency failures, and smooth 60fps mobile execution at 390px viewport width**.
* **Result**: Visitors experience instant product clarity and hardware inspection (thermal flow vectors, LED lighting controls, and domain tabs) with a gzipped JS/CSS footprint under 130kB.

---

### 3. Where Was AI Used?

In accordance with transparent engineering principles, AI was utilized as a pair-programming partner during development:

* **What AI Helped With**:
  * Scaffolding initial documentation templates and TypeScript interfaces.
  * Assisting with SVG coordinate math for the interactive dual-chamber thermal vector visualization.
* **What Was Manually Verified & Refined**:
  * **2-3 Second Product Clarity Audit**: Personally verified that every headline, badge, button, and navigation link explicitly identifies VANTA as a custom gaming PC builder.
  * **Visual Polish & Zero Blue Audit**: Verified total removal of blue tones, replacing them with warm ivory, charcoal, acid lime (`#B8E600`), and burnt orange (`#E86F2D`).
  * **TypeScript & Production Build Verification**: Ran `tsc -b && vite build` to ensure zero compilation warnings or errors.
