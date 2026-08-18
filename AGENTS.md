# Engineering Instructions & Agent Guidelines — VANTA

This document defines strict architectural, coding, UI, content, and quality rules for AI coding agents and human engineers contributing to the **VANTA** codebase.

---

## 1. Architectural Rules

### 1.1 Directory Structure
All source code must reside strictly within `src/` following a modular domain-driven architecture:

```
src/
├── types/       # Strongly-typed TypeScript interfaces and domain models
├── data/        # Static data models (systems, specs, engineering features)
├── components/  # Modular React components grouped by section domain
│   ├── layout/  # Header, Footer, Navigation, Drawers
│   ├── hero/    # Hero section & interactive vector hardware renders
│   ├── product/ # Product Showcase, Spec Cards, Thermal Visualizer
│   ├── sections/# Page section wrappers (Engineering, SystemsLineup, BuildCTA)
│   └── ui/      # Reusable primitive UI elements (Button, Badge, SpecPill, Modal)
├── context/     # React state providers (Configurator / System context)
├── hooks/       # Custom React hooks (useReducedMotion, useWindowSize, useScrollThreshold)
├── lib/         # Utility functions (cn, formatCurrency, animationVariants)
└── index.css    # Global Tailwind imports, CSS design tokens, font declarations
```

### 1.2 Component Guidelines
* **Single Responsibility**: Each component must focus on one clear task (e.g., `SystemCard` renders a single hardware tier, `CoolingVisualizer` renders airflow dynamics).
* **Composition over Monoliths**: Break complex sections into smaller child sub-components.
* **Separation of Content & Presentation**: Store product specs, hardware lists, and technical copy in `src/data/` rather than hardcoding inline within component render functions.

---

## 2. Coding Rules (TypeScript & React)

* **Strict Type Safety**: Never use `any` or `unknown` casts unless interfacing with an untyped 3rd party script. Define explicit TypeScript interfaces for all component props, state objects, and data structures.
* **Explicit Prop Types**: Every component must declare a typed interface for its props (e.g. `interface SystemCardProps { system: System; onSelect: (id: string) => void; }`).
* **Clean Function Signatures**: Use named exports for React components (`export const SystemCard: React.FC<SystemCardProps> = ...`).
* **Hooks & Side Effects**: Keep side effects isolated within standard React hooks (`useEffect`, `useCallback`, `useMemo`). Ensure cleanup functions are provided for event listeners or timers.
* **No Lint Suppression**: Do not disable ESLint or TypeScript compiler rules with `@ts-ignore` or `eslint-disable` without explicit justification.

---

## 3. UI & Design System Rules

* **Design Tokens & Palette Consistency**: Use only the designated VANTA color system defined in `tailwind.config.js` or `index.css`:
  * Base: `#070708` (`bg-vanta-black`)
  * Surface: `#0E1013` (`bg-vanta-surface`)
  * Elevated: `#16191F` (`bg-vanta-elevated`)
  * Border: `#20242D` / `#282D39` (`border-vanta-subtle`)
  * Accent: `#CCFF00` (`accent-vanta-lime`)
  * Text Primary: `#F3F4F6`, Text Muted: `#888E9E`
* **Zero Random Colors**: Do not introduce unapproved neon blues, magentas, or rainbow RGB gradients.
* **Engineered Corner Radii**: Stick strictly to sharp corners or subtle `rounded-sm` (2px) / `rounded` (4px). Never use `rounded-full`, `rounded-2xl`, or `rounded-3xl` for container cards.
* **Full-Width Viewport Strategy**: Backgrounds, section dividers, and structural containers must touch viewport edges. Content inside must be constrained using `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

---

## 4. Content Integrity & Anti-Fabrication Rules

> [!CAUTION]
> **Strict Anti-Fabrication Policy**:
> - **NEVER fabricate user counts** (e.g. "Over 50,000 satisfied gamers").
> - **NEVER invent fake customer reviews or quotes** (e.g. "Best PC I ever bought — John D.").
> - **NEVER add fake press badges or partner logos** (e.g. "Featured in IGN, PCGamer, Forbes").
> - **NEVER invent fake performance statistics** (e.g. "47% faster than all competitors").
> - **NEVER use Lorem Ipsum placeholder text**.

Write honest, professional engineering-focused product copy describing thermal management, component selection, chassis structural rigidity, and hand-benched assembly.

---

## 5. Dependency Rules

* **Minimalist Footprint**: Only include light, robust dependencies explicitly required for the stack:
  * `react`, `react-dom`
  * `lucide-react` (iconography)
  * `framer-motion` (animations)
  * `clsx`, `tailwind-merge` (class merging utilities)
* Do not add heavy external UI component libraries (e.g. MUI, Chakra, Ant Design) that pollute the bespoke engineered aesthetic.

---

## 6. Responsive & Accessibility Rules

* **Mobile 390px Compliance**: Test every layout at 390px width. Ensure text wraps correctly, cards stack vertically, buttons maintain min 44px tap targets, and no horizontal scrollbar appears.
* **Desktop 1440px Compliance**: Ensure large screens display generous spacing without stretching content unnaturally.
* **Reduced Motion**: All Framer Motion animations must check `useReducedMotion()` or CSS `@media (prefers-reduced-motion: reduce)` to disable non-essential motion.
* **ARIA & Focus**: Provide accessible ARIA labels for icon-only buttons, modal dialogs, and navigation drawers. Maintain high-visibility focus indicators (`focus-visible:ring-1 focus-visible:ring-accent-vanta-lime`).
