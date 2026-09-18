import React from 'react';
import { RtwTask } from '../../types';
import { Modal } from '../common/Modal';
import { 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  FileText, 
  ExternalLink, 
  BookOpen, 
  Building2,
  Calendar,
  Heart
} from 'lucide-react';
import { triggerConfetti } from '../../utils/confetti';

interface TaskDetailModalProps {
  task: RtwTask | null;
  onClose: () => void;
  onToggleComplete: (taskId: string) => void;
  onAskAi: (prompt: string) => void;
}

export const TaskDetailModal: React.FC<TaskDetailModalProps> = ({
  task,
  onClose,
  onToggleComplete,
  onAskAi
}) => {
  if (!task) return null;

  const handleToggle = () => {
    onToggleComplete(task.id);
    if (!task.completed) triggerConfetti();
  };

  return (
    <Modal
      isOpen={!!task}
      onClose={onClose}
      title={task.title}
      subtitle={`${task.timeframe} • ${task.category}`}
      maxWidth="max-w-2xl"
    >
      <div className="space-y-6 text-sm text-[#5A5368] text-left">
        {/* Completion status toggle banner */}
        <div className={`p-4 rounded-3xl border flex items-center justify-between transition-all ${
          task.completed 
            ? 'bg-[#F1F8F4] border-[#DCEEE4] text-[#183B2B]' 
            : 'bg-[#FAF7F4] border-[#EBE6DF] text-[#2C2635]'
        }`}>
          <div className="flex items-center gap-3">
            <button
              onClick={handleToggle}
              className="p-1 rounded-full hover:scale-105 transition-transform cursor-pointer"
            >
              {task.completed ? (
                <CheckCircle2 className="w-6 h-6 text-[#265942]" />
              ) : (
                <Circle className="w-6 h-6 text-[#A79DB9] hover:text-[#5C246C]" />
              )}
            </button>
            <div>
              <div className="font-bold text-xs uppercase tracking-wider">
                {task.completed ? 'Status: Completed with Care 🌸' : 'Status: In Preparation'}
              </div>
              <div className="text-xs text-[#756D84]">
                {task.completed ? 'Wonderful progress — you are caring for yourself and baby.' : 'Take your time. Mark this completed whenever you feel ready.'}
              </div>
            </div>
          </div>

          <button
            onClick={handleToggle}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              task.completed 
                ? 'bg-white border border-[#DCEEE4] text-[#265942] hover:bg-[#FAF4FD]' 
                : 'bg-[#301339] hover:bg-[#441B50] text-white shadow-xs'
            }`}
          >
            {task.completed ? 'Reopen Step' : 'Mark Completed'}
          </button>
        </div>

        {/* Overview Summary */}
        <div className="space-y-2">
          <h4 className="font-bold text-[#5C246C] flex items-center gap-2 text-xs uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-[#5C246C]" /> Why This Gentle Step Matters
          </h4>
          <p className="text-xs text-[#5A5368] leading-relaxed bg-[#FAF7F4] p-4 rounded-2xl border border-[#EBE6DF]">
            {task.detailedGuide.summary}
          </p>
        </div>

        {/* Step by step checklist */}
        <div className="space-y-3">
          <h4 className="font-bold text-[#1C1822] text-xs uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#265942]" /> Recommended Action Steps
          </h4>
          <div className="space-y-2">
            {task.detailedGuide.actionSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-[#EBE6DF] text-xs">
                <span className="w-5 h-5 rounded-full bg-[#FAF4FD] text-[#5C246C] border border-[#E6C8F0] font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                  {idx + 1}
                </span>
                <span className="text-[#2C2635] leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Talking points if available */}
        {task.detailedGuide.talkingPoints && task.detailedGuide.talkingPoints.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-bold text-[#5C246C] text-xs uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4" /> Empathetic Talking Points & Suggestions
            </h4>
            <div className="space-y-2">
              {task.detailedGuide.talkingPoints.map((point, idx) => (
                <div key={idx} className="p-3.5 bg-[#FAF4FD] rounded-2xl border border-[#E6C8F0] text-xs text-[#301339] italic">
                  "{point}"
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Company policy snippet if available */}
        {task.detailedGuide.companyPolicySnippet && (
          <div className="p-4 rounded-2xl bg-[#FAF7F4] border border-[#EBE6DF] text-xs space-y-1">
            <div className="font-bold text-[#1C1822] flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#5C246C]" />
              <span>Acme Innovations Policy Reference</span>
            </div>
            <p className="text-[#5A5368] leading-relaxed">
              {task.detailedGuide.companyPolicySnippet}
            </p>
          </div>
        )}

        {/* Action button: Ask HERCARE AI */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={() => onAskAi(`Help me organize my ${task.title} for my return date on October 30, 2026`)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF4FD] hover:bg-[#EDE7F6] text-[#441B50] font-bold text-xs border border-[#E6C8F0] transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#5C246C]" />
            <span>Ask HERCARE AI about this task</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};
