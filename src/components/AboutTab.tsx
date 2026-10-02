import React from 'react';
import { AVATAR_URL, MODEL_SPECS } from '../data/portfolioData';

interface AboutTabProps {
  onNavigateToBooking: () => void;
  onCopyCompCard: () => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({ onNavigateToBooking, onCopyCompCard }) => {
  return (
    <div className="flex flex-col w-full space-y-6 pt-2 pb-6">
      {/* Header Bio Card */}
      <section className="relative w-full rounded-2xl bg-[#e8eaf0] neo-raised p-5 flex flex-col gap-4 overflow-hidden">
        <div className="flex items-center gap-3.5">
          <div className="w-16 h-16 rounded-2xl bg-[#e8eaf0] neo-raised p-1 flex items-center justify-center shrink-0 overflow-hidden">
            <img
              src={AVATAR_URL}
              alt="Priyanga Model Profile"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">
                Model Comp Card
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>
            <h1 className="text-xl font-bold text-[#2e3040]">Priyanga</h1>
            <p className="text-xs text-[#585a68]">Commercial Ad & Ethnic Fashion Talent</p>
          </div>
        </div>

        <p className="text-xs text-[#2e3040] leading-relaxed">
          Priyanga is a fresh, expressive talent based in Coimbatore, Tamil Nadu. Known for her expressive eyes,
          classical posture, and natural radiance, she specializes in high-end temple bridal couture, luxury uncut
          jewellery campaigns, and contemporary western outdoor lookbooks.
        </p>

        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={onCopyCompCard}
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#e8eaf0] neo-raised active:neo-inset flex items-center justify-center gap-1.5 text-xs font-semibold text-indigo-600 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">content_copy</span>
            <span>Copy Comp Card</span>
          </button>

          <button
            onClick={onNavigateToBooking}
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#e8eaf0] neo-raised active:neo-inset flex items-center justify-center gap-1.5 text-xs font-semibold text-[#2e3040] transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px] text-purple-600">badge</span>
            <span>Book Talent</span>
          </button>
        </div>
      </section>

      {/* Model Physical Statistics Grid */}
      <section className="w-full rounded-2xl bg-[#e8eaf0] neo-raised p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            Vital Measurements & Specs
          </h2>
          <span className="text-[10px] text-[#585a68]">Updated Q1 2026</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 rounded-xl bg-[#e8eaf0] neo-inset flex flex-col">
            <span className="text-[10px] uppercase font-medium text-[#585a68]">Height</span>
            <span className="text-sm font-bold text-[#2e3040] mt-0.5">{MODEL_SPECS.height}</span>
            <span className="text-[9px] text-[#585a68]">{MODEL_SPECS.heightCm}</span>
          </div>

          <div className="p-3 rounded-xl bg-[#e8eaf0] neo-inset flex flex-col">
            <span className="text-[10px] uppercase font-medium text-[#585a68]">Bust / Waist / Hips</span>
            <span className="text-sm font-bold text-[#2e3040] mt-0.5">
              {MODEL_SPECS.bust} - {MODEL_SPECS.waist} - {MODEL_SPECS.hips}
            </span>
            <span className="text-[9px] text-[#585a68]">Standard Proportions</span>
          </div>

          <div className="p-3 rounded-xl bg-[#e8eaf0] neo-inset flex flex-col">
            <span className="text-[10px] uppercase font-medium text-[#585a68]">Shoe Size</span>
            <span className="text-sm font-bold text-[#2e3040] mt-0.5">{MODEL_SPECS.shoeSize}</span>
            <span className="text-[9px] text-[#585a68]">Footwear Catalog Ready</span>
          </div>

          <div className="p-3 rounded-xl bg-[#e8eaf0] neo-inset flex flex-col">
            <span className="text-[10px] uppercase font-medium text-[#585a68]">Eyes & Hair</span>
            <span className="text-sm font-bold text-[#2e3040] mt-0.5">{MODEL_SPECS.eyeColor}</span>
            <span className="text-[9px] text-[#585a68]">Dark Brown Wavy</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#e8eaf0] neo-inset flex flex-col gap-1 mt-0.5">
          <span className="text-[10px] uppercase font-medium text-[#585a68]">Complexion & Skin Tone</span>
          <span className="text-xs font-bold text-[#2e3040]">{MODEL_SPECS.complexion}</span>
          <span className="text-[10px] text-[#585a68] leading-tight">
            Ideal for authentic South Indian gold jewellery and rich handloom silk color contrasts.
          </span>
        </div>
      </section>

      {/* Classical Poise & Artistry */}
      <section className="w-full rounded-2xl bg-[#e8eaf0] neo-raised p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#e8eaf0] neo-inset flex items-center justify-center text-purple-600">
            <span className="material-symbols-outlined text-[18px]">self_improvement</span>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2e3040]">
              Artistic Foundation & Posing Poise
            </h3>
            <span className="text-[10px] text-[#585a68]">Bharatanatyam Heritage & Modern Poise</span>
          </div>
        </div>

        <div className="space-y-2 text-xs text-[#585a68] leading-relaxed">
          <p>
            Her classical dance discipline translates into unmatched bodily posture, graceful necklines for
            heavy bridal ornaments, and nuanced facial expressions.
          </p>
          <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl bg-[#e8eaf0] neo-inset flex items-center gap-2">
              <span className="material-symbols-outlined text-indigo-500 text-[16px]">theater_comedy</span>
              <span className="font-semibold text-[#2e3040]">Expressive Bhavas</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#e8eaf0] neo-inset flex items-center gap-2">
              <span className="material-symbols-outlined text-purple-600 text-[16px]">accessibility_new</span>
              <span className="font-semibold text-[#2e3040]">Neckline Symmetry</span>
            </div>
          </div>
        </div>
      </section>

      {/* Languages & Travel Readiness */}
      <section className="w-full rounded-2xl bg-[#e8eaf0] neo-raised p-4 flex flex-col gap-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600">
          Languages & Travel Availability
        </h3>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-3 rounded-xl bg-[#e8eaf0] neo-inset flex flex-col gap-0.5">
            <span className="text-[10px] text-[#585a68] uppercase font-semibold">Languages</span>
            <span className="font-bold text-[#2e3040]">Tamil & English</span>
            <span className="text-[9px] text-[#585a68]">Fluent dialogue & ad scripts</span>
          </div>

          <div className="p-3 rounded-xl bg-[#e8eaf0] neo-inset flex flex-col gap-0.5">
            <span className="text-[10px] text-[#585a68] uppercase font-semibold">Passport & Transit</span>
            <span className="font-bold text-[#2e3040]">Immediate Travel</span>
            <span className="text-[9px] text-[#585a68]">Domestic flights & road transit</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#e8eaf0] neo-inset flex items-start gap-2.5 text-xs text-[#585a68]">
          <span className="material-symbols-outlined text-indigo-600 text-[18px] shrink-0 mt-0.5">
            info
          </span>
          <p className="text-[11px] leading-relaxed">
            Professional arrival policy: 30 minutes prior to scheduled call time with skin prepped and ready
            for bridal and commercial MUA setups.
          </p>
        </div>
      </section>

      {/* Quick Booking CTA */}
      <div className="text-center pt-2">
        <button
          onClick={onNavigateToBooking}
          className="w-full py-3 px-4 rounded-xl bg-[#e8eaf0] neo-raised active:neo-inset flex items-center justify-center gap-2 text-xs font-semibold text-indigo-600 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
          <span>Schedule a Campaign with Priyanga</span>
        </button>
      </div>
    </div>
  );
};
