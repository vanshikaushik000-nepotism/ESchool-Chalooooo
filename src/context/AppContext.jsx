import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export const initialNotifications = [
  { id: 1, title: 'Calculus III Midterm Schedule Released', time: '10 mins ago', type: 'Exams', priority: 'High', unread: true, message: 'Your Calculus III Midterm examination is scheduled for March 15 at 09:00 AM in Room 302.' },
  { id: 2, title: 'Physics Lab Report #4 Submission Due', time: '1 hour ago', type: 'Assignments', priority: 'Urgent', unread: true, message: 'Don\'t forget to submit your lab report on Electromagnetic Induction before 11:59 PM today.' },
  { id: 3, title: 'AI Study Assistant Recommendation', time: '3 hours ago', type: 'System', priority: 'Normal', unread: true, message: 'New practice flashcards generated for Organic Chemistry based on your last quiz results.' },
  { id: 4, title: 'Weekly Performance Report Ready', time: 'Yesterday', type: 'System', priority: 'Normal', unread: true, message: 'Great job! Your study consistency score increased by +14% this week.' },
  { id: 5, title: 'Robotics Club Meeting Location Changed', time: '2 days ago', type: 'Events', priority: 'Normal', unread: false, message: 'Today\'s robotics club workshop moved to Innovation Lab B.' },
];

export const initialTasks = [
  { id: 1, title: 'Complete Physics Ch. 8 Exercises', subject: 'Physics', dueDate: 'Today, 8:00 PM', priority: 'Urgent', completed: false, category: 'Homework' },
  { id: 2, title: 'Draft Literature Review Essay', subject: 'English', dueDate: 'Tomorrow, 5:00 PM', priority: 'High', completed: false, category: 'Assignment' },
  { id: 3, title: 'Review Calculus Derivative Shortcuts', subject: 'Mathematics', dueDate: 'Mar 12', priority: 'Normal', completed: true, category: 'Study' },
  { id: 4, title: 'Prepare Chemistry Lab Equipment List', subject: 'Chemistry', dueDate: 'Mar 14', priority: 'Normal', completed: false, category: 'Lab' },
  { id: 5, title: 'Update Student Resume Projects Section', subject: 'Career', dueDate: 'Mar 18', priority: 'Low', completed: false, category: 'Personal' },
];

export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [is3DActive, setIs3DActive] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [notifications, setNotifications] = useState(initialNotifications);
  const [tasks, setTasks] = useState(initialTasks);

  const [user, setUser] = useState({
    name: 'Alex Rivera',
    id: 'STU-2026-8942',
    grade: 'Grade 11-A',
    stream: 'Advanced Science & Tech',
    rank: '#3 in Class',
    gpa: '3.92',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    email: 'alex.rivera@eschool.edu',
    attendance: '96.8%'
  });

  const [aiMessages, setAiMessages] = useState([
    { sender: 'assistant', text: 'Hello Alex! I am your AI Academic Assistant. How can I help you prepare for your classes or assignments today?' }
  ]);

  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const toggleNotificationRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: !n.unread } : n));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const addTask = (newTask) => {
    setTasks(prev => [{ ...newTask, id: Date.now(), completed: false }, ...prev]);
  };

  const unreadNotificationsCount = notifications.filter(n => n.unread).length;

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        is3DActive,
        setIs3DActive,
        mobileNavOpen,
        setMobileNavOpen,
        searchQuery,
        setSearchQuery,
        notifications,
        setNotifications,
        unreadNotificationsCount,
        markAllNotificationsRead,
        toggleNotificationRead,
        tasks,
        setTasks,
        toggleTaskCompletion,
        addTask,
        user,
        setUser,
        aiMessages,
        setAiMessages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
