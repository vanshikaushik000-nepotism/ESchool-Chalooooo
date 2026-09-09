import React from 'react';
import { 
  FileText, 
  Clock, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  Sparkles
} from 'lucide-react';

export const AssessmentsPage = () => {
  const upcomingExams = [
    { title: 'Calculus III Midterm Examination', subject: 'Mathematics', date: 'March 15, 2026', time: '09:00 - 11:30 AM', room: 'Hall A', weightage: '30%', daysLeft: 2, priority: 'Critical' },
    { title: 'Quantum Physics Lab Assessment', subject: 'Physics', date: 'March 18, 2026', time: '01:00 - 03:00 PM', room: 'Lab B-12', weightage: '20%', daysLeft: 5, priority: 'High' },
    { title: 'Organic Chemistry II Unit Test', subject: 'Chemistry', date: 'March 22, 2026', time: '10:00 - 11:30 AM', room: 'Science 101', weightage: '15%', daysLeft: 9, priority: 'Normal' },
    { title: 'Computer Science Algorithm Final', subject: 'Computer Science', date: 'April 02, 2026', time: '02:00 - 05:00 PM', room: 'Tech Center', weightage: '35%', daysLeft: 20, priority: 'High' },
  ];

  const pastResults = [
    { title: 'Physics Electricity Quiz #3', score: '94/100', grade: 'A', date: 'Feb 28, 2026', avg: '82%' },
    { title: 'Calculus Integration Test', score: '98/100', grade: 'A+', date: 'Feb 20, 2026', avg: '79%' },
    { title: 'Organic Reaction Mechanism', score: '86/100', grade: 'A-', date: 'Feb 12, 2026', avg: '74%' },
  ];

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Top Banner & Next Exam Countdown */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1b1b1d] via-[#201f21] to-[#1b1b1d] border border-white/5 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#bdf532] font-['Geist'] uppercase tracking-wider">
              <FileText className="w-4 h-4" /> Exam & Assessment Portal
            </div>
            <h1 className="text-2xl font-extrabold text-white font-['Hanken_Grotesk'] mt-1">
              Midterm & Final Examination Schedule
            </h1>
            <p className="text-xs text-gray-400 mt-1 font-['Inter']">
              Track exam countdowns, venues, weightages, and historical test performances.
            </p>
          </div>

          {/* Countdown Pill Card */}
          <div className="p-4 rounded-xl bg-[#131315] border border-[#bdf532]/30 flex items-center gap-4 shadow-[0_0_15px_rgba(189,245,50,0.15)]">
            <div className="w-12 h-12 rounded-xl bg-[#bdf532] text-[#131315] flex items-center justify-center font-extrabold text-xl font-['Hanken_Grotesk']">
              02d
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-['Geist'] uppercase block">NEXT MAJOR EXAM</span>
              <h3 className="text-xs font-bold text-white">Calculus III Midterm</h3>
              <span className="text-[11px] text-[#bdf532] font-mono">March 15 @ 09:00 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Exams Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white font-['Hanken_Grotesk']">Upcoming Assessments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingExams.map((exam, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#1b1b1d] border border-white/5 hover:border-white/20 transition-all duration-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#bdf532] font-bold">{exam.subject}</span>
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded font-['Geist'] uppercase ${
                  exam.priority === 'Critical'
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  {exam.daysLeft} Days Remaining
                </span>
              </div>

              <h3 className="text-base font-bold text-white font-['Hanken_Grotesk']">
                {exam.title}
              </h3>

              <div className="grid grid-cols-2 gap-2 text-xs text-gray-300 pt-2 border-t border-white/5 font-['Inter']">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" /> {exam.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#bdf532]" /> {exam.time}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#49fbeb]" /> Venue: {exam.room}
                </span>
                <span className="flex items-center gap-1 font-bold text-white">
                  <Award className="w-3.5 h-3.5 text-[#7b5cff]" /> Weightage: {exam.weightage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Test History Table */}
      <div className="p-6 rounded-2xl bg-[#1b1b1d] border border-white/5 space-y-4">
        <h2 className="text-lg font-bold text-white font-['Hanken_Grotesk']">Recent Assessment Results</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-xs font-['Geist'] text-gray-400 uppercase">
                <th className="py-3 px-4">Test Title</th>
                <th className="py-3 px-4">Date Taken</th>
                <th className="py-3 px-4 text-center">Score</th>
                <th className="py-3 px-4 text-center">Grade</th>
                <th className="py-3 px-4 text-right">Class Average</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm font-['Inter']">
              {pastResults.map((r, idx) => (
                <tr key={idx} className="hover:bg-[#201f21]">
                  <td className="py-3.5 px-4 font-bold text-white font-['Hanken_Grotesk']">{r.title}</td>
                  <td className="py-3.5 px-4 text-xs text-gray-400">{r.date}</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#bdf532] font-mono">{r.score}</td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="px-2 py-0.5 rounded bg-[#bdf532]/20 text-[#bdf532] font-extrabold text-xs">
                      {r.grade}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right text-xs text-gray-400">{r.avg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
