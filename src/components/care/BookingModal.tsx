import React, { useState } from 'react';
import { Professional, Appointment } from '../../types';
import { Modal } from '../common/Modal';
import { 
  Calendar, 
  Clock, 
  Video, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  Sparkles,
  Heart
} from 'lucide-react';
import { triggerConfetti } from '../../utils/confetti';

interface BookingModalProps {
  professional: Professional | null;
  onClose: () => void;
  onConfirmBooking: (apt: Omit<Appointment, 'id'>) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  professional,
  onClose,
  onConfirmBooking
}) => {
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [selectedMode, setSelectedMode] = useState<'Video Call' | 'In-Clinic'>('Video Call');
  const [isBooked, setIsBooked] = useState<boolean>(false);

  if (!professional) return null;

  const handleBooking = () => {
    if (!selectedSlot) return;
    const parts = selectedSlot.split(', ');
    const date = parts[0] || 'Upcoming';
    const time = parts[1] || 'Scheduled';

    onConfirmBooking({
      professionalId: professional.id,
      professionalName: professional.name,
      role: professional.role,
      date,
      time,
      mode: selectedMode,
      status: 'Confirmed'
    });

    setIsBooked(true);
    triggerConfetti();
    setTimeout(() => {
      setIsBooked(false);
      onClose();
    }, 2000);
  };

  return (
    <Modal
      isOpen={!!professional}
      onClose={onClose}
      title={isBooked ? "Consultation Confirmed" : `Schedule with ${professional.name}`}
      subtitle={`${professional.role} • ${professional.credentials}`}
      maxWidth="max-w-xl"
    >
      {isBooked ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#F1F8F4] text-[#265942] border border-[#DCEEE4] flex items-center justify-center mx-auto text-2xl animate-bounce">
            ✓
          </div>
          <h3 className="text-xl font-bold text-[#1C1822]">
            Gentle Consultation Reserved
          </h3>
          <p className="text-xs text-[#5A5368] max-w-sm mx-auto leading-relaxed">
            Your {selectedMode} with {professional.name} has been added to your confidential schedule. A private calendar invite has been generated.
          </p>
          <div className="p-3 bg-[#FAF7F4] rounded-2xl text-[11px] text-[#756D84] max-w-xs mx-auto border border-[#EBE6DF]">
            Protected by HERCARE Privacy Wall: HR is never notified.
          </div>
        </div>
      ) : (
        <div className="space-y-6 text-xs text-[#5A5368] text-left">
          {/* Profile snippet */}
          <div className="p-4 bg-[#FAF7F4] rounded-3xl border border-[#EBE6DF] flex items-center gap-4">
            <img
              src={professional.avatarUrl}
              alt={professional.name}
              className="w-14 h-14 rounded-2xl object-cover border-2 border-[#E6C8F0] shadow-xs"
            />
            <div>
              <div className="font-bold text-sm text-[#1C1822]">{professional.name}</div>
              <div className="text-[11px] text-[#756D84]">{professional.title}</div>
              <div className="flex items-center gap-2 mt-1 text-[11px] font-semibold text-amber-700">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{professional.rating} ({professional.reviewsCount} reviews) • {professional.experience}</span>
              </div>
            </div>
          </div>

          {/* Mode Selection */}
          <div className="space-y-2">
            <label className="font-bold text-[#1C1822] block">Select Consultation Mode</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedMode('Video Call')}
                className={`p-3 rounded-2xl border flex items-center justify-center gap-2 font-semibold transition-all cursor-pointer ${
                  selectedMode === 'Video Call'
                    ? 'border-[#5C246C] bg-[#FAF4FD] text-[#301339] shadow-xs ring-2 ring-[#E6C8F0]'
                    : 'border-[#EBE6DF] bg-white text-[#5A5368] hover:border-[#DDD4EC]'
                }`}
              >
                <Video className="w-4 h-4 text-[#5C246C]" />
                <span>Private Video Call</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedMode('In-Clinic')}
                className={`p-3 rounded-2xl border flex items-center justify-center gap-2 font-semibold transition-all cursor-pointer ${
                  selectedMode === 'In-Clinic'
                    ? 'border-[#5C246C] bg-[#FAF4FD] text-[#301339] shadow-xs ring-2 ring-[#E6C8F0]'
                    : 'border-[#EBE6DF] bg-white text-[#5A5368] hover:border-[#DDD4EC]'
                }`}
              >
                <MapPin className="w-4 h-4 text-[#5C246C]" />
                <span>In-Clinic Visit</span>
              </button>
            </div>
          </div>

          {/* Available Slots */}
          <div className="space-y-2">
            <label className="font-bold text-[#1C1822] block">Choose a Comfortable Time</label>
            <div className="grid grid-cols-2 gap-2">
              {professional.nextAvailableSlots.map((slot, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`p-2.5 rounded-2xl border text-center transition-all font-medium cursor-pointer ${
                    selectedSlot === slot
                      ? 'border-[#5C246C] bg-[#FAF4FD] text-[#301339] font-bold shadow-xs'
                      : 'border-[#EBE6DF] bg-white text-[#5A5368] hover:border-[#DDD4EC]'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Confidentiality reminder */}
          <div className="p-3.5 bg-[#F1F8F4] rounded-2xl border border-[#DCEEE4] text-[#183B2B] text-[11px] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#265942] flex-shrink-0" />
            <span>
              100% Employer-Covered benefit. Consultations, clinical notes, and discussions remain strictly private.
            </span>
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#EBE6DF]/70">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-[#756D84] hover:text-[#1C1822] font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button
              disabled={!selectedSlot}
              onClick={handleBooking}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all ${
                selectedSlot
                  ? 'bg-[#301339] hover:bg-[#441B50] text-white shadow-xs cursor-pointer'
                  : 'bg-[#EDE7F6] text-[#A79DB9] cursor-not-allowed'
              }`}
            >
              Confirm Consultation
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};
