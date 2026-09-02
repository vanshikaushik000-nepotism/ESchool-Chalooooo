import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  User, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight,
  Filter
} from 'lucide-react';

export const TimetablePage = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const scheduleData = {
    Monday: [
      { time: '08:30 - 10:00 AM', subject: 'Advanced Calculus III', code: 'MATH-301', room: 'Hall A - Room 302', instructor: 'Dr. Evelyn Vance', type: 'Lecture', color: '#bdf532' },
      { time: '10:15 - 11:45 AM', subject: 'Quantum Physics & Mechanics', code: 'PHYS-204', room: 'Science Block B-12', instructor: 'Prof. Richard Feynman', type: 'Lecture', color: '#7b5cff' },
      { time: '01:00 - 02:30 PM', subject: 'Organic Chemistry II Lab', code: 'CHEM-202L', room: 'Chemistry Lab 3', instructor: 'Dr. Sarah Connor', type: 'Lab', color: '#49fbeb' },
      { time: '02:45 - 04:15 PM', subject: 'Academic Research & Writing', code: 'ENG-105', room: 'Humanities Room 108', instructor: 'Dr. Harper Lee', type: 'Seminar', color: '#ffb4ab' },
    ],
    Tuesday: [
      { time: '09:00 - 10:30 AM', subject: 'Computer Science & AI', code: 'CS-401', room: 'Tech Hub Lab 4', instructor: 'Prof. Alan Turing', type: 'Lecture', color: '#bdf532' },
      { time: '11:00 - 12:30 PM', subject: 'World History & Civilizations', code: 'HIST-210', room: 'Hall C - Room 204', instructor: 'Prof. Howard Zinn', type: 'Lecture', color: '#49fbeb' },
      { time: '01:30 - 03:30 PM', subject: 'Physics Problem Workshop', code: 'PHYS-204W', room: 'Study Center 2', instructor: 'TA Michael Chang', type: 'Workshop', color: '#7b5cff' },
    ],
    Wednesday: [
      { time: '08:30 - 10:00 AM', subject: 'Advanced Calculus III', code: 'MATH-301', room: 'Hall A - Room 302', instructor: 'Dr. Evelyn Vance', type: 'Lecture', color: '#bdf532' },
      { time: '10:15 - 11:45 AM', subject: 'Quantum Physics & Mechanics', code: 'PHYS-204', room: 'Science Block B-12', instructor: 'Prof. Richard Feynman', type: 'Lecture', color: '#7b5cff' },
      { time: '02:00 - 04:00 PM', subject: 'Robotics & Automation Club', code: 'CLUB-01', room: 'Innovation Garage', instructor: 'Mentor Alex Rivera', type: 'Extracurricular', color: '#bdf532' },
    ],
    Thursday: [
      { time: '09:00 - 10:30 AM', subject: 'Computer Science & AI', code: 'CS-401', room: 'Tech Hub Lab 4', instructor: 'Prof. Alan Turing', type: 'Lecture', color: '#bdf532' },
      { time: '11:00 - 12:30 PM', subject: 'Organic Chemistry II', code: 'CHEM-202', room: 'Science Hall 101', instructor: 'Dr. Sarah Connor', type: 'Lecture', color: '#49fbeb' },
      { time: '01:30 - 03:00 PM', subject: 'Academic Research & Literature', code: 'ENG-105', room: 'Humanities Room 108', instructor: 'Dr. Harper Lee', type: 'Lecture', color: '#ffb4ab' },
    ],
    Friday: [
      { time: '09:00 - 11:00 AM', subject: 'Calculus Discussion Group', code: 'MATH-301D', room: 'Math Commons', instructor: 'TA Marcus Vance', type: 'Discussion', color: '#bdf532' },
      { time: '11:30 - 01:00 PM', subject: 'World History & Civilizations', code: 'HIST-210', room: 'Hall C - Room 204', instructor: 'Prof. Howard Zinn', type: 'Lecture', color: '#49fbeb' },
      { time: '02:00 - 03:30 PM', subject: 'Weekly Performance Review', code: 'ADVISORY', room: 'Guidance Office', instructor: 'Counselor Reynolds', type: 'Advisory', color: '#7b5cff' },
    ],
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-2xl bg-[#1b1b1d] border border-white/5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#bdf532] font-['Geist'] uppercase tracking-wider">
            <CalendarIcon className="w-4 h-4" /> Class Schedule & Timetable
          </div>
          <h1 className="text-2xl font-extrabold text-white font-['Hanken_Grotesk'] mt-1">
            Weekly Timetable Matrix
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-['Inter']">
            Spring 2026 Academic Term • Building & Classroom allocations
          </p>
        </div>

        {/* Day Switcher Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-[#201f21] rounded-xl border border-white/5 overflow-x-auto w-full md:w-auto">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-['Hanken_Grotesk'] transition-all ${
                selectedDay === day
                  ? 'bg-[#bdf532] text-[#131315] shadow-[0_0_10px_rgba(189,245,50,0.2)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Schedule Items List */}
      <div className="space-y-4">
        {scheduleData[selectedDay].map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#1b1b1d] border border-white/5 hover:border-white/20 transition-all duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group"
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-1.5 h-16 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#bdf532]">{item.code}</span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-white/10 text-gray-300 font-['Geist']">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white font-['Hanken_Grotesk'] mt-0.5">
                  {item.subject}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mt-2 font-['Inter']">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-gray-400" /> {item.instructor}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#49fbeb]" /> {item.room}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end md:self-center">
              <div className="px-4 py-2 rounded-xl bg-[#201f21] border border-white/5 text-right">
                <span className="text-[10px] text-gray-400 font-['Geist'] uppercase block">Time Slot</span>
                <span className="text-xs font-bold text-white font-mono flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#bdf532]" /> {item.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
