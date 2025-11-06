import React from 'react';
import { Trophy, Target, Timer, ArrowUpRight } from 'lucide-react';

const LevelCard = ({ level, title, objective, reward, difficulty, unlocked }) => (
  <div className={`rounded-2xl border p-5 backdrop-blur ${unlocked ? 'border-cyan-400/30 bg-cyan-400/5' : 'border-white/10 bg-white/5'} text-white`}>\n    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`grid h-10 w-10 place-items-center rounded-lg ${unlocked ? 'bg-cyan-500/20 text-cyan-200' : 'bg-white/10 text-white/70'}`}>
          <Trophy className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-white/60">Level {level}</p>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
      <span className={`rounded-full px-3 py-1 text-xs ${difficulty === 'Hard' ? 'bg-purple-500/20 text-purple-200' : difficulty === 'Medium' ? 'bg-cyan-500/20 text-cyan-200' : 'bg-white/10 text-white/70'}`}>
        {difficulty}
      </span>
    </div>

    <div className="mt-4 space-y-2 text-sm text-white/70">
      <div className="flex items-center gap-2"><Target className="h-4 w-4 text-cyan-300" /> <span>{objective}</span></div>
      <div className="flex items-center gap-2"><Timer className="h-4 w-4 text-purple-300" /> <span>Speed increases every 30s</span></div>
      <div className="flex items-center gap-2"><Trophy className="h-4 w-4 text-yellow-300" /> <span>Reward: {reward}</span></div>
    </div>

    <div className="mt-5 flex items-center justify-between">
      <div className="h-2 w-full rounded-full bg-white/10">
        <div className={`h-2 rounded-full ${unlocked ? 'bg-gradient-to-r from-cyan-400 to-purple-400' : 'bg-white/20'}`} style={{ width: unlocked ? '100%' : '35%' }} />
      </div>
      <button className={`ml-4 inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold transition ${unlocked ? 'bg-cyan-500/90 text-black hover:bg-cyan-400' : 'bg-white/10 text-white/70 cursor-not-allowed'}`}>
        Start <ArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  </div>
);

const Levels = () => {
  const levels = [
    {
      level: 1,
      title: 'Neon Boulevard',
      objective: 'Collect 50 coins and avoid 10 obstacles',
      reward: '+100 coins, +25 XP',
      difficulty: 'Easy',
      unlocked: true,
    },
    {
      level: 2,
      title: 'Glass Overpass',
      objective: 'Hit 2 perfect drifts and reach 1.5 km',
      reward: '+200 coins, +50 XP',
      difficulty: 'Medium',
      unlocked: true,
    },
    {
      level: 3,
      title: 'Chromatic Spire Run',
      objective: 'Survive 90s and collect a blue crystal coin',
      reward: '+300 coins, +75 XP',
      difficulty: 'Medium',
      unlocked: false,
    },
    {
      level: 4,
      title: 'Laser Corridor',
      objective: 'Avoid 5 moving lasers while boosted',
      reward: '+400 coins, +100 XP',
      difficulty: 'Hard',
      unlocked: false,
    },
  ];

  return (
    <section id="levels" className="w-full bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="bg-gradient-to-r from-cyan-300 via-purple-300 to-white bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Levels to Complete
        </h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Progress through handcrafted challenges that layer on speed, obstacles, and powerup mastery. Complete levels to earn bonus coins and XP.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {levels.map((lvl) => (
            <LevelCard key={lvl.level} {...lvl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Levels;
