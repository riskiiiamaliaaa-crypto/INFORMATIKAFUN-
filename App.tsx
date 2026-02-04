
import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import AttendanceApp from './components/AttendanceApp';
import GradesApp from './components/GradesApp';
import JournalApp from './components/JournalApp';
import LearningApp from './components/LearningApp';

export type ViewState = 'landing' | 'attendance' | 'grades' | 'journal' | 'learning';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');

  const renderView = () => {
    switch (currentView) {
      case 'attendance':
        return <AttendanceApp onBack={() => setCurrentView('landing')} />;
      case 'grades':
        return <GradesApp onBack={() => setCurrentView('landing')} />;
      case 'journal':
        return <JournalApp onBack={() => setCurrentView('landing')} />;
      case 'learning':
        return <LearningApp onBack={() => setCurrentView('landing')} />;
      default:
        return <LandingPage onNavigate={(view) => setCurrentView(view)} />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <main className="w-full flex-grow py-8 px-4 md:px-12">
        {renderView()}
      </main>
      
      <footer className="mt-auto pb-8 flex flex-col items-center w-full relative z-10 no-print">
        <div className="h-[1px] w-32 bg-sky-300/50 mb-6 rounded-full"></div>
        <p className="text-sky-800/40 font-bold text-[10px] tracking-[0.5em] uppercase text-center">
          Informatika • UPTD SMP NEGERI 13 SINJAI • 2026
        </p>
      </footer>
    </div>
  );
};

export default App;
