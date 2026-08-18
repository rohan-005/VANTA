# Product Requirements Document (PRD) — VANTA

## 1. Product Overview
**VANTA** is a fictional ultra-premium gaming PC brand engineered for players who care about unyielding performance, industrial craft, thermal superiority, and the luxury of owning exceptional hardware. VANTA bridges high-end consumer electronics, enthusiast PC engineering, and luxury automotive design—eschewing cheap RGB gimmicks and bloated gaming aesthetics.

---

## 2. Problem Statement
The high-performance gaming desktop market is saturated with two extremes:
1. **Generic, Cluttered Esports Retailers**: Websites covered in rainbow RGB lighting, fake discount banners, neon cyberpunk grids, and frantic promotional countdowns that cheapen the hardware.
2. **Boring Commodity Builders**: Plain, uninspiring web builders that treat high-end PCs like off-the-shelf office supplies without communicating thermal innovation or craftsmanship.

**The Solution**: VANTA provides an elevated, commercial-grade digital flagship experience. The homepage communicates performance engineering through restrained aesthetics, generous structural composition, interactive thermal visualization, and transparent hardware specifications.

---

## 3. Target Audience
* **Enthusiast Gamers & Esports Competitors**: Players demanding high-framerate 4K performance, thermal stability, and low latency.
* **Creative Professionals & Developers**: Users requiring workstation-class multi-core power, high-speed DDR5 memory, and reliable liquid cooling.
* **Design-Conscious Tech Enthusiasts**: Hardware connoisseurs who value minimal industrial design, aluminum chassis geometry, and clean cable management.

---

## 4. Product Positioning
> *Premium gaming systems engineered for players who care about performance, design, and the experience of owning exceptional hardware.*

* **Brand Pillars**:
  * **Thermal Architecture**: Engineered for negative-pressure airflow and optimal heat dissipation.
  * **Industrial Rigidity**: CNC-milled aluminum chassis with dark smoked tempered glass.
  * **Zero Compromise**: Hand-benched and stress-tested component selection.

---

## 5. Homepage Goals & Key Performance Indicators (KPIs)
* **Immediate Brand Clarity**: Communicate VANTA's premium positioning within 3 seconds of landing.
* **Product-First Engagement**: Drive user interaction with the 3D/SVG hardware showcase and thermal visualization.
* **High Conversion Potential**: Direct users naturally from hero exploration to system specification and configuration.
* **Zero Layout Defects**: 100% responsive execution across mobile (390px), tablet (768px), and desktop (1440px+) viewports with zero horizontal scrolling.

---

## 6. User Journey
```
[ 1. LANDING ] ──────> [ 2. UNDERSTAND ] ──────> [ 3. EXPLORE ] ──────> [ 4. INSPECT ] ──────> [ 5. CONFIGURE ]
Hero section with       Value proposition &       Interactive product     Detailed system         Custom build CTA &
bold display headline   thermal engineering       showcase & airflow      lineup specifications   configurator preview
& flagship hardware.    pillars.                  visualization.          (Core, Pro, Ultra).     teaser.
```

---

## 7. Functional Requirements

### 7.1 Global Navigation (`Navbar`)
* Full-width header with blurred glass backdrop (`backdrop-blur-md`).
* Brand wordmark (`VANTA`) with technical status indicator (`● ONLINE`).
* Desktop links: `Systems`, `Technology`, `Build`, `About`.
* Primary header CTA: `[ EXPLORE SYSTEMS ]`.
* Mobile hamburger drawer (responsive at 390px, smooth open/close state, zero horizontal overflow).

### 7.2 Hero Section (`Hero`)
* Prominent display headline: `ENGINEERED WITHOUT COMPROMISE.`
* Technical subtitle highlighting performance and thermal engineering.
* Primary CTA: `[ CONFIGURE YOUR SYSTEM → ]` with hover micro-interaction.
* Secondary CTA: `[ VIEW SPECIFICATIONS ]` smooth scroll target.
* Flagship product visual: High-precision interactive visual representation of the VANTA chassis with animated LED status accents and copper liquid cooling loops.

