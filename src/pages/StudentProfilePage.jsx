import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  User, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  BookOpen, 
  Sparkles,
  Flame,
  CheckCircle2
} from 'lucide-react';

export const StudentProfilePage = () => {
  const { user } = useApp();

  const badges = [
    { title: "President's Honors", desc: "Top GPA student for 3 consecutive terms", color: "#bdf532" },
    { title: "Calculus Olympian", desc: "1st Place in Regional Math Olympiad 2025", color: "#7b5cff" },
    { title: "100% Attendance", desc: "Perfect attendance record in S1", color: "#49fbeb" },
    { title: "AI Hackathon Winner", desc: "Built WebGL Quantum Simulator", color: "#bdf532" }
  ];

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Profile Header Banner */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-[#1b1b1d] via-[#201f21] to-[#1b1b1d] border border-white/5 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-2xl object-cover ring-4 ring-[#bdf532]/30 shadow-2xl"
          />
          <div className="text-center md:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <h1 className="text-2xl md:text-3xl font-extrabold text-white font-['Hanken_Grotesk']">
                {user.name}
              </h1>
              <ShieldCheck className="w-6 h-6 text-[#bdf532]" />
            </div>
            <p className="text-xs text-[#bdf532] font-['Geist'] mt-1 font-bold">
              {user.grade} • {user.stream} • ID: {user.id}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-gray-400 mt-3 font-['Inter']">
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-gray-500" /> {user.email}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-gray-500" /> Science Wing, Campus A</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#131315] border border-white/10 text-center min-w-[140px]">
            <span className="text-[10px] text-gray-400 font-['Geist'] uppercase block">CLASS RANK</span>
            <span className="text-2xl font-extrabold text-[#bdf532] font-['Hanken_Grotesk']">{user.rank}</span>
            <span className="text-[10px] text-gray-400 block mt-0.5">Top 1% Percentile</span>
          </div>
        </div>
      </div>

      {/* Badges Collection */}
      <div className="p-6 rounded-2xl bg-[#1b1b1d] border border-white/5 space-y-4">
        <h2 className="text-lg font-bold text-white font-['Hanken_Grotesk'] flex items-center gap-2">
          <Award className="w-5 h-5 text-[#bdf532]" /> Academic Achievements & Badges
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((b, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#201f21] border border-white/5 hover:border-white/20 transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#131315] flex items-center justify-center font-bold" style={{ color: b.color }}>
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white font-['Hanken_Grotesk']">{b.title}</h3>
              <p className="text-xs text-gray-400 font-['Inter']">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guardian & Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-[#1b1b1d] border border-white/5 space-y-4">
          <h2 className="text-base font-bold text-white font-['Hanken_Grotesk']">Guardian & Emergency Contact</h2>
          <div className="space-y-3 text-xs text-gray-300 font-['Inter']">
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#201f21]">
              <span className="text-gray-400">Guardian Name</span>
              <span className="font-bold text-white">Elena Rivera</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#201f21]">
              <span className="text-gray-400">Phone Number</span>
              <span className="font-mono text-[#bdf532]">+1 (555) 234-8901</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#201f21]">
              <span className="text-gray-400">Relation</span>
              <span className="text-white">Mother</span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#1b1b1d] border border-white/5 space-y-4">
          <h2 className="text-base font-bold text-white font-['Hanken_Grotesk']">Academic Counselor Details</h2>
          <div className="space-y-3 text-xs text-gray-300 font-['Inter']">
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#201f21]">
              <span className="text-gray-400">Counselor Name</span>
              <span className="font-bold text-white">Dr. Robert Vance</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#201f21]">
              <span className="text-gray-400">Office Hours</span>
              <span className="text-white">Mon & Wed (2:00 - 4:00 PM)</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#201f21]">
              <span className="text-gray-400">Office Room</span>
              <span className="text-[#49fbeb] font-mono">Administration 204</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
