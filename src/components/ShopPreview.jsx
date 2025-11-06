import React from 'react';
import { ShoppingCart, Star, Sparkles } from 'lucide-react';

const ShopItem = ({ name, cost, highlight }) => (
  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur">
    <div>
      <p className="font-medium">{name}</p>
      <p className="text-sm text-white/60">{cost} coins</p>
    </div>
    <div className="flex items-center gap-2">
      {highlight && (
        <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/20 px-2 py-1 text-xs text-purple-200">
          <Sparkles className="h-3 w-3" /> Popular
        </span>
      )}
      <button className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-3 py-2 text-sm font-semibold text-black shadow shadow-cyan-500/30 transition hover:bg-cyan-400">
        <ShoppingCart className="h-4 w-4" /> Buy
      </button>
    </div>
  </div>
);

const ShopPreview = () => {
  const upgrades = [
    { name: 'Engine Level 1', cost: 500, highlight: true },
    { name: 'Handling Level 1', cost: 700 },
    { name: 'Boost Core', cost: 800 },
  ];

  return (
    <section id="shop" className="w-full bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h2 className="bg-gradient-to-r from-cyan-300 via-purple-300 to-white bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Shop Snapshot
          </h2>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur">
            <Star className="h-4 w-4 text-yellow-300" /> In-game currency: Coins
          </span>
        </div>

        <p className="mt-2 max-w-2xl text-white/70">
          Earn coins during runs and spend them on upgrades, powerups, and cosmetics. Progress is saved locally.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {upgrades.map((u) => (
            <ShopItem key={u.name} {...u} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopPreview;
