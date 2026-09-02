import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  FileUser, 
  Download, 
  Plus, 
  Sparkles, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ResumeBuilderPage = () => {
  const { user } = useApp();

  const [fullName, setFullName] = useState(user.name);
  const [headline, setHeadline] = useState('High School Honors Senior • AI & Robotics Enthusiast');
  const [bio, setBio] = useState('Passionate about calculus, algorithm design, and WebGL 3D graphics. Captain of the ESchool Robotics team.');
  const [skills, setSkills] = useState(['Calculus III', 'Quantum Physics', 'React.js', 'Python', 'Three.js', 'Machine Learning']);
  const [projects, setProjects] = useState([
    { title: 'Autonomous Rover AI Navigation', tech: 'Python, ROS, OpenCV', desc: 'Designed pathfinding algorithms for a self-navigating robotics prototype.' },
    { title: 'Quantum Matrix Simulator', tech: 'Three.js, WebGL, Math.js', desc: 'Interactive 3D particle simulation of quantum state vectors.' }
  ]);

  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleExport = () => {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    alert('Student Resume export completed! PDF resume generated.');
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-2xl bg-[#1b1b1d] border border-white/5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#bdf532] font-['Geist'] uppercase tracking-wider">
            <FileUser className="w-4 h-4" /> Student Resume & Portfolio Builder
          </div>
          <h1 className="text-2xl font-extrabold text-white font-['Hanken_Grotesk'] mt-1">
            Interactive Resume Creator
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-['Inter']">
            Build and export your academic resume for university applications and internships.
          </p>
        </div>

        <button
          onClick={handleExport}
          className="px-5 py-2.5 rounded-xl bg-[#bdf532] text-[#131315] font-extrabold text-xs hover:bg-[#a2d801] transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(189,245,50,0.25)]"
        >
          <Download className="w-4 h-4 stroke-[2.5]" />
          Export Resume PDF
        </button>
      </div>

      {/* Grid: Editor Form on Left, Live Preview on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Form Editor */}
        <div className="p-6 rounded-2xl bg-[#1b1b1d] border border-white/5 space-y-4">
          <h2 className="text-base font-bold text-white font-['Hanken_Grotesk']">Resume Content Editor</h2>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-400 font-['Geist'] block mb-1">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-[#201f21] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#bdf532]"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 font-['Geist'] block mb-1">Headline / Target Title</label>
              <input
                type="text"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                className="w-full bg-[#201f21] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#bdf532]"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 font-['Geist'] block mb-1">Professional Bio</label>
              <textarea
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full bg-[#201f21] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#bdf532]"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 font-['Geist'] block mb-1">Add Skill Tags</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="e.g. Data Analysis..."
                  className="flex-1 bg-[#201f21] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#bdf532]"
                />
                <button
                  onClick={handleAddSkill}
                  className="px-4 py-2 rounded-xl bg-[#201f21] text-[#bdf532] border border-[#bdf532]/40 text-xs font-bold hover:bg-[#bdf532]/10"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Styled Preview Card */}
        <div className="p-6 rounded-2xl bg-[#131315] border border-[#bdf532]/30 space-y-5 shadow-2xl relative">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-bold text-[#bdf532] font-['Geist'] uppercase tracking-wider">
              LIVE RESUME PREVIEW
            </span>
            <span className="text-[10px] text-gray-500 font-mono">Ready for Export</span>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-extrabold text-white font-['Hanken_Grotesk']">{fullName}</h2>
              <p className="text-xs text-[#bdf532] font-['Geist'] mt-0.5">{headline}</p>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">{bio}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold text-gray-300 font-['Geist'] uppercase tracking-wider">Key Academic Skills</h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-[#201f21] border border-white/10 text-xs text-[#cabeff]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold text-gray-300 font-['Geist'] uppercase tracking-wider">Featured STEM Projects</h3>
              <div className="space-y-2">
                {projects.map((p, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#1b1b1d] border border-white/5 text-xs">
                    <div className="flex items-center justify-between font-bold text-white">
                      <span>{p.title}</span>
                      <span className="text-[10px] text-[#49fbeb] font-mono">{p.tech}</span>
                    </div>
                    <p className="text-gray-400 mt-1">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
