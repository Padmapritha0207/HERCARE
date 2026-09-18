import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Milestone, 
  Gift, 
  HeartHandshake, 
  CheckCircle2, 
  Lock, 
  BarChart3, 
  Calendar,
  AlertCircle
} from 'lucide-react';

export const EmployerDashboard: React.FC = () => {
  const { employerAnalytics, user, setActiveTab, setRole } = useApp();
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('Last 6 Months');

  return (
    <div className="space-y-8 pb-16 text-left">
      {/* Header Banner - Executive Navy/Slate/Deep Plum Analytical Tone */}
      <div className="bg-[#120F16] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden border border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-bold border border-white/15">
              <Building2 className="w-4 h-4 text-[#D09DE0]" />
              <span>Acme Innovations • Corporate Talent & People Analytics</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              HERCARE Employer Portal
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Executive program metrics and talent retention telemetry without access to individual health records or private AI chats.
            </p>
          </div>

          {/* Privacy Seal */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 text-xs space-y-2 flex-shrink-0">
            <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase text-[11px] tracking-wider">
              <Lock className="w-4 h-4" />
              <span>Aggregate Insights Only</span>
            </div>
            <p className="text-slate-300 text-[11px] max-w-xs leading-relaxed">
              Certified SOC2 & HIPAA de-identified. Individual employee health histories, mental scores, and doctor notes are completely inaccessible to HR.
            </p>
          </div>
        </div>
      </div>

      {/* Aggregate Notice Bar */}
      <div className="p-4 rounded-2xl bg-[#EDE7F6]/60 border border-[#DDD4EC] text-[#301339] text-xs flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#5C246C] flex-shrink-0" />
          <span>
            <strong>Displaying De-Identified Aggregate Metrics Only:</strong> No individual employee health records, AI conversations, or consultation notes are accessible in this view.
          </span>
        </div>
        <button
          onClick={() => {
            setRole('employee');
            setActiveTab('dashboard');
          }}
          className="px-3 py-1.5 rounded-xl bg-[#441B50] hover:bg-[#301339] text-white font-bold text-xs whitespace-nowrap transition-colors cursor-pointer"
        >
          Switch to Priya's View
        </button>
      </div>

      {/* Primary KPI Metrics Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-[#EBE6DF] shadow-xs space-y-1">
          <div className="text-[10px] font-bold text-[#756D84] uppercase tracking-wider">
            Eligible Employees
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#120F16]">
            {employerAnalytics.eligibleEmployees}
          </div>
          <div className="text-[11px] text-[#756D84]">
            Across Product, Eng & Sales
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#EBE6DF] shadow-xs space-y-1">
          <div className="text-[10px] font-bold text-[#756D84] uppercase tracking-wider">
            Enrolled
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#441B50]">
            {employerAnalytics.enrolledEmployees}
          </div>
          <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> 73.4% Active Adoption
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#EBE6DF] shadow-xs space-y-1">
          <div className="text-[10px] font-bold text-[#756D84] uppercase tracking-wider">
            Program Utilization
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#120F16]">
            {employerAnalytics.programUtilizationRate}%
          </div>
          <div className="text-[11px] text-[#756D84]">
            Monthly active engagements
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#EBE6DF] shadow-xs space-y-1">
          <div className="text-[10px] font-bold text-[#756D84] uppercase tracking-wider">
            Resource Engagement
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#120F16]">
            {employerAnalytics.resourceEngagementRate}%
          </div>
          <div className="text-[11px] text-[#756D84]">
            Policy & Crèche discovery
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#EBE6DF] shadow-xs space-y-1 col-span-2 lg:col-span-1">
          <div className="text-[10px] font-bold text-[#756D84] uppercase tracking-wider">
            RTW Participation
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#5C246C]">
            {employerAnalytics.rtwBridgeParticipationRate}%
          </div>
          <div className="text-[11px] text-[#756D84]">
            Active in 4-Phase Bridge
          </div>
        </div>
      </div>

      {/* Two Interactive Visual Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Return-to-Work Participation by Month */}
        <div className="bg-white rounded-3xl border border-[#EBE6DF] p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base text-[#120F16]">
                Return-to-Work Bridge Participation by Month
              </h3>
              <p className="text-xs text-[#756D84]">
                Mothers preparing or actively navigating phased return cohorts
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#FAF7F4] text-[#5A5368] font-bold text-[10px] border border-[#EBE6DF]">
              Aggregate Only
            </span>
          </div>

          <div className="pt-6 space-y-3">
            <div className="flex items-end justify-between gap-4 h-48 px-2 border-b border-[#EBE6DF] pb-2">
              {employerAnalytics.monthlyTrends.map((trend, i) => {
                const maxVal = 130;
                const heightPct = Math.round((trend.activeBridge / maxVal) * 100);

                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="text-[10px] font-bold text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {trend.activeBridge}
                    </div>
                    <div className="w-full bg-[#FAF7F4] rounded-t-lg h-full flex items-end overflow-hidden">
                      <div
                        className="w-full bg-gradient-to-t from-[#441B50] to-[#9342A9] rounded-t-lg transition-all group-hover:brightness-110"
                        style={{ height: `${heightPct}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-bold text-[#5A5368]">{trend.month}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-[#756D84] pt-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#441B50] to-[#9342A9]" />
                Active Mothers in Return-to-Work Bridge
              </span>
              <span className="font-bold text-emerald-700">+33% Growth in H2</span>
            </div>
          </div>
        </div>

        {/* Chart 2: Benefits Usage Distribution */}
        <div className="bg-white rounded-3xl border border-[#EBE6DF] p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base text-[#120F16]">
                Company Benefits Discovery & Engagement
              </h3>
              <p className="text-xs text-[#756D84]">
                Percentage of enrolled mothers accessing company programs
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#FAF7F4] text-[#5A5368] font-bold text-[10px] border border-[#EBE6DF]">
              Aggregate Only
            </span>
          </div>

          <div className="space-y-3.5 pt-2">
            {employerAnalytics.benefitUsageDistribution.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-[#1C1822]">{item.category}</span>
                  <span className="font-semibold text-[#5A5368]">{item.engagementPct}% ({item.count} employees)</span>
                </div>
                <div className="w-full bg-[#FAF7F4] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#441B50] h-full rounded-full transition-all"
                    style={{ width: `${item.engagementPct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 text-[11px] text-[#756D84]">
            Note: Indicates program discovery and engagement only. Individual selections remain confidential.
          </div>
        </div>
      </div>

      {/* Talent Retention & ROI Section */}
      <div className="bg-white rounded-3xl border border-[#EBE6DF] p-6 sm:p-8 shadow-xs space-y-4">
        <h3 className="font-bold text-base text-[#120F16]">
          Corporate Talent & Retention Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-[#F1F8F4] border border-[#DCEEE4] space-y-1">
            <div className="text-xs font-bold text-[#183B2B] uppercase tracking-wider">
              12-Month Post-Return Retention
            </div>
            <div className="text-3xl font-extrabold text-[#265942]">
              {employerAnalytics.rtwRetentionIndex}%
            </div>
            <p className="text-[11px] text-[#265942]/90">
              vs 57% industry average baseline for new mothers.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF4FD] border border-[#E6C8F0] space-y-1">
            <div className="text-xs font-bold text-[#441B50] uppercase tracking-wider">
              Average Ramp-up Time
            </div>
            <div className="text-3xl font-extrabold text-[#5C246C]">
              3.2 Weeks
            </div>
            <p className="text-[11px] text-[#5C246C]/90">
              Mothers regain full team productivity 2.4x faster.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF7F4] border border-[#EBE6DF] space-y-1">
            <div className="text-xs font-bold text-[#3E3252] uppercase tracking-wider">
              Estimated Replacement Savings
            </div>
            <div className="text-3xl font-extrabold text-[#120F16]">
              $1.4M / yr
            </div>
            <p className="text-[11px] text-[#5A5368]">
              Based on reduced talent attrition across 182 enrolled women.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
