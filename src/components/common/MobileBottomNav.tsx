import React, { useState } from 'react';
import { useApp, NavigationTab } from '../../context/AppContext';
import { 
  Home, 
  Milestone, 
  Bot, 
  HeartHandshake, 
  MoreHorizontal, 
  Gift, 
  Smile, 
  UserCheck, 
  ShieldCheck, 
  Building2,
  Baby,
  Users,
  MessageSquare,
  X
} from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { activeTab, setActiveTab, role, setRole, overallProgress } = useApp();
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  if (activeTab === 'landing' || activeTab === 'onboarding') {
    return null;
  }

  const navButtons = [
    { id: 'dashboard' as NavigationTab, label: 'Home', icon: <Home className="w-5 h-5" /> },
    { 
      id: 'bridge' as NavigationTab, 
      label: 'Bridge', 
      icon: <Milestone className="w-5 h-5" />, 
      badge: `${overallProgress}%` 
    },
    { id: 'ai' as NavigationTab, label: 'AI Guide', icon: <Bot className="w-5 h-5" /> },
    { id: 'care' as NavigationTab, label: 'Care', icon: <HeartHandshake className="w-5 h-5" /> },
  ];

  const moreItems: { id: NavigationTab; label: string; icon: React.ReactNode; subtitle?: string }[] = [
    { id: 'journey', label: 'Pregnancy Journey', icon: <Baby className="w-4 h-4 text-[#5C246C]" />, subtitle: 'Stage guidance' },
    { id: 'benefits', label: 'Company Benefits', icon: <Gift className="w-4 h-4 text-[#7D4C16]" />, subtitle: 'Acme sponsored' },
    { id: 'wellbeing', label: 'Wellbeing Hub', icon: <Smile className="w-4 h-4 text-[#265942]" />, subtitle: 'Confidential mood' },
    { id: 'mentor', label: 'Return Mentor', icon: <UserCheck className="w-4 h-4 text-[#441B50]" />, subtitle: 'Peer 1-on-1' },
    { id: 'partner', label: 'Partner Duo', icon: <Users className="w-4 h-4 text-[#5C246C]" />, subtitle: 'Co-parenting sync' },
    { id: 'community', label: 'Community Circles', icon: <MessageSquare className="w-4 h-4 text-[#76308A]" />, subtitle: 'Mom solidarity' },
    { id: 'privacy', label: 'Privacy Center', icon: <ShieldCheck className="w-4 h-4 text-[#265942]" />, subtitle: 'Zero HR visibility' },
    { id: 'employer', label: 'Employer HR Portal', icon: <Building2 className="w-4 h-4 text-[#301339]" />, subtitle: 'Aggregate metrics' },
  ];

  const handleSelectTab = (tab: NavigationTab) => {
    if (tab === 'employer') {
      setRole('employer');
    } else {
      setRole('employee');
    }
    setActiveTab(tab);
    setIsMoreOpen(false);
  };

  return (
    <>
      {/* Slide-up "More" sheet for mobile */}
      {isMoreOpen && (
        <div className="fixed inset-0 z-50 bg-[#120F16]/50 backdrop-blur-xs flex flex-col justify-end lg:hidden">
          <div className="bg-white rounded-t-3xl p-6 space-y-4 border-t border-[#EBE6DF] shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#EBE6DF]/70">
              <div className="text-left">
                <span className="font-bold text-sm text-[#1C1822] block">All Support Modules</span>
                <span className="text-[11px] text-[#756D84]">Gentle, confidential support whenever you need</span>
              </div>
              <button 
                onClick={() => setIsMoreOpen(false)}
                className="p-1.5 rounded-xl bg-[#FAF7F4] text-[#756D84] hover:text-[#1C1822] cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {moreItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className="flex flex-col p-3 rounded-2xl bg-[#FAF7F4] hover:bg-[#FAF4FD] border border-[#EBE6DF]/70 hover:border-[#E6C8F0] text-left transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-1">
                    {item.icon}
                    <span className="font-bold text-xs text-[#1C1822] truncate">{item.label}</span>
                  </div>
                  {item.subtitle && (
                    <span className="text-[10px] text-[#756D84] pl-6 truncate">{item.subtitle}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fixed bottom nav bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#EBE6DF] px-3 py-1.5 flex items-center justify-around lg:hidden shadow-[0_-4px_20px_rgba(44,38,53,0.06)]">
        {navButtons.map((btn) => {
          const isActive = activeTab === btn.id;
          return (
            <button
              key={btn.id}
              onClick={() => handleSelectTab(btn.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all relative cursor-pointer ${
                isActive 
                  ? 'text-[#441B50] font-bold' 
                  : 'text-[#756D84] hover:text-[#1C1822] font-medium'
              }`}
            >
              <div className="relative">
                {btn.icon}
                {btn.badge && (
                  <span className="absolute -top-1 -right-2.5 px-1.5 py-0.2 bg-[#441B50] text-white text-[9px] font-bold rounded-full">
                    {btn.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-1">{btn.label}</span>
            </button>
          );
        })}

        {/* More Button */}
        <button
          onClick={() => setIsMoreOpen(true)}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all cursor-pointer ${
            isMoreOpen ? 'text-[#441B50] font-bold' : 'text-[#756D84] hover:text-[#1C1822] font-medium'
          }`}
        >
          <MoreHorizontal className="w-5 h-5" />
          <span className="text-[10px] mt-1">More</span>
        </button>
      </nav>
    </>
  );
};
