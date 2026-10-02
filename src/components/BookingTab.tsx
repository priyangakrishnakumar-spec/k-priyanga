import React, { useState } from 'react';
import { BookingInquiry, ServicePackage, ShootLook } from '../types';

interface BookingTabProps {
  prefillLook?: ShootLook | null;
  prefillPackage?: ServicePackage | null;
  onInquirySubmitted: (inquiry: BookingInquiry) => void;
  inquiries: BookingInquiry[];
}

export const BookingTab: React.FC<BookingTabProps> = ({
  prefillLook,
  prefillPackage,
  onInquirySubmitted,
  inquiries,
}) => {
  const [brandName, setBrandName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [shootType, setShootType] = useState(
    prefillLook
      ? prefillLook.themeTag
      : prefillPackage
      ? prefillPackage.title
      : 'Bridal & Handloom Silk'
  );
  const [shootDate, setShootDate] = useState('');
  const [location, setLocation] = useState('Coimbatore, TN');
  const [duration, setDuration] = useState(
    prefillPackage ? prefillPackage.duration : 'Full Day (8 Hours)'
  );
  const [moodboardUrl, setMoodboardUrl] = useState('');
  const [brief, setBrief] = useState(
    prefillLook
      ? `Inquiring for a commercial shoot styled similar to "${prefillLook.title}" (${prefillLook.lookNumber}).`
      : ''
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessCard, setShowSuccessCard] = useState(false);
  const [lastSubmittedId, setLastSubmittedId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !contactName || !email) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const newInquiry: BookingInquiry = {
        id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
        brandName,
        contactName,
        email,
        phone: phone || '+91 98765 43210',
        shootType,
        date: shootDate || 'Flexible / To Be Finalized',
        location,
        duration,
        moodboardUrl: moodboardUrl || undefined,
        brief: brief || 'Standard brand campaign collaboration.',
        createdAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        status: 'Pending Review',
      };

      onInquirySubmitted(newInquiry);
      setLastSubmittedId(newInquiry.id);
      setIsSubmitting(false);
      setShowSuccessCard(true);

      // Reset fields
      setBrandName('');
      setContactName('');
      setEmail('');
      setPhone('');
      setMoodboardUrl('');
      setBrief('');
    }, 400);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Priyanga & Management Team,\n\nWe would like to book Priyanga for an upcoming photoshoot.\nType: ${shootType}\nLocation: ${location}\nDate: ${
      shootDate || 'Upcoming Dates'
    }\n\nPlease share availability!`
  );

  return (
    <div className="flex flex-col w-full space-y-6 pt-2 pb-6">
      {/* Direct Inquiries Hub */}
      <section className="relative w-full rounded-2xl bg-[#e8eaf0] neo-raised p-5 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
              Direct Inquiries
            </span>
            <h1 className="text-xl font-bold text-[#2e3040] mt-0.5">Planning an upcoming campaign?</h1>
            <p className="text-xs text-[#585a68] mt-1 leading-relaxed">
              Reach out directly with your mood board, location, and dates for swift confirmation.
            </p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-[#e8eaf0] neo-inset flex items-center justify-center shrink-0 text-indigo-600">
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
          </div>
        </div>

        {/* Quick Contact CTAs */}
        <div className="flex flex-col gap-2.5">
          <a
            className="w-full py-3 px-4 rounded-xl bg-[#e8eaf0] neo-raised active:neo-inset flex items-center justify-center gap-2 text-xs font-semibold text-indigo-600 transition-all cursor-pointer"
            href={`https://wa.me/?text=${whatsappMessage}`}
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

            <a
              className="py-2.5 px-3 rounded-xl bg-[#e8eaf0] neo-raised active:neo-inset flex items-center justify-center gap-1.5 text-xs font-semibold text-[#2e3040] transition-all cursor-pointer"
              href="mailto:bookings@priyanga.model?subject=Photoshoot%20Inquiry%20for%20Priyanga"
            >
              <span className="material-symbols-outlined text-[16px] text-indigo-600">mail</span>
              <span>Send Brief</span>
            </a>
          </div>
        </div>

        <div className="text-center pt-1">
          <p className="text-[10px] text-[#585a68]">
            Based in Coimbatore • Open for Shoots across South India • Immediate availability
          </p>
        </div>
      </section>

      {/* Selected Pre-fill Banner if navigating from look or package */}
      {(prefillLook || prefillPackage) && (
        <div className="w-full rounded-2xl bg-[#e8eaf0] neo-inset p-3.5 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="material-symbols-outlined text-indigo-600 text-[18px] shrink-0">
              bookmark_star
            </span>
            <div className="truncate">
              <span className="font-semibold text-[#2e3040]">Selected for Shoot: </span>
              <span className="text-indigo-600 font-bold truncate">
                {prefillLook ? `${prefillLook.lookNumber} - ${prefillLook.title}` : prefillPackage?.title}
              </span>
            </div>
          </div>
          <span className="shrink-0 text-xs font-semibold text-indigo-600">
            Quote on Request
          </span>
        </div>
      )}

      {/* Success Notification Alert */}
      {showSuccessCard && (
        <div className="w-full rounded-2xl bg-[#e8eaf0] neo-raised p-4 flex flex-col gap-2 border border-emerald-500/20">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
            </span>
            <span className="text-xs font-bold text-[#2e3040]">
              Inquiry {lastSubmittedId} Received!
            </span>
          </div>
          <p className="text-[11px] text-[#585a68] leading-relaxed">
            Thank you! Priyanga&apos;s management team will review your campaign details and connect
            via WhatsApp/Email within 12 business hours.
          </p>
        </div>
      )}

      {/* Detailed Booking Form */}
      <section className="w-full rounded-2xl bg-[#e8eaf0] neo-raised p-5 flex flex-col gap-4">
        <div>
          <h2 className="text-sm font-bold text-[#2e3040]">Shoot Booking & Details</h2>
          <p className="text-xs text-[#585a68] mt-0.5">
            Fill in campaign specifications to reserve dates on Priyanga&apos;s calendar.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 text-xs">
          {/* Brand Name */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[#2e3040]">Brand / Production House *</label>
            <input
              type="text"
              required
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="e.g. Aura Silks or Studio 9 Media"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#e8eaf0] neo-inset text-[#2e3040] placeholder-[#8a8c9a] focus:outline-none focus:ring-1 focus:ring-indigo-500/40"
            />
          </div>

          {/* Contact Person & Email */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[#2e3040]">Contact Person *</label>
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded-xl bg-[#e8eaf0] neo-inset text-[#2e3040] placeholder-[#8a8c9a] focus:outline-none focus:ring-1 focus:ring-indigo-500/40"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[#2e3040]">Email Address *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contact@brand.com"
                className="w-full px-3 py-2 rounded-xl bg-[#e8eaf0] neo-inset text-[#2e3040] placeholder-[#8a8c9a] focus:outline-none focus:ring-1 focus:ring-indigo-500/40"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[#2e3040]">WhatsApp / Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#e8eaf0] neo-inset text-[#2e3040] placeholder-[#8a8c9a] focus:outline-none focus:ring-1 focus:ring-indigo-500/40"
            />
          </div>

          {/* Shoot Category & Duration */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[#2e3040]">Shoot Category</label>
              <select
                value={shootType}
                onChange={(e) => setShootType(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#e8eaf0] neo-inset text-[#2e3040] focus:outline-none"
              >
                <option value="Bridal & Handloom Silk">Bridal & Handloom Silk</option>
                <option value="Fine Jewellery & Close-Up">Fine Jewellery & Close-Up</option>
                <option value="Western & Resort Chic">Western & Resort Chic</option>
                <option value="TVC & Video Reels">TVC & Video Reels</option>
                <option value="Fashion Editorial">Fashion Editorial</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[#2e3040]">Shoot Duration</label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#e8eaf0] neo-inset text-[#2e3040] focus:outline-none"
              >
                <option value="Half Day (4 Hours)">Half Day (4 Hours)</option>
                <option value="Full Day (8 Hours)">Full Day (8 Hours)</option>
                <option value="Multi-Day Production">Multi-Day Production</option>
              </select>
            </div>
          </div>

          {/* Date & Location */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[#2e3040]">Target Date</label>
              <input
                type="date"
                value={shootDate}
                onChange={(e) => setShootDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#e8eaf0] neo-inset text-[#2e3040] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[#2e3040]">Location / City</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#e8eaf0] neo-inset text-[#2e3040] focus:outline-none"
              >
                <option value="Coimbatore, TN">Coimbatore, TN (Base)</option>
                <option value="Bangalore, KA">Bangalore, KA</option>
                <option value="Chennai, TN">Chennai, TN</option>
                <option value="Kochi, KL">Kochi, KL</option>
                <option value="Other Destination">Other Destination</option>
              </select>
            </div>
          </div>

          {/* Moodboard URL */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[#2e3040]">Moodboard / Drive Link (Optional)</label>
            <input
              type="url"
              value={moodboardUrl}
              onChange={(e) => setMoodboardUrl(e.target.value)}
              placeholder="https://drive.google.com/..."
              className="w-full px-3.5 py-2 rounded-xl bg-[#e8eaf0] neo-inset text-[#2e3040] placeholder-[#8a8c9a] focus:outline-none focus:ring-1 focus:ring-indigo-500/40"
            />
          </div>

          {/* Brief & Requirements */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[#2e3040]">Campaign Notes & Outfits</label>
            <textarea
              rows={3}
              value={brief}
              onChange={(e) => setBrief(e.target.value)}
              placeholder="Tell us about the concept, number of outfit changes, photographer, or special makeup notes..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#e8eaf0] neo-inset text-[#2e3040] placeholder-[#8a8c9a] focus:outline-none focus:ring-1 focus:ring-indigo-500/40 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3 px-4 rounded-xl bg-[#e8eaf0] neo-raised active:neo-inset flex items-center justify-center gap-2 text-xs font-bold text-indigo-600 transition-all cursor-pointer disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isSubmitting ? 'hourglass_top' : 'send'}
            </span>
            <span>{isSubmitting ? 'Submitting Details...' : 'Submit Booking Inquiry'}</span>
          </button>
        </form>
      </section>

      {/* Previously Submitted Inquiries / Activity */}
      {inquiries.length > 0 && (
        <section className="w-full rounded-2xl bg-[#e8eaf0] neo-raised p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Active Booking Requests ({inquiries.length})
            </h3>
            <span className="text-[10px] text-[#585a68]">Stored locally</span>
          </div>

          <div className="space-y-2.5">
            {inquiries.map((inq) => (
              <div key={inq.id} className="p-3 rounded-xl bg-[#e8eaf0] neo-inset flex flex-col gap-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#2e3040]">{inq.brandName}</span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-500/10 text-emerald-700">
                    {inq.status}
                  </span>
                </div>

                <div className="text-[11px] text-[#585a68] flex items-center justify-between">
                  <span>
                    {inq.shootType} • {inq.location}
                  </span>
                  <span className="text-[10px]">{inq.date}</span>
                </div>

                {inq.brief && (
                  <p className="text-[10px] text-[#585a68] italic line-clamp-1 border-t border-black/[0.04] pt-1">
                    &ldquo;{inq.brief}&rdquo;
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
