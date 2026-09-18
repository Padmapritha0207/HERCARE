export interface AiResponseData {
  loopStage: 'Understand' | 'Guide' | 'Recommend' | 'Refer' | 'Prepare' | 'Support';
  summary: string;
  markdownContent: string;
  actionableChecklist?: string[];
  suggestedAction?: {
    label: string;
    type: 'nav_benefits' | 'nav_care' | 'nav_bridge' | 'nav_mentor' | 'open_modal';
    targetId?: string;
  };
  isMedicalEscalation?: boolean;
  medicalReferral?: {
    professionalName: string;
    role: string;
    avatarUrl: string;
    specialty: string;
  };
}

export const presetAiResponses: Record<string, AiResponseData> = {
  'manager_discussion': {
    loopStage: 'Prepare',
    summary: 'Strategic talking points and proposal framework for your return-to-work manager 1-on-1.',
    markdownContent: `### Structured Manager Alignment Framework

Approaching your return conversation with a proactive, solution-oriented plan sets expectations clearly while preserving your wellbeing. Here is a battle-tested structure:

#### 1. Re-engagement & Enthusiasm
* "I am looking forward to reconnecting with the team and re-engaging with our core Q4 roadmap."
* "Before my return on **October 30, 2026**, I wanted to align on realistic transition milestones."

#### 2. Propose a Phased Ramp-Up (Using Acme Flexible Work Policy)
* "Under Acme’s Phased Return Policy, I’d like to propose working an 80% schedule for my first 4 weeks (e.g., 3 days remote, 2 days in-office, core hours 10 AM – 3:30 PM)."
* "This structure allows me to stabilize daycare drop-off routines while ensuring focused sprint delivery."

#### 3. Lactation & Calendar Accommodations
* "I will have two recurring 30-minute private wellness holds on my calendar daily (11:00 AM and 2:30 PM) for milk expression in the Floor 4 wellness room."
* "I will remain available asynchronously on Slack outside those short windows."

#### 4. Project Prioritization & Handoff
* "Who currently holds the context for the design system sprint, and when can we schedule a 30-minute context handoff?"`,
    actionableChecklist: [
      'Submit the 1-page Phased Return Request in Workday (2 weeks before return)',
      'Pre-block your calendar with 30-minute private wellness slots',
      'Schedule a 30-min coffee or virtual call with your manager 10 days before Day 1'
    ],
    suggestedAction: {
      label: 'Explore Acme Flexible Work Policy Details',
      type: 'nav_benefits',
      targetId: 'b-1'
    }
  },

  'pumping_prep': {
    loopStage: 'Guide',
    summary: 'Practical office pumping protocol, flange sizing checklist, and milk storage logistics.',
    markdownContent: `### Workplace Breastfeeding & Pumping Masterplan

Transitioning from nursing at home to pumping at the office is entirely manageable with preparation:

#### 1. The Commuter Gear Checklist
* **Double Electric Pump & Correct Flanges**: Ensure your breast shields match your current postpartum measurement (nipple size changes after 3 months).
* **Insulated Cooler Bag + 2 Ice Packs**: Safe for keeping milk cold during transit (milk is safe at refrigerator temp for up to 4 days).
* **Quick-Clean Steam Bags & Extra Valves**: Reduces sink washing stress at the office.

#### 2. Daily Office Schedule (Example 9 to 5)
* **7:30 AM**: Nurse baby directly before morning departure.
* **10:45 AM (Session 1)**: 20-minute pump in Acme Floor 4 Wellness Room.
* **1:45 PM (Session 2)**: 20-minute pump after lunch.
* **5:30 PM**: Nurse baby at reunion.

#### 3. Acme Facility Perks
Acme provides dedicated, lockable mothers rooms on Floors 2, 4, and 7 with hospital-grade Medela Symphony units (so you only need to carry your personal connector kit).`,
    actionableChecklist: [
      'Measure nipple diameter with a flange ruler to prevent sore tissue',
      'Request automated badge access for Acme Mother’s Wellness Rooms',
      'Conduct a trial pumping session at home using only your commuter kit'
    ],
    suggestedAction: {
      label: 'Book 1-on-1 with Lactation Consultant (Kavita Menon)',
      type: 'nav_care',
      targetId: 'prof-2'
    }
  },

  'benefits_check': {
    loopStage: 'Recommend',
    summary: 'Your tailored Acme Innovations maternity & return benefit summary.',
    markdownContent: `### Key Benefits You Are Eligible For at Acme Innovations

As an employee in Product & Engineering preparing for return, you have access to several sponsored programs:

1. **Flexible Work & Phased Return**: 80% work hours at 100% compensation for your first 4 weeks back, plus up to 3 days remote per week.
2. **Subsidized Daycare Network**: 40% corporate subsidy (up to $450/mo) across 18 partner facilities with Corporate Code \`ACMECRECHE26\`.
3. **Emergency Backup Care**: 10 paid backup care days/year through BrightCare for unexpected caregiver absences.
4. **On-Site Lactation Rooms**: Keycard-protected wellness suites with hospital-grade pumps and private refrigeration.
5. **Confidential Perinatal Mental Health**: 8 free 1-on-1 sessions with licensed perinatal psychologists (100% private from HR).`,
    actionableChecklist: [
      'Review your daycare subsidy eligibility in the Benefits Navigator',
      'Download the BrightCare app for 10-day emergency backup care'
    ],
    suggestedAction: {
      label: 'Open Benefits Navigator',
      type: 'nav_benefits'
    }
  },

  'gyn_questions': {
    loopStage: 'Prepare',
    summary: 'Doctor consultation checklist for your 6-week or return-to-work medical visit.',
    markdownContent: `### High-Yield Questions for Your Gynecologist Visit

Take this structured question list to your obstetrician or gynecologist to ensure full physical clearance:

#### Physical Recovery & Healing
* "Has my C-section scar / perineal tissue healed adequately for prolonged sitting and commuting?"
* "Do I show any signs of diastasis recti (abdominal separation) that requires targeted pelvic physical therapy?"

#### Hormonal & Nutritional Balance
* "Should I continue prenatal vitamins while lactating or adjust my iron and vitamin D supplementation?"
* "What contraception options are optimal while balancing breastfeeding hormones and work routines?"

#### Sleep & Fatigue
* "Can we run a routine CBC panel to rule out postpartum anemia or thyroid fluctuations?"`,
    actionableChecklist: [
      'Print or copy these questions into your phone notes before the visit',
      'Ask your doctor for an official "Fit for Work" clearance letter if required by HR'
    ],
    suggestedAction: {
      label: 'Schedule check-up with Dr. Sunita Rao (OBGYN)',
      type: 'nav_care',
      targetId: 'prof-1'
    }
  },

  'medical_escalation': {
    loopStage: 'Refer',
    isMedicalEscalation: true,
    summary: 'Compassionate emotional support with immediate licensed medical referral.',
    markdownContent: `### Please Know: You Are Not Alone, and This Is Treatable

What you are describing sounds deeply exhausting, and it takes immense courage to put these feelings into words. 

> [!IMPORTANT]
> **Safety Notice**: HERCARE AI is a care navigator and does not provide medical diagnoses or crisis treatment. Persistent sadness, severe insomnia when baby is sleeping, intrusive worries, or overwhelming panic are very common medical symptoms of perinatal mood complications, and they are fully treatable with specialized care.

Your employer (Acme) has provided **8 fully confidential sessions** with licensed perinatal specialists where your identity and clinical discussions are completely protected by the HERCARE Privacy Wall.`,
    actionableChecklist: [
      'Speak with a certified perinatal mental health professional today',
      'Remember that postpartum mood changes are biological and not a reflection of your parenting or strength'
    ],
    medicalReferral: {
      professionalName: 'Dr. Reema Sen, Ph.D.',
      role: 'Licensed Perinatal & Reproductive Psychologist (PMH-C)',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
      specialty: 'Postpartum Mood Disorders, Return-to-Work Anxiety, Identity Shift'
    },
    suggestedAction: {
      label: 'Book Confidential Session with Dr. Reema Sen',
      type: 'nav_care',
      targetId: 'prof-3'
    }
  }
};

