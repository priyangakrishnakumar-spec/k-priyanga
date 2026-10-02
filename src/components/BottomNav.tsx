import React from 'react';

export type TabType = 'portfolio' | 'about' | 'services' | 'booking';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: 'portfolio' as TabType,
      label: 'Portfolio',
      icon: 'collections',
    },
    {
      id: 'about' as TabType,
      label: 'About',
      icon: 'person',
    },
    {
      id: 'services' as TabType,
      label: 'Services',
      icon: 'style',
    },
    {
      id: 'booking' as TabType,
      label: 'Booking',
      icon: 'event_available',
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 pb-safe bg-[#e8eaf0]/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 w-16 h-12 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'text-indigo-600 neo-inset font-semibold'
                  : 'text-[#585a68] hover:text-[#2e3040] active:neo-inset'
              }`}
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className={`material-symbols-outlined text-[20px] ${isActive ? 'fill-1' : ''}`}>
                {tab.icon}
              </span>
              <span className="text-[10px] tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
