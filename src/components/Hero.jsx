import React from 'react';
import Spline from '@splinetool/react-spline';
import { Play, ShoppingBag, Settings } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft neon gradient overlay for readability (doesn't block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center md:py-24">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Neon • Liquid Glass • Futuristic
        </span>
        <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-white bg-clip-text text-transparent drop-shadow">Neon Rush</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/80">
          An endless hovercar runner through a floating neon city. Drift, boost, and collect coins as you chase the perfect line.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-6 py-3 font-semibold text-black shadow-xl shadow-cyan-500/30 transition hover:bg-cyan-400"
          >
            <Play className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            Play Overview
          </a>
          <a
            href="#shop"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <ShoppingBag className="h-5 w-5" />
            Shop System
          </a>
          <a
            href="#settings"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Settings className="h-5 w-5" />
            Tech Specs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
