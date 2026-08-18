import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { ProductShowcase } from './components/product/ProductShowcase';
import { Engineering } from './components/sections/Engineering';
import { SystemsLineup } from './components/sections/SystemsLineup';
import { BuildCTA } from './components/sections/BuildCTA';
import { Footer } from './components/layout/Footer';
import { motion, useReducedMotion, Variants } from 'framer-motion';

export const App: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-vanta-black text-vanta-text-primary overflow-x-hidden">
      {/* Fixed Full-Width Navigation Bar */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Area */}
      <main className="w-full">
        {/* Section 01: Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Hero
            onConfigureClick={() => scrollToSection('build')}
            onExploreClick={() => scrollToSection('showcase')}
          />
        </motion.div>

        {/* Section 02: Interactive Product Showcase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={sectionVariants}
        >
          <ProductShowcase />
        </motion.div>

        {/* Section 03: Thermal & Structural Engineering */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={sectionVariants}
        >
          <Engineering />
        </motion.div>

        {/* Section 04: System Lineup (Core, Pro, Ultra) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={sectionVariants}
        >
          <SystemsLineup onConfigureSystem={() => scrollToSection('build')} />
        </motion.div>

        {/* Section 05: Configurator Call-to-Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={sectionVariants}
        >
          <BuildCTA />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
