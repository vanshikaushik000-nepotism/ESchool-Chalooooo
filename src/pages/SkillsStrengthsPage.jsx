import React from 'react';
import { 
  Zap, 
  Target, 
  Award, 
  TrendingUp, 
  Sparkles, 
  BookOpen, 
  Code, 
  Brain,
  ShieldCheck
} from 'lucide-react';

export const SkillsStrengthsPage = () => {
  const skills = [
    { name: 'Calculus & Mathematical Analysis', level: 96, category: 'Stem', color: '#bdf532', rank: 'Master' },
    { name: 'Quantum Mechanics & Field Theory', level: 91, category: 'Stem', color: '#7b5cff', rank: 'Advanced' },
    { name: 'Algorithm Design & Data Structures', level: 98, category: 'CS & AI', color: '#bdf532', rank: 'Master' },
    { name: 'Organic Chemistry & Synthesis', level: 88, category: 'Stem', color: '#49fbeb', rank: 'Proficient' },
    { name: 'Academic Research & Literature Review', level: 93, category: 'Humanities', color: '#ffb4ab', rank: 'Advanced' },
    { name: '3D WebGL Graphics & Shader Logic', level: 85, category: 'Tech', color: '#7b5cff', rank: 'Intermediate' },
  ];

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-[#1b1b1d] border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#bdf532] font-['Geist'] uppercase tracking-wider">
            <Zap className="w-4 h-4" /> Skills & Strengths Matrix
          </div>
          <h1 className="text-2xl font-extrabold text-white font-['Hanken_Grotesk'] mt-1">
            Academic Competency & Mastery Matrix
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-['Inter']">
            Comprehensive skill analysis based on homework scores, lab reports, and coding projects.
          </p>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#201f21] border border-white/10">
          <Brain className="w-6 h-6 text-[#49fbeb]" />
          <div>
            <span className="text-[10px] text-gray-400 font-['Geist'] uppercase block">OVERALL SKILL RATING</span>
            <span className="text-sm font-extrabold text-white font-['Hanken_Grotesk']">93.5 / 100 (Tier 1)</span>
          </div>
        </div>
      </div>

      {/* Skills Matrix Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((s, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#1b1b1d] border border-white/5 hover:border-white/20 transition-all duration-200 space-y-3"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-gray-300 font-['Geist']">
                  {s.category}
                </span>
                <h3 className="text-base font-bold text-white font-['Hanken_Grotesk'] mt-1">
                  {s.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xl font-extrabold text-white font-['Hanken_Grotesk']">{s.level}%</span>
                <span className="text-[10px] font-bold block text-[#bdf532]">{s.rank}</span>
              </div>
            </div>

            {/* Meter Bar */}
            <div className="w-full h-2.5 rounded-full bg-black/40 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${s.level}%`, backgroundColor: s.color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Growth Targets Section */}
      <div className="p-6 rounded-2xl bg-[#1b1b1d] border border-white/5 space-y-4">
        <h2 className="text-lg font-bold text-white font-['Hanken_Grotesk'] flex items-center gap-2">
          <Target className="w-5 h-5 text-[#bdf532]" /> Skill Acquisition Goals for Q2
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#201f21] border border-white/5 space-y-1">
            <span className="text-xs font-bold text-[#bdf532]">Target 1: Deep Learning</span>
            <p className="text-xs text-gray-300">Build neural net model in PyTorch by April 10.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#201f21] border border-white/5 space-y-1">
            <span className="text-xs font-bold text-[#7b5cff]">Target 2: Thermodynamics</span>
            <p className="text-xs text-gray-300">Complete 20 advanced physics enthalpy problems.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#201f21] border border-white/5 space-y-1">
            <span className="text-xs font-bold text-[#49fbeb]">Target 3: Spectral Analysis</span>
            <p className="text-xs text-gray-300">Master NMR spectroscopy data interpretation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
