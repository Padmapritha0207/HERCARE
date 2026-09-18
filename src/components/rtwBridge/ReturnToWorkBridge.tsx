import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { RtwTask } from '../../types';
import { 
  Milestone, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  Clock, 
  Bot, 
  HeartHandshake, 
  Gift, 
  UserCheck, 
  ChevronRight, 
  ChevronDown,
  Info,
  Layers,
  Lock,
  Check,
  Heart
} from 'lucide-react';
import { TaskDetailModal } from './TaskDetailModal';
import { ManagerPrepModal } from './ManagerPrepModal';
import { triggerConfetti } from '../../utils/confetti';

export const ReturnToWorkBridge: React.FC = () => {
  const { 
    rtwPhases, 
    toggleTaskCompletion, 
    overallProgress, 
    selectedTaskForDetail, 
    setSelectedTaskForDetail,
    setActiveTab,
    setPreloadedAiPrompt
  } = useApp();

  const [activePhaseTab, setActivePhaseTab] = useState<string>('all');
  const [expandedPhases, setExpandedPhases] = useState<{ [phaseId: string]: boolean }>({
    'phase-1': true,
    'phase-2': true,
    'phase-3': false,
    'phase-4': false
  });
  const [isManagerPrepOpen, setIsManagerPrepOpen] = useState<boolean>(false);

  const togglePhaseExpand = (phaseId: string) => {
    setExpandedPhases(prev => ({ ...prev, [phaseId]: !prev[phaseId] }));
  };

  const handleTaskCheck = (taskId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleTaskCompletion(taskId);
    triggerConfetti();
  };

  const handleAskAi = (prompt: string) => {
    setPreloadedAiPrompt(prompt);
    setActiveTab('ai');
  };

  const filteredPhases = activePhaseTab === 'all' 
    ? rtwPhases 
    : rtwPhases.filter(p => p.id === activePhaseTab);

  return (
    <div className="space-y-6 sm:space-y-8 pb-16 text-left">
      {/* Flagship Calm Banner */}
      <div className="relative bg-[#200C26] text-white rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden">
        {/* Luminous glow */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#5C246C]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5C246C]/50 text-[#E6C8F0] text-xs font-bold border border-[#76308A]/50">
              <span className="text-sm">🌸</span>
              <span>YOUR CALM TRANSITION ROADMAP</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Your Return-to-Work Bridge
            </h1>

            <p className="text-xs sm:text-sm text-[#DDD4EC] leading-relaxed">
              Returning to work is a gradual journey — not a single stressful day. Take it one gentle milestone at a time. We help you prepare routines, agree on flexible hours, and protect your wellbeing.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs text-[#DDD4EC] font-medium">
              <span className="flex items-center gap-1.5 text-[#E6C8F0] font-semibold">
                <Calendar className="w-4 h-4" /> Expected Return: October 30, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 6 Weeks Remaining
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300">
                <Lock className="w-4 h-4" /> 100% Private to You
              </span>
            </div>
          </div>

          {/* Progress Circular Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 flex-shrink-0 min-w-[220px] text-center lg:text-right space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#D09DE0]">
              Roadmap Progress
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white">
              {overallProgress}%
            </div>
            <p className="text-xs text-[#DDD4EC]">
              {rtwPhases.reduce((acc, p) => acc + p.tasks.filter(t => t.completed).length, 0)} of{' '}
              {rtwPhases.reduce((acc, p) => acc + p.tasks.length, 0)} gentle steps completed
            </p>
            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mt-3">
              <div 
                className="bg-gradient-to-r from-[#D09DE0] to-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* HIGHLIGHTED NEXT GENTLE STEP */}
      <div className="bg-gradient-to-r from-[#FAF4FD] via-[#FFFFFF] to-[#FDF4F6] border-2 border-[#E6C8F0] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-2xl bg-[#441B50] text-white flex items-center justify-center font-bold flex-shrink-0 shadow-sm shadow-[#441B50]/20">
            <Sparkles className="w-5 h-5 text-[#D09DE0]" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#5C246C] uppercase tracking-wider">
              <span>Next Recommended Step</span>
              <span className="px-2 py-0.5 rounded-full bg-[#EDE7F6] text-[#441B50] font-bold text-[9px]">
                Supportive Guide
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#120F16] mt-0.5">
              Prepare your flexible-work conversation with your manager
            </h3>
            <p className="text-xs text-[#5A5368] mt-0.5">
              Gentle talking points, 80% phased ramp-up proposals, and private lactation room calendar holds.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsManagerPrepOpen(true)}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#301339] hover:bg-[#441B50] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all flex-shrink-0 cursor-pointer"
        >
          <span>Open Preparation Guide</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Quick Action Navigation Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          onClick={() => handleAskAi('What should I discuss with my manager before returning to work?')}
          className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#EBE6DF] hover:border-[#DDD5CC] transition-all text-left flex items-center gap-3 group shadow-xs cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-[#FAF4FD] text-[#5C246C] flex items-center justify-center flex-shrink-0 border border-[#E6C8F0]">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#1C1822]">Ask HERCARE AI</div>
            <div className="text-[10px] text-[#756D84]">Gentle care guidance</div>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('care')}
          className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#EBE6DF] hover:border-[#DDD5CC] transition-all text-left flex items-center gap-3 group shadow-xs cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-[#FAF4FD] text-[#5C246C] flex items-center justify-center flex-shrink-0 border border-[#E6C8F0]">
            <HeartHandshake className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#1C1822]">Book Support</div>
            <div className="text-[10px] text-[#756D84]">Lactation, OBGYN, PT</div>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('benefits')}
          className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#EBE6DF] hover:border-[#DDD5CC] transition-all text-left flex items-center gap-3 group shadow-xs cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-[#FDF5ED] text-[#7D4C16] flex items-center justify-center flex-shrink-0 border border-[#FBEAD7]">
            <Gift className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#1C1822]">Company Policies</div>
            <div className="text-[10px] text-[#756D84]">Daycare & leave terms</div>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('mentor')}
          className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#EBE6DF] hover:border-[#DDD5CC] transition-all text-left flex items-center gap-3 group shadow-xs cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-[#F1F8F4] text-[#265942] flex items-center justify-center flex-shrink-0 border border-[#DCEEE4]">
            <UserCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#1C1822]">Return Mentor</div>
            <div className="text-[10px] text-[#756D84]">Ananya Sharma (Mom of 2)</div>
          </div>
        </button>
      </div>

      {/* ROADMAP PHASES */}
      <div className="space-y-6 pt-2">
        {/* Phase Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#EBE6DF]">
          <button
            onClick={() => setActivePhaseTab('all')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activePhaseTab === 'all'
                ? 'bg-[#301339] text-white shadow-xs'
                : 'text-[#5A5368] hover:text-[#1C1822] hover:bg-[#F8F6F3]'
            }`}
          >
            All 4 Phases ({rtwPhases.reduce((acc, p) => acc + p.tasks.length, 0)})
          </button>
          {rtwPhases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhaseTab(phase.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activePhaseTab === phase.id
                  ? 'bg-[#5C246C] text-white shadow-xs'
                  : 'text-[#5A5368] hover:text-[#1C1822] hover:bg-[#F8F6F3]'
              }`}
            >
              {phase.timeframe} ({phase.tasks.filter(t => t.completed).length}/{phase.tasks.length})
            </button>
          ))}
        </div>

        {/* The 4 Phases Vertical Roadmap */}
        <div className="space-y-5 pt-2">
          {filteredPhases.map((phase, idx) => {
            const completedCount = phase.tasks.filter(t => t.completed).length;
            const isCurrent = phase.id === 'phase-1';
            const isExpanded = expandedPhases[phase.id] ?? true;

            return (
              <div 
                key={phase.id} 
                className={`rounded-3xl border transition-all ${
                  isCurrent 
                    ? 'bg-white border-[#B268C6] shadow-sm ring-2 ring-[#F3E5F9]' 
                    : 'bg-white/90 border-[#EBE6DF]'
                }`}
              >
                {/* Phase Header Accordion Trigger */}
                <div 
                  onClick={() => togglePhaseExpand(phase.id)}
                  className="p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      {isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#441B50] text-white tracking-wide uppercase">
                          ● Active Now (Today)
                        </span>
                      )}
                      <span className="text-xs font-bold text-[#5C246C]">
                        {phase.timeframe}
                      </span>
                      <span className="text-xs text-[#756D84]">
                        • Phase {idx + 1} of 4
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#120F16]">
                      {phase.title}
                    </h3>

                    <p className="text-xs text-[#5A5368]">
                      {phase.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-[10px] text-[#756D84] uppercase font-bold tracking-wider">Progress</div>
                      <div className="text-xs font-bold text-[#1C1822]">
                        {completedCount} / {phase.tasks.length} ({Math.round((completedCount / (phase.tasks.length || 1)) * 100)}%)
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#FAF7F4] flex items-center justify-center text-[#5A5368]">
                      {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Phase Tasks List (Expandable) */}
                {isExpanded && (
                  <div className="px-5 sm:px-7 pb-6 pt-1 border-t border-[#EBE6DF]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-4">
                      {phase.tasks.map((task) => (
                        <div
                          key={task.id}
                          onClick={() => setSelectedTaskForDetail(task)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-3 group ${
                            task.completed
                              ? 'border-[#DCEEE4] bg-[#F1F8F4]/40 hover:bg-[#F1F8F4]/70'
                              : 'border-[#EBE6DF] hover:border-[#DDD5CC] bg-[#FAF7F4]/40 hover:bg-white'
                          }`}
                        >
                          <div className="space-y-2">
                            <div className="flex items-start justify-between gap-2">
                              <span className="px-2 py-0.5 rounded-md bg-[#EDE7F6] text-[#441B50] text-[10px] font-bold">
                                {task.category}
                              </span>
                              <button
                                onClick={(e) => handleTaskCheck(task.id, e)}
                                className="p-1 rounded-full text-slate-400 hover:text-[#5C246C] transition-colors cursor-pointer"
                                title={task.completed ? 'Mark incomplete' : 'Mark complete'}
                              >
                                {task.completed ? (
                                  <CheckCircle2 className="w-5 h-5 text-[#265942]" />
                                ) : (
                                  <Circle className="w-5 h-5 text-slate-300 hover:text-[#5C246C]" />
                                )}
                              </button>
                            </div>

                            <h4 className={`text-xs sm:text-sm font-bold ${
                              task.completed ? 'line-through text-slate-400' : 'text-[#1C1822] group-hover:text-[#5C246C]'
                            } transition-colors`}>
                              {task.title}
                            </h4>

                            <p className="text-xs text-[#5A5368] leading-relaxed line-clamp-2">
                              {task.description}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-[#EBE6DF]/70 flex items-center justify-between text-xs text-[#756D84]">
                            <span className="text-[11px] font-medium">{task.timeframe}</span>
                            <span className="font-bold text-[#5C246C] text-[11px] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                              Explore Guide <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Task Detail Modal */}
      <TaskDetailModal
        task={selectedTaskForDetail}
        onClose={() => setSelectedTaskForDetail(null)}
        onToggleComplete={toggleTaskCompletion}
        onAskAi={handleAskAi}
      />

      {/* Manager Prep Modal */}
      <ManagerPrepModal
        isOpen={isManagerPrepOpen}
        onClose={() => setIsManagerPrepOpen(false)}
        onAskAi={handleAskAi}
      />
    </div>
  );
};
