import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  XCircle, 
  Users, 
  Calendar, 
  Sliders, 
  Sparkles,
  ArrowRight,
  Building2,
  FileText
} from 'lucide-react';

export const PrivacyCenter: React.FC = () => {
  const { partnerSettings, updatePartnerSettings, setRole, setActiveTab } = useApp();

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-16 text-left">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#183B2B] via-[#265942] to-[#120F16] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold border border-white/20">
            <Lock className="w-4 h-4" />
            <span>Foundational Product Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Your Health Data. <br />
            Your Control.
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
            Privacy is an architectural product principle, not an afterthought. HERCARE’s zero-access Privacy Wall guarantees that your employer never receives personal health records, AI conversations, or clinical scores.
          </p>
        </div>
      </div>

      {/* ANIMATED VISUAL PRIVACY BOUNDARY / PRIVACY WALL DIAGRAM */}
      <div className="bg-white rounded-3xl border-2 border-[#DCEEE4] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#265942]">
            The Architectural Barrier
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1C1822]">
            The HERCARE Privacy Boundary
          </h2>
          <p className="text-xs text-[#5A5368]">
            Complete cryptographic and organizational separation between personal care and enterprise reporting.
          </p>
        </div>

        {/* 3-Tier Data Pipeline Graphic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch pt-2">
          {/* Tier 1: Personal Journey */}
          <div className="p-5 rounded-2xl bg-[#FDF4F6] border border-[#F2C7D1] space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#61333D] font-bold text-xs uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-[#944D5D]" />
                <span>Your Personal Journey</span>
              </div>
              <p className="text-[11px] text-[#756D84] mt-1">
                Zero visibility to HR, IT, or management.
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-[#413B4D]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#944D5D] flex-shrink-0" />
                  <span>Medical history & symptoms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#944D5D] flex-shrink-0" />
                  <span>HERCARE AI chat records</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#944D5D] flex-shrink-0" />
                  <span>Clinical consultation notes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#944D5D] flex-shrink-0" />
                  <span>Mental health check-in scores</span>
                </li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-white/80 border border-[#F2C7D1] text-[11px] font-bold text-[#61333D] text-center">
              🔒 100% Private to You
            </div>
          </div>

          {/* Tier 2: The Privacy Boundary Wall */}
          <div className="p-5 rounded-2xl bg-[#200C26] text-white space-y-3 flex flex-col justify-between border-2 border-emerald-400 shadow-md">
            <div>
              <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider text-center">
                <ShieldCheck className="w-4 h-4" />
                <span>[ PRIVACY BOUNDARY ]</span>
              </div>
              <p className="text-[11px] text-[#DDD4EC] text-center mt-2 leading-relaxed">
                De-identification engine strips all PII (names, dates, IDs, notes). Only statistical counts with k-anonymity (n &gt; 15) pass through.
              </p>
              <div className="mt-4 p-3 bg-white/10 rounded-xl border border-white/10 text-[11px] space-y-1 font-mono text-emerald-300">
                <div>✓ Zero Employee Identifiers</div>
                <div>✓ Differential Privacy</div>
                <div>✓ SOC2 / HIPAA De-identified</div>
              </div>
            </div>
            <div className="text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
              Impenetrable Wall
            </div>
          </div>

          {/* Tier 3: Aggregate Insights */}
          <div className="p-5 rounded-2xl bg-[#EDE7F6] border border-[#DDD4EC] space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#441B50] font-bold text-xs uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5C246C]" />
                <span>Aggregate Insights</span>
              </div>
              <p className="text-[11px] text-[#756D84] mt-1">
                De-identified analytics for program ROI and policy funding.
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-[#413B4D]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5C246C] flex-shrink-0" />
                  <span>Total enrolled count (182)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5C246C] flex-shrink-0" />
                  <span>Benefit usage rate (73.4%)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5C246C] flex-shrink-0" />
                  <span>RTW Bridge completion %</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5C246C] flex-shrink-0" />
                  <span>Category popularity trends</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setRole('employer');
                setActiveTab('employer');
              }}
              className="p-2.5 rounded-xl bg-[#441B50] hover:bg-[#301339] text-white text-[11px] font-bold text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>View Employer Portal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Two Column Side-by-Side: Employee Can See vs Employer Can See */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: What Employee Sees */}
        <div className="bg-white rounded-3xl border border-[#EBE6DF] p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#5C246C] font-bold text-sm">
            <Eye className="w-5 h-5" />
            <span>EMPLOYEE CAN SEE (Your Personal Portal)</span>
          </div>
          <p className="text-xs text-[#756D84]">
            Full uninhibited access to your health, support team, and planning milestones:
          </p>
          <div className="space-y-2 text-xs text-[#2C2635]">
            <div className="p-3 bg-[#FAF7F4] rounded-xl flex items-center justify-between">
              <span>Personal Journey & Due Date</span>
              <span className="font-bold text-[#265942]">Visible to You Only</span>
            </div>
            <div className="p-3 bg-[#FAF7F4] rounded-xl flex items-center justify-between">
              <span>Return-to-Work Checklist & Notes</span>
              <span className="font-bold text-[#265942]">Visible to You Only</span>
            </div>
            <div className="p-3 bg-[#FAF7F4] rounded-xl flex items-center justify-between">
              <span>Daily Wellbeing & Stress Scores</span>
              <span className="font-bold text-[#265942]">Visible to You Only</span>
            </div>
            <div className="p-3 bg-[#FAF7F4] rounded-xl flex items-center justify-between">
              <span>HERCARE AI Care Navigator Chat</span>
              <span className="font-bold text-[#265942]">Visible to You Only</span>
            </div>
            <div className="p-3 bg-[#FAF7F4] rounded-xl flex items-center justify-between">
              <span>Specialist Appointment Notes</span>
              <span className="font-bold text-[#265942]">Visible to You Only</span>
            </div>
          </div>
        </div>

        {/* Right: What Employer Can See */}
        <div className="bg-white rounded-3xl border border-[#EBE6DF] p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#756D84] font-bold text-sm">
            <EyeOff className="w-5 h-5 text-[#944D5D]" />
            <span>EMPLOYER CAN SEE (HR Aggregate Dashboard)</span>
          </div>
          <p className="text-xs text-[#756D84]">
            Only aggregated, de-identified department and company totals:
          </p>
          <div className="space-y-2 text-xs text-[#2C2635]">
            <div className="p-3 bg-[#FAF7F4] rounded-xl flex items-center justify-between">
              <span>Total Enrolled Employees</span>
              <span className="font-bold text-[#441B50]">Aggregate Count</span>
            </div>
            <div className="p-3 bg-[#FAF7F4] rounded-xl flex items-center justify-between">
              <span>Program Utilization Rate %</span>
              <span className="font-bold text-[#441B50]">Aggregate %</span>
            </div>
            <div className="p-3 bg-[#FAF7F4] rounded-xl flex items-center justify-between">
              <span>Popular Benefit Types (e.g. Daycare)</span>
              <span className="font-bold text-[#441B50]">Category Totals</span>
            </div>
            <div className="p-3 bg-[#FDF4F6] rounded-xl flex items-center justify-between border border-[#F2C7D1]">
              <span className="font-medium text-[#61333D]">Individual Medical Records</span>
              <span className="font-bold text-[#944D5D] flex items-center gap-1">
                <XCircle className="w-3.5 h-3.5" /> NEVER SHARED
              </span>
            </div>
            <div className="p-3 bg-[#FDF4F6] rounded-xl flex items-center justify-between border border-[#F2C7D1]">
              <span className="font-medium text-[#61333D]">Personal AI Chats or Notes</span>
              <span className="font-bold text-[#944D5D] flex items-center gap-1">
                <XCircle className="w-3.5 h-3.5" /> NEVER SHARED
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* User-Controlled Privacy Toggles */}
      <div className="bg-white rounded-3xl border border-[#EBE6DF] p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-2 text-[#1C1822] font-bold text-xs uppercase tracking-wider">
          <Sliders className="w-4 h-4 text-[#265942]" />
          <span>User-Controlled Sharing Preferences</span>
        </div>

        <div className="space-y-4 text-xs">
          {/* Partner Duo Master Toggle */}
          <div className="p-4 rounded-2xl bg-[#FAF7F4] border border-[#EBE6DF] flex items-center justify-between gap-4">
            <div>
              <div className="font-bold text-sm text-[#1C1822]">Partner Duo Co-Parent Sharing</div>
              <p className="text-[#5A5368] mt-0.5">
                Explicit control: {partnerSettings.enabled ? 'Sharing is currently ON' : 'Sharing is currently OFF'}. Allows your partner to coordinate childcare trials and task reminders.
              </p>
            </div>
            <button
              onClick={() => updatePartnerSettings({ enabled: !partnerSettings.enabled })}
              className={`px-4 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                partnerSettings.enabled
                  ? 'bg-[#265942] text-white shadow-xs'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              {partnerSettings.enabled ? 'Enabled' : 'Disabled'}
            </button>
          </div>

          {partnerSettings.enabled && (
            <div className="p-4 bg-[#F1F8F4] rounded-2xl border border-[#DCEEE4] space-y-3">
              <div className="font-bold text-[#183B2B] text-xs">Granular Partner Permissions:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-[#DCEEE4] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={partnerSettings.shareChildcarePlan}
                    onChange={(e) => updatePartnerSettings({ shareChildcarePlan: e.target.checked })}
                    className="rounded text-[#265942]"
                  />
                  <span>Share Childcare Planning Checklist</span>
                </label>

                <label className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-[#DCEEE4] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={partnerSettings.shareAppointmentCalendar}
                    onChange={(e) => updatePartnerSettings({ shareAppointmentCalendar: e.target.checked })}
                    className="rounded text-[#265942]"
                  />
                  <span>Share Appointment Reminders</span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
