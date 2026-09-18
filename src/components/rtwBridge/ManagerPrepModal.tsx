import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Calendar, 
  Briefcase, 
  Clock, 
  HeartHandshake, 
  ArrowRight,
  Heart
} from 'lucide-react';

interface ManagerPrepModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAskAi: (prompt: string) => void;
}

export const ManagerPrepModal: React.FC<ManagerPrepModalProps> = ({
  isOpen,
  onClose,
  onAskAi
}) => {
  const [copied, setCopied] = useState(false);
  const [rampUpOption, setRampUpOption] = useState<'4-week' | '8-week'>('4-week');
  const [remoteDays, setRemoteDays] = useState<number>(3);

  const scriptTemplate = `Hi [Manager Name],

I am looking forward to returning to the team on October 30, 2026, and wanted to proactively align on our transition plan before my resumption date.

Under Acme's Flexible Work & Phased Return Policy, I would like to propose the following structure for my initial ${rampUpOption === '4-week' ? '4 weeks' : '8 weeks'}:

1. Phased Hours: 80% working schedule (focusing on core hours 10:00 AM - 3:30 PM) to ensure high-focus delivery while stabilizing family routines.
2. Hybrid Balance: ${remoteDays} days remote and ${5 - remoteDays} days on-site per week.
3. Protected Wellness Holds: I will have two recurring 30-minute private calendar holds (11:00 AM and 2:30 PM) for lactation wellness in the Floor 4 mother's room. Outside these times, I will be available asynchronously.
4. Priorities: I propose focusing on the Q4 design system migration and delegating secondary ad-hoc reviews during the ramp-up month.

Could we schedule a 20-minute touchpoint next week to finalize this arrangement?

Warm regards,
Priya Sharma`;

  const handleCopy = () => {
    navigator.clipboard.writeText(scriptTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Manager Flexible-Work Conversation Toolkit"
      subtitle="Calm, clear proposal template for your return-to-work 1-on-1 alignment"
      maxWidth="max-w-2xl"
    >
      <div className="space-y-6 text-xs text-[#5A5368] text-left">
        {/* Intro banner */}
        <div className="p-4 rounded-3xl bg-[#FAF4FD] border border-[#E6C8F0] text-[#2C2635] space-y-1">
          <div className="font-bold flex items-center gap-1.5 text-[#441B50]">
            <Sparkles className="w-4 h-4 text-[#76308A]" />
            <span>Gentle, Clear Alignment Builds Mutual Trust</span>
          </div>
          <p className="leading-relaxed text-[#5A5368]">
            Managers appreciate proactive, transparent proposals. Use this structured message grounded directly in Acme Innovations official flexible return guidelines.
          </p>
        </div>

        {/* Customization controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#FAF7F4] rounded-3xl border border-[#EBE6DF]">
          <div>
            <label className="font-bold text-[#1C1822] block mb-1.5">Phased Ramp-up Period</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRampUpOption('4-week')}
                className={`py-2 px-3 rounded-xl font-semibold text-center border transition-all cursor-pointer ${
                  rampUpOption === '4-week' 
                    ? 'bg-white border-[#5C246C] text-[#301339] shadow-xs' 
                    : 'border-[#EBE6DF] bg-white text-[#756D84]'
                }`}
              >
                4-Weeks (Standard)
              </button>
              <button
                type="button"
                onClick={() => setRampUpOption('8-week')}
                className={`py-2 px-3 rounded-xl font-semibold text-center border transition-all cursor-pointer ${
                  rampUpOption === '8-week' 
                    ? 'bg-white border-[#5C246C] text-[#301339] shadow-xs' 
                    : 'border-[#EBE6DF] bg-white text-[#756D84]'
                }`}
              >
                8-Weeks (Extended)
              </button>
            </div>
          </div>

          <div>
            <label className="font-bold text-[#1C1822] block mb-1.5">Weekly Remote Days</label>
            <div className="grid grid-cols-3 gap-2">
              {[2, 3, 4].map((days) => (
                <button
                  key={days}
                  type="button"
                  onClick={() => setRemoteDays(days)}
                  className={`py-2 px-2 rounded-xl font-semibold text-center border transition-all cursor-pointer ${
                    remoteDays === days 
                      ? 'bg-white border-[#5C246C] text-[#301339] shadow-xs' 
                      : 'border-[#EBE6DF] bg-white text-[#756D84]'
                  }`}
                >
                  {days} Days WFH
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Generated email/Slack message */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#1C1822] uppercase tracking-wider text-[11px]">
              Ready-to-Send Proposal Draft
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#301339] hover:bg-[#441B50] text-white font-semibold text-[11px] transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#265942]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Template'}</span>
            </button>
          </div>

          <pre className="p-4 bg-[#200C26] text-[#EDE7F6] rounded-3xl font-mono text-[11px] whitespace-pre-wrap leading-relaxed border border-[#441B50] max-h-60 overflow-y-auto scrollbar-none">
            {scriptTemplate}
          </pre>
        </div>

        {/* Next step prompt */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#EBE6DF]/70">
          <span className="text-[#756D84] text-[11px]">
            Policy Reference: Acme Flexible Work & Phased Return Guidelines
          </span>
          <button
            onClick={() => onAskAi('What should I discuss with my manager before returning to work?')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#441B50] hover:bg-[#301339] text-white font-bold text-xs transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E6C8F0]" />
            <span>Customize with HERCARE AI</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};
