import React from 'react';
import { Benefit } from '../../types';
import { Modal } from '../common/Modal';
import { 
  Gift, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  Building2, 
  HelpCircle,
  FileCheck
} from 'lucide-react';

interface BenefitDetailModalProps {
  benefit: Benefit | null;
  onClose: () => void;
  onAskAi: (prompt: string) => void;
}

export const BenefitDetailModal: React.FC<BenefitDetailModalProps> = ({
  benefit,
  onClose,
  onAskAi
}) => {
  if (!benefit) return null;

  return (
    <Modal
      isOpen={!!benefit}
      onClose={onClose}
      title={benefit.title}
      subtitle={`Acme Innovations Benefit • Category: ${benefit.category}`}
      maxWidth="max-w-2xl"
    >
      <div className="space-y-6 text-xs text-[#5A5368] text-left">
        {/* Coverage highlight badge */}
        <div className="p-4 rounded-3xl bg-[#FAF4FD] border border-[#E6C8F0] flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] font-bold text-[#5C246C] uppercase tracking-wider">
              Coverage Highlight
            </span>
            <div className="text-sm font-bold text-[#1C1822] mt-0.5">
              {benefit.coverageHighlight}
            </div>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-[#EDE7F6] flex items-center justify-center text-[#5C246C] font-bold flex-shrink-0">
            <Gift className="w-5 h-5" />
          </div>
        </div>

        {/* Detailed Description */}
        <div className="space-y-2">
          <h4 className="font-bold text-[#1C1822] text-xs uppercase tracking-wider">
            Benefit Overview & Policy Terms
          </h4>
          <p className="text-[#5A5368] leading-relaxed bg-[#FAF7F4] p-4 rounded-2xl border border-[#EBE6DF]">
            {benefit.fullDetails}
          </p>
        </div>

        {/* Eligibility & How to Access */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl border border-[#EBE6DF] bg-white space-y-1.5">
            <div className="font-bold text-[#1C1822] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#265942]" />
              <span>Eligibility</span>
            </div>
            <p className="text-[#5A5368] leading-relaxed">
              {benefit.eligibility}
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-[#EBE6DF] bg-white space-y-1.5">
            <div className="font-bold text-[#1C1822] flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-[#5C246C]" />
              <span>How to Access / Apply</span>
            </div>
            <p className="text-[#5A5368] leading-relaxed">
              {benefit.howToAccess}
            </p>
          </div>
        </div>

        {/* Ask HERCARE AI banner */}
        <div className="p-4 rounded-2xl bg-[#FAF4FD] border border-[#E6C8F0] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="space-y-0.5 text-center sm:text-left">
            <div className="font-bold text-[#301339] text-xs flex items-center gap-1.5 justify-center sm:justify-start">
              <Sparkles className="w-3.5 h-3.5 text-[#5C246C]" />
              <span>Need help drafting a manager proposal or understanding this policy?</span>
            </div>
            <p className="text-[11px] text-[#756D84]">
              HERCARE AI will craft personalized talking points for you in seconds.
            </p>
          </div>

          <button
            onClick={() => onAskAi(benefit.relatedAiPrompt)}
            className="px-4 py-2.5 rounded-xl bg-[#301339] hover:bg-[#441B50] text-white font-bold text-xs flex items-center gap-1.5 transition-colors flex-shrink-0 cursor-pointer"
          >
            <span>Ask HERCARE AI</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </Modal>
  );
};
