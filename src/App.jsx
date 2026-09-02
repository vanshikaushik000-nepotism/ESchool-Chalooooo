import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { ThreeCanvas } from './components/three/ThreeCanvas';

import { DashboardPage } from './pages/DashboardPage';
import { AcademicRecordsPage } from './pages/AcademicRecordsPage';
import { AiAssistantPage } from './pages/AiAssistantPage';
import { TimetablePage } from './pages/TimetablePage';
import { TasksRemindersPage } from './pages/TasksRemindersPage';
import { AssessmentsPage } from './pages/AssessmentsPage';
import { SkillsStrengthsPage } from './pages/SkillsStrengthsPage';
import { SelfStudyFocusPage } from './pages/SelfStudyFocusPage';
import { ResumeBuilderPage } from './pages/ResumeBuilderPage';
import { AlertsPage } from './pages/AlertsPage';
import { StudentProfilePage } from './pages/StudentProfilePage';
import { AccountSettingsPage } from './pages/AccountSettingsPage';

const MainContent = () => {
  const { activeTab, is3DActive } = useApp();

  const renderActivePage = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardPage />;
      case 'academic_records': return <AcademicRecordsPage />;
      case 'ai_assistant': return <AiAssistantPage />;
      case 'timetable': return <TimetablePage />;
      case 'tasks': return <TasksRemindersPage />;
      case 'assessments': return <AssessmentsPage />;
      case 'skills': return <SkillsStrengthsPage />;
      case 'self_study': return <SelfStudyFocusPage />;
      case 'resume_builder': return <ResumeBuilderPage />;
      case 'alerts': return <AlertsPage />;
      case 'profile': return <StudentProfilePage />;
      case 'settings': return <AccountSettingsPage />;
      default: return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#131315] text-[#e5e1e4] relative">
      {/* Dynamic 3D WebGL Background Canvas */}
      {is3DActive && (
        <ThreeCanvas className="fixed inset-0 w-full h-full pointer-events-none opacity-40 z-0" />
      )}

      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative z-10">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {renderActivePage()}
          </div>
        </main>
      </div>
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

export default App;
