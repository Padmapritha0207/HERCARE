import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ShieldCheck, 
  Building2, 
  UserCheck, 
  Menu,
  Lock,
  Heart
} from 'lucide-react';

interface HeaderProps {
  onToggleSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const { 
    user, 
    role, 
    setRole, 
    activeTab, 
    setActiveTab 
  } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#EBE6DF] px-4 sm:px-8 py-3.5 transition-all shadow-[0_2px_12px_rgba(44,38,53,0.03)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Brand Identity & Mobile Menu */}
        <div className="flex items-center gap-3">
          {activeTab !== 'landing' && activeTab !== 'onboarding' && (
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 text-[#5A5368] hover:text-[#1C1822] rounded-xl hover:bg-[#F3E5F9]/50 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          <div 
            onClick={() => setActiveTab('landing')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            {/* Calming, warm logo icon */}
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#441B50] via-[#5C246C] to-[#76308A] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
              <span className="text-xl">🌸</span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-[#1C1822] group-hover:text-[#441B50] transition-colors">
                  HERCARE
                </span>
                <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FAF4FD] text-[#5C246C] border border-[#E6C8F0]">
                  Maternal Support Platform
                </span>
              </div>
              <p className="text-[11px] text-[#756D84] hidden md:block leading-none mt-0.5 font-medium">
                From motherhood to work, with support at every step.
              </p>
            </div>
          </div>
        </div>

        {/* Center: Reassuring, Calm Privacy Assurance Pill */}
        <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1F8F4] border border-[#DCEEE4] text-[#183B2B] text-xs font-medium">
          <ShieldCheck className="w-4 h-4 text-[#265942] flex-shrink-0" />
          <span>Your personal health journey is 100% private & confidential from employers</span>
        </div>

        {/* Right: Role Switcher & User Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Subtle Role Switcher Pill */}
          <div className="inline-flex p-1 rounded-2xl bg-[#FAF7F4] border border-[#EBE6DF] text-xs font-semibold">
            <button
              onClick={() => { setRole('employee'); if (activeTab === 'employer') setActiveTab('dashboard'); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                role === 'employee'
                  ? 'bg-white text-[#301339] shadow-xs font-bold'
                  : 'text-[#756D84] hover:text-[#1C1822]'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 text-[#5C246C]" />
              <span className="hidden sm:inline">Mother's Portal</span>
              <span className="sm:hidden">Mother</span>
            </button>
            <button
              onClick={() => { setRole('employer'); setActiveTab('employer'); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                role === 'employer'
                  ? 'bg-white text-[#1C1822] shadow-xs font-bold'
                  : 'text-[#756D84] hover:text-[#1C1822]'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-[#645381]" />
              <span className="hidden sm:inline">Employer HR</span>
              <span className="sm:hidden">HR</span>
            </button>
          </div>

          {/* User Profile Avatar with Calm Privacy Ring */}
          {role === 'employee' ? (
            <div 
              onClick={() => setActiveTab('privacy')}
              className="flex items-center gap-2.5 pl-1 cursor-pointer group"
              title="Click to view your confidential privacy settings"
            >
              <div className="relative">
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-9 h-9 rounded-full object-cover border-2 border-[#E6C8F0] group-hover:border-[#5C246C] transition-colors"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#265942] border-2 border-white" />
              </div>
              <div className="hidden lg:block text-left">
                <div className="text-xs font-bold text-[#1C1822] leading-tight">{user.name}</div>
                <div className="text-[10px] text-[#756D84] leading-tight">{user.company}</div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 pl-1">
              <div className="w-9 h-9 rounded-full bg-[#EDE7F6] border-2 border-[#DDD4EC] flex items-center justify-center text-[#441B50] font-bold text-xs">
                HR
              </div>
              <div className="hidden lg:block text-left">
                <div className="text-xs font-bold text-[#1C1822] leading-tight">People & Culture</div>
                <div className="text-[10px] text-[#756D84] leading-tight">Acme Innovations</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
