import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Settings, 
  User, 
  Lock, 
  Bell, 
  Palette, 
  Save, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const AccountSettingsPage = () => {
  const { user, setUser } = useApp();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(user.avatar);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setUser(prev => ({
      ...prev,
      name,
      email,
      avatar
    }));
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#1b1b1d] border border-white/5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#bdf532] font-['Geist'] uppercase tracking-wider">
            <Settings className="w-4 h-4" /> Account & App Settings
          </div>
          <h1 className="text-2xl font-extrabold text-white font-['Hanken_Grotesk'] mt-1">
            System Preferences & Security
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-['Inter']">
            Manage your personal profile, notification preferences, and account security.
          </p>
        </div>

        {savedMessage && (
          <span className="px-4 py-2 rounded-xl bg-[#bdf532]/20 text-[#bdf532] font-bold text-xs flex items-center gap-1.5 animate-pulse">
            <CheckCircle2 className="w-4 h-4" /> Settings Saved!
          </span>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Settings */}
        <div className="p-6 rounded-2xl bg-[#1b1b1d] border border-white/5 space-y-4">
          <h2 className="text-base font-bold text-white font-['Hanken_Grotesk'] flex items-center gap-2">
            <User className="w-5 h-5 text-[#bdf532]" /> General Profile Settings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 font-['Geist'] block mb-1">Student Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#201f21] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#bdf532]"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 font-['Geist'] block mb-1">School Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#201f21] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#bdf532]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-xs text-gray-400 font-['Geist'] block mb-1">Avatar Image URL</label>
              <input
                type="text"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                className="w-full bg-[#201f21] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#bdf532]"
              />
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="p-6 rounded-2xl bg-[#1b1b1d] border border-white/5 space-y-4">
          <h2 className="text-base font-bold text-white font-['Hanken_Grotesk'] flex items-center gap-2">
            <Bell className="w-5 h-5 text-[#7b5cff]" /> Notification Preferences
          </h2>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#201f21]">
              <div>
                <h4 className="text-xs font-bold text-white">Email Exam Reminders</h4>
                <p className="text-[10px] text-gray-400">Receive email alerts 48 hours before major midterms</p>
              </div>
              <button
                type="button"
                onClick={() => setEmailAlerts(!emailAlerts)}
                className={`w-10 h-6 rounded-full transition-colors relative p-0.5 ${
                  emailAlerts ? 'bg-[#bdf532]' : 'bg-gray-700'
                }`}
              >
                <div className={`w-5 h-5 rounded-full bg-[#131315] transition-transform ${
                  emailAlerts ? 'translate-x-4' : 'translate-x-0'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-[#201f21]">
              <div>
                <h4 className="text-xs font-bold text-white">SMS Deadline Notifications</h4>
                <p className="text-[10px] text-gray-400">Get text messages for urgent assignment deadlines</p>
              </div>
              <button
                type="button"
                onClick={() => setSmsAlerts(!smsAlerts)}
                className={`w-10 h-6 rounded-full transition-colors relative p-0.5 ${
                  smsAlerts ? 'bg-[#bdf532]' : 'bg-gray-700'
                }`}
              >
                <div className={`w-5 h-5 rounded-full bg-[#131315] transition-transform ${
                  smsAlerts ? 'translate-x-4' : 'translate-x-0'
                }`} />
              </button>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-[#bdf532] text-[#131315] font-extrabold text-xs hover:bg-[#a2d801] transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(189,245,50,0.3)]"
          >
            <Save className="w-4 h-4 stroke-[2.5]" /> Save Preferences
          </button>
        </div>
      </form>
    </div>
  );
};
