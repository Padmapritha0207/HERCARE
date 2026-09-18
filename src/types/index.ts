export type UserStage = 
  | 'Planning pregnancy' 
  | 'Pregnant' 
  | 'On maternity leave' 
  | 'Recently returned to work' 
  | 'Working mother';

export interface UserProfile {
  name: string;
  stage: UserStage;
  expectedReturnDate: string; // e.g. "2026-10-30"
  company: string;
  department: string;
  workArrangement: 'Remote' | 'Hybrid (3 days office)' | 'Hybrid (2 days office)' | 'Full On-site';
  supportNeeds: string[];
  isOnboarded: boolean;
  avatarUrl?: string;
}

export type TaskCategory = 
  | 'Childcare' 
  | 'Work Routine' 
  | 'Health & Feeding' 
  | 'HR & Policy' 
  | 'Mental Wellbeing' 
  | 'Manager Alignment';

export interface RtwTask {
  id: string;
  phaseId: 'phase-1' | 'phase-2' | 'phase-3' | 'phase-4';
  title: string;
  category: TaskCategory;
  timeframe: string;
  completed: boolean;
  description: string;
  detailedGuide: {
    summary: string;
    actionSteps: string[];
    talkingPoints?: string[];
    recommendedResources?: string[];
    companyPolicySnippet?: string;
  };
}

export interface RtwPhase {
  id: 'phase-1' | 'phase-2' | 'phase-3' | 'phase-4';
  title: string;
  subtitle: string;
  timeframe: string;
  badge: string;
  tasks: RtwTask[];
}

export interface Benefit {
  id: string;
  title: string;
  category: 
    | 'Maternity Leave' 
    | 'Health Insurance' 
    | 'Mental Health' 
    | 'Flexible Work' 
    | 'Childcare' 
    | 'Counselling' 
    | 'Wellbeing' 
    | 'Financial Support';
  description: string;
  fullDetails: string;
  eligibility: string;
  howToAccess: string;
  coverageHighlight: string;
  iconName: string;
  relatedAiPrompt: string;
}

export interface Professional {
  id: string;
  name: string;
  role: 
    | 'Gynecologist' 
    | 'Lactation Consultant' 
    | 'Dietitian / Nutritionist' 
    | 'Mental Health Professional' 
    | 'Physiotherapist';
  title: string;
  credentials: string;
  experience: string;
  availability: string;
  consultationModes: ('Video Call' | 'In-Clinic' | 'Secure Chat')[];
  rating: number;
  reviewsCount: number;
  avatarUrl: string;
  bio: string;
  specialties: string[];
  nextAvailableSlots: string[];
}

export interface Appointment {
  id: string;
  professionalId: string;
  professionalName: string;
  role: string;
  date: string;
  time: string;
  mode: 'Video Call' | 'In-Clinic';
  status: 'Confirmed' | 'Completed' | 'Rescheduled';
}

export interface CommunityPost {
  id: string;
  groupId: string;
  authorName: string;
  authorBadge: string;
  timeAgo: string;
  title: string;
  content: string;
  likes: number;
  isLiked: boolean;
  commentsCount: number;
  tags: string[];
}

export interface CommunityGroup {
  id: string;
  name: string;
  description: string;
  membersCount: number;
  isJoined: boolean;
  category: string;
  icon: string;
}

export interface WellbeingCheckin {
  mood: 'Energized' | 'Calm' | 'Overwhelmed' | 'Exhausted' | 'Anxious' | 'Grateful';
  stressLevel: number; // 1 to 5
  sleepHours: number;
  timestamp: string;
  journalSnippet?: string;
}

export interface MentorMessage {
  id: string;
  sender: 'mentor' | 'user';
  text: string;
  timestamp: string;
}

export interface PartnerSharingSettings {
  enabled: boolean;
  shareSupportTasks: boolean;
  shareChildcarePlan: boolean;
  shareAppointmentCalendar: boolean;
  shareReturnPlan: boolean;
  shareHealthNotes: boolean; // default false, explicitly warned
}

export interface EmployerAnalytics {
  eligibleEmployees: number;
  enrolledEmployees: number;
  programUtilizationRate: number;
  resourceEngagementRate: number;
  rtwBridgeParticipationRate: number;
  monthlyTrends: {
    month: string;
    enrolled: number;
    activeBridge: number;
    resourcesUsed: number;
  }[];
  benefitUsageDistribution: {
    category: string;
    engagementPct: number;
    count: number;
  }[];
  rtwRetentionIndex: number;
}
