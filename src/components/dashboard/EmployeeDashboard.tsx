import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Milestone, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  Bot, 
  HeartHandshake, 
  Gift, 
  Calendar, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ChevronRight,
  Smile,
  Users,
  Check,
  Lock,
  Heart
} from 'lucide-react';
import { triggerConfetti } from '../../utils/confetti';

export const EmployeeDashboard: React.FC = () => {
  const { 
    user, 
    rtwPhases, 
    toggleTaskCompletion, 
    overallProgress, 
    setActiveTab, 
    setSelectedTaskForDetail,
    setSelectedBenefit,
    benefits,
    professionals,
    setSelectedProfessional,
    setPreloadedAiPrompt
  } = useApp();

  const phase1 = rtwPhases[0];
  const recommendedTasks = phase1 ? phase1.tasks.slice(0, 5) : [];

  const handleTaskCheck = (taskId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleTaskCompletion(taskId);
    triggerConfetti();
  };

  const handleOpenAiWithQuestion = (query: string) => {
    setPreloadedAiPrompt(query);
    setActiveTab('ai');
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-16 text-left">
      {/* Personalized Calm Header & Compact Milestone Status */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-[#FAF4FD] via-[#FFFFFF] to-[#FDF4F6] p-6 sm:p-8 rounded-3xl border border-[#EBE6DF] shadow-xs">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4FD] border border-[#E6C8F0] text-xs font-semibold text-[#5C246C]">
            <span>🌸</span>
            <span>Your Personal Maternal Sanctuary</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#120F16]">
            Good morning, {user.name}
          </h1>
          <p className="text-xs sm:text-sm text-[#5A5368]">
            Take a gentle breath. You are doing wonderful, and we are here to support you at every step.
          </p>
        </div>

        {/* Compact Calm Status Card */}
        <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#EBE6DF] shadow-xs flex items-center gap-4 flex-shrink-0">
          <div className="w-11 h-11 rounded-2xl bg-[#FAF4FD] border border-[#E6C8F0] flex items-center justify-center text-[#5C246C]">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-[#756D84] uppercase tracking-wider">
              RETURN MILESTONE
            </div>
            <div className="text-xs font-bold text-[#1C1822]">
              6 weeks until return
            </div>
            <div className="text-[11px] text-[#5C246C] font-semibold mt-0.5">
              Target Date: October 30, 2026
            </div>
          </div>
          <div className="pl-3 border-l border-[#EBE6DF] text-right">
            <span className="text-[10px] font-bold text-[#756D84] uppercase block">Roadmap</span>
            <span className="text-base font-extrabold text-[#441B50]">{overallProgress}%</span>
          </div>
        </div>
      </div>

      {/* Gentle Maternal Affirmation & Breathing Pause */}
      <div className="bg-gradient-to-r from-[#FAF4FD] via-[#FFFFFF] to-[#F1F8F4] p-4 sm:p-5 rounded-3xl border border-[#E6C8F0]/70 flex items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#EDE7F6] text-[#5C246C] flex items-center justify-center font-bold text-lg flex-shrink-0">
            🌿
          </div>
          <div>
            <div className="text-xs font-bold text-[#1C1822] flex items-center gap-2">
              <span>Gentle Daily Pause</span>
              <span className="text-[10px] text-[#5C246C] font-semibold bg-[#FAF4FD] px-2 py-0.5 rounded-full border border-[#E6C8F0]">
                No rush, ever
              </span>
            </div>
            <p className="text-[11px] text-[#5A5368] mt-0.5 leading-relaxed">
              Inhale peace, exhale expectations. Returning to work does not mean leaving motherhood behind — you are building a loving rhythm for both.
            </p>
          </div>
        </div>
        <button
          onClick={() => setActiveTab('wellbeing')}
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-[#EBE6DF] hover:border-[#E6C8F0] text-[#5C246C] text-xs font-bold transition-all flex-shrink-0 cursor-pointer shadow-xs"
        >
          <span>Confidential Mood Check-in</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* HERO CENTERPIECE: YOUR RETURN-TO-WORK BRIDGE (DOMINATES SCREEN) */}
      <div className="bg-[#FFFFFF] rounded-3xl border-2 border-[#DDD4EC] p-5 sm:p-8 lg:p-9 shadow-[0_10px_35px_rgba(48,19,57,0.05)] relative overflow-hidden">
        {/* Subtle decorative wash */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FAF4FD] to-transparent pointer-events-none rounded-full blur-3xl -z-10" />

        {/* Header & Progress Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EBE6DF]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5C246C] uppercase tracking-wider mb-1">
              <Milestone className="w-4 h-4" />
              <span>Your Structured Bridge</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#120F16]">
              Your Return-to-Work Bridge
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5368] mt-0.5">
              Returning to work is a gentle journey — never a single stressful joining date.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="text-right">
              <div className="text-[11px] text-[#756D84] font-medium">Calm Completion</div>
              <div className="text-2xl font-extrabold text-[#441B50]">
                {overallProgress}%
              </div>
            </div>
            <button
              onClick={() => setActiveTab('bridge')}
              className="px-5 py-2.5 rounded-2xl bg-[#301339] hover:bg-[#441B50] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <span>View Full Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4-Phase Visual Timeline Preview */}
        <div className="py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {rtwPhases.map((phase, idx) => {
              const isCurrent = idx === 0;
              const completedCount = phase.tasks.filter(t => t.completed).length;
              const pct = Math.round((completedCount / (phase.tasks.length || 1)) * 100);

              return (
                <div
                  key={phase.id}
                  onClick={() => setActiveTab('bridge')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                    isCurrent 
                      ? 'border-[#76308A] bg-[#FAF4FD]/90 shadow-sm ring-2 ring-[#E6C8F0]' 
                      : 'border-[#EBE6DF] hover:border-[#DDD5CC] bg-[#FAF7F4]/60'
                  }`}
                >
                  {isCurrent && (
                    <div className="absolute -top-2.5 left-4 px-2 py-0.5 bg-[#441B50] text-white text-[9px] font-bold rounded-full uppercase tracking-wider">
                      ● Active Now (Today)
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-[11px] text-[#441B50]">
                      {phase.timeframe}
                    </span>
                    <span className="font-bold text-xs text-[#1C1822]">{pct}%</span>
                  </div>

                  <div className="text-xs font-bold text-[#1C1822] line-clamp-1">
                    {phase.title.split(': ')[1] || phase.title}
                  </div>

                  <div className="w-full bg-[#EBE6DF] h-1.5 rounded-full overflow-hidden mt-3">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        isCurrent ? 'bg-[#5C246C]' : 'bg-[#9073A8]'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <div className="text-[11px] text-[#756D84] mt-2 flex items-center justify-between">
                    <span>{completedCount} of {phase.tasks.length} ready</span>
                    <span className="text-[#5C246C] font-semibold text-[10px]">Open →</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* HIGHLIGHTED HERO ACTION: Next Recommended Step */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FAF4FD] via-[#FFFFFF] to-[#FDF4F6] border border-[#E6C8F0] flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#441B50] text-white flex items-center justify-center font-bold flex-shrink-0">
              <Sparkles className="w-5 h-5 text-[#D09DE0]" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#5C246C] uppercase tracking-wider block">
                Next Gentle Step
              </span>
              <h4 className="text-sm font-bold text-[#120F16]">
                Prepare your flexible-work conversation with your manager
              </h4>
              <p className="text-[11px] text-[#5A5368]">
                Propose your 80% gradual ramp-up, establish hybrid days, and block private lactation times calmly.
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('bridge')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#301339] hover:bg-[#441B50] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Start</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Today's Recommended Actions List */}
        <div className="pt-4 border-t border-[#EBE6DF]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-[#1C1822] uppercase tracking-wider flex items-center gap-2">
              <span>Today's Caring Milestones</span>
              <span className="text-[11px] font-normal text-[#756D84] lowercase">(click circle to complete)</span>
            </h3>
            <span 
              onClick={() => setActiveTab('bridge')}
              className="text-xs font-semibold text-[#5C246C] hover:underline cursor-pointer"
            >
              See all 15 tasks →
            </span>
          </div>

          <div className="space-y-2">
            {recommendedTasks.map((task) => (
              <div
                key={task.id}
                onClick={() => setSelectedTaskForDetail(task)}
                className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 transition-all cursor-pointer ${
                  task.completed
                    ? 'border-[#DCEEE4] bg-[#F1F8F4]/50 text-[#756D84]'
                    : 'border-[#EBE6DF] hover:border-[#DDD5CC] bg-white hover:bg-[#FAF7F4]/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => handleTaskCheck(task.id, e)}
                    className="p-1 rounded-full text-slate-400 hover:text-[#5C246C] transition-colors"
                  >
                    {task.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-[#265942]" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 hover:text-[#5C246C]" />
                    )}
                  </button>
                  <div>
                    <div className={`text-xs font-bold ${task.completed ? 'line-through text-slate-400' : 'text-[#1C1822]'}`}>
                      {task.title}
                    </div>
                    <div className="text-[11px] text-[#756D84] line-clamp-1">
                      {task.description}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="px-2 py-0.5 rounded-md bg-[#EDE7F6] text-[#441B50] text-[10px] font-semibold">
                    {task.category}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Connected Support Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {/* 1. HERCARE AI */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#EBE6DF] p-6 flex flex-col justify-between shadow-xs space-y-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FAF4FD] text-[#5C246C] flex items-center justify-center border border-[#E6C8F0]">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-[#5C246C] uppercase tracking-wider">
                Care Navigator
              </div>
              <h3 className="text-base font-bold text-[#1C1822] mt-0.5">
                Need help figuring out your next step?
              </h3>
              <p className="text-xs text-[#5A5368] mt-1 leading-relaxed">
                HERCARE AI helps you organize manager discussions, draft pumping plans, and navigate policies.
              </p>
            </div>

            <div className="space-y-1.5 pt-1">
              <button
                onClick={() => handleOpenAiWithQuestion('What should I discuss with my manager before returning to work?')}
                className="w-full text-left px-3 py-2 rounded-xl bg-[#FAF7F4] hover:bg-[#EDE7F6]/60 border border-[#EBE6DF] text-[11px] text-[#441B50] font-medium transition-colors line-clamp-1 cursor-pointer"
              >
                💬 "What should I discuss with my manager?"
              </button>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('ai')}
            className="w-full py-2.5 rounded-2xl bg-[#FAF4FD] hover:bg-[#EDE7F6] text-[#441B50] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-[#E6C8F0] cursor-pointer"
          >
            <span>Talk with Care Navigator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2. Professional Care Support */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#EBE6DF] p-6 flex flex-col justify-between shadow-xs space-y-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FAF4FD] text-[#5C246C] flex items-center justify-center border border-[#E6C8F0]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-[#5C246C] uppercase tracking-wider">
                Support Ecosystem
              </div>
              <h3 className="text-base font-bold text-[#1C1822] mt-0.5">
                Your Support Team
              </h3>
              <p className="text-xs text-[#5A5368] mt-1 leading-relaxed">
                Gynecologists, IBCLC lactation consultants, and perinatal therapists covered by Acme.
              </p>
            </div>

            <div className="space-y-2 pt-1 text-xs">
              {professionals.slice(0, 2).map((prof) => (
                <div
                  key={prof.id}
                  onClick={() => setSelectedProfessional(prof)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F4] hover:bg-slate-100/80 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <img src={prof.avatarUrl} alt={prof.name} className="w-7 h-7 rounded-full object-cover" />
                    <div>
                      <div className="font-bold text-[#1C1822] text-xs">{prof.name}</div>
                      <div className="text-[10px] text-[#756D84]">{prof.role}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#5C246C]">Book</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setActiveTab('care')}
            className="w-full py-2.5 rounded-2xl bg-[#FAF4FD] hover:bg-[#EDE7F6] text-[#441B50] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-[#E6C8F0] cursor-pointer"
          >
            <span>Explore Specialists</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3. Company Benefits */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#EBE6DF] p-6 flex flex-col justify-between shadow-xs space-y-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FDF5ED] text-[#7D4C16] flex items-center justify-center border border-[#FBEAD7]">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-[#7D4C16] uppercase tracking-wider">
                Acme Innovations
              </div>
              <h3 className="text-base font-bold text-[#1C1822] mt-0.5">
                Benefits Available
              </h3>
              <p className="text-xs text-[#5A5368] mt-1 leading-relaxed">
                Discover your company's flexible return transition and subsidized crèche network.
              </p>
            </div>

            <div className="space-y-2 pt-1 text-xs">
              {benefits.slice(0, 2).map((benefit) => (
                <div
                  key={benefit.id}
                  onClick={() => setSelectedBenefit(benefit)}
                  className="p-2.5 rounded-xl border border-[#EBE6DF] bg-[#FAF7F4] hover:bg-[#EDE7F6]/50 cursor-pointer transition-colors"
                >
                  <div className="font-bold text-[#1C1822] text-xs line-clamp-1">{benefit.title}</div>
                  <div className="text-[10px] text-[#756D84] line-clamp-1">{benefit.coverageHighlight}</div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setActiveTab('benefits')}
            className="w-full py-2.5 rounded-2xl bg-[#FAF4FD] hover:bg-[#EDE7F6] text-[#441B50] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-[#E6C8F0] cursor-pointer"
          >
            <span>Open Benefits Navigator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
