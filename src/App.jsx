import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ShopPreview from './components/ShopPreview';
import TechSpecs from './components/TechSpecs';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Features />
      <ShopPreview />
      <TechSpecs />
      <footer className="border-t border-white/10 bg-black/80 px-6 py-8 text-center text-white/60">
        Neon Rush — endless hovercar runner. Visual theme: neon blue, purple glass, chrome white.
      </footer>
    </div>
  );
};

export default App;
