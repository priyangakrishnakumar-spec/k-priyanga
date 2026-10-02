import React from 'react';
import { AVATAR_URL } from '../data/portfolioData';

interface HeaderProps {
  onNavigateToBooking: () => void;
  onNavigateToHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateToBooking, onNavigateToHome }) => {
  return (
    <header className="fixed top-0 w-full z-40 pt-safe bg-[#e8eaf0]/90 backdrop-blur-xl border-b border-black/[0.03]">
      <div className="max-w-md mx-auto h-16 px-4 flex items-center justify-between gap-2">
        <button
          onClick={onNavigateToHome}
          className="flex items-center gap-2.5 min-w-0 text-left focus:outline-none group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#e8eaf0] neo-raised flex items-center justify-center shrink-0 transition-all group-active:neo-inset">
            <span className="font-bold text-sm tracking-wider text-indigo-600">P</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-sm tracking-wide text-[#2e3040] truncate">
              PRIYANGA
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shrink-0"></span>
              <span className="text-[11px] font-medium text-[#585a68] truncate">
                Coimbatore, TN
              </span>
            </div>
          </div>
        </button>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onNavigateToBooking}
            className="h-9 px-3.5 rounded-xl bg-[#e8eaf0] neo-raised active:neo-inset flex items-center gap-1.5 text-xs font-semibold text-indigo-600 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            <span>Book</span>
          </button>
          
          <button
            onClick={onNavigateToHome}
            className="w-9 h-9 rounded-full p-[2px] bg-[#e8eaf0] neo-raised flex items-center justify-center overflow-hidden shrink-0 cursor-pointer active:neo-inset transition-all"
            title="Priyanga's Profile"
          >
            <img
              alt="Priyanga Profile Avatar"
              className="w-full h-full rounded-full object-cover"
              src={AVATAR_URL}
              loading="eager"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
