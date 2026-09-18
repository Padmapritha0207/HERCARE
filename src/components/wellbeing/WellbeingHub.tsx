import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Smile, 
  Heart, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Calendar,
  Lock
} from 'lucide-react';
import { triggerConfetti } from '../../utils/confetti';

export const WellbeingHub: React.FC = () => {
  const { wellbeing, recordWellbeing, setActiveTab, setSelectedProfessional, professionals } = useApp();

  const [selectedMood, setSelectedMood] = useState(wellbeing.mood);
  const [selectedStress, setSelectedStress] = useState(wellbeing.stressLevel);
  const [savedFeedback, setSavedFeedback] = useState<string>('');

  const moods: { label: any; emoji: string; desc: string }[] = [
    { label: 'Energized', emoji: '✨', desc: 'Feeling capable & ready' },
    { label: 'Calm', emoji: '🌿', desc: 'Centered, steady & present' },
    { label: 'Grateful', emoji: '💛', desc: 'Cherishing small joys' },
    { label: 'Overwhelmed', emoji: '🌊', desc: 'Carrying too much right now' },
    { label: 'Anxious', emoji: '⚡', desc: 'Thinking ahead to work' },
    { label: 'Exhausted', emoji: '🌙', desc: 'Carrying heavy sleep debt' },
  ];

  const handleSaveCheckin = () => {
    recordWellbeing({ mood: selectedMood, stressLevel: selectedStress });
    triggerConfetti();
    setSavedFeedback('Your reflection is gently saved. Your scores are completely private from your employer.');
    setTimeout(() => setSavedFeedback(''), 4000);
  };

  const isDistressed = selectedMood === 'Overwhelmed' || selectedMood === 'Anxious' || selectedStress >= 4;

  return (
    <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto pb-16 text-left">
      {/* Calm Header Banner */}
      <div className="bg-gradient-to-r from-[#200C26] via-[#301339] to-[#441B50] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#E6C8F0] text-xs font-bold border border-white/15">
            <Heart className="w-4 h-4 text-[#E6C8F0]" />
            <span>A Safe, Non-Judgmental Space</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Wellbeing & Emotional Support
          </h1>
          <p className="text-sm sm:text-base text-[#DDD4EC] leading-relaxed">
            Motherhood is full of immense beauty and real emotional fatigue. Take a gentle breath. Your feelings are valid, normal, and completely safe here.
          </p>
        </div>
      </div>

      {/* Strict Privacy Assurance Banner */}
      <div className="p-4 rounded-2xl bg-[#F1F8F4] border border-[#DCEEE4] text-[#183B2B] text-xs flex items-center gap-3">
        <ShieldCheck className="w-5 h-5 text-[#265942] flex-shrink-0" />
        <span>
          <strong>100% Confidential from Employers:</strong> Your daily mood ratings, emotional notes, and stress levels are encrypted and will <strong>never</strong> be shared with Acme Innovations HR or your reporting manager.
        </span>
      </div>

      {/* Daily Check-in Interactive Widget */}
      <div className="bg-white rounded-3xl border border-[#EBE6DF] p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-[#EBE6DF]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C246C]">Daily Emotional Pause</span>
            <h2 className="text-xl font-bold text-[#120F16]">
              How are you feeling in your heart and mind today, Priya?
            </h2>
          </div>
          <span className="text-xs text-[#756D84] font-medium">{wellbeing.timestamp}</span>
        </div>

        {/* Mood Grid */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#413B4D] block">Where is your heart today?</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {moods.map((m) => (
              <button
                key={m.label}
                onClick={() => setSelectedMood(m.label)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                  selectedMood === m.label
                    ? 'border-[#76308A] bg-[#FAF4FD] shadow-xs ring-2 ring-[#E6C8F0]'
                    : 'border-[#EBE6DF] bg-white hover:border-[#DDD5CC]'
                }`}
              >
                <span className="text-2xl">{m.emoji}</span>
                <div>
                  <div className="text-xs font-bold text-[#1C1822]">{m.label}</div>
                  <div className="text-[10px] text-[#756D84]">{m.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stress Radar (1 to 5) */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between text-xs">
            <label className="font-bold text-[#413B4D]">Mental Load & Energy Level:</label>
            <span className="font-extrabold text-[#5C246C] text-sm">Level {selectedStress} / 5</span>
          </div>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedStress(lvl)}
                className={`flex-1 py-3 rounded-xl font-bold text-xs border transition-all cursor-pointer ${
                  selectedStress === lvl
                    ? 'bg-[#441B50] border-[#441B50] text-white shadow-xs'
                    : 'bg-[#FAF7F4] border-[#EBE6DF] text-[#5A5368] hover:bg-slate-100'
                }`}
              >
                {lvl} {lvl === 1 ? '(Restful)' : lvl === 5 ? '(Overloaded)' : ''}
              </button>
            ))}
          </div>
        </div>

        {/* Save button */}
        <div className="flex items-center justify-between pt-4 border-t border-[#EBE6DF]">
          {savedFeedback && (
            <span className="text-xs text-[#265942] font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> {savedFeedback}
            </span>
          )}
          <div className="ml-auto">
            <button
              onClick={handleSaveCheckin}
              className="px-6 py-2.5 rounded-2xl bg-[#301339] hover:bg-[#441B50] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
            >
              Save Confidential Check-in
            </button>
          </div>
        </div>
      </div>

      {/* Safe Professional Support Escalation Pathway */}
      {isDistressed && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#FAF4FD] via-[#FDF4F6] to-white border-2 border-[#E6C8F0] shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 text-[#5C246C] font-bold text-sm">
            <Heart className="w-5 h-5 text-[#944D5D]" />
            <span>We hear you, and you don't have to carry this alone</span>
          </div>
          <p className="text-xs text-[#413B4D] leading-relaxed">
            Transitioning back to work while caring for your baby is emotionally demanding. You are doing an incredible job. Under Acme’s EAP benefit, you have **8 free confidential sessions** with licensed perinatal clinical psychologists who specialize in maternal transition anxiety.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                const doc = professionals.find(p => p.role === 'Mental Health Professional');
                if (doc) setSelectedProfessional(doc);
                setActiveTab('care');
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-[#441B50] hover:bg-[#301339] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <span>Connect with Dr. Reema Sen (Perinatal Psychologist)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] text-[#756D84] font-medium">100% Private • Zero Employer Record</span>
          </div>
        </div>
      )}

      {/* Calming Psychoeducation Articles */}
      <div className="bg-white rounded-3xl border border-[#EBE6DF] p-6 sm:p-8 space-y-4 shadow-xs">
        <h3 className="font-bold text-base text-[#120F16] flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#5C246C]" />
          <span>Gentle Guides on Maternal Transitions</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-[#FAF7F4] border border-[#EBE6DF] space-y-1.5">
            <div className="font-bold text-[#1C1822]">Overcoming "Working Mom Guilt"</div>
            <p className="text-[#5A5368] leading-relaxed text-[11px]">
              How to gently reframe separation anxiety: Research proves maternal workforce participation expands infant social and cognitive resilience.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7F4] border border-[#EBE6DF] space-y-1.5">
            <div className="font-bold text-[#1C1822]">Setting Healthy Boundaries at Work</div>
            <p className="text-[#5A5368] leading-relaxed text-[11px]">
              Practical tactics for leaving the office on time without feeling apologetic, preserving evening bonding rituals with your baby.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