### 7.3 Interactive Product Showcase (`ProductShowcase`)
* 4-tab interactive switcher: `01 PERFORMANCE`, `02 COOLING`, `03 ARCHITECTURE`, `04 CRAFT`.
* Dynamic visual transition displaying component highlights based on selected tab (GPU heatsink, DDR5 array, liquid block).
* Technical spec breakdown pills (e.g. `RTX 40 Class GPU`, `Hand-Calibrated Airflow`, `PCIe Gen5 Bandwidth`).

### 7.4 Thermal Engineering & Airflow Visualizer (`Engineering`)
* Interactive cooling visualization showcasing cold intake vectors vs hot exhaust paths.
* Structural chassis features: Dual-chamber architecture, negative-pressure thermal ducting, noise-dampening acoustic panels.
* Honest engineering copy without fabricated benchmark statistics.

### 7.5 System Lineup (`SystemsLineup`)
* 3 fictional hardware tiers:
  1. **VANTA CORE**: Balanced High-Framerate 1440p System.
  2. **VANTA PRO**: Flagship 4K Competitive Gaming Machine.
  3. **VANTA ULTRA**: Uncompromising Workstation & Dual-Loop Extreme Rig.
* Detailed hardware spec cards (CPU, GPU, RAM, Storage, Chassis, Power Supply).
* Interactive Spec Modal for full component breakdown.

### 7.6 Custom Build CTA (`BuildCTA`)
* High-impact callout: `YOUR GAME. YOUR BUILD.`
* Interactive component tier preview toggle estimating system power draw and target resolution.
* Conversion button driving to configuration flow.

### 7.7 Footer (`Footer`)
* Full-width dark footer with structured navigation columns (Systems, Technology, Build, Support).
* Legal note, copyright, and operational status badge (`● VANTA LABS ONLINE`).
* Non-fabricated visual social placeholders.

---

## 8. Non-Functional Requirements

### 8.1 Responsiveness & Viewports
* Explicitly verified at **390px** (iPhone 12/13/14 Pro width), **768px** (Tablet), **1024px** (Small Desktop), and **1440px** (Primary Desktop).
* **Strict Rule**: Zero horizontal overflow or horizontal scrollbar on any viewport width.

### 8.2 Performance
* Lighthouse score target: >= 90 performance on desktop.
* Optimized SVG vector visuals and canvas renders to eliminate heavy external image loading dependencies.
* Minified JavaScript & CSS output via Vite production build.

### 8.3 Accessibility (a11y)
* Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`).
* High contrast ratio for text elements exceeding WCAG AA standards.
* Full keyboard focusability with visible focus indicators.
* Support for `prefers-reduced-motion` CSS media queries.

---

## 9. Visual & Design System Requirements
* **Color Palette**:
  * Near-Black / Obsidian: `#070708`
  * Deep Surface: `#0E1013`
  * Surface Elevated: `#16191F`
  * Subtle Border: `#20242D` / `#282D39` (1px clean geometric lines)
  * Text Primary: `#F3F4F6`
  * Text Muted: `#888E9E`
  * Primary Accent: **Acid Lime (`#CCFF00`)** used strictly for CTAs, active indicators, LED dots, and spec highlights.
* **Shape Language**: Sharp 2px/4px corner radii, engineered rectangular containers, thin 1px borders.
* **Typography**:
  * **Display**: `Rajdhani` (Bold uppercase for hero headlines and section titles).
  * **Technical Monospace**: `JetBrains Mono` (Small bracketed metadata, spec tags `[ SYS_01 ]`).
  * **Body**: `Inter` (Clean sans-serif for UI text and specifications).

---

## 10. Acceptance Criteria & Test Matrix
* [x] Homepage loads cleanly with no console warnings or runtime errors.
* [x] Full-width section backdrops extend to viewport edges at 1440px+.
* [x] Mobile drawer toggles cleanly at 390px without layout shift or horizontal scroll.
* [x] Product showcase tabs switch actively and update spec details cleanly.
* [x] Cooling visualizer accurately displays airflow dynamics.
* [x] System lineup cards present clear hardware specifications without fake metrics.
* [x] Production build (`npm run build`) completes with exit code 0.
