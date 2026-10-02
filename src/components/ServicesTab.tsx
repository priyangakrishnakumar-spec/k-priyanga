import React from 'react';
import { SERVICE_PACKAGES } from '../data/portfolioData';
import { ServicePackage } from '../types';

interface ServicesTabProps {
  onNavigateToBookingWithPackage: (pkg: ServicePackage) => void;
  selectedNicheFilter?: string;
}

export const ServicesTab: React.FC<ServicesTabProps> = ({
  onNavigateToBookingWithPackage,
}) => {
  return (
    <div className="flex flex-col w-full space-y-6 pt-2 pb-6">
      {/* Title & Introduction */}
      <section className="relative w-full rounded-2xl bg-[#e8eaf0] neo-raised p-5 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
            Commercial Offerings
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
        </div>
        <h1 className="text-xl font-bold text-[#2e3040]">Shoots & Collab Domains</h1>
        <p className="text-xs text-[#585a68] leading-relaxed">
          Professional modeling and creative collaboration across luxury jewellery, traditional handloom textiles,
          and commercial lifestyle brands.
        </p>
      </section>

      {/* Package Breakdown Cards */}
      <section className="flex flex-col space-y-4">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#2e3040]">
            Specialized Shoot Domains ({SERVICE_PACKAGES.length})
          </h2>
          <span className="text-[10px] text-indigo-600 font-semibold">Available for Hire</span>
        </div>

        {SERVICE_PACKAGES.map((pkg) => (
          <div key={pkg.id} className="w-full rounded-2xl bg-[#e8eaf0] neo-raised p-4 flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#e8eaf0] neo-inset flex items-center justify-center text-indigo-600">
                  <span className="material-symbols-outlined text-[20px]">{pkg.icon}</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#2e3040]">{pkg.title}</h3>
                  <span className="text-[11px] font-medium text-purple-600">{pkg.tagline}</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-semibold text-indigo-600 bg-[#e8eaf0] neo-inset px-2.5 py-1 rounded-full">
                  {pkg.duration}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#585a68] leading-relaxed">{pkg.description}</p>

            <div className="rounded-xl bg-[#e8eaf0] neo-inset p-3 space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-indigo-600 tracking-wider">
                What&apos;s Included:
              </span>
              <ul className="text-xs text-[#2e3040] space-y-1">
                {pkg.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[14px] shrink-0 mt-0.5">
                      check
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] text-[#585a68] italic truncate max-w-[200px]">
                {pkg.bestFor}
              </span>

              <button
                onClick={() => onNavigateToBookingWithPackage(pkg)}
                className="py-1.5 px-3 rounded-lg bg-[#e8eaf0] neo-raised active:neo-inset text-xs font-semibold text-indigo-600 transition-all cursor-pointer"
              >
                Inquire for Domain
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Standard Shoot Ethics Strip */}
      <section className="w-full rounded-2xl bg-[#e8eaf0] neo-raised p-4 flex flex-col gap-2.5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600">
          Professional On-Set Commitments
        </h3>
        <div className="grid grid-cols-2 gap-2 text-[11px] text-[#585a68]">
          <div className="p-2.5 rounded-xl bg-[#e8eaf0] neo-inset flex flex-col gap-1">
            <span className="font-bold text-[#2e3040]">Punctual Call Times</span>
            <span>Early arrival for hair & makeup prep</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#e8eaf0] neo-inset flex flex-col gap-1">
            <span className="font-bold text-[#2e3040]">Styling Care</span>
            <span>Gentle handling of luxury sarees & jewellery</span>
          </div>
        </div>
      </section>
    </div>
  );
};
