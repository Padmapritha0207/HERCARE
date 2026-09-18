import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Professional } from '../../types';
import { 
  HeartHandshake, 
  Star, 
  Calendar, 
  Video, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Clock,
  Sparkles,
  Heart
} from 'lucide-react';
import { BookingModal } from './BookingModal';

export const ProfessionalCare: React.FC = () => {
  const { 
    professionals, 
    selectedProfessional, 
    setSelectedProfessional, 
    appointments, 
    bookAppointment 
  } = useApp();

  const [activeRoleFilter, setActiveRoleFilter] = useState<string>('All');

  const categories = [
    'All',
    'Gynecologist',
    'Lactation Consultant',
    'Mental Health Professional',
    'Dietitian / Nutritionist',
    'Physiotherapist'
  ];

  const filtered = professionals.filter(p => 
    activeRoleFilter === 'All' || p.role === activeRoleFilter
  );

  return (
    <div className="space-y-6 sm:space-y-8 pb-16 text-left">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#200C26] via-[#441B50] to-[#5C246C] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="space-y-3 max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6C8F0]/20 text-[#E6C8F0] text-xs font-bold border border-[#E6C8F0]/30">
            <HeartHandshake className="w-4 h-4 text-[#E6C8F0]" />
            <span>Confidential Healthcare Network</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Professional Care Navigation
          </h1>
          <p className="text-xs sm:text-base text-[#DDD4EC] leading-relaxed">
            Connect directly with verified obstetricians, lactation consultants, perinatal therapists, and pelvic health physiotherapists. 100% sponsored by Acme Innovations with complete patient-doctor confidentiality.
          </p>
        </div>
      </div>

      {/* Your Booked Appointments Bar */}
      {appointments.length > 0 && (
        <div className="bg-white rounded-3xl border border-[#EBE6DF] p-5 sm:p-6 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5A5368] flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#5C246C]" />
              <span>Your Confirmed Consultations ({appointments.length})</span>
            </span>
            <span className="text-[11px] text-[#265942] font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#265942]" /> 100% Confidential to You
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {appointments.map((apt) => (
              <div key={apt.id} className="p-4 bg-[#FAF4FD] border border-[#E6C8F0] rounded-2xl flex items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-xs text-[#1C1822]">{apt.professionalName}</div>
                  <div className="text-[11px] text-[#756D84]">{apt.role} • {apt.mode}</div>
                  <div className="text-xs font-semibold text-[#5C246C] mt-1">{apt.date} at {apt.time}</div>
                </div>
                <span className="px-2.5 py-1 rounded-xl bg-[#F1F8F4] text-[#265942] text-[10px] font-bold border border-[#DCEEE4]">
                  {apt.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Specialty Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveRoleFilter(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeRoleFilter === cat
                ? 'bg-[#301339] text-white shadow-xs'
                : 'bg-white border border-[#EBE6DF] text-[#5A5368] hover:text-[#1C1822] hover:border-[#DDD4EC]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Specialists Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filtered.map((prof) => (
          <div
            key={prof.id}
            className="bg-white rounded-3xl border border-[#EBE6DF] hover:border-[#E6C8F0] shadow-xs hover:shadow-md transition-all p-6 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <img
                  src={prof.avatarUrl}
                  alt={prof.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-[#E6C8F0]/60 flex-shrink-0 shadow-xs"
                />
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FAF4FD] text-[#5C246C] text-[10px] font-bold border border-[#E6C8F0]">
                    {prof.role}
                  </span>
                  <h3 className="text-base font-bold text-[#1C1822] mt-1.5">
                    {prof.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-amber-700 font-semibold mt-0.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{prof.rating} ({prof.reviewsCount} reviews)</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#5A5368] leading-relaxed line-clamp-3">
                {prof.bio}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {prof.specialties.map((spec, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-[#FAF7F4] text-[#756D84] text-[10px] font-medium border border-[#EBE6DF]/70">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#EBE6DF]/80">
              <div className="flex items-center justify-between text-[11px] text-[#756D84]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#5C246C]" />
                  {prof.availability}
                </span>
                <span className="font-semibold text-[#265942]">Covered 100%</span>
              </div>

              <button
                onClick={() => setSelectedProfessional(prof)}
                className="w-full py-2.5 rounded-xl bg-[#301339] hover:bg-[#441B50] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              >
                <span>Book Gentle Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      <BookingModal
        professional={selectedProfessional}
        onClose={() => setSelectedProfessional(null)}
        onConfirmBooking={bookAppointment}
      />
    </div>
  );
};
