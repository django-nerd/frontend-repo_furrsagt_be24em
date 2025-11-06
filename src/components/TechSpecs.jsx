import React from 'react';
import { Monitor, Cpu, HardDrive, Gamepad2, Settings } from 'lucide-react';

const Row = ({ label, value }) => (
  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3 text-white">
    <span className="text-white/60">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const TechSpecs = () => {
  return (
    <section id="settings" className="w-full bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3">
          <Settings className="h-6 w-6 text-cyan-300" />
          <h2 className="bg-gradient-to-r from-cyan-300 via-purple-300 to-white bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Technical Settings
          </h2>
        </div>
        <p className="mt-2 max-w-2xl text-white/70">
          Built for PC with a 60 FPS target, liquid glass UI, and soft reflection neon lighting.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Row label="Engine" value="Unity or Godot" />
          <Row label="Resolution" value="1920 x 1080" />
          <Row label="Frame rate" value="60 FPS" />
          <Row label="Input" value="Keyboard + Mouse" />
          <Row label="Save System" value="Local JSON" />
          <Row label="Graphics" value="Medium → High" />
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3"><Monitor className="h-5 w-5 text-cyan-300" /><span>1920x1080 UI scaling</span></div>
            <div className="flex items-center gap-3"><Gamepad2 className="h-5 w-5 text-purple-300" /><span>Keyboard-first controls</span></div>
            <div className="flex items-center gap-3"><Cpu className="h-5 w-5 text-white" /><span>Optimized VFX</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
