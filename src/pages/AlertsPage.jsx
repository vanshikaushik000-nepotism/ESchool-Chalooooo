import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Bell, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Trash2, 
  Filter,
  Check
} from 'lucide-react';

export const AlertsPage = () => {
  const { notifications, markAllNotificationsRead, toggleNotificationRead, setNotifications } = useApp();
  const [filterType, setFilterType] = useState('All');

  const filtered = notifications.filter(n => {
    if (filterType === 'Unread') return n.unread;
    if (filterType === 'Exams') return n.type === 'Exams';
    if (filterType === 'Assignments') return n.type === 'Assignments';
    return true;
  });

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#1b1b1d] border border-white/5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#bdf532] font-['Geist'] uppercase tracking-wider">
            <Bell className="w-4 h-4" /> Notification & Alert Hub
          </div>
          <h1 className="text-2xl font-extrabold text-white font-['Hanken_Grotesk'] mt-1">
            System Announcements & Class Alerts
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-['Inter']">
            Stay updated with real-time exam schedules, assignment alerts, and advisor notes.
          </p>
        </div>

        <button
          onClick={markAllNotificationsRead}
          className="px-4 py-2.5 rounded-xl bg-[#201f21] text-[#bdf532] border border-[#bdf532]/30 text-xs font-bold hover:bg-[#bdf532]/10 transition-colors flex items-center gap-2"
        >
          <Check className="w-4 h-4" /> Mark All as Read
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 p-2 rounded-2xl bg-[#1b1b1d] border border-white/5 overflow-x-auto">
        {['All', 'Unread', 'Exams', 'Assignments'].map((t) => (
          <button
            key={t}
            onClick={() => setFilterType(t)}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterType === t
                ? 'bg-[#bdf532] text-[#131315]'
                : 'bg-[#201f21] text-gray-300 hover:text-white'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleNotificationRead(item.id)}
            className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start justify-between gap-4 ${
              item.unread
                ? 'bg-[#201f21] border-[#bdf532]/40 shadow-[0_0_12px_rgba(189,245,50,0.1)]'
                : 'bg-[#1b1b1d] border-white/5 opacity-80'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold flex-shrink-0 ${
                item.priority === 'Urgent'
                  ? 'bg-red-500/20 text-red-400'
                  : item.priority === 'High'
                  ? 'bg-amber-500/20 text-amber-400'
                  : 'bg-[#bdf532]/20 text-[#bdf532]'
              }`}>
                {item.type === 'Exams' ? <AlertTriangle className="w-5 h-5" /> : <Info className="w-5 h-5" />}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white font-['Hanken_Grotesk']">{item.title}</span>
                  {item.unread && (
                    <span className="w-2 h-2 rounded-full bg-[#bdf532] animate-pulse" />
                  )}
                </div>
                <p className="text-xs text-gray-300 mt-1 font-['Inter']">{item.message}</p>
                <span className="text-[10px] text-gray-500 font-mono mt-2 block">{item.time} • {item.type}</span>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setNotifications(notifications.filter(n => n.id !== item.id));
              }}
              className="text-gray-500 hover:text-red-400 p-1"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
