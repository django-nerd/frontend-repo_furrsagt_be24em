import React from 'react';
import { Gauge, Zap, Shield, Coins, Rocket } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-inner backdrop-blur">
    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/30 to-purple-400/30 text-cyan-200">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-white/70">{desc}</p>
  </div>
);

const Features = () => {
  const items = [
    {
      icon: Gauge,
      title: 'Endless Neon Track',
      desc: 'Procedural lanes in a floating city with increasing speed every 30 seconds.',
    },
    {
      icon: Coins,
      title: 'Magnetic Coins',
      desc: 'Collect glass spheres in gold, silver, and crystal with powerup multipliers.',
    },
    {
      icon: Shield,
      title: 'Shields & Powerups',
      desc: 'Activate shield, magnet, double coins, or slow time to survive longer.',
    },
    {
      icon: Zap,
      title: 'Boost & Drift',
      desc: 'Hit Space to boost with liquid whoosh FX and carve perfect drifts through barriers.',
    },
    {
      icon: Rocket,
      title: 'Progression & Shop',
      desc: 'Earn XP and coins to unlock engine, handling, boost core and cosmetics.',
    },
  ];

  return (
    <section id="features" className="relative w-full bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="bg-gradient-to-r from-cyan-300 via-purple-300 to-white bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Gameplay Highlights
        </h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Third-person hovercar runner with soft neon lighting, liquid glass UI, and phonk energy at 150 BPM.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
