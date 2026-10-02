import React from 'react';
import { ShootLook } from '../types';

interface LookDetailModalProps {
  look: ShootLook | null;
  onClose: () => void;
  onSelectForBooking: (look: ShootLook) => void;
  isLiked: boolean;
  onToggleLike: (lookId: string) => void;
  likesCount: number;
}

export const LookDetailModal: React.FC<LookDetailModalProps> = ({
  look,
  onClose,
  onSelectForBooking,
  isLiked,
  onToggleLike,
  likesCount,
}) => {
  if (!look) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md max-h-[92vh] overflow-y-auto rounded-3xl bg-[#e8eaf0] neo-raised p-4 flex flex-col gap-4 text-[#2e3040] no-scrollbar">
        {/* Top Bar with Look title and close button */}
        <div className="flex items-center justify-between pb-1 border-b border-black/[0.05]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-indigo-600 bg-[#e8eaf0] neo-inset uppercase tracking-wider">
              {look.lookNumber}
            </span>
            <span className="text-xs font-semibold text-[#585a68]">{look.badgeCategory}</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#e8eaf0] neo-raised active:neo-inset flex items-center justify-center text-[#585a68] hover:text-[#2e3040] transition-all cursor-pointer"
            aria-label="Close details"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* High Res Image */}
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#dcdee4] neo-inset">
          <img
            src={look.imageUrl}
            alt={look.imageAlt}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#e8eaf0]/90 backdrop-blur-md neo-raised-sm text-xs font-bold text-indigo-700">
            {look.themeTag}
          </div>
        </div>

        {/* Title & Description */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h2 className="text-lg font-bold text-[#2e3040] tracking-tight">{look.title}</h2>
              <p className="text-xs text-[#585a68] mt-1 leading-relaxed">{look.description}</p>
            </div>
            <button
              onClick={() => onToggleLike(look.id)}
              className={`w-9 h-9 shrink-0 rounded-full bg-[#e8eaf0] transition-all flex items-center justify-center cursor-pointer ${
                isLiked ? 'neo-inset text-red-500' : 'neo-raised text-[#585a68] hover:text-red-500'
              }`}
              title="Like this look"
            >
              <span className={`material-symbols-outlined text-[18px] ${isLiked ? 'fill-1' : ''}`}>
                favorite
              </span>
            </button>
          </div>
          <div className="text-[11px] font-medium text-indigo-600 mt-0.5">
            {likesCount} creatives saved this look
          </div>
        </div>

        {/* Styling Breakdown Accordion/Grid */}
        <div className="rounded-2xl bg-[#e8eaf0] neo-inset p-3.5 flex flex-col gap-2.5">
          <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
            Styling & Production Blueprint
          </span>

          <div className="grid grid-cols-1 gap-2 text-xs">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-indigo-500 text-[16px] shrink-0 mt-0.5">
                checkroom
              </span>
              <div>
                <span className="font-semibold text-[#2e3040]">Attire / Drapes: </span>
                <span className="text-[#585a68]">{look.stylingDetails.outfit}</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-purple-600 text-[16px] shrink-0 mt-0.5">
                diamond
              </span>
              <div>
                <span className="font-semibold text-[#2e3040]">Jewellery Curation: </span>
                <span className="text-[#585a68]">{look.stylingDetails.jewellery}</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-indigo-500 text-[16px] shrink-0 mt-0.5">
                face
              </span>
              <div>
                <span className="font-semibold text-[#2e3040]">Cosmetics & Hair: </span>
                <span className="text-[#585a68]">{look.stylingDetails.makeup}</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-amber-500 text-[16px] shrink-0 mt-0.5">
                wb_sunny
              </span>
              <div>
                <span className="font-semibold text-[#2e3040]">Light Scheme: </span>
                <span className="text-[#585a68]">{look.stylingDetails.lighting}</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-indigo-500 text-[16px] shrink-0 mt-0.5">
                location_on
              </span>
              <div>
                <span className="font-semibold text-[#2e3040]">Location / Setting: </span>
                <span className="text-[#585a68]">{look.stylingDetails.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <button
            onClick={() => {
              onClose();
              onSelectForBooking(look);
            }}
            className="w-full py-2.5 px-3 rounded-xl bg-[#e8eaf0] neo-raised active:neo-inset text-indigo-600 font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">edit_calendar</span>
            <span>Request This Look</span>
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 px-3 rounded-xl bg-[#e8eaf0] neo-raised active:neo-inset text-[#585a68] font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Close Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};
