import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Benefit } from '../../types';
import { 
  Gift, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck,
  Building2,
  Heart
} from 'lucide-react';
import { BenefitDetailModal } from './BenefitDetailModal';

export const BenefitsNavigator: React.FC = () => {
  const { 
    benefits, 
    selectedBenefit, 
    setSelectedBenefit, 
    setActiveTab, 
    setPreloadedAiPrompt 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Flexible Work',
    'Maternity Leave',
    'Childcare',
    'Health Insurance',
    'Mental Health',
    'Wellbeing'
  ];

  const handleAskAi = (prompt: string) => {
    setSelectedBenefit(null);
    setPreloadedAiPrompt(prompt);
    setActiveTab('ai');
  };

  const filteredBenefits = benefits.filter(b => {
    const matchesCategory = activeCategory === 'All' || b.category === activeCategory;
    const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          b.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 sm:space-y-8 pb-16 text-left">
      {/* Header Banner - Calm Maternal Enterprise Tone */}
      <div className="bg-gradient-to-r from-[#200C26] via-[#441B50] to-[#5C246C] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="space-y-3 max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6C8F0]/20 text-[#E6C8F0] text-xs font-bold border border-[#E6C8F0]/30">
            <Gift className="w-4 h-4 text-[#E6C8F0]" />
            <span>Employer-Sponsored Benefits Catalog</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Your Workplace Support Benefits
          </h1>
          <p className="text-xs sm:text-base text-[#DDD4EC] leading-relaxed">
            Discover sponsored maternity leave, flexible return transition programs, childcare stipends, and mental wellness consultations provided fully by Acme Innovations.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#301339] text-white shadow-xs'
                    : 'bg-white border border-[#EBE6DF] text-[#5A5368] hover:text-[#1C1822] hover:border-[#DDD4EC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72 flex-shrink-0">
            <Search className="w-4 h-4 text-[#756D84] absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search benefits & policies..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#EBE6DF] bg-white text-xs text-[#1C1822] placeholder-[#756D84] focus:border-[#5C246C] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {filteredBenefits.map((benefit) => (
          <div
            key={benefit.id}
            onClick={() => setSelectedBenefit(benefit)}
            className="p-6 rounded-3xl bg-white border border-[#EBE6DF] hover:border-[#E6C8F0] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-1 rounded-full bg-[#FAF4FD] border border-[#E6C8F0] text-[#5C246C] text-[11px] font-bold">
                  {benefit.category}
                </span>
                <span className="text-[11px] font-semibold text-[#265942] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#265942]" /> 100% Sponsored
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#1C1822] group-hover:text-[#441B50] transition-colors">
                {benefit.title}
              </h3>

              <p className="text-xs text-[#5A5368] leading-relaxed line-clamp-2">
                {benefit.description}
              </p>

              <div className="p-3 bg-[#FAF7F4] rounded-2xl text-[11px] text-[#2C2635] font-medium border border-[#EBE6DF]/70">
                <span className="text-[#756D84] font-semibold">Key Support:</span> {benefit.coverageHighlight}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#EBE6DF]/80 flex items-center justify-between text-xs">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAskAi(benefit.relatedAiPrompt);
                }}
                className="text-[11px] font-semibold text-[#5C246C] hover:text-[#301339] flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#76308A]" />
                <span>Explain in plain English</span>
              </button>

              <span className="font-bold text-[#1C1822] group-hover:text-[#5C246C] flex items-center gap-1">
                View Details <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-[#5C246C]" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <BenefitDetailModal
        benefit={selectedBenefit}
        onClose={() => setSelectedBenefit(null)}
        onAskAi={handleAskAi}
      />
    </div>
  );
};
