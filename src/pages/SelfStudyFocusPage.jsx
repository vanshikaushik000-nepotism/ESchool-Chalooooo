import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const SelfStudyFocusPage = () => {
  const [mode, setMode] = useState('pomodoro'); // pomodoro (25m), shortBreak (5m), longBreak (15m)
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [activeSound, setActiveSound] = useState(null);
  const [sessionsCompleted, setSessionsCompleted] = useState(4);

  useEffect(() => {
    let timer = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            setSessionsCompleted(s => s + 1);
            confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const changeMode = (newMode) => {
    setMode(newMode);
    setIsRunning(false);
    if (newMode === 'pomodoro') setTimeLeft(25 * 60);
    if (newMode === 'shortBreak') setTimeLeft(5 * 60);
    if (newMode === 'longBreak') setTimeLeft(15 * 60);
  };

  const resetTimer = () => {
    setIsRunning(false);
    if (mode === 'pomodoro') setTimeLeft(25 * 60);
    if (mode === 'shortBreak') setTimeLeft(5 * 60);
    if (mode === 'longBreak') setTimeLeft(15 * 60);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-[#1b1b1d] border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#bdf532] font-['Geist'] uppercase tracking-wider">
            <Clock className="w-4 h-4" /> Self-Study & Focus Mode
          </div>
          <h1 className="text-2xl font-extrabold text-white font-['Hanken_Grotesk'] mt-1">
            Pomodoro Focus & Study Station
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-['Inter']">
            Minimize distractions with timed study sprints and ambient soundscapes.
          </p>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#201f21] border border-white/10">
          <Flame className="w-5 h-5 text-[#bdf532]" />
          <div>
            <span className="text-[10px] text-gray-400 font-['Geist'] uppercase block">SESSIONS TODAY</span>
            <span className="text-sm font-extrabold text-white font-['Hanken_Grotesk']">{sessionsCompleted} Sprints Done (1.6 hrs)</span>
          </div>
        </div>
      </div>

      {/* Main Timer Display */}
      <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-b from-[#1b1b1d] to-[#131315] border border-white/10 flex flex-col items-center justify-center space-y-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#bdf532]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#201f21] border border-white/10 relative z-10">
          {[
            { id: 'pomodoro', label: 'Pomodoro (25m)' },
            { id: 'shortBreak', label: 'Short Break (5m)' },
            { id: 'longBreak', label: 'Long Break (15m)' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => changeMode(item.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-['Hanken_Grotesk'] transition-all ${
                mode === item.id
                  ? 'bg-[#bdf532] text-[#131315] shadow-[0_0_15px_rgba(189,245,50,0.3)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Big Digit Display */}
        <div className="relative z-10 text-center">
          <div className="text-6xl md:text-8xl font-extrabold text-white font-mono tracking-wider font-['Hanken_Grotesk'] glow-ring">
            {formatTime(timeLeft)}
          </div>
          <p className="text-xs text-[#c3c9ae] font-['Geist'] mt-3 uppercase tracking-widest">
            {isRunning ? '🔥 Focus Sprint Active • Stay In The Zone' : 'Paused • Ready When You Are'}
          </p>
        </div>

        {/* Timer Control Buttons */}
        <div className="flex items-center gap-4 relative z-10">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-8 py-4 rounded-2xl bg-[#bdf532] text-[#131315] font-extrabold text-base hover:bg-[#a2d801] transition-all duration-200 shadow-[0_0_25px_rgba(189,245,50,0.4)] flex items-center gap-3"
          >
            {isRunning ? <Pause className="w-6 h-6 stroke-[3]" /> : <Play className="w-6 h-6 stroke-[3]" />}
            <span>{isRunning ? 'Pause Timer' : 'Start Focus'}</span>
          </button>

          <button
            onClick={resetTimer}
            className="p-4 rounded-2xl bg-[#201f21] text-gray-300 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
          >
            <RotateCcw className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Ambient Audio Soundscapes */}
      <div className="p-6 rounded-2xl bg-[#1b1b1d] border border-white/5 space-y-4">
        <h2 className="text-base font-bold text-white font-['Hanken_Grotesk'] flex items-center gap-2">
          <Volume2 className="w-5 h-5 text-[#49fbeb]" /> Ambient Sound Generator
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { id: 'rain', label: 'Gentle Rain', desc: 'Relaxing rainfall' },
            { id: 'cafe', label: 'Coffee Shop', desc: 'Background chatter' },
            { id: 'space', label: 'Deep Space', desc: 'Low ambient drone' },
            { id: 'white', label: 'White Noise', desc: 'Pure focus static' },
          ].map((sound) => {
            const isActive = activeSound === sound.id;
            return (
              <button
                key={sound.id}
                onClick={() => setActiveSound(isActive ? null : sound.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-[#201f21] border-[#49fbeb] shadow-[0_0_12px_rgba(73,251,235,0.2)]'
                    : 'bg-[#131315]/60 border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white font-['Hanken_Grotesk']">{sound.label}</span>
                  <Volume2 className={`w-4 h-4 ${isActive ? 'text-[#49fbeb] animate-pulse' : 'text-gray-500'}`} />
                </div>
                <span className="text-[10px] text-gray-400 font-['Geist'] mt-1 block">{sound.desc}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
