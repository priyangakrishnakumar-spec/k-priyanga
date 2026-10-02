/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BottomNav, TabType } from './components/BottomNav';
import { PortfolioTab } from './components/PortfolioTab';
import { AboutTab } from './components/AboutTab';
import { ServicesTab } from './components/ServicesTab';
import { BookingTab } from './components/BookingTab';
import { LookDetailModal } from './components/LookDetailModal';
import { Toast } from './components/Toast';
import { BookingInquiry, ServicePackage, ShootLook } from './types';
import { MODEL_SPECS, SHOOT_LOOKS } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('portfolio');
  const [selectedLookForModal, setSelectedLookForModal] = useState<ShootLook | null>(null);
  const [bookingPrefillLook, setBookingPrefillLook] = useState<ShootLook | null>(null);
  const [bookingPrefillPackage, setBookingPrefillPackage] = useState<ServicePackage | null>(null);
  const [servicesNicheFilter, setServicesNicheFilter] = useState<string | undefined>(undefined);

  // Likes state initialized with defaults and persisted to localStorage
  const [likedLooks, setLikedLooks] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('priyanga_liked_looks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [likesCounts, setLikesCounts] = useState<Record<string, number>>(() => {
    const initialCounts: Record<string, number> = {};
    SHOOT_LOOKS.forEach((l) => {
      initialCounts[l.id] = l.initialLikes;
    });
    return initialCounts;
  });

  // Local storage for booking inquiries
  const [inquiries, setInquiries] = useState<BookingInquiry[]>(() => {
    try {
      const saved = localStorage.getItem('priyanga_inquiries');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [
      {
        id: 'INQ-9482',
        brandName: 'Aura Heritage Silks',
        contactName: 'Creative Director Arun',
        email: 'campaigns@aurasilks.in',
        phone: '+91 98401 23456',
        shootType: 'Ethnic • Bridal Couture',
        date: 'Next Month (Q2)',
        location: 'Coimbatore, TN',
        duration: 'Full Day (8 Hours)',
        brief: 'Festive Diwali silk campaign with temple antique jewelry styling.',
        createdAt: 'Oct 1, 2026',
        status: 'Confirmed',
      },
    ];
  });

  // Feedback Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastIcon, setToastIcon] = useState<string>('check_circle');

  const showToast = (msg: string, icon = 'check_circle') => {
    setToastMessage(msg);
    setToastIcon(icon);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleToggleLike = (lookId: string) => {
    const isCurrentlyLiked = !!likedLooks[lookId];
    const newLikedState = !isCurrentlyLiked;

    setLikedLooks((prev) => {
      const updated = { ...prev, [lookId]: newLikedState };
      try {
        localStorage.setItem('priyanga_liked_looks', JSON.stringify(updated));
      } catch {
        // ignore storage error
      }
      return updated;
    });

    setLikesCounts((prev) => ({
      ...prev,
      [lookId]: (prev[lookId] || 0) + (newLikedState ? 1 : -1),
    }));

    if (newLikedState) {
      showToast('Saved to your favorites', 'favorite');
    } else {
      showToast('Removed from favorites', 'favorite_border');
    }
  };

  const handleShare = async (title: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} - Priyanga Model Portfolio`,
          text: `Check out Priyanga's lookbook: ${title}`,
          url: window.location.href,
        });
        showToast('Shared successfully!', 'share');
      } catch {
        // user dismissed share or unsupported
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Lookbook link copied to clipboard', 'content_copy');
      } catch {
        showToast(`Lookbook: ${title}`, 'check');
      }
    }
  };

  const handleCopyCompCard = () => {
    const compCardText = `PRIYANGA — Model Composite Card
Base: ${MODEL_SPECS.baseCity}, ${MODEL_SPECS.baseState}
Height: ${MODEL_SPECS.height} (${MODEL_SPECS.heightCm})
Vital Stats: Bust ${MODEL_SPECS.bust} | Waist ${MODEL_SPECS.waist} | Hips ${MODEL_SPECS.hips}
Shoe: ${MODEL_SPECS.shoeSize}
Complexion: ${MODEL_SPECS.complexion}
Eyes: ${MODEL_SPECS.eyeColor} | Hair: ${MODEL_SPECS.hair}
Languages: ${MODEL_SPECS.languages.join(', ')}
Mobility: ${MODEL_SPECS.mobility}
Bookings: bookings@priyanga.model | +91 98765 43210`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(compCardText).then(() => {
        showToast('Comp Card details copied to clipboard!', 'check_circle');
      });
    } else {
      showToast('Comp Card ready', 'check_circle');
    }
  };

  const handleInquirySubmitted = (newInquiry: BookingInquiry) => {
    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    try {
      localStorage.setItem('priyanga_inquiries', JSON.stringify(updated));
    } catch {
      // ignore
    }
    showToast(`Booking inquiry ${newInquiry.id} submitted!`, 'mark_email_read');
  };

  const navigateToBooking = (look?: ShootLook) => {
    if (look) {
      setBookingPrefillLook(look);
      setBookingPrefillPackage(null);
    }
    setActiveTab('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToBookingWithPackage = (pkg: ServicePackage) => {
    setBookingPrefillPackage(pkg);
    setBookingPrefillLook(null);
    setActiveTab('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToServices = (niche?: string) => {
    setServicesNicheFilter(niche);
    setActiveTab('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top when changing tabs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#e8eaf0] text-[#2e3040] flex flex-col font-sans">
      {/* Toast Feedback */}
      <Toast message={toastMessage} icon={toastIcon} />

      {/* Fixed Neomorphic Top Bar */}
      <Header
        onNavigateToBooking={() => navigateToBooking()}
        onNavigateToHome={() => setActiveTab('portfolio')}
      />

      {/* Center Max-Width Container (matches phone view on desktop, responsive on mobile) */}
      <main className="flex-1 w-full max-w-md mx-auto pt-16 pb-24 px-4">
        {activeTab === 'portfolio' && (
          <PortfolioTab
            onNavigateToBooking={navigateToBooking}
            onNavigateToServices={navigateToServices}
            onOpenLookModal={(look) => setSelectedLookForModal(look)}
            likedLooks={likedLooks}
            likesCounts={likesCounts}
            onToggleLike={handleToggleLike}
            onShare={handleShare}
          />
        )}

        {activeTab === 'about' && (
          <AboutTab
            onNavigateToBooking={() => navigateToBooking()}
            onCopyCompCard={handleCopyCompCard}
          />
        )}

        {activeTab === 'services' && (
          <ServicesTab
            onNavigateToBookingWithPackage={navigateToBookingWithPackage}
            selectedNicheFilter={servicesNicheFilter}
          />
        )}

        {activeTab === 'booking' && (
          <BookingTab
            prefillLook={bookingPrefillLook}
            prefillPackage={bookingPrefillPackage}
            onInquirySubmitted={handleInquirySubmitted}
            inquiries={inquiries}
          />
        )}
      </main>

      {/* Fixed Neomorphic Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab)} />

      {/* Look Details Lightbox Modal */}
      {selectedLookForModal && (
        <LookDetailModal
          look={selectedLookForModal}
          onClose={() => setSelectedLookForModal(null)}
          onSelectForBooking={(look) => navigateToBooking(look)}
          isLiked={!!likedLooks[selectedLookForModal.id]}
          onToggleLike={handleToggleLike}
          likesCount={
            likesCounts[selectedLookForModal.id] ?? selectedLookForModal.initialLikes
          }
        />
      )}
    </div>
  );
}
