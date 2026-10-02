import React, { useState } from 'react';
import { SHOOT_LOOKS } from '../data/portfolioData';
import { ShootLook } from '../types';

interface PortfolioTabProps {
  onNavigateToBooking: (prefillLook?: ShootLook) => void;
  onNavigateToServices: (niche?: string) => void;
  onOpenLookModal: (look: ShootLook) => void;
  likedLooks: Record<string, boolean>;
  likesCounts: Record<string, number>;
  onToggleLike: (lookId: string) => void;
  onShare: (title: string) => void;
}

export const PortfolioTab: React.FC<PortfolioTabProps> = ({
  onNavigateToBooking,
  onNavigateToServices,
  onOpenLookModal,
  likedLooks,
  likesCounts,
  onToggleLike,
  onShare,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredLooks = SHOOT_LOOKS.filter((look) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'traditional') return look.category === 'traditional';
    if (activeCategory === 'western') return look.category === 'western';
    if (activeCategory === 'jewellery') return look.category === 'jewellery' || look.tags.includes('Fine Jewellery');
    return true;
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full space-y-6 pt-2 pb-6">
      {/* Model Persona Hero Card */}
      <section className="relative w-full rounded-2xl bg-[#e8eaf0] neo-raised p-5 flex flex-col justify-between overflow-hidden">
        {/* Soft background glow accents */}
        <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none"></div>
        <div className="absolute -left-6 -bottom-6 w-32 h-32 rounded-full bg-purple-500/10 blur-xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold text-indigo-600 bg-[#e8eaf0] neo-inset tracking-wide">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              AVAILABLE FOR BOOKINGS
            </span>
            <div className="flex items-center gap-1 text-[11px] font-medium text-[#585a68]">
              <span className="material-symbols-outlined text-[16px] text-purple-600">verified</span>
              Verified Talent
            </div>
          </div>

          <div className="mt-1">
            <div className="text-[12px] uppercase font-semibold tracking-widest text-indigo-600">
              PORTFOLIO & LOOKBOOK
            </div>
            <h1 className="text-2xl font-bold text-[#2e3040] tracking-tight mt-0.5">Priyanga</h1>
            <p className="text-xs font-semibold text-[#585a68] mt-0.5">
              Aspiring Fashion & Commercial Ad Model • Coimbatore
            </p>
          </div>

          <p className="text-[13px] text-[#2e3040] leading-relaxed mt-1">
            “Bringing brands & cultural aesthetics to life with timeless grace, poise, and expressive vibrancy.”
          </p>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => onNavigateToBooking()}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#e8eaf0] neo-raised active:neo-inset text-indigo-600 font-semibold text-xs transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[17px]">event</span>
              <span>Book for Shoots</span>
            </button>

            <button
              onClick={() => scrollToSection('featured-showcase')}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#e8eaf0] neo-raised active:neo-inset text-[#2e3040] font-semibold text-xs transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[17px] text-purple-600">collections</span>
              <span>View Lookbook</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Model Specs & Bio Strip */}
      <section className="w-full rounded-2xl bg-[#e8eaf0] neo-raised p-4">
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#e8eaf0] neo-inset text-center">
            <span className="text-[10px] uppercase font-medium text-[#585a68]">Height</span>
            <span className="text-sm font-bold text-[#2e3040] mt-0.5">5'6"</span>
            <span className="text-[9px] text-[#585a68]">168 cm</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#e8eaf0] neo-inset text-center">
            <span className="text-[10px] uppercase font-medium text-[#585a68]">Base</span>
            <span className="text-sm font-bold text-[#2e3040] mt-0.5">Coimbatore</span>
            <span className="text-[9px] text-[#585a68]">Tamil Nadu</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#e8eaf0] neo-inset text-center">
            <span className="text-[10px] uppercase font-medium text-[#585a68]">Mobility</span>
            <span className="text-sm font-bold text-[#2e3040] mt-0.5">Flexible</span>
            <span className="text-[9px] text-[#585a68]">BLR • MAA • KL</span>
          </div>
        </div>

        <div className="mt-3 pt-2.5 flex items-center justify-between text-[11px] text-[#585a68] px-1">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px] text-indigo-600">flight_takeoff</span>
            Open to destination & outdoor shoots
          </span>
          <span className="font-semibold text-indigo-600">Full Commercial Rights</span>
        </div>
      </section>

      {/* Lookbook Interactive Filter Chips */}
      <section className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-bold text-[#2e3040] uppercase tracking-wider">Featured Portfolios</h2>
          <span className="text-[11px] font-medium text-indigo-600">{filteredLooks.length} Editions</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar">
          {[
            { id: 'all', label: 'All Shoots' },
            { id: 'traditional', label: 'Bridal & Ethnic' },
            { id: 'western', label: 'Outdoor & Western' },
            { id: 'jewellery', label: 'Jewellery Close-ups' },
          ].map((chip) => {
            const isSelected = activeCategory === chip.id;
            return (
              <button
                key={chip.id}
                onClick={() => setActiveCategory(chip.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#e8eaf0] neo-inset text-indigo-600'
                    : 'bg-[#e8eaf0] neo-raised text-[#585a68] active:neo-inset'
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Showcase Cards Section */}
      <section className="flex flex-col space-y-5" id="featured-showcase">
        {filteredLooks.map((look) => {
          const isLiked = likedLooks[look.id] || false;
          const count = likesCounts[look.id] ?? look.initialLikes;

          return (
            <article
              key={look.id}
              className="w-full rounded-2xl bg-[#e8eaf0] neo-raised p-4 flex flex-col gap-3 transition-all duration-300"
            >
              {/* Image Frame */}
              <div
                onClick={() => onOpenLookModal(look)}
                className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#dcdee4] neo-inset cursor-pointer group"
              >
                <img
                  alt={look.imageAlt}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  src={look.imageUrl}
                />

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#e8eaf0]/90 backdrop-blur-md neo-raised-sm text-[10px] font-bold text-purple-700 tracking-wide uppercase">
                  {look.badgeCategory}
                </div>

                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#e8eaf0]/85 backdrop-blur-sm neo-raised-sm flex items-center gap-1 text-[11px] font-semibold text-[#2e3040]">
                  <span className="material-symbols-outlined text-[14px] text-indigo-600">photo</span>
                  <span>{look.lookNumber}</span>
                </div>
              </div>

              {/* Content Description */}
              <div className="flex flex-col gap-1.5 px-1">
                <div className="flex items-center justify-between">
                  <h3
                    onClick={() => onOpenLookModal(look)}
                    className="text-base font-bold text-[#2e3040] hover:text-indigo-600 cursor-pointer transition-colors"
                  >
                    {look.title}
                  </h3>
                  <span className="text-xs font-medium text-purple-600">{look.themeTag}</span>
                </div>

                <p className="text-xs text-[#585a68] leading-relaxed">{look.description}</p>

                {/* Shoot Specific Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {look.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#e8eaf0] neo-inset text-[#585a68]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions Bottom */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onToggleLike(look.id)}
                      className={`w-8 h-8 rounded-full bg-[#e8eaf0] transition-all flex items-center justify-center cursor-pointer ${
                        isLiked ? 'neo-inset text-red-500' : 'neo-raised text-[#585a68] hover:text-red-500 active:neo-inset'
                      }`}
                      aria-label="Favorite Look"
                      title={`${count} likes`}
                    >
                      <span className={`material-symbols-outlined text-[16px] ${isLiked ? 'fill-1' : ''}`}>
                        favorite
                      </span>
                    </button>

                    <button
                      onClick={() => onShare(look.title)}
                      className="w-8 h-8 rounded-full bg-[#e8eaf0] neo-raised active:neo-inset flex items-center justify-center text-[#585a68] hover:text-[#2e3040] transition-all cursor-pointer"
                      aria-label="Share Look"
                    >
                      <span className="material-symbols-outlined text-[16px]">share</span>
                    </button>
                  </div>

                  <button
                    onClick={() => onNavigateToBooking(look)}
                    className="text-xs font-semibold text-indigo-600 flex items-center gap-0.5 hover:underline cursor-pointer"
                  >
                    Request Similar Shoot{' '}
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Commercial Services & Niches Bento Strip */}
      <section className="w-full rounded-2xl bg-[#e8eaf0] neo-raised p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-[#2e3040]">Shoots & Collabs</h2>
            <p className="text-[11px] text-[#585a68]">Specialized domains available for hire</p>
          </div>
          <span className="w-8 h-8 rounded-xl bg-[#e8eaf0] neo-inset flex items-center justify-center text-indigo-600">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 mt-1">
          <div
            onClick={() => onNavigateToServices('jewellery')}
            className="p-3 rounded-xl bg-[#e8eaf0] neo-inset flex flex-col gap-1.5 cursor-pointer hover:opacity-95 transition-opacity"
          >
            <div className="w-7 h-7 rounded-lg bg-[#e8eaf0] neo-raised flex items-center justify-center text-indigo-600">
              <span className="material-symbols-outlined text-[16px]">diamond</span>
            </div>
            <span className="text-xs font-bold text-[#2e3040]">Jewellery Houses</span>
            <span className="text-[10px] text-[#585a68] leading-tight">
              Gold, Polki, Diamond & Temple jewellery campaigns
            </span>
          </div>

          <div
            onClick={() => onNavigateToServices('bridal')}
            className="p-3 rounded-xl bg-[#e8eaf0] neo-inset flex flex-col gap-1.5 cursor-pointer hover:opacity-95 transition-opacity"
          >
            <div className="w-7 h-7 rounded-lg bg-[#e8eaf0] neo-raised flex items-center justify-center text-purple-600">
              <span className="material-symbols-outlined text-[16px]">styler</span>
            </div>
            <span className="text-xs font-bold text-[#2e3040]">Silk & Boutiques</span>
            <span className="text-[10px] text-[#585a68] leading-tight">
              Kanchipuram silks, bridal drapes & designer wear
            </span>
          </div>

          <div
            onClick={() => onNavigateToServices('western')}
            className="p-3 rounded-xl bg-[#e8eaf0] neo-inset flex flex-col gap-1.5 cursor-pointer hover:opacity-95 transition-opacity"
          >
            <div className="w-7 h-7 rounded-lg bg-[#e8eaf0] neo-raised flex items-center justify-center text-indigo-600">
              <span className="material-symbols-outlined text-[16px]">wb_sunny</span>
            </div>
            <span className="text-xs font-bold text-[#2e3040]">Western & Resort</span>
            <span className="text-[10px] text-[#585a68] leading-tight">
              Casuals, summer collections & lifestyle lookbooks
            </span>
          </div>

          <div
            onClick={() => onNavigateToServices('tv')}
            className="p-3 rounded-xl bg-[#e8eaf0] neo-inset flex flex-col gap-1.5 cursor-pointer hover:opacity-95 transition-opacity"
          >
            <div className="w-7 h-7 rounded-lg bg-[#e8eaf0] neo-raised flex items-center justify-center text-purple-600">
              <span className="material-symbols-outlined text-[16px]">videocam</span>
            </div>
            <span className="text-xs font-bold text-[#2e3040]">TV & Digital Ads</span>
            <span className="text-[10px] text-[#585a68] leading-tight">
              Social media reels, e-commerce & commercial shorts
            </span>
          </div>
        </div>
      </section>

      {/* Direct Booking & WhatsApp Call Prompt */}
      <section className="w-full rounded-2xl bg-[#e8eaf0] neo-raised p-5 flex flex-col gap-4 relative overflow-hidden" id="booking-strip">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
              Direct Inquiries
            </span>
            <h3 className="text-base font-bold text-[#2e3040] mt-0.5">Planning an upcoming campaign?</h3>
            <p className="text-xs text-[#585a68] mt-1 leading-relaxed">
              Reach out directly with your mood board, location, and dates for swift confirmation.
            </p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-[#e8eaf0] neo-inset flex items-center justify-center shrink-0 text-indigo-600">
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
          </div>
        </div>

        {/* Contact CTA Buttons */}
        <div className="flex flex-col gap-2.5">
          <a
            className="w-full py-3 px-4 rounded-xl bg-[#e8eaf0] neo-raised active:neo-inset flex items-center justify-center gap-2 text-xs font-semibold text-indigo-600 transition-all cursor-pointer"
            href="https://wa.me/?text=Hi%20Priyanga,%20we%20would%20love%20to%20collaborate%20for%20a%20commercial%20photoshoot!"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Chat on WhatsApp</span>
          </a>

          <div className="grid grid-cols-2 gap-2.5">
            <a
              className="py-2.5 px-3 rounded-xl bg-[#e8eaf0] neo-raised active:neo-inset flex items-center justify-center gap-1.5 text-xs font-semibold text-[#2e3040] transition-all cursor-pointer"
              href="tel:+919876543210"
            >
              <span className="material-symbols-outlined text-[16px] text-purple-600">call</span>
              <span>Call Manager</span>
            </a>

            <button
              onClick={() => onNavigateToBooking()}
              className="py-2.5 px-3 rounded-xl bg-[#e8eaf0] neo-raised active:neo-inset flex items-center justify-center gap-1.5 text-xs font-semibold text-[#2e3040] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] text-indigo-600">mail</span>
              <span>Send Brief</span>
            </button>
          </div>
        </div>

        <div className="text-center pt-1">
          <p className="text-[10px] text-[#585a68]">
            Based in Coimbatore • Open for Shoots across South India • Immediate availability
          </p>
        </div>
      </section>
    </div>
  );
};
