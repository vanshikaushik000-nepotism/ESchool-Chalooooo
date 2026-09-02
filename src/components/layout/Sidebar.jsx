import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  LayoutDashboard, 
  GraduationCap, 
  Calendar, 
  CheckSquare, 
  FileText, 
  Bot, 
  Zap, 
  Clock, 
  FileUser, 
  Bell, 
  User, 
  Settings, 
  Sparkles,
  X,
  ShieldCheck
} from 'lucide-react';

export const Sidebar = () => {
  const { 
    activeTab, 
    setActiveTab, 
    unreadNotificationsCount, 
    is3DActive, 
    setIs3DActive,
    mobileNavOpen,
    setMobileNavOpen,
    user
  } = useApp();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'academic_records', label: 'Academic Records', icon: GraduationCap },
    { id: 'timetable', label: 'Class Schedule', icon: Calendar },
    { id: 'tasks', label: 'Tasks & Reminders', icon: CheckSquare },
    { id: 'assessments', label: 'Exams & Quizzes', icon: FileText },
    { id: 'ai_assistant', label: 'AI Study Assistant', icon: Bot, badge: 'AI' },
    { id: 'skills', label: 'Skills & Matrix', icon: Zap },
    { id: 'self_study', label: 'Focus & Timer', icon: Clock },
    { id: 'resume_builder', label: 'Resume Builder', icon: FileUser },
    { id: 'alerts', label: 'Alerts & News', icon: Bell, count: unreadNotificationsCount },
    { id: 'profile', label: 'Student Profile', icon: User },
    { id: 'settings', label: 'Account Settings', icon: Settings },
  ];

  const handleSelectTab = (id) => {
    setActiveTab(id);
    setMobileNavOpen(false);
  };

  const navContent = (
    <div className="flex flex-col h-full bg-[#131315] border-r border-white/5 py-4 px-3">
      {/* Brand Header */}
      <div className="flex items-center justify-between px-2 mb-6">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleSelectTab('dashboard')}>
          <div className="w-10 h-10 rounded-xl bg-[#bdf532] text-[#131315] flex items-center justify-center font-bold shadow-[0_0_15px_rgba(189,245,50,0.3)]">
            <GraduationCap className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <h1 className="font-['Hanken_Grotesk'] font-extrabold text-base tracking-tight text-white leading-none">
              ESchool <span className="text-[#bdf532]">Chalooooo</span>
            </h1>
            <p className="text-[10px] text-[#c3c9ae] font-['Geist'] tracking-wider uppercase mt-1">
              Performance Portal
            </p>
          </div>
        </div>
        {mobileNavOpen && (
          <button 
            onClick={() => setMobileNavOpen(false)}
            className="md:hidden text-gray-400 hover:text-white p-1"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* 3D Background Toggle Widget */}
      <div className="mx-1 mb-4 p-3 rounded-xl bg-[#1b1b1d] border border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#49fbeb]" />
          <span className="text-xs text-gray-300 font-medium">3D Sphere Visualizer</span>
        </div>
        <button
          onClick={() => setIs3DActive(!is3DActive)}
          className={`w-9 h-5 rounded-full transition-colors relative p-0.5 ${
            is3DActive ? 'bg-[#bdf532]' : 'bg-gray-700'
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full bg-[#131315] transition-transform ${
              is3DActive ? 'translate-x-4' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto space-y-1 pr-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleSelectTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 group ${
                isActive
                  ? 'bg-[#201f21] text-[#bdf532] border-l-2 border-[#bdf532] shadow-[0_0_12px_rgba(189,245,50,0.15)] font-semibold'
                  : 'text-[#c3c9ae] hover:bg-[#1b1b1d] hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? 'text-[#bdf532]' : 'text-gray-400 group-hover:text-white'
                  }`}
                />
                <span className="font-['Inter']">{item.label}</span>
              </div>
              
              {item.badge && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#7b5cff]/20 text-[#cabeff] border border-[#7b5cff]/40">
                  {item.badge}
                </span>
              )}

              {item.count > 0 && (
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#bdf532] text-[#131315]">
                  {item.count}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Student Profile Quick Pill */}
      <div className="pt-3 border-t border-white/5 mt-2">
        <div 
          onClick={() => handleSelectTab('profile')}
          className="flex items-center gap-3 p-2 rounded-xl bg-[#1b1b1d] border border-white/5 hover:border-[#bdf532]/40 transition-colors cursor-pointer"
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-9 h-9 rounded-lg object-cover ring-1 ring-[#bdf532]/40"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-white truncate font-['Hanken_Grotesk']">{user.name}</p>
            <p className="text-[10px] text-gray-400 truncate">{user.grade} • {user.rank}</p>
          </div>
          <ShieldCheck className="w-4 h-4 text-[#bdf532]" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-64 h-screen sticky top-0 left-0 hidden md:block flex-shrink-0 z-40">
        {navContent}
      </aside>

      {/* Mobile Drawer Navigation */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileNavOpen(false)}
          />
          <div className="relative w-72 h-full bg-[#131315] z-10 shadow-2xl">
            {navContent}
          </div>
        </div>
      )}
    </>
  );
};
