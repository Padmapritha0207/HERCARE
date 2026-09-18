import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UserStage } from '../../types';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Lock, 
  Sparkles, 
  Building2, 
  Calendar,
  Briefcase,
  Heart,
  Baby,
  Smile,
  Users,
  Compass
} from 'lucide-react';
import { triggerConfetti } from '../../utils/confetti';

export const OnboardingWizard: React.FC = () => {
  const { user, setUser, setActiveTab } = useApp();

  const [step, setStep] = useState<number>(1);
  const [selectedStage, setSelectedStage] = useState<UserStage>(user.stage || 'Pregnant');
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>(user.supportNeeds || [
    'Return-to-work preparation',
    'Childcare resources',
    'Company benefits'
  ]);
  const [company, setCompany] = useState<string>(user.company || 'Acme Innovations');
  const [department, setDepartment] = useState<string>(user.department || 'Product & Engineering');
  const [workArrangement, setWorkArrangement] = useState<any>(user.workArrangement || 'Hybrid (3 days office)');
  const [expectedReturnDate, setExpectedReturnDate] = useState<string>(user.expectedReturnDate || '2026-10-30');

  const stages: { stage: UserStage; label: string; desc: string; icon: string }[] = [
    { stage: 'Planning pregnancy', label: 'Planning pregnancy', desc: 'Pre-conception health and fertility benefits', icon: '🌱' },
    { stage: 'Pregnant', label: 'Pregnant', desc: 'Currently pregnant and preparing for maternity leave', icon: '🤰' },
    { stage: 'On maternity leave', label: 'On maternity leave', desc: 'Caring for baby & planning return to work', icon: '👶' },
    { stage: 'Recently returned to work', label: 'Recently returned to work', desc: 'Navigating the first 3-6 months back in office', icon: '💼' },
    { stage: 'Working mother', label: 'Working mother', desc: 'Ongoing career growth, childcare & family balance', icon: '⭐' },
  ];

  const supportOptions = [
    { id: 'Pregnancy guidance', label: 'Pregnancy guidance', desc: 'Trimester milestones, nutrition, and birth prep' },
    { id: 'Postpartum recovery', label: 'Postpartum recovery', desc: 'Physical healing, pelvic health & infant care' },
    { id: 'Mental wellbeing', label: 'Mental wellbeing', desc: 'Anxiety relief, emotional checks & confidential therapy' },
    { id: 'Professional care', label: 'Professional care', desc: 'OBGYNs, lactation consultants, and physiotherapists' },
    { id: 'Childcare resources', label: 'Childcare resources', desc: 'Crèche discounts, nanny vetting & emergency backup' },
    { id: 'Return-to-work preparation', label: 'Return-to-work preparation', desc: 'Flagship 4-phase structured roadmap' },
    { id: 'Company benefits', label: 'Company benefits', desc: 'Maternity leave policies, insurance & flexible work' },
    { id: 'Workplace support', label: 'Workplace support', desc: 'Manager conversations & peer mom mentorship' },
  ];

  const toggleNeed = (need: string) => {
    if (selectedNeeds.includes(need)) {
      setSelectedNeeds(selectedNeeds.filter(n => n !== need));
    } else {
      setSelectedNeeds([...selectedNeeds, need]);
    }
  };

  const handleFinishOnboarding = () => {
    setUser({
      ...user,
      stage: selectedStage,
      supportNeeds: selectedNeeds,
      company,
      department,
      workArrangement,
      expectedReturnDate,
      isOnboarded: true,
    });
    triggerConfetti();
    setActiveTab('dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        {/* Top Progress Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌸</span>
            <span className="font-display font-bold text-slate-900 text-sm">HERCARE Onboarding</span>
          </div>
          <div className="text-xs font-semibold text-slate-500">
            Step {step} of 4
          </div>
        </div>
        <div className="w-full bg-slate-100 h-1.5">
          <div 
            className="bg-rose-500 h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Step Content */}
        <div className="p-6 sm:p-8">
          {/* STEP 1: STAGE */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Step 1 of 4</span>
                <h2 className="text-2xl font-bold text-slate-900 font-display mt-1">
                  What stage are you in?
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  This personalizes your Return-to-Work Bridge and care timelines.
                </p>
              </div>

              <div className="space-y-2.5">
                {stages.map((item) => (
                  <div
                    key={item.stage}
                    onClick={() => setSelectedStage(item.stage)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      selectedStage === item.stage
                        ? 'border-rose-500 bg-rose-50/50 shadow-xs ring-2 ring-rose-200'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{item.label}</div>
                        <div className="text-xs text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      selectedStage === item.stage 
                        ? 'border-rose-600 bg-rose-600 text-white' 
                        : 'border-slate-300'
                    }`}>
                      {selectedStage === item.stage && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: SUPPORT NEEDS */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Step 2 of 4</span>
                <h2 className="text-2xl font-bold text-slate-900 font-display mt-1">
                  How can HERCARE support you?
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Select the areas most relevant to your upcoming transition.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {supportOptions.map((opt) => {
                  const isSelected = selectedNeeds.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleNeed(opt.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-rose-500 bg-rose-50/60 ring-2 ring-rose-200'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-bold text-slate-900">{opt.label}</span>
                        <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                          isSelected ? 'border-rose-600 bg-rose-600 text-white' : 'border-slate-300'
                        }`}>
                          {isSelected && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1">{opt.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 text-sm font-semibold flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: WORKPLACE */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Step 3 of 4</span>
                <h2 className="text-2xl font-bold text-slate-900 font-display mt-1">
                  Your workplace
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  This links relevant employer policies, benefits, and the Return-to-Work Bridge timeline.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Company</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-rose-500 focus:outline-none font-medium text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Department</label>
                  <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-rose-500 focus:outline-none font-medium text-slate-900"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Work Arrangement</label>
                  <select
                    value={workArrangement}
                    onChange={(e) => setWorkArrangement(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-rose-500 focus:outline-none font-medium text-slate-900 bg-white"
                  >
                    <option value="Hybrid (3 days office)">Hybrid (3 days office / 2 days home)</option>
                    <option value="Hybrid (2 days office)">Hybrid (2 days office / 3 days home)</option>
                    <option value="Remote">Fully Remote</option>
                    <option value="Full On-site">Full On-site</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Expected Return Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="date"
                      value={expectedReturnDate}
                      onChange={(e) => setExpectedReturnDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-rose-500 focus:outline-none font-medium text-slate-900"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Suggested timeline: October 30, 2026 (calm 6-week preparation period before return).
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 text-sm font-semibold flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: PRIVACY EXPLANATION */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 4 of 4: Privacy Guarantee</span>
                <h2 className="text-2xl font-bold text-slate-900 font-display mt-1">
                  Your personal health journey is private.
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  HERCARE is designed with a strict zero-knowledge privacy architecture.
                </p>
              </div>

              {/* Visual Privacy Card */}
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-4">
                <div className="flex items-center gap-2.5 text-emerald-900 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>The HERCARE Privacy Promise</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-emerald-200/80 space-y-1">
                    <span className="font-bold text-slate-900">What remains 100% Private:</span>
                    <ul className="text-slate-600 space-y-1 text-[11px] list-disc list-inside">
                      <li>Your medical history & symptoms</li>
                      <li>Lactation and feeding logs</li>
                      <li>HERCARE AI conversations</li>
                      <li>Mental health scores & check-ins</li>
                      <li>Specific specialist appointments</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-900">What your employer sees:</span>
                    <ul className="text-slate-600 space-y-1 text-[11px] list-disc list-inside">
                      <li>Total program enrollment count</li>
                      <li>Aggregate benefit utilization %</li>
                      <li>De-identified program metrics</li>
                      <li><strong className="text-emerald-700">Zero individual records</strong></li>
                    </ul>
                  </div>
                </div>

                <p className="text-[11px] text-emerald-900 leading-relaxed italic">
                  "Employers only receive appropriate aggregate program information to fund benefits and measure corporate wellness impact."
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(3)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 text-sm font-semibold flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  onClick={handleFinishOnboarding}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 text-white font-bold text-sm shadow-lg shadow-rose-200 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Create My Journey</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
