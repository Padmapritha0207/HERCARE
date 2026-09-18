import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ArrowRight, 
  ShieldCheck, 
  Briefcase, 
  HeartHandshake, 
  Sparkles, 
  CheckCircle2, 
  Milestone, 
  Bot, 
  Users, 
  Building2,
  Lock,
  ChevronRight,
  Baby,
  Smile,
  Gift,
  Heart
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { setActiveTab, setRole } = useApp();

  const handleStartJourney = () => {
    setActiveTab('onboarding');
  };

  const handleExploreBridge = () => {
    setActiveTab('bridge');
  };

  const handleOpenEmployer = () => {
    setRole('employer');
    setActiveTab('employer');
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2C2635] selection:bg-[#E6C8F0] selection:text-[#301339] pb-24">
      {/* Top Calming Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-gradient-to-b from-[#F3E5F9]/40 via-[#FAF7F4]/30 to-transparent -z-10 blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT COLUMN: Calming Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Gentle Warmth Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4FD] border border-[#E6C8F0] text-xs font-semibold text-[#441B50] shadow-xs">
              <span className="text-sm">🌸</span>
              <span>A Calm, Employer-Sponsored Sanctuary for Mothers</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#120F16] tracking-tight leading-[1.14]">
              From motherhood to work, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#441B50] via-[#76308A] to-[#B268C6]">
                with support at every step.
              </span>
            </h1>

            {/* Empathetic Subheading */}
            <p className="text-sm sm:text-base lg:text-lg text-[#5A5368] font-normal leading-relaxed max-w-xl">
              You shouldn’t have to balance infant care, emotional recovery, and career expectations alone. HERCARE gives you a calm, structured bridge back to the workplace — with 100% private health data.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={handleStartJourney}
                className="px-7 py-3.5 rounded-2xl bg-[#301339] hover:bg-[#441B50] text-white font-bold text-sm shadow-md shadow-[#301339]/15 hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Start My Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleExploreBridge}
                className="px-6 py-3.5 rounded-2xl bg-white hover:bg-[#FAF7F4] text-[#1C1822] font-semibold text-sm border border-[#EBE6DF] shadow-xs hover:border-[#DDD5CC] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Milestone className="w-4 h-4 text-[#5C246C]" />
                <span>Explore the Bridge</span>
              </button>

              <button
                onClick={handleOpenEmployer}
                className="px-5 py-3.5 rounded-2xl bg-[#EDE7F6]/70 hover:bg-[#EDE7F6] text-[#441B50] font-semibold text-xs border border-[#DDD4EC] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Building2 className="w-4 h-4 text-[#5C246C]" />
                <span>Employer HR Portal</span>
              </button>
            </div>

            {/* Reassuring Pillars */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-xs text-[#756D84] font-medium border-t border-[#EBE6DF]/80">
              <span className="flex items-center gap-1.5 text-[#265942] font-semibold">
                <ShieldCheck className="w-4 h-4" /> 100% Confidential from HR
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#944D5D]" /> Compassionate Specialists
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-[#413B4D]" /> Employer-Paid Benefit
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Connected Ecosystem with Calm Cards (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#FFFFFF]/95 backdrop-blur-md rounded-3xl border border-[#EBE6DF] p-5 sm:p-7 shadow-[0_12px_40px_rgba(48,19,57,0.05)] space-y-4">
              {/* Macro Step Ribbon */}
              <div className="flex items-center justify-between text-xs font-bold text-[#441B50] pb-3 border-b border-[#EBE6DF]">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#76308A]" />
                  <span>A Connected, Caring Ecosystem</span>
                </span>
                <span className="text-[10px] text-[#756D84] font-mono">B2B2C Care Layer</span>
              </div>

              {/* Soothing Flow Line: CARE -> MATERNITY -> RETURN-TO-WORK -> WORKPLACE */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center text-[10px] font-bold">
                <div className="p-2 rounded-xl bg-[#FAF4FD] border border-[#E6C8F0] text-[#441B50]">
                  CARE
                </div>
                <div className="p-2 rounded-xl bg-[#FDF4F6] border border-[#F2C7D1] text-[#61333D]">
                  MATERNITY
                </div>
                <div className="p-2 rounded-xl bg-[#301339] text-white shadow-xs">
                  RETURN BRIDGE
                </div>
                <div className="p-2 rounded-xl bg-[#F1F8F4] border border-[#DCEEE4] text-[#183B2B]">
                  WORKPLACE
                </div>
              </div>

              {/* Floating Cards Array: Wellbeing, Professional Care, Benefits, Childcare */}
              <div className="space-y-2.5 pt-1">
                {/* 1. Return-to-Work Bridge Hero Pill */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#FAF4FD] to-white border-2 border-[#E6C8F0] shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#441B50] text-white flex items-center justify-center font-bold">
                      <Milestone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1C1822]">Return-to-Work Bridge</div>
                      <div className="text-[10px] text-[#756D84]">Structured, calm 4-phase transition</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#E6C8F0] text-[#301339] text-[10px] font-bold">
                    Hero Feature
                  </span>
                </div>

                {/* 2. Professional Care */}
                <div className="p-3 rounded-2xl bg-[#FFFFFF] border border-[#EBE6DF] flex items-center justify-between hover:border-[#DDD5CC] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FAF4FD] text-[#5C246C] flex items-center justify-center">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1C1822]">Professional Care</div>
                      <div className="text-[10px] text-[#756D84]">OBGYNs, IBCLC Lactation, Perinatal Psychologists</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-700 font-semibold">100% Covered</span>
                </div>

                {/* 3. Company Benefits Navigator */}
                <div className="p-3 rounded-2xl bg-[#FFFFFF] border border-[#EBE6DF] flex items-center justify-between hover:border-[#DDD5CC] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FDF5ED] text-[#7D4C16] flex items-center justify-center">
                      <Gift className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1C1822]">Company Policies</div>
                      <div className="text-[10px] text-[#756D84]">80% Phased ramp-up & subsidized daycare</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#7D4C16] font-semibold">Acme Policy</span>
                </div>

                {/* 4. Wellbeing & Childcare */}
                <div className="p-3 rounded-2xl bg-[#FFFFFF] border border-[#EBE6DF] flex items-center justify-between hover:border-[#DDD5CC] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#F1F8F4] text-[#265942] flex items-center justify-center">
                      <Baby className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1C1822]">Childcare & Mental Wellbeing</div>
                      <div className="text-[10px] text-[#756D84]">Daycare trials & confidential emotional check-ins</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#265942] font-semibold">100% Private</span>
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="p-3 bg-[#F8F6F3] rounded-2xl border border-[#E2D9CE] text-[11px] text-[#5A5368] flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#265942] flex-shrink-0" />
                <span>Zero Employer Visibility: Your personal health journey remains your own.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABSTRACT BRIDGE VISUAL METAPHOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#EBE6DF] shadow-xs relative overflow-hidden">
          <div className="max-w-3xl mb-8 text-left">
            <div className="text-xs font-bold text-[#5C246C] tracking-wider uppercase mb-1">
              THE HERCARE BRIDGE
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#120F16]">
              A Gentle Span from Maternity to the Workplace
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5368] mt-2 leading-relaxed">
              Motherhood doesn't end when leave begins, and support shouldn't end when leave ends. We bring together healthcare, wellbeing, benefits, childcare, and workplace planning into one caring journey.
            </p>
          </div>

          {/* Bridge Milestone Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2 text-left">
            {[
              { title: 'Healthcare', desc: 'Obstetrician healing checkups & postpartum clearance', icon: '🩺' },
              { title: 'Wellbeing', desc: 'Confidential emotional checks & guilt-free pacing', icon: '🌿' },
              { title: 'Benefits', desc: 'Maternity leave & gradual 80% return options', icon: '📑' },
              { title: 'Childcare', desc: 'Subsidized crèches & gentle trial separations', icon: '🍼' },
              { title: 'Work Prep', desc: 'Manager conversation talking points & calendar holds', icon: '💼' },
              { title: 'Support', desc: '1-on-1 return mentor & peer mother circles', icon: '🤝' },
            ].map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F4] border border-[#EBE6DF] hover:bg-white hover:border-[#DDD5CC] transition-all space-y-1">
                <div className="text-xl mb-1">{m.icon}</div>
                <div className="font-bold text-xs text-[#1C1822]">{m.title}</div>
                <div className="text-[11px] text-[#756D84] leading-relaxed">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars: CARE, WORK, PRIVACY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#120F16]">
            Caring for Every Dimension
          </h2>
          <p className="text-xs sm:text-sm text-[#5A5368] mt-1.5">
            Engineered to support your physical healing, emotional balance, and career continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Pillar 1: CARE */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EBE6DF] shadow-xs space-y-3.5 text-left">
            <div className="w-11 h-11 rounded-2xl bg-[#FAF4FD] text-[#5C246C] flex items-center justify-center border border-[#E6C8F0]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1C1822]">CARE</h3>
            <p className="text-xs text-[#5A5368] leading-relaxed">
              Navigate pregnancy, postpartum physical recovery, and feeding with verified gynecologists, IBCLC lactation consultants, and therapists.
            </p>
            <ul className="text-xs text-[#756D84] space-y-1.5 pt-2 border-t border-[#EBE6DF]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5C246C] flex-shrink-0" />
                <span>IBCLC Lactation & Pumping Plans</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5C246C] flex-shrink-0" />
                <span>Perinatal Mental Health Sessions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5C246C] flex-shrink-0" />
                <span>Pelvic Floor Physiotherapy</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: WORK */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EBE6DF] shadow-xs space-y-3.5 text-left">
            <div className="w-11 h-11 rounded-2xl bg-[#FDF5ED] text-[#7D4C16] flex items-center justify-center border border-[#FBEAD7]">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1C1822]">WORK</h3>
            <p className="text-xs text-[#5A5368] leading-relaxed">
              Prepare for your return with structured timelines, childcare trials, company policy discovery, and 1-on-1 mentorship from working mothers.
            </p>
            <ul className="text-xs text-[#756D84] space-y-1.5 pt-2 border-t border-[#EBE6DF]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7D4C16] flex-shrink-0" />
                <span>4-Phase Return-to-Work Bridge</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7D4C16] flex-shrink-0" />
                <span>Company Benefit & Daycare Navigator</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7D4C16] flex-shrink-0" />
                <span>Manager Conversation Alignment Prep</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: PRIVACY */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EBE6DF] shadow-xs space-y-3.5 text-left">
            <div className="w-11 h-11 rounded-2xl bg-[#F1F8F4] text-[#265942] flex items-center justify-center border border-[#DCEEE4]">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1C1822]">PRIVACY</h3>
            <p className="text-xs text-[#5A5368] leading-relaxed">
              Your personal health journey stays completely private. Employers only receive anonymized aggregate program statistics. No medical data or chats are ever shared.
            </p>
            <ul className="text-xs text-[#756D84] space-y-1.5 pt-2 border-t border-[#EBE6DF]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#265942] flex-shrink-0" />
                <span>Architectural Zero-Knowledge Privacy Wall</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#265942] flex-shrink-0" />
                <span>De-identified Aggregate Reporting Only</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#265942] flex-shrink-0" />
                <span>User-Controlled Partner Duo Sharing</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gentle Closing Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-3xl bg-[#200C26] text-white p-7 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5C246C]/40 text-[#D09DE0] text-xs font-bold border border-[#76308A]/40">
              <Milestone className="w-3.5 h-3.5" /> Flagship Product Feature
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight">
              Returning to work is a journey — not a single stressful day.
            </h3>
            <p className="text-xs sm:text-sm text-[#DDD4EC] leading-relaxed">
              Experience the Return-to-Work Bridge: A gentle, structured plan designed to give you clarity, calm confidence, and seamless support from 6 weeks before through your first months back.
            </p>
            <div className="pt-2">
              <button
                onClick={handleExploreBridge}
                className="px-6 py-3 rounded-2xl bg-[#9342A9] hover:bg-[#76308A] text-white font-bold text-xs shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Launch the Return-to-Work Bridge</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Personalized Profile Preview Card */}
          <div className="w-full lg:w-96 bg-[#301339]/90 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
              <span className="text-slate-400 font-medium">Personalized Journey Preview</span>
              <span className="text-[#E6C8F0] font-bold">Priya Sharma</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Current Stage:</span>
                <span className="font-semibold text-white">6 Weeks Before Return</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Target Return:</span>
                <span className="font-semibold text-[#D09DE0]">October 30, 2026</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Work Arrangement:</span>
                <span className="font-semibold text-white">Acme Innovations (Hybrid)</span>
              </div>
              <div className="pt-2">
                <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                  <span>Calm Roadmap Progress</span>
                  <span className="text-emerald-400 font-bold">62%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#9342A9] to-emerald-400 h-full w-[62%] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
