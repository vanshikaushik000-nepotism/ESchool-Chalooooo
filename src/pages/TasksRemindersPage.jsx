import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  CheckSquare, 
  Plus, 
  Trash2, 
  Clock
} from 'lucide-react';

export const TasksRemindersPage = () => {
  const { tasks, toggleTaskCompletion, addTask, setTasks } = useApp();
  const [filterTab, setFilterTab] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newTitle, setNewTitle] = useState('');
  const [newSubject, setNewSubject] = useState('Physics');
  const [newPriority, setNewPriority] = useState('High');
  const [newDueDate, setNewDueDate] = useState('Tomorrow, 6:00 PM');

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    addTask({
      title: newTitle,
      subject: newSubject,
      dueDate: newDueDate,
      priority: newPriority,
      category: 'Assignment'
    });

    setNewTitle('');
    setIsModalOpen(false);
  };

  const filteredTasks = tasks.filter(t => {
    if (filterTab === 'Active') return !t.completed;
    if (filterTab === 'Completed') return t.completed;
    if (filterTab === 'Urgent') return t.priority === 'Urgent';
    return true;
  });

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#1b1b1d] border border-white/5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#bdf532] font-['Geist'] uppercase tracking-wider">
            <CheckSquare className="w-4 h-4" /> Tasks & Reminders
          </div>
          <h1 className="text-2xl font-extrabold text-white font-['Hanken_Grotesk'] mt-1">
            Assignment & Homework Tracker
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-['Inter']">
            Organize study priorities, subtasks, and upcoming deadline submissions.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-[#bdf532] text-[#131315] font-extrabold text-xs hover:bg-[#a2d801] transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(189,245,50,0.25)]"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          Add New Task
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#1b1b1d] border border-white/5">
        <div className="flex items-center gap-2 overflow-x-auto">
          {['All', 'Active', 'Completed', 'Urgent'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilterTab(tab)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filterTab === tab
                  ? 'bg-[#bdf532] text-[#131315]'
                  : 'bg-[#201f21] text-gray-300 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <span className="text-xs text-gray-400 font-['Geist'] hidden sm:inline">
          Total Tasks: {tasks.length} ({tasks.filter(t => t.completed).length} Done)
        </span>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.map((t) => (
          <div
            key={t.id}
            className={`p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-4 ${
              t.completed
                ? 'bg-[#131315]/50 border-white/5 opacity-60'
                : 'bg-[#1b1b1d] border-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTaskCompletion(t.id)}
                className="w-5 h-5 rounded border-gray-600 accent-[#bdf532] cursor-pointer"
              />
              <div className="min-w-0 flex-1">
                <h3 className={`text-sm font-bold text-white font-['Hanken_Grotesk'] truncate ${
                  t.completed ? 'line-through text-gray-400' : ''
                }`}>
                  {t.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mt-1 font-['Inter']">
                  <span className="font-mono text-[#bdf532]">{t.subject}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" /> {t.dueDate}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full font-['Geist'] uppercase ${
                t.priority === 'Urgent'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                  : t.priority === 'High'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              }`}>
                {t.priority}
              </span>

              <button
                onClick={() => setTasks(tasks.filter(item => item.id !== t.id))}
                className="text-gray-500 hover:text-red-400 p-1"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Task Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#1b1b1d] border border-white/10 rounded-2xl p-6 space-y-4 shadow-2xl animate-slide-up">
            <h3 className="text-lg font-bold text-white font-['Hanken_Grotesk']">Create New Task</h3>
            <form onSubmit={handleCreateTask} className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 font-['Geist'] block mb-1">Task Title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Read Physics Chapter 9 & solve problems..."
                  className="w-full bg-[#201f21] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#bdf532]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-400 font-['Geist'] block mb-1">Subject</label>
                  <select
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                    className="w-full bg-[#201f21] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#bdf532]"
                  >
                    <option value="Physics">Physics</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="English">English</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-400 font-['Geist'] block mb-1">Priority</label>
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value)}
                    className="w-full bg-[#201f21] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#bdf532]"
                  >
                    <option value="Urgent">Urgent</option>
                    <option value="High">High</option>
                    <option value="Normal">Normal</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-400 font-['Geist'] block mb-1">Due Date</label>
                <input
                  type="text"
                  value={newDueDate}
                  onChange={(e) => setNewDueDate(e.target.value)}
                  className="w-full bg-[#201f21] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#bdf532]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#201f21] text-gray-300 text-xs font-semibold hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#bdf532] text-[#131315] text-xs font-extrabold hover:bg-[#a2d801]"
                >
                  Save Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
