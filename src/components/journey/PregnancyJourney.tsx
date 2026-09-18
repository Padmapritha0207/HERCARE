import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Baby, 
  Heart, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const PregnancyJourney: React.FC = () => {
  const { user, setActiveTab } = useApp();
  const [selectedStage, setSelectedStage] = useState<string>('trimester-3');

  const journeyStages = [
    {
      id: 'trimester-1',
      name: 'Trimester 1',
      subtitle: 'Weeks 1 – 12',
      focus: 'Gentle adaptations, prenatal rest & energy conservation',
      resources: [
        'Managing morning nausea during office meetings with gentle breathing',
        'Prenatal care milestone questions for your gynecologist',
        'Confidential early leave planning considerations'
      ]
    },
    {
      id: 'trimester-2',
      name: 'Trimester 2',
      subtitle: 'Weeks 13 – 27',
      focus: 'Energy stabilization, anatomy milestones & ergonomic posture setup',
      resources: [
        'Desk ergonomics & lower back support during long meetings',
        'Nourishing snacks for maternal iron repletion and vitality',
        'Gentle crèche and childcare exploration without rush'
      ]
    },
    {
      id: 'trimester-3',
      name: 'Trimester 3',
      subtitle: 'Weeks 28 – 40',
      badge: 'Current Stage for Priya 🌸',
      focus: 'Birth preparation, compassionate leave handover & transition ease',
      resources: [
        'Organizing a smooth work handover document with your team',
        'Creating an evidence-based birth preference plan',
        'Colostrum harvesting and infant feeding fundamentals'
      ]
    },
    {
      id: 'postpartum',
      name: 'Postpartum Care',
      subtitle: 'Months 1 – 3',
      focus: 'Gentle physical healing, emotional space & newborn bonding',
      resources: [
        'The 6-week pelvic floor and physical healing checklist',
        'Normal postpartum emotional shifts vs perinatal mood care',
        'Establishing calming infant sleep and soothing routines'
      ]
    },
    {
      id: 'return-to-work',
      name: 'Return to Work',
      subtitle: '6 Weeks Pre-Return & Beyond',
      hero: true,
      focus: 'The flagship Return-to-Work Bridge roadmap',
      resources: [
        'Childcare trial separation & emergency backup network',
        'Workplace pumping schedule & lactation room booking',
        'Phased 80% ramp-up agreement with reporting manager'
      ]
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 pb-16 text-left">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#200C26] via-[#441B50] to-[#5C246C] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="space-y-3 max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6C8F0]/20 text-[#E6C8F0] text-xs font-bold border border-[#E6C8F0]/30">
            <Baby className="w-4 h-4 text-[#E6C8F0]" />
            <span>Gentle Stage-Based Educational Pathway</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Pregnancy & Postpartum Journey
          </h1>
          <p className="text-xs sm:text-base text-[#DDD4EC] leading-relaxed">
            Educational, non-diagnostic guidance connecting maternal wellbeing to workplace continuity at every milestone — designed to keep you calm and supported.
          </p>
        </div>
      </div>

      {/* Stage Selector Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {journeyStages.map((stage) => {
          const isSelected = selectedStage === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage.id)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#5C246C] bg-[#FAF4FD] shadow-xs ring-2 ring-[#E6C8F0]'
                  : 'border-[#EBE6DF] bg-white hover:border-[#DDD4EC]'
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#756D84]">
                {stage.subtitle}
              </div>
              <div className="text-xs font-bold text-[#1C1822] mt-1">
                {stage.name}
              </div>
              {stage.badge && (
                <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-[#441B50] text-white font-bold text-[9px]">
                  {stage.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Stage Content Detail */}
      {(() => {
        const current = journeyStages.find(s => s.id === selectedStage) || journeyStages[2];
        return (
          <div className="bg-white rounded-3xl border border-[#EBE6DF] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EBE6DF]/70">
              <div>
                <span className="text-xs font-bold text-[#5C246C] uppercase tracking-wider">
                  {current.subtitle}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1C1822] mt-0.5">
                  {current.name} Focus Area
                </h2>
                <p className="text-xs text-[#5A5368] mt-1">
                  {current.focus}
                </p>
              </div>

              {current.hero && (
                <button
                  onClick={() => setActiveTab('bridge')}
                  className="px-5 py-2.5 rounded-xl bg-[#301339] hover:bg-[#441B50] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <span>Open Return-to-Work Bridge</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Resources list */}
            <div className="space-y-3">
              <h3 className="font-bold text-[#1C1822] text-xs uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#5C246C]" />
                <span>Featured Stage Guides (Supportive & Non-Diagnostic)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {current.resources.map((res, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#FAF7F4] border border-[#EBE6DF] hover:bg-[#FAF4FD] hover:border-[#E6C8F0] transition-colors space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-white text-[#5C246C] font-bold flex items-center justify-center border border-[#EBE6DF] text-xs">
                      {i + 1}
                    </div>
                    <div className="font-bold text-xs text-[#1C1822]">{res}</div>
                    <p className="text-[11px] text-[#756D84] leading-relaxed">
                      Gentle, step-by-step guidance curated by certified maternal care specialists.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Diagnostic Disclaimer */}
            <div className="p-4 rounded-2xl bg-[#F8F6F3] border border-[#E2D9CE] text-[11px] text-[#5A5368] flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-[#265942] flex-shrink-0" />
              <span>
                Content provided is strictly for educational preparedness and does not replace medical consultation with your personal obstetrician or physician.
              </span>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
