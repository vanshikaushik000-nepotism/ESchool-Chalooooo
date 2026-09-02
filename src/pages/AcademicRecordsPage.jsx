import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  GraduationCap, 
  Award, 
  Download, 
  Search, 
  CheckCircle2, 
  BarChart, 
  TrendingUp,
  FileText,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const AcademicRecordsPage = () => {
  const { user } = useApp();
  const [selectedSemester, setSelectedSemester] = useState('Sem 2 - 2026');
  const [filterSubject, setFilterSubject] = useState('');

  const handleExportTranscript = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    alert('Official Transcript PDF generation initiated! Your downloaded document is ready.');
  };

  const records = [
    { code: 'MATH-301', name: 'Advanced Calculus III', credits: 4, score: 96, grade: 'A+', status: 'Passed', instructor: 'Dr. Evelyn Vance' },
    { code: 'PHYS-204', name: 'Quantum Physics & Mechanics', credits: 4, score: 91, grade: 'A', status: 'Passed', instructor: 'Prof. Richard Feynman' },
    { code: 'CHEM-202', name: 'Organic Chemistry II', credits: 3, score: 88, grade: 'A-', status: 'Passed', instructor: 'Dr. Sarah Connor' },
    { code: 'CS-401', name: 'Computer Science & Artificial Intelligence', credits: 4, score: 98, grade: 'A+', status: 'Passed', instructor: 'Prof. Alan Turing' },
    { code: 'ENG-105', name: 'Academic Research & Literature', credits: 3, score: 93, grade: 'A', status: 'Passed', instructor: 'Dr. Harper Lee' },
    { code: 'HIST-210', name: 'World History & Civilizations', credits: 3, score: 89, grade: 'A-', status: 'Passed', instructor: 'Prof. Howard Zinn' },
  ];

  const filteredRecords = records.filter(r => 
    r.name.toLowerCase().includes(filterSubject.toLowerCase()) || 
    r.code.toLowerCase().includes(filterSubject.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#1b1b1d] border border-white/5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#bdf532] font-['Geist'] uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" /> Academic Records & Transcripts
          </div>
          <h1 className="text-2xl font-extrabold text-white font-['Hanken_Grotesk'] mt-1">
            Grade Transcripts & Performance Summary
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-['Inter']">
            Official academic history verified by ESchool Chalooooo Registrar Office.
          </p>
        </div>

        <button
          onClick={handleExportTranscript}
          className="px-5 py-2.5 rounded-xl bg-[#bdf532] text-[#131315] font-extrabold text-xs hover:bg-[#a2d801] transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(189,245,50,0.25)]"
        >
          <Download className="w-4 h-4 stroke-[2.5]" />
          Download Official PDF
        </button>
      </div>

      {/* GPA & Honor Roll Stat Banners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-[#1b1b1d] border border-white/5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#bdf532]/15 text-[#bdf532] flex items-center justify-center font-bold">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-gray-400 font-['Geist'] uppercase">Cumulative GPA</span>
            <div className="text-2xl font-extrabold text-white font-['Hanken_Grotesk']">{user.gpa} / 4.0</div>
            <span className="text-[11px] text-[#bdf532]">Top 5% of Class</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#1b1b1d] border border-white/5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#7b5cff]/15 text-[#cabeff] flex items-center justify-center font-bold">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-gray-400 font-['Geist'] uppercase">Honor Roll Status</span>
            <div className="text-2xl font-extrabold text-white font-['Hanken_Grotesk']">President's List</div>
            <span className="text-[11px] text-[#cabeff]">High Distinction Honors</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#1b1b1d] border border-white/5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#49fbeb]/15 text-[#49fbeb] flex items-center justify-center font-bold">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-gray-400 font-['Geist'] uppercase">Total Credits Earned</span>
            <div className="text-2xl font-extrabold text-white font-['Hanken_Grotesk']">42 / 48 Credits</div>
            <span className="text-[11px] text-[#49fbeb]">On track for graduation</span>
          </div>
        </div>
      </div>

      {/* Main Records Table & Filter Toolbar */}
      <div className="p-6 rounded-2xl bg-[#1b1b1d] border border-white/5 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            {['Sem 2 - 2026', 'Sem 1 - 2025', 'All Terms'].map((sem) => (
              <button
                key={sem}
                onClick={() => setSelectedSemester(sem)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  selectedSemester === sem
                    ? 'bg-[#bdf532] text-[#131315]'
                    : 'bg-[#201f21] text-gray-300 hover:text-white'
                }`}
              >
                {sem}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={filterSubject}
              onChange={(e) => setFilterSubject(e.target.value)}
              placeholder="Search course or code..."
              className="w-full bg-[#201f21] border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#bdf532]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-xs font-['Geist'] text-gray-400 uppercase">
                <th className="py-3 px-4">Course Code</th>
                <th className="py-3 px-4">Subject Name</th>
                <th className="py-3 px-4">Instructor</th>
                <th className="py-3 px-4 text-center">Credits</th>
                <th className="py-3 px-4 text-center">Score %</th>
                <th className="py-3 px-4 text-center">Grade</th>
                <th className="py-3 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm font-['Inter']">
              {filteredRecords.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#201f21]/60 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-bold text-[#bdf532]">{row.code}</td>
                  <td className="py-3.5 px-4 font-bold text-white font-['Hanken_Grotesk']">{row.name}</td>
                  <td className="py-3.5 px-4 text-xs text-gray-300">{row.instructor}</td>
                  <td className="py-3.5 px-4 text-center font-mono text-xs text-gray-300">{row.credits}</td>
                  <td className="py-3.5 px-4 text-center font-bold text-white">{row.score}%</td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="px-2.5 py-1 rounded bg-[#bdf532]/15 text-[#bdf532] font-extrabold text-xs font-['Hanken_Grotesk']">
                      {row.grade}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