export function getAiResponseForQuery(query: string): AiResponseData {
  const lower = query.toLowerCase();

  if (lower.includes('sad') || lower.includes('depress') || lower.includes('panic') || lower.includes('crying') || lower.includes('overwhelm') || lower.includes('insomnia') || lower.includes('mental')) {
    return presetAiResponses['medical_escalation'];
  }

  if (lower.includes('manager') || lower.includes('discuss') || lower.includes('boss') || lower.includes('conversation') || lower.includes('talk')) {
    return presetAiResponses['manager_discussion'];
  }

  if (lower.includes('pump') || lower.includes('breastfeed') || lower.includes('milk') || lower.includes('nurs')) {
    return presetAiResponses['pumping_prep'];
  }

  if (lower.includes('benefit') || lower.includes('policy') || lower.includes('company') || lower.includes('acme') || lower.includes('leave')) {
    return presetAiResponses['benefits_check'];
  }

  if (lower.includes('doctor') || lower.includes('gynecologist') || lower.includes('obgyn') || lower.includes('appointment')) {
    return presetAiResponses['gyn_questions'];
  }

  // Default intelligent navigator response
  return {
    loopStage: 'Guide',
    summary: `Structured guidance regarding "${query}" tailored to your 6-week pre-return timeline.`,
    markdownContent: `### HERCARE Care Navigator Guidance

Thank you for your question. As your care navigator, I help you organize workplace preparations, discover benefits, and connect with qualified specialists.

* **Current Stage Alignment**: At **6 weeks before returning to work**, the primary milestone is establishing childcare stability and testing home routines.
* **Workplace Coordination**: Acme provides flexible hybrid arrangements and on-site lactation support.
* **Professional Support**: If you need personalized medical advice, our verified network of gynecologists, lactation consultants, and therapists is available for 1-on-1 consultations.`,
    actionableChecklist: [
      'Check off your Phase 1 tasks in the Return-to-Work Bridge',
      'Consult with your Return-to-Work Mentor (Ananya Sharma) for peer advice'
    ],
    suggestedAction: {
      label: 'View Return-to-Work Bridge Plan',
      type: 'nav_bridge'
    }
  };
}
