import React, { useState } from 'react';
import { useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';
import { MobileBottomNav } from './components/common/MobileBottomNav';
import { ToastNotification } from './components/common/ToastNotification';

import { LandingPage } from './components/landing/LandingPage';
import { OnboardingWizard } from './components/onboarding/OnboardingWizard';
import { EmployeeDashboard } from './components/dashboard/EmployeeDashboard';
import { ReturnToWorkBridge } from './components/rtwBridge/ReturnToWorkBridge';
import { HercareAi } from './components/ai/HercareAi';
import { BenefitsNavigator } from './components/benefits/BenefitsNavigator';
import { ProfessionalCare } from './components/care/ProfessionalCare';
import { PregnancyJourney } from './components/journey/PregnancyJourney';
import { WellbeingHub } from './components/wellbeing/WellbeingHub';
import { MentorModule } from './components/mentor/MentorModule';
import { PartnerDuo } from './components/partner/PartnerDuo';
import { CommunityHub } from './components/community/CommunityHub';
import { PrivacyCenter } from './components/privacy/PrivacyCenter';
import { EmployerDashboard } from './components/employer/EmployerDashboard';

export const App: React.FC = () => {
  const { activeTab } = useApp();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'landing':
        return <LandingPage />;
      case 'onboarding':
        return <OnboardingWizard />;
      case 'dashboard':
        return <EmployeeDashboard />;
      case 'bridge':
        return <ReturnToWorkBridge />;
      case 'ai':
        return <HercareAi />;
      case 'benefits':
        return <BenefitsNavigator />;
      case 'care':
        return <ProfessionalCare />;
      case 'journey':
        return <PregnancyJourney />;
      case 'wellbeing':
        return <WellbeingHub />;
      case 'mentor':
        return <MentorModule />;
      case 'partner':
        return <PartnerDuo />;
      case 'community':
        return <CommunityHub />;
      case 'privacy':
        return <PrivacyCenter />;
      case 'employer':
        return <EmployerDashboard />;
      default:
        return <LandingPage />;
    }
  };

  const isStandalone = activeTab === 'landing' || activeTab === 'onboarding';

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col font-sans text-[#2C2635] selection:bg-[#E6C8F0] selection:text-[#301339]">
      {/* Global Application Header */}
      <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main Layout */}
      {isStandalone ? (
        <main className="flex-1 w-full">
          {renderActiveScreen()}
        </main>
      ) : (
        <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 gap-6 pb-24 lg:pb-12">
          {/* Responsive Sidebar for desktop & slide-out for mobile */}
          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)} 
          />

          {/* Main Dynamic Viewport */}
          <main className="flex-1 min-w-0">
            {renderActiveScreen()}
          </main>
        </div>
      )}

      {/* Mobile Bottom Navigation Bar (Hidden on desktop, active on mobile) */}
      <MobileBottomNav />

      {/* Global Floating Toast Notification */}
      <ToastNotification />
    </div>
  );
};

export default App;
