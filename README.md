# VANTA — Premium Gaming PC Brand Homepage

> **Acdyon Technologies Frontend Challenge — Track 2: The Premium Home Page**

VANTA is a commercial-grade, ultra-premium gaming PC brand homepage engineered with industrial precision, dark obsidian visual hierarchy, acid-green highlights, restrained motion, and transparent hardware specifications.

---

## ⚡ Tech Stack

* **Framework**: React 19 + TypeScript
* **Build Tool**: Vite
* **Styling**: Tailwind CSS + Custom CSS Tokens
* **Icons**: Lucide React
* **Animations**: Framer Motion
* **Type Checking**: TypeScript (Strict Mode)

---

## 🛠️ Getting Started

### Prerequisites
* Node.js v18+ or v20+
* npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/vanta-pc.git
cd vanta-pc

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build & Preview
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📐 Project Structure

```
VANTA/
├── PRD.md               # Product Requirements Document
├── AGENTS.md            # AI Agent engineering instructions & rules
├── RULES.md             # 15 mandatory design & code rules
├── DECISIONS.md         # Technical decision record (Rationale, Trade-offs, AI collaboration)
├── README.md            # Project overview & setup instructions
├── index.html           # Main entry HTML with Google Fonts preloads
├── package.json         # Dependencies and build scripts
├── tailwind.config.js   # Custom Tailwind design tokens (colors, fonts, borders)
├── tsconfig.json        # TypeScript strict configuration
└── src/
    ├── types/           # Product, System, and Spec TypeScript definitions
    ├── data/            # Hardcoded product specifications & lineup models
    ├── components/
    │   ├── layout/      # Navbar, Mobile Menu, Footer
    │   ├── hero/        # Hero section & interactive vector chassis renders
    │   ├── product/     # ProductShowcase, CoolingVisualizer, SystemCard
    │   ├── sections/    # Engineering section, SystemsLineup section, BuildCTA
    │   └── ui/          # Button, Badge, SpecPill, Modal primitives
    ├── context/         # Configurator state management
    ├── index.css        # Global CSS directives, font imports, scrollbar styles
    ├── App.tsx          # Master page composition
    └── main.tsx         # React root mounting
```

---

## 🎨 Visual System & Design Philosophy

* **Brand Positioning**: High-performance desktops for enthusiast players who demand thermal superiority, precision aluminum machining, and clean aesthetics.
* **Palette**:
  * Near-Black / Obsidian (`#070708`)
  * Surface Dark (`#0E1013`)
  * Elevated Surface (`#16191F`)
  * Subtle Border (`#20242D` / `#282D39`)
  * Primary Accent: **Acid Lime (`#CCFF00`)**
* **Typography**:
  * **Display**: `Rajdhani` (Bold uppercase for headlines and hardware models)
  * **Monospace**: `JetBrains Mono` (Technical bracket tags `[ SYS_01 ]`)
  * **Sans-Serif**: `Inter` (Body paragraphs and specifications)
* **Shape Language**: Sharp corners (`rounded-none` or `rounded-sm`), 1px precision borders, full-width section backgrounds.

---

## 📱 Responsive Breakpoints & Accessibility

* **390px (Mobile)**: iPhone 12/13/14/15 Pro width with custom hamburger menu, full touch target spacing (>= 44px), and zero horizontal overflow.
* **768px (Tablet)**: Balanced 2-column grid reflow.
* **1024px (Small Laptop)**: Full multi-column navigation and desktop spec cards.
* **1440px (Primary Desktop)**: Edge-to-edge section backdrops with 1440px internal container constraints.
* **Accessibility**: Semantic HTML5 tags, full keyboard focusability, ARIA attributes, and `prefers-reduced-motion` compliance.

---

## 📄 Project Documentation

* [`PRD.md`](./PRD.md) — Comprehensive Product Requirements
* [`AGENTS.md`](./AGENTS.md) — Coding Standards & Guidelines
* [`RULES.md`](./RULES.md) — 15 Strict Project Rules
* [`DECISIONS.md`](./DECISIONS.md) — Architectural Decisions & Trade-offs
