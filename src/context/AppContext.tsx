import React, { createContext, useContext, useState } from 'react';
import { 
  UserProfile, 
  RtwPhase, 
  RtwTask, 
  Benefit, 
  Professional, 
  Appointment, 
  PartnerSharingSettings, 
  WellbeingCheckin,
  EmployerAnalytics 
} from '../types';
import { 
  initialUserProfile, 
  initialRtwPhases, 
  mockBenefits, 
  mockProfessionals, 
  mockEmployerAnalytics 
} from '../data/mockData';

export type NavigationTab = 
  | 'landing'
  | 'onboarding'
  | 'dashboard'
  | 'journey'
  | 'bridge'
  | 'ai'
  | 'care'
  | 'benefits'
  | 'wellbeing'
  | 'mentor'
  | 'partner'
  | 'community'
  | 'privacy'
  | 'employer';

interface AppContextType {
  user: UserProfile;
  setUser: React.Dispatch<React.SetStateAction<UserProfile>>;
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  role: 'employee' | 'employer';
  setRole: (role: 'employee' | 'employer') => void;
  
  // RTW Bridge state
  rtwPhases: RtwPhase[];
  toggleTaskCompletion: (taskId: string) => void;
  selectedTaskForDetail: RtwTask | null;
  setSelectedTaskForDetail: (task: RtwTask | null) => void;
  overallProgress: number;

  // Benefits state
  benefits: Benefit[];
  selectedBenefit: Benefit | null;
  setSelectedBenefit: (benefit: Benefit | null) => void;

  // Professional Care & Bookings
  professionals: Professional[];
  selectedProfessional: Professional | null;
  setSelectedProfessional: (prof: Professional | null) => void;
  appointments: Appointment[];
  bookAppointment: (apt: Omit<Appointment, 'id'>) => void;

  // Privacy & Partner Settings
  partnerSettings: PartnerSharingSettings;
  updatePartnerSettings: (settings: Partial<PartnerSharingSettings>) => void;

  // Wellbeing
  wellbeing: WellbeingCheckin;
  recordWellbeing: (entry: Partial<WellbeingCheckin>) => void;

  // Employer Analytics
  employerAnalytics: EmployerAnalytics;

  // Preloaded AI Prompt
  preloadedAiPrompt: string;
  setPreloadedAiPrompt: (prompt: string) => void;

  // Toast System
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile>(initialUserProfile);
  const [activeTab, setActiveTab] = useState<NavigationTab>('landing');
  const [role, setRole] = useState<'employee' | 'employer'>('employee');
  const [rtwPhases, setRtwPhases] = useState<RtwPhase[]>(initialRtwPhases);
  const [selectedTaskForDetail, setSelectedTaskForDetail] = useState<RtwTask | null>(null);
  const [benefits] = useState<Benefit[]>(mockBenefits);
  const [selectedBenefit, setSelectedBenefit] = useState<Benefit | null>(null);
  const [professionals] = useState<Professional[]>(mockProfessionals);
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 'apt-0',
      professionalId: 'prof-2',
      professionalName: 'Kavita Menon, IBCLC',
      role: 'Lactation Consultant',
      date: 'Oct 15, 2026',
      time: '3:30 PM',
      mode: 'Video Call',
      status: 'Confirmed'
    }
  ]);
  const [partnerSettings, setPartnerSettings] = useState<PartnerSharingSettings>({
    enabled: false,
    shareSupportTasks: true,
    shareChildcarePlan: true,
    shareAppointmentCalendar: true,
    shareReturnPlan: false,
    shareHealthNotes: false
  });
  const [wellbeing, setWellbeing] = useState<WellbeingCheckin>({
    mood: 'Calm',
    stressLevel: 2,
    sleepHours: 6.5,
    timestamp: 'Today, 9:30 AM',
    journalSnippet: 'Feeling much clearer about daycare trial days. Starting to mentally organize office clothes.'
  });
  const [employerAnalytics] = useState<EmployerAnalytics>(mockEmployerAnalytics);
  const [preloadedAiPrompt, setPreloadedAiPrompt] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const toggleTaskCompletion = (taskId: string) => {
    let completedTitle = '';
    let nowCompleted = false;

    setRtwPhases(prev => 
      prev.map(phase => ({
        ...phase,
        tasks: phase.tasks.map(task => {
          if (task.id === taskId) {
            completedTitle = task.title;
            nowCompleted = !task.completed;
            return { ...task, completed: nowCompleted };
          }
          return task;
        })
      }))
    );

    if (nowCompleted) {
      showToast(`✨ You took a caring step: ${completedTitle}`);
    } else {
      showToast(`Task reopened: ${completedTitle}`);
    }
  };

  const totalTasks = rtwPhases.reduce((acc, p) => acc + p.tasks.length, 0);
  const completedTasks = rtwPhases.reduce((acc, p) => acc + p.tasks.filter(t => t.completed).length, 0);
  const overallProgress = Math.round((completedTasks / (totalTasks || 1)) * 100);

  const bookAppointment = (newApt: Omit<Appointment, 'id'>) => {
    const apt: Appointment = {
      ...newApt,
      id: `apt-${Date.now()}`
    };
    setAppointments(prev => [apt, ...prev]);
    showToast(`🌿 Session confirmed with ${newApt.professionalName} (Private to you)`);
  };

  const updatePartnerSettings = (newSettings: Partial<PartnerSharingSettings>) => {
    setPartnerSettings(prev => {
      const updated = { ...prev, ...newSettings };
      if ('enabled' in newSettings) {
        showToast(newSettings.enabled ? 'Partner Duo support activated' : 'Partner Duo sharing paused');
      }
      return updated;
    });
  };

  const recordWellbeing = (entry: Partial<WellbeingCheckin>) => {
    setWellbeing(prev => ({ ...prev, ...entry, timestamp: 'Just now' }));
    showToast('🌸 Your wellbeing reflection is gently saved (100% confidential)');
  };

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      activeTab,
      setActiveTab,
      role,
      setRole,
      rtwPhases,
      toggleTaskCompletion,
      selectedTaskForDetail,
      setSelectedTaskForDetail,
      overallProgress,
      benefits,
      selectedBenefit,
      setSelectedBenefit,
      professionals,
      selectedProfessional,
      setSelectedProfessional,
      appointments,
      bookAppointment,
      partnerSettings,
      updatePartnerSettings,
      wellbeing,
      recordWellbeing,
      employerAnalytics,
      preloadedAiPrompt,
      setPreloadedAiPrompt,
      toastMessage,
      showToast
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
