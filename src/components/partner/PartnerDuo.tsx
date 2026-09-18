import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  Heart, 
  Sliders, 
  Lock, 
  Sparkles,
  Baby,
  Clock
} from 'lucide-react';
import { triggerConfetti } from '../../utils/confetti';

export const PartnerDuo: React.FC = () => {
  const { partnerSettings, updatePartnerSettings, rtwPhases } = useApp();

  const handleMasterToggle = () => {
    const nextState = !partnerSettings.enabled;
    updatePartnerSettings({ enabled: nextState });
    if (nextState) triggerConfetti();
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto pb-16 text-left">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#200C26] via-[#441B50] to-[#5C246C] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="space-y-3 max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6C8F0]/20 text-[#E6C8F0] text-xs font-bold border border-[#E6C8F0]/30">
            <Users className="w-4 h-4 text-[#E6C8F0]" />
            <span>Co-Parenting Alignment Layer</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Partner Duo
          </h1>
          <p className="text-xs sm:text-base text-[#DDD4EC] leading-relaxed">
            Lighten the mental load together. Share childcare handoffs, morning routines, and appointment reminders with your partner — with granular, user-controlled privacy.
          </p>
        </div>
      </div>

      {/* Explicit User Control Master Card */}
      <div className="bg-white rounded-3xl border border-[#EBE6DF] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EBE6DF]/70">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#5C246C]">
              You Remain in Total Control
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1C1822] mt-0.5">
              Partner Sharing Status
            </h2>
            <p className="text-xs text-[#5A5368] mt-1">
              Your partner can only view the specific logistics categories you choose to share.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              partnerSettings.enabled 
                ? 'bg-[#F1F8F4] text-[#265942] border border-[#DCEEE4]' 
                : 'bg-[#FAF7F4] text-[#756D84] border border-[#EBE6DF]'
            }`}>
              {partnerSettings.enabled ? 'Sharing Active' : 'Sharing Paused'}
            </span>

            <button
              onClick={handleMasterToggle}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                partnerSettings.enabled
                  ? 'bg-[#301339] hover:bg-[#441B50] text-white'
                  : 'bg-[#5C246C] hover:bg-[#441B50] text-white shadow-xs'
              }`}
            >
              {partnerSettings.enabled ? 'Pause Partner Sharing' : 'Enable Partner Sharing'}
            </button>
          </div>
        </div>

        {/* Categories of Shared Data */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-[#1C1822] uppercase tracking-wider">
            Granular Sharing Categories (You Decide What to Share)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* 1. Weekly Support Tasks */}
            <div className={`p-4 rounded-2xl border transition-all ${
              partnerSettings.enabled && partnerSettings.shareSupportTasks 
                ? 'bg-[#FAF4FD] border-[#E6C8F0]' 
                : 'bg-[#FAF7F4] border-[#EBE6DF] opacity-60'
            }`}>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#1C1822] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#5C246C]" />
                  <span>Weekly Support Tasks</span>
                </span>
                <input
                  type="checkbox"
                  disabled={!partnerSettings.enabled}
                  checked={partnerSettings.shareSupportTasks}
                  onChange={(e) => updatePartnerSettings({ shareSupportTasks: e.target.checked })}
                  className="rounded text-[#5C246C] cursor-pointer"
                />
              </div>
              <p className="text-[11px] text-[#5A5368] mt-1.5 leading-relaxed">
                Shared morning dry-run alarm schedules, commute coordination, and feeding prep lists.
              </p>
            </div>

            {/* 2. Childcare Planning */}
            <div className={`p-4 rounded-2xl border transition-all ${
              partnerSettings.enabled && partnerSettings.shareChildcarePlan 
                ? 'bg-[#FAF4FD] border-[#E6C8F0]' 
                : 'bg-[#FAF7F4] border-[#EBE6DF] opacity-60'
            }`}>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#1C1822] flex items-center gap-2">
                  <Baby className="w-4 h-4 text-[#5C246C]" />
                  <span>Childcare Planning & Crèche Trials</span>
                </span>
                <input
                  type="checkbox"
                  disabled={!partnerSettings.enabled}
                  checked={partnerSettings.shareChildcarePlan}
                  onChange={(e) => updatePartnerSettings({ shareChildcarePlan: e.target.checked })}
                  className="rounded text-[#5C246C] cursor-pointer"
                />
              </div>
              <p className="text-[11px] text-[#5A5368] mt-1.5 leading-relaxed">
                Crèche visit appointment dates, partner pickup turns, and emergency contact lists.
              </p>
            </div>

            {/* 3. Appointment Reminders */}
            <div className={`p-4 rounded-2xl border transition-all ${
              partnerSettings.enabled && partnerSettings.shareAppointmentCalendar 
                ? 'bg-[#FAF4FD] border-[#E6C8F0]' 
                : 'bg-[#FAF7F4] border-[#EBE6DF] opacity-60'
            }`}>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#1C1822] flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#5C246C]" />
                  <span>Pediatric Reminders</span>
                </span>
                <input
                  type="checkbox"
                  disabled={!partnerSettings.enabled}
                  checked={partnerSettings.shareAppointmentCalendar}
                  onChange={(e) => updatePartnerSettings({ shareAppointmentCalendar: e.target.checked })}
                  className="rounded text-[#5C246C] cursor-pointer"
                />
              </div>
              <p className="text-[11px] text-[#5A5368] mt-1.5 leading-relaxed">
                Syncs pediatric vaccination and consultation times to joint co-parenting calendar.
              </p>
            </div>

            {/* 4. Return-to-Work Prep */}
            <div className={`p-4 rounded-2xl border transition-all ${
              partnerSettings.enabled && partnerSettings.shareReturnPlan 
                ? 'bg-[#FAF4FD] border-[#E6C8F0]' 
                : 'bg-[#FAF7F4] border-[#EBE6DF] opacity-60'
            }`}>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#1C1822] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#5C246C]" />
                  <span>Return-to-Work Milestones</span>
                </span>
                <input
                  type="checkbox"
                  disabled={!partnerSettings.enabled}
                  checked={partnerSettings.shareReturnPlan}
                  onChange={(e) => updatePartnerSettings({ shareReturnPlan: e.target.checked })}
                  className="rounded text-[#5C246C] cursor-pointer"
                />
              </div>
              <p className="text-[11px] text-[#5A5368] mt-1.5 leading-relaxed">
                Overview of Day 1 milestone goals, hybrid WFH days, and celebration plans.
              </p>
            </div>
          </div>
        </div>

        {/* Health Data Safeguard */}
        <div className="p-4 rounded-2xl bg-[#F1F8F4] border border-[#DCEEE4] text-xs text-[#183B2B] flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#265942] flex-shrink-0" />
          <span>
            <strong>Confidential Sanctuary:</strong> Your personal health reflections, therapy sessions, and private questions are never shared. You choose what to share, and you can revoke access at any second.
          </span>
        </div>
      </div>
    </div>
  );
};
