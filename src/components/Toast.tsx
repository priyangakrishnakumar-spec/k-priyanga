import React from 'react';

interface ToastProps {
  message: string | null;
  icon?: string;
}

export const Toast: React.FC<ToastProps> = ({ message, icon = 'check_circle' }) => {
  if (!message) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-300 animate-in fade-in slide-in-from-top-4">
      <div className="px-4 py-2.5 rounded-2xl bg-[#e8eaf0] neo-raised flex items-center gap-2 border border-white/40 shadow-lg text-xs font-semibold text-[#2e3040]">
        <span className="material-symbols-outlined text-indigo-600 text-[18px]">{icon}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};
