import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Search, 
  Bell, 
  Menu, 
  Sparkles, 
  Award
} from 'lucide-react';

export const Header = () => {
  const { 
    activeTab, 
    setActiveTab, 
    unreadNotificationsCount, 
    notifications,
    toggleNotificationRead,
    setMobileNavOpen,
    searchQuery,
    setSearchQuery,
    user
  } = useApp();

  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const getTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard Overview';
      case 'academic_records': return 'Academic Records & Transcripts';
      case 'timetable': return 'Weekly Class Schedule';
      case 'tasks': return 'Tasks & Reminders Checklist';
      case 'assessments': return 'Exams & Quiz Tracker';
      case 'ai_assistant': return 'AI Academic Assistant';
      case 'skills': return 'Skills & Strengths Matrix';
      case 'self_study': return 'Focus Mode & Pomodoro Timer';
      case 'resume_builder': return 'Student Portfolio & Resume Builder';
      case 'alerts': return 'Alerts & Notification Hub';
      case 'profile': return 'Student Profile Details';
      case 'settings': return 'Account & App Settings';
      default: return 'Student Dashboard';
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#131315]/90 backdrop-blur-md border-b border-white/5 px-4 py-3 md:px-8">
      <div className="flex items-center justify-between gap-4">
        {/* Left Side: Mobile Menu Toggle & Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileNavOpen(true)}
            className="md:hidden text-gray-400 hover:text-white p-2 rounded-lg bg-[#1b1b1d]"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-[#bdf532] font-['Geist'] uppercase tracking-wider">
                ESchool Chalooooo
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-xs text-gray-400 font-['Geist']">{user.grade}</span>
            </div>
            <h2 className="text-lg md:text-xl font-extrabold text-white font-['Hanken_Grotesk'] tracking-tight">
              {getTitle()}
            </h2>
          </div>
        </div>

        {/* Middle: Search Bar */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, exams, tasks, or study topics..."
              className="w-full bg-[#1b1b1d] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#bdf532] focus:ring-1 focus:ring-[#bdf532] transition-colors"
            />
          </div>
        </div>

        {/* Right Side: Quick Stats, Notifications & Profile */}
        <div className="flex items-center gap-3">
          {/* GPA Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1b1b1d] border border-white/5">
            <Award className="w-4 h-4 text-[#bdf532]" />
            <div className="text-left">
              <p className="text-[10px] text-gray-400 font-['Geist'] leading-none">CURRENT GPA</p>
              <p className="text-xs font-bold text-white font-['Hanken_Grotesk'] leading-tight">{user.gpa} / 4.0</p>
            </div>
          </div>

          {/* AI Assistant Quick Pill */}
          <button
            onClick={() => setActiveTab('ai_assistant')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#7b5cff]/15 border border-[#7b5cff]/30 text-[#cabeff] hover:bg-[#7b5cff]/25 transition-colors text-xs font-semibold"
          >
            <Sparkles className="w-4 h-4 text-[#49fbeb]" />
            <span className="hidden md:inline font-['Geist']">Ask AI</span>
          </button>

          {/* Notifications Dropdown Toggle */}
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative p-2 rounded-xl bg-[#1b1b1d] border border-white/5 text-gray-300 hover:text-white hover:border-white/20 transition-colors"
            >
              <Bell className="w-5 h-5" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#bdf532] text-[#131315] font-extrabold text-[10px] flex items-center justify-center border-2 border-[#131315]">
                  {unreadNotificationsCount}
                </span>
              )}
            </button>

            {/* Dropdown Menu */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 md:w-96 bg-[#1b1b1d] border border-white/10 rounded-2xl shadow-2xl z-50 p-4 animate-slide-up">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-white font-['Hanken_Grotesk']">Notifications</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#bdf532]/20 text-[#bdf532]">
                      {unreadNotificationsCount} New
                    </span>
                  </div>
                  <button 
                    onClick={() => {
                      setActiveTab('alerts');
                      setNotificationsOpen(false);
                    }}
                    className="text-xs text-[#bdf532] hover:underline font-['Geist']"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                  {notifications.slice(0, 4).map((n) => (
                    <div
                      key={n.id}
                      onClick={() => toggleNotificationRead(n.id)}
                      className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-colors ${
                        n.unread 
                          ? 'bg-[#201f21] border-[#bdf532]/30 text-white' 
                          : 'bg-[#131315]/50 border-white/5 text-gray-400'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold text-white font-['Hanken_Grotesk']">{n.title}</span>
                        <span className="text-[10px] text-gray-500 whitespace-nowrap">{n.time}</span>
                      </div>
                      <p className="text-[11px] text-gray-300 mt-1 line-clamp-2">{n.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User Avatar Button */}
          <button
            onClick={() => setActiveTab('profile')}
            className="flex items-center gap-2 p-1 rounded-xl bg-[#1b1b1d] border border-white/5 hover:border-[#bdf532]/40 transition-colors"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-7 h-7 rounded-lg object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
