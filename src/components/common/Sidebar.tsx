import React from 'react';
import { useApp, NavigationTab } from '../../context/AppContext';
import { 
  Home, 
  Milestone, 
  Bot, 
  HeartHandshake, 
  Gift, 
  Smile, 
  UserCheck, 
  Users, 
  MessageSquare, 
  ShieldCheck, 
  Baby,
  BarChart3,
  Calendar,
  Lock
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { activeTab, setActiveTab, role, overallProgress } = useApp();

  const employeeNavItems: { id: NavigationTab; label: string; icon: React.ReactNode; badge?: string; hero?: boolean }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-4 h-4" /> },
    { 
      id: 'bridge', 
      label: 'Return-to-Work Bridge', 
      icon: <Milestone className="w-4 h-4 text-[#5C246C]" />,
      badge: `${overallProgress}%`,
      hero: true 
    },
    { 
      id: 'ai', 
      label: 'HERCARE AI', 
      icon: <Bot className="w-4 h-4 text-[#645381]" />,
      badge: 'Navigator' 
    },
    { id: 'journey', label: 'Pregnancy Journey', icon: <Baby className="w-4 h-4" /> },
    { id: 'care', label: 'Professional Care', icon: <HeartHandshake className="w-4 h-4" /> },
    { id: 'benefits', label: 'Company Benefits', icon: <Gift className="w-4 h-4" /> },
    { id: 'wellbeing', label: 'Wellbeing Hub', icon: <Smile className="w-4 h-4" /> },
    { id: 'mentor', label: 'Return Mentor', icon: <UserCheck className="w-4 h-4" /> },
    { id: 'partner', label: 'Partner Duo', icon: <Users className="w-4 h-4" /> },
    { id: 'community', label: 'Community Circles', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'privacy', label: 'Privacy Center', icon: <ShieldCheck className="w-4 h-4 text-[#265942]" /> },
  ];

  const employerNavItems: { id: NavigationTab; label: string; icon: React.ReactNode; badge?: string; hero?: boolean }[] = [
    { id: 'employer', label: 'Program Overview', icon: <BarChart3 className="w-4 h-4 text-[#441B50]" /> },
    { id: 'privacy', label: 'Privacy Architecture', icon: <ShieldCheck className="w-4 h-4 text-[#265942]" /> },
    { id: 'benefits', label: 'Company Policy Catalog', icon: <Gift className="w-4 h-4" /> },
    { id: 'bridge', label: 'RTW Bridge Roadmap', icon: <Milestone className="w-4 h-4" /> },
  ];

  const currentItems = role === 'employee' ? employeeNavItems : employerNavItems;

  const handleItemClick = (tabId: NavigationTab) => {
    setActiveTab(tabId);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#120F16]/50 backdrop-blur-xs z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed lg:sticky top-0 lg:top-[69px] left-0 h-full lg:h-[calc(100vh-69px)] 
        w-64 bg-[#FFFFFF] border-r border-[#EBE6DF] z-30 
        flex flex-col justify-between py-6 px-3.5 transition-transform duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="space-y-6">
          {/* User Status Card */}
          <div className="px-2">
            <div className={`p-3 rounded-2xl border text-xs ${
              role === 'employee' 
                ? 'bg-[#F6F3FB] border-[#DDD4EC] text-[#301339]' 
                : 'bg-[#EDE7F6] border-[#DDD4EC] text-[#3E3252]'
            }`}>
              <div className="font-bold flex items-center justify-between">
                <span>{role === 'employee' ? 'Employee Portal' : 'Employer HR View'}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-[11px] text-[#756D84] mt-0.5 font-medium">
                {role === 'employee' ? 'Priya Sharma • Acme Innovations' : 'Acme Innovations Corporate'}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <div className="px-3 pb-2 text-[10px] font-bold tracking-wider text-[#948C03] uppercase">
              {role === 'employee' ? 'Maternal & Work Roadmap' : 'Enterprise Analytics'}
            </div>
            {currentItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`
                    w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all group cursor-pointer
                    ${item.hero && !isActive ? 'bg-gradient-to-r from-[#FAF4FD] to-[#FDF4F6] border border-[#E6C8F0] text-[#441B50]' : ''}
                    ${isActive 
                      ? 'bg-[#301339] text-white shadow-sm' 
                      : 'text-[#5A5368] hover:text-[#1C1822] hover:bg-[#F8F6F3]'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span className={`${isActive ? 'text-white' : 'text-[#756D84] group-hover:text-[#301339]'}`}>
                      {item.icon}
                    </span>
                    <span className="truncate">{item.label}</span>
                  </div>

                  {item.badge && (
                    <span className={`
                      text-[10px] font-bold px-2 py-0.5 rounded-full
                      ${isActive 
                        ? 'bg-white/20 text-white' 
                        : item.hero 
                          ? 'bg-[#E6C8F0] text-[#441B50]' 
                          : 'bg-[#EDE7F6] text-[#5A5368]'}
                    `}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Ambient Privacy Guarantee Card */}
        <div className="px-2 pt-4 border-t border-[#EBE6DF]">
          <div className="p-3.5 rounded-2xl bg-[#F8F6F3] border border-[#E2D9CE] text-xs">
            <div className="font-bold text-[#1C1822] flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#265942]" />
              <span>Zero Employer Visibility</span>
            </div>
            <p className="text-[#756D84] text-[11px] mt-1 leading-relaxed">
              Individual clinical notes, AI chats, and mood scores stay 100% confidential from HR.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
