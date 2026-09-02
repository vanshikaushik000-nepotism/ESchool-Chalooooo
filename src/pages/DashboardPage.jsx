import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  TrendingUp, 
  BookOpen, 
  Award, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight, 
  Calendar, 
  Zap, 
  Sparkles,
  ChevronRight,
  Flame,
  Target,
  BarChart2
} from 'lucide-react';

export const DashboardPage = () => {
  const { setActiveTab, user, tasks, toggleTaskCompletion } = useApp();

  const urgentTasks = tasks.filter(t => !t.completed).slice(0, 3);

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Top Banner: Welcome Header & Quick Action Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1b1b1d] via-[#201f21] to-[#1b1b1d] border border-white/10 p-6 md:p-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#bdf532]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#7b5cff]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#bdf532]/15 text-[#bdf532] text-xs font-bold font-['Geist'] border border-[#bdf532]/30 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 fill-[#bdf532]" /> 12-Day Study Streak
              </span>
              <span className="text-gray-400 text-xs font-['Geist']">Semester 2 • 2026</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white font-['Hanken_Grotesk'] tracking-tight">
              Welcome back, <span className="text-[#bdf532]">{user.name}</span> 👋
            </h1>
            <p className="text-sm text-gray-300 max-w-xl mt-2 font-['Inter'] font-light">
              You are currently ranked <strong className="text-white font-semibold">{user.rank}</strong> with an overall GPA of <strong className="text-[#bdf532] font-bold">{user.gpa}</strong>. Your next exam in Physics starts in <span className="text-[#49fbeb] font-semibold">2 days</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveTab('self_study')}
              className="px-5 py-3 rounded-xl bg-[#bdf532] text-[#131315] font-extrabold text-sm hover:bg-[#a2d801] transition-all duration-200 shadow-[0_0_20px_rgba(189,245,50,0.3)] flex items-center gap-2"
            >
              <Clock className="w-4 h-4 stroke-[2.5]" />
              Start Focus Session
            </button>
            <button
              onClick={() => setActiveTab('ai_assistant')}
              className="px-4 py-3 rounded-xl bg-[#201f21] text-white border border-white/10 text-sm font-semibold hover:border-[#7b5cff]/50 transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#49fbeb]" />
              AI Assistant
            </button>
          </div>
        </div>
      </div>

      {/* Grid Row 1: Key Performance Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="p-5 rounded-2xl bg-[#1b1b1d] border border-white/5 hover:border-[#bdf532]/30 transition-all duration-200 group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-400 font-['Geist'] uppercase tracking-wider">Overall GPA</span>
            <div className="w-8 h-8 rounded-lg bg-[#bdf532]/10 text-[#bdf532] flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-extrabold text-white font-['Hanken_Grotesk']">{user.gpa}</div>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-[#bdf532]">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+0.14 from last term</span>
            </div>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="p-5 rounded-2xl bg-[#1b1b1d] border border-white/5 hover:border-[#7b5cff]/30 transition-all duration-200 group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-400 font-['Geist'] uppercase tracking-wider">Attendance</span>
            <div className="w-8 h-8 rounded-lg bg-[#7b5cff]/10 text-[#cabeff] flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-extrabold text-white font-['Hanken_Grotesk']">{user.attendance}</div>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-[#cabeff]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Target 95%+ Met</span>
            </div>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="p-5 rounded-2xl bg-[#1b1b1d] border border-white/5 hover:border-[#49fbeb]/30 transition-all duration-200 group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-400 font-['Geist'] uppercase tracking-wider">Weekly Focus</span>
            <div className="w-8 h-8 rounded-lg bg-[#49fbeb]/10 text-[#49fbeb] flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-extrabold text-white font-['Hanken_Grotesk']">18.5 hrs</div>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-[#49fbeb]">
              <Flame className="w-3.5 h-3.5" />
              <span>+3.2 hrs this week</span>
            </div>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="p-5 rounded-2xl bg-[#1b1b1d] border border-white/5 hover:border-amber-400/30 transition-all duration-200 group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-400 font-['Geist'] uppercase tracking-wider">Pending Assignments</span>
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <AlertCircle className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-extrabold text-white font-['Hanken_Grotesk']">{urgentTasks.length} Tasks</div>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-amber-400">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>1 Due Today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Row 2: Course Progress & Active Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Course Progress Breakdown */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-[#1b1b1d] border border-white/5 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white font-['Hanken_Grotesk']">Course Progress & Performance</h3>
              <p className="text-xs text-gray-400 font-['Geist']">Active enrollment status for Semester 2</p>
            </div>
            <button 
              onClick={() => setActiveTab('academic_records')}
              className="text-xs font-bold text-[#bdf532] hover:underline flex items-center gap-1"
            >
              View Transcripts <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {[
              { subject: 'Advanced Calculus III', code: 'MATH-301', grade: '96%', letter: 'A+', progress: 96, color: '#bdf532', teacher: 'Dr. Evelyn Vance' },
              { subject: 'Quantum Physics & Mechanics', code: 'PHYS-204', grade: '91%', letter: 'A', progress: 91, color: '#7b5cff', teacher: 'Prof. Richard Feynman' },
              { subject: 'Organic Chemistry II', code: 'CHEM-202', grade: '88%', letter: 'A-', progress: 88, color: '#49fbeb', teacher: 'Dr. Sarah Connor' },
              { subject: 'Computer Science & AI', code: 'CS-401', grade: '98%', letter: 'A+', progress: 98, color: '#bdf532', teacher: 'Prof. Alan Turing' },
            ].map((course, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#201f21] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 font-['Geist']">{course.code} • {course.teacher}</span>
                    <h4 className="text-sm font-bold text-white font-['Hanken_Grotesk']">{course.subject}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-extrabold text-white font-['Hanken_Grotesk']">{course.grade}</span>
                    <span className="ml-2 text-xs font-bold px-2 py-0.5 rounded bg-white/10 text-[#bdf532]">{course.letter}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${course.progress}%`, backgroundColor: course.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Upcoming Class Schedule & Tasks */}
        <div className="space-y-6">
          {/* Upcoming Schedule */}
          <div className="p-6 rounded-2xl bg-[#1b1b1d] border border-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white font-['Hanken_Grotesk']">Today's Schedule</h3>
              <button 
                onClick={() => setActiveTab('timetable')}
                className="text-xs text-[#bdf532] font-bold hover:underline"
              >
                Full Schedule
              </button>
            </div>

            <div className="space-y-3">
              {[
                { time: '09:00 - 10:30 AM', class: 'Advanced Calculus III', room: 'Room 302', status: 'In Progress', active: true },
                { time: '11:00 - 12:30 PM', class: 'Quantum Physics Lab', room: 'Lab B-12', status: 'Next Up', active: false },
                { time: '02:00 - 03:30 PM', class: 'Computer Science & AI', room: 'Tech Lab 4', status: 'Upcoming', active: false },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 rounded-xl border transition-colors ${
                    item.active 
                      ? 'bg-[#201f21] border-[#bdf532]/40 shadow-[0_0_15px_rgba(189,245,50,0.1)]' 
                      : 'bg-[#131315]/60 border-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-gray-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#bdf532]" /> {item.time}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      item.active ? 'bg-[#bdf532] text-[#131315]' : 'bg-white/10 text-gray-300'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mt-1 font-['Hanken_Grotesk']">{item.class}</h4>
                  <p className="text-xs text-gray-400">{item.room}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Tasks Card */}
          <div className="p-6 rounded-2xl bg-[#1b1b1d] border border-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white font-['Hanken_Grotesk']">Priority Tasks</h3>
              <button 
                onClick={() => setActiveTab('tasks')}
                className="text-xs text-[#bdf532] font-bold hover:underline"
              >
                Manage Tasks
              </button>
            </div>

            <div className="space-y-2">
              {urgentTasks.map((t) => (
                <div 
                  key={t.id}
                  onClick={() => toggleTaskCompletion(t.id)}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-[#201f21] border border-white/5 hover:border-white/20 transition-colors cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => {}}
                    className="w-4 h-4 rounded border-gray-600 accent-[#bdf532]"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-white truncate">{t.title}</p>
                    <p className="text-[10px] text-gray-400">{t.subject} • {t.dueDate}</p>
                  </div>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                    t.priority === 'Urgent' ? 'bg-red-500/20 text-red-300' : 'bg-amber-500/20 text-amber-300'
                  }`}>
                    {t.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
