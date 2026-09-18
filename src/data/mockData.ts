import { UserProfile, RtwPhase, Benefit, Professional, CommunityGroup, CommunityPost, EmployerAnalytics } from '../types';

export const initialUserProfile: UserProfile = {
  name: 'Priya Sharma',
  stage: 'Pregnant',
  expectedReturnDate: '2026-10-30',
  company: 'Acme Innovations',
  department: 'Product & Engineering',
  workArrangement: 'Hybrid (3 days office)',
  supportNeeds: [
    'Return-to-work preparation',
    'Childcare resources',
    'Company benefits',
    'Mental wellbeing',
    'Workplace support'
  ],
  isOnboarded: true,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
};

export const initialRtwPhases: RtwPhase[] = [
  {
    id: 'phase-1',
    title: 'Phase 1: Foundation & Planning',
    subtitle: 'Setting up the pillars of support before returning',
    timeframe: '6 Weeks Before Return',
    badge: 'Current Phase',
    tasks: [
      {
        id: 'task-1',
        phaseId: 'phase-1',
        title: 'Childcare Planning & Trial Runs',
        category: 'Childcare',
        timeframe: 'Week -6',
        completed: true,
        description: 'Evaluate crèche options, interview nanny/caregivers, and plan 2 half-day transition trials.',
        detailedGuide: {
          summary: 'Transitioning care requires gradual acclimation for both parent and baby. Establishing your childcare routine 4 to 6 weeks ahead prevents first-week emergency panics.',
          actionSteps: [
            'Tour Acme-partnered crèches within 3km of office or home (uses Corporate Subsidy Code: ACMECRECHE26).',
            'Finalize primary caregiver contract and secondary emergency backup provider.',
            'Schedule two 3-hour trial separations where baby stays with the caregiver while you run errands or focus elsewhere.',
            'Create a written emergency care cheat-sheet (feeding intervals, pediatrician contact, soothe routines).'
          ],
          talkingPoints: [
            'How does the caregiver handle naps and bottles when baby is fussy?',
            'What is the caregiver sick-child policy?'
          ],
          companyPolicySnippet: 'Acme provides 40% subsidized spots at partner daycares and 10 days of annual emergency backup care through BrightCare.'
        }
      },
      {
        id: 'task-2',
        phaseId: 'phase-1',
        title: 'Breastfeeding & Pumping Plan',
        category: 'Health & Feeding',
        timeframe: 'Week -5',
        completed: false,
        description: 'Design your workplace pumping schedule, verify office wellness room access, and assemble pump travel kit.',
        detailedGuide: {
          summary: 'Maintaining supply while returning to an office routine requires protected time, quiet spaces, and proper equipment.',
          actionSteps: [
            'Establish 3 scheduled pumping windows corresponding to typical office hours (e.g., 10:30 AM, 1:30 PM, 4:00 PM).',
            'Request badge access to Acme Floor 4 Mothers Room (features hospital-grade Medela Symphony pumps & dedicated milk fridge).',
            'Prepare a commuter kit: portable pump, extra valves/flanges, cooler bag with ice packs, sanitizing steam bags, and a nursing cover.',
            'Introduce bottle feeding with expressed milk if not already established.'
          ],
          talkingPoints: [
            'My calendar will have private 30-minute recurring holds for lactation wellness.',
            'I will keep working asynchronous updates during non-pumping blocks.'
          ],
          companyPolicySnippet: 'Acme Mothers Wellness Rooms are equipped with secure keypad entry, dedicated milk refrigerators, sink with sanitizing supplies, and hospital-grade multi-user pumps.'
        }
      },
      {
        id: 'task-3',
        phaseId: 'phase-1',
        title: 'Holistic Wellbeing & Mental Check-in',
        category: 'Mental Wellbeing',
        timeframe: 'Week -5',
        completed: false,
        description: 'Complete confidential emotional readiness survey and map boundary protection strategies.',
        detailedGuide: {
          summary: 'Guilt, separation anxiety, and cognitive overload are normal experiences. Taking intentional inventory of your feelings helps build resilience.',
          actionSteps: [
            'Log your emotional readiness using the HERCARE Wellbeing radar.',
            'Identify your top 3 non-negotiable personal boundaries (e.g., leaving desk by 5:15 PM for daycare pick-up).',
            'Book an optional confidential check-in with a licensed perinatal counsellor through Acme EAP (100% private, HR never informed).'
          ]
        }
      },
      {
        id: 'task-4',
        phaseId: 'phase-1',
        title: 'Work Routine Dry-Run & Wardrobe Readiness',
        category: 'Work Routine',
        timeframe: 'Week -4',
        completed: false,
        description: 'Test morning wake-up timings, commute logistics, and comfortable post-pregnancy professional clothing.',
        detailedGuide: {
          summary: 'Simulating a return-to-work morning 3-4 weeks ahead eliminates morning friction and reduces stress on Day 1.',
          actionSteps: [
            'Run a full morning dry-run: wake up, get dressed, feed baby, pack pump kit, and check commute timing.',
            'Select 4-5 comfortable, pump-accessible outfits (front zippers, wrap dresses, button-downs).',
            'Sync calendars with your partner or co-parent to divide drop-off and pick-up responsibilities.'
          ]
        }
      },
      {
        id: 'task-5',
        phaseId: 'phase-1',
        title: 'Company Resource & Policy Discovery',
        category: 'HR & Policy',
        timeframe: 'Week -4',
        completed: false,
        description: 'Review Acme Hybrid guidelines, IT laptop reactivations, and employee assistance directory.',
        detailedGuide: {
          summary: 'Knowing your contractual entitlements and workplace support mechanisms ensures you never have to ask permission for basic accommodations.',
          actionSteps: [
            'Review Acme 6-Month Return Flexibility Policy in the Benefits Navigator.',
            'Submit IT ticket for laptop security certificate updates 2 weeks prior to return.',
            'Bookmark the Working Parents Employee Resource Group (ERG) Slack channel.'
          ],
          companyPolicySnippet: 'Employees returning from statutory maternity leave are entitled to a 4-week ramp-up period with 80% work hours at 100% compensation.'
        }
      }
    ]
  },
  {
    id: 'phase-2',
    title: 'Phase 2: Transition Alignment',
    subtitle: 'Coordinating logistics and setting transparent expectations with manager & team',
    timeframe: '2 Weeks Before Return',
    badge: 'Upcoming',
    tasks: [
      {
        id: 'task-6',
        phaseId: 'phase-2',
        title: 'Manager Alignment & Ramp-Up Agreement',
        category: 'Manager Alignment',
        timeframe: 'Week -2',
        completed: false,
        description: 'Schedule a 30-minute informal coffee or virtual call with your reporting manager to align on phased return.',
        detailedGuide: {
          summary: 'A proactive conversation establishes clear realistic goals, eliminates misunderstandings, and shows your leadership while protecting your family balance.',
          actionSteps: [
            'Generate personalized talking points using the HERCARE Manager Conversation Prep Tool.',
            'Propose your Week 1-4 schedule (e.g. 3 days remote / 2 days office with soft ramp-up).',
            'Clarify project priorities and confirm hand-offs from your leave cover.'
          ],
          talkingPoints: [
            'I am excited to re-engage with the core team roadmap.',
            'During my first month, my primary focus will be ramping back up on Q4 priorities while establishing my family logistics.',
            'I have pre-blocked my calendar for lactation breaks between 11-11:30 AM and 3-3:30 PM.'
          ]
        }
      },
      {
        id: 'task-7',
        phaseId: 'phase-2',
        title: 'Day 1 Logistics & Office Badge Clearance',
        category: 'Work Routine',
        timeframe: 'Week -1',
        completed: false,
        description: 'Verify security badge access, desk allocation, and parking or transit arrangements.',
        detailedGuide: {
          summary: 'Ensure physical access and workplace tools are active so Day 1 is smooth and stress-free.',
          actionSteps: [
            'Confirm building badge reactivation with Workplace Operations.',
            'Reserve your preferred hybrid desk near quiet zones if hot-desking.',
            'Confirm daycare drop-off timings and backup contacts.'
          ]
        }
      },
      {
        id: 'task-8',
        phaseId: 'phase-2',
        title: 'Pre-Return Professional Care Check-in',
        category: 'Health & Feeding',
        timeframe: 'Week -1',
        completed: false,
        description: 'Optional consultation with a lactation consultant or pelvic floor therapist before resumption.',
        detailedGuide: {
          summary: 'Address physical recovery concerns, engorgement management during meetings, or ergonomics.',
          actionSteps: [
            'Book a 20-minute virtual check-in with certified lactation consultant Kavita Menon.',
            'Review proper breast pump flange sizing to avoid supply dips when returning to work.'
          ]
        }
      }
    ]
  },
  {
    id: 'phase-3',
    title: 'Phase 3: Soft Landing & Integration',
    subtitle: 'Navigating the first 30 days back at work with structured checkpoints',
    timeframe: 'First 30 Days Back',
    badge: 'On-boarding',
    tasks: [
      {
        id: 'task-9',
        phaseId: 'phase-3',
        title: 'Day 1 Soft Landing & Boundary Protection',
        category: 'Work Routine',
        timeframe: 'Day 1',
        completed: false,
        description: 'Keep day 1 focused on greetings, IT access, and low-pressure inbox triage.',
        detailedGuide: {
          summary: 'Resist the urge to solve 6 months of backlog in 4 hours. Protect your mental stamina.',
          actionSteps: [
            'Set an automated Slack / Email status: "Returned today, triaging correspondence gradually."',
            'Check in with your crèche or caregiver at 12:30 PM for peace of mind.',
            'Leave work on time regardless of unfinished emails.'
          ]
        }
      },
      {
        id: 'task-10',
        phaseId: 'phase-3',
        title: 'End of Week 1 Debrief & Pacing Audit',
        category: 'Work Routine',
        timeframe: 'Week 1 Back',
        completed: false,
        description: 'Reflect on what worked and tweak pumping timings or commute departures.',
        detailedGuide: {
          summary: 'Every mother adjusts her routines based on reality. Treat Week 1 as a live experiment.',
          actionSteps: [
            'Review calendar conflicts that collided with pumping breaks and adjust calendar blocks.',
            'Celebrate making it through Week 1 with your partner or loved one!'
          ]
        }
      },
      {
        id: 'task-11',
        phaseId: 'phase-3',
        title: 'Week 3 Manager Pulse & Workload Realignment',
        category: 'Manager Alignment',
        timeframe: 'Week 3 Back',
        completed: false,
        description: 'A 20-minute follow-up with your manager to recalibrate deadlines and feedback.',
        detailedGuide: {
          summary: 'Ensure expectations remain aligned before ramping up to full project ownership.',
          actionSteps: [
            'Review current sprint velocity and project deadlines.',
            'Confirm if current hybrid distribution is working well or needs slight adjustments.'
          ]
        }
      },
      {
        id: 'task-12',
        phaseId: 'phase-3',
        title: 'First Month Milestone & Peer Circle',
        category: 'Mental Wellbeing',
        timeframe: 'Day 30',
        completed: false,
        description: 'Connect with a fellow working mom or RTW mentor to reflect on your first month back.',
        detailedGuide: {
          summary: 'You have navigated the steepest transition! Reflecting on your accomplishments cements confidence.',
          actionSteps: [
            'Schedule a quick 15-minute coffee chat with your RTW Mentor Ananya Sharma.',
            'Complete your 30-day wellbeing reflection.'
          ]
        }
      }
    ]
  },
  {
    id: 'phase-4',
    title: 'Phase 4: Sustainable Growth & Wellbeing',
    subtitle: 'Thriving as a working mother with ongoing career advancement and family balance',
    timeframe: 'Ongoing (Months 2 - 12)',
    badge: 'Long-term',
    tasks: [
      {
        id: 'task-13',
        phaseId: 'phase-4',
        title: 'Quarterly Career & Promotion Milestone Check',
        category: 'Work Routine',
        timeframe: 'Month 3+',
        completed: false,
        description: 'Keep career growth on track with deliberate goal setting and performance visibility.',
        detailedGuide: {
          summary: 'Returning to work should never stall career aspirations. Maintain proactive goal visibility.',
          actionSteps: [
            'Document key project wins and customer impacts since return.',
            'Discuss Q2 growth goals during your quarterly performance check-in.'
          ]
        }
      },
      {
        id: 'task-14',
        phaseId: 'phase-4',
        title: 'Sustained Perinatal Health & Physical Vitality',
        category: 'Health & Feeding',
        timeframe: 'Month 6+',
        completed: false,
        description: 'Long-term pelvic floor health, weaning nutrition guidance, and ergonomic health.',
        detailedGuide: {
          summary: 'Physical recovery extends well past the first 6 months. Access annual health reviews.',
          actionSteps: [
            'Schedule routine annual gynecological and preventive health screen through company insurance.',
            'Consult nutrition guidance for weaning transition when ready.'
          ]
        }
      },
      {
        id: 'task-15',
        phaseId: 'phase-4',
        title: 'Pay It Forward: Mentoring New Mothers',
        category: 'Manager Alignment',
        timeframe: 'Month 9+',
        completed: false,
        description: 'Optionally join the HERCARE Return Mentor network to support colleagues stepping out on leave.',
        detailedGuide: {
          summary: 'Your lived experience is the most valuable compass for the next mother preparing her leave.',
          actionSteps: [
            'Register as an informal buddy in the Acme Working Parents network.'
          ]
        }
      }
    ]
  }
];

export const mockBenefits: Benefit[] = [
  {
    id: 'b-1',
    title: 'Flexible Work & Phased Return Policy',
    category: 'Flexible Work',
    description: 'Transition smoothly back to employment with hybrid schedules, core hours, and a 4-week gradual ramp-up.',
    fullDetails: 'Acme Innovations supports all new parents returning from maternity or parental leave with a flexible transition plan. Eligible employees can work 80% hours at 100% pay for their initial 4 weeks, choose core working hours (10:00 AM - 3:30 PM), and work 3 days remotely per week for up to 6 months post-return.',
    eligibility: 'All full-time employees with at least 6 months tenure returning from parental leave.',
    howToAccess: 'Submit the simple 1-page Phased Return Request in Workday at least 2 weeks prior to return date. Manager approval is fast-tracked and supported by People & Culture.',
    coverageHighlight: '4-Week 80% Ramp-up at 100% Salary • 3 Days Remote • Core Hours',
    iconName: 'Clock',
    relatedAiPrompt: 'What should I discuss with my manager to request the 4-week gradual ramp-up under our Flexible Work Policy?'
  },
  {
    id: 'b-2',
    title: '26 Weeks Fully Paid Maternity Leave',
    category: 'Maternity Leave',
    description: 'Statutory 26 weeks paid leave with complete job protection, bonus accrual, and seamless benefits continuation.',
    fullDetails: 'Provides 26 calendar weeks of continuous paid maternity leave for up to two surviving children. Salary, health benefits, health savings contributions, and equity vesting remain 100% active throughout the leave period. Annual performance review and increment cycles are calculated with zero penalty for leave duration.',
    eligibility: 'All permanent female employees who have completed 80 days of employment in the preceding 12 months.',
    howToAccess: 'Notify your HR Business Partner at least 8 weeks prior to expected delivery date with medical certification.',
    coverageHighlight: '100% Base Salary + Equity Vesting + Uninterrupted Health Cover',
    iconName: 'ShieldCheck',
    relatedAiPrompt: 'How does bonus calculation work during my 26-week maternity leave period?'
  },
  {
    id: 'b-3',
    title: 'On-Site Lactation Suites & Equipment',
    category: 'Childcare',
    description: 'Private, lockable wellness rooms with Medela Symphony multi-user pumps, dedicated milk fridges, and sanitizers.',
    fullDetails: 'Located on Floors 2, 4, and 7 of Acme headquarters. Each private suite includes an ergonomic armchair, hospital-grade Medela pump, electric breastmilk freezer/fridge with temperature monitoring, microwave steam bags, and ambient lighting. Booking is done via the private Outlook room calendar to guarantee zero walk-in interruptions.',
    eligibility: 'All lactating employees and contractors returning to office.',
    howToAccess: 'Request automated badge access via the HERCARE portal or directly email facilities@acme.com.',
    coverageHighlight: 'Hospital-Grade Pumps • Secure Milk Storage • Private Booking',
    iconName: 'HeartHandshake',
    relatedAiPrompt: 'How do I request badge access and reserve times for the on-site lactation rooms?'
  },
  {
    id: 'b-4',
    title: 'Subsidized Daycare & Crèche Network',
    category: 'Childcare',
    description: '40% corporate subsidy at 18 accredited partner daycare facilities within 5km of Acme offices or residential hubs.',
    fullDetails: 'Acme partners with accredited daycares (Klay, Footprints, LittleElly) equipped with live CCTV streams, pediatric first-aid certified staff, and infant sleep pods. Acme covers 40% of the monthly fee up to $450/month per child until age 6. Direct monthly billing is integrated into corporate payroll.',
    eligibility: 'Full-time employees with children aged 6 months to 6 years.',
    howToAccess: 'Select partner facility on the Acme Benefits portal and enter Corporate Code: ACMECRECHE26 for automated billing discount.',
    coverageHighlight: '40% Monthly Corporate Subsidy • Verified Partner Facilities',
    iconName: 'Baby',
    relatedAiPrompt: 'Which daycares near me are part of the Acme subsidized crèche network?'
  },
  {
    id: 'b-5',
    title: 'Comprehensive Maternity & Newborn Insurance',
    category: 'Health Insurance',
    description: '$10,000 maternity coverage with zero copay, normal & C-section delivery, plus newborn care from Day 1.',
    fullDetails: 'Comprehensive inpatient cover across 4,500 network hospitals. Includes prenatal scans, obstetrician delivery fees, standard private AC room, epidural, and emergency C-section cover. The newborn is automatically enrolled from the exact minute of birth with zero waiting period or congenital exclusion.',
    eligibility: 'Active employees, spouses, and covered newborns under Group Medical Insurance.',
    howToAccess: 'Show Acme Insurance e-Card at admission desk for instant cashless hospitalization.',
    coverageHighlight: '$10,000 Inpatient Limit • Zero Copay • Day-1 Newborn Cover',
    iconName: 'Activity',
    relatedAiPrompt: 'What documents do I need to ensure cashless insurance admission for my delivery?'
  },
  {
    id: 'b-6',
    title: 'Confidential Perinatal Mental Health Sessions',
    category: 'Mental Health',
    description: '8 free 1-on-1 confidential therapy sessions with licensed perinatal psychologists through the Acme EAP.',
    fullDetails: 'Maternal mental health is paramount. Access 8 fully sponsored therapy sessions per calendar year specifically focused on postpartum depression (PPD), postpartum anxiety (PPA), birth trauma, parental identity transition, and return-to-work anxiety. 100% confidential — Acme HR has zero access to session notes, clinician identities, or clinical scores.',
    eligibility: 'Employees and their partners/spouses.',
    howToAccess: 'Book directly via the HERCARE Professional Care tab or call the 24/7 EAP hotline with code ACMEWELL.',
    coverageHighlight: '8 Confidential Therapy Sessions • 100% Private From Employer',
    iconName: 'Smile',
    relatedAiPrompt: 'How can I access my 8 confidential mental health sessions without HR knowing?'
  },
  {
    id: 'b-7',
    title: 'Emergency Backup Care Assistance',
    category: 'Childcare',
    description: '10 fully paid days per calendar year for in-home nanny or center backup care when regular childcare falls through.',
    fullDetails: 'When school closes unexpectedly, nanny calls in sick, or an urgent on-site client meeting occurs, Acme provides up to 10 days of subsidized backup care per year through our national partner BrightCare. In-home background-checked providers can arrive within 2 hours of notification.',
    eligibility: 'All active parents returning to work.',
    howToAccess: 'Book online through the BrightCare app or call the dedicated concierge at 1-800-BRIGHT-CARE.',
    coverageHighlight: '10 Days Annual Backup Care • In-Home or Center-Based',
    iconName: 'Users',
    relatedAiPrompt: 'How do I activate emergency backup care when my regular daycare is closed?'
  },
  {
    id: 'b-8',
    title: 'Pelvic Floor & Ergonomic Health Benefit',
    category: 'Wellbeing',
    description: 'Virtual ergonomic workspace assessment plus $500 annual reimbursement for pelvic floor physical therapy.',
    fullDetails: 'Physical recovery is essential for pain-free sitting and commuting. Benefit includes a 45-minute virtual assessment of your home or office desk ergonomics, followed by $500 reimbursement for licensed pelvic health physiotherapy visits to address diastasis recti, back pain, or core strengthening.',
    eligibility: 'All post-pregnancy employees within 18 months of delivery.',
    howToAccess: 'Schedule ergonomic consult in HERCARE or upload PT invoice in Acme Expense Management under "Wellness".',
    coverageHighlight: '$500 Annual Therapy Reimbursement • Free Home Desk Ergonomics',
    iconName: 'Sparkles',
    relatedAiPrompt: 'How do I claim my $500 pelvic floor therapy reimbursement?'
  }
];

export const mockProfessionals: Professional[] = [
  {
    id: 'prof-1',
    name: 'Dr. Sunita Rao, MD, FACOG',
    role: 'Gynecologist',
    title: 'Senior Obstetrician & Maternal Health Specialist',
    credentials: 'MD (OBGYN), Fellow American College of Obstetricians & Gynecologists',
    experience: '15+ years experience',
    availability: 'Next available: Tomorrow at 2:30 PM',
    consultationModes: ['Video Call', 'In-Clinic'],
    rating: 4.9,
    reviewsCount: 142,
    avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&auto=format&fit=crop&q=80',
    bio: 'Dr. Rao specializes in postpartum physical healing, contraceptive planning post-pregnancy, hormone rebalancing, and medical clearance for workplace reintegration.',
    specialties: ['Postpartum Recovery', 'Pelvic Floor Healing', 'Hormonal Wellness', 'C-Section Care'],
    nextAvailableSlots: ['Tomorrow, 2:30 PM', 'Tomorrow, 4:00 PM', 'Friday, 10:00 AM', 'Friday, 11:30 AM']
  },
  {
    id: 'prof-2',
    name: 'Kavita Menon, IBCLC',
    role: 'Lactation Consultant',
    title: 'Board Certified Lactation Consultant & Infant Nutritionist',
    credentials: 'IBCLC, Certified Infant Feeding Counselor',
    experience: '9+ years experience',
    availability: 'Next available: Today at 5:00 PM',
    consultationModes: ['Video Call', 'In-Clinic'],
    rating: 5.0,
    reviewsCount: 218,
    avatarUrl: 'https://images.unsplash.com/photo-1594824813515-3b98305c4ea2?w=200&auto=format&fit=crop&q=80',
    bio: 'Kavita has guided over 1,200 working mothers through establishing pumping schedules, flange sizing, milk storage protocols for offices, and managing supply dips during travel.',
    specialties: ['Workplace Pumping Plans', 'Flange Fitting', 'Bottle Transition', 'Low Supply Troubleshooting'],
    nextAvailableSlots: ['Today, 5:00 PM', 'Tomorrow, 11:00 AM', 'Tomorrow, 3:30 PM', 'Saturday, 10:00 AM']
  },
  {
    id: 'prof-3',
    name: 'Dr. Reema Sen, Ph.D.',
    role: 'Mental Health Professional',
    title: 'Licensed Perinatal & Reproductive Psychologist',
    credentials: 'Ph.D. Clinical Psychology, Perinatal Mental Health Certified (PMH-C)',
    experience: '12+ years experience',
    availability: 'Next available: Thursday at 11:00 AM',
    consultationModes: ['Video Call'],
    rating: 4.9,
    reviewsCount: 176,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    bio: 'Specializing in maternal transition anxiety, separation guilt, postpartum depression screening, and cognitive reframing for mothers re-entering high-intensity workplaces.',
    specialties: ['Return-to-Work Anxiety', 'Postpartum Mood Disorders', 'Parental Burnout', 'Identity Shift'],
    nextAvailableSlots: ['Thursday, 11:00 AM', 'Thursday, 3:00 PM', 'Friday, 2:00 PM', 'Monday, 1:00 PM']
  },
  {
    id: 'prof-4',
    name: 'Neha Gupta, M.Sc., RD',
    role: 'Dietitian / Nutritionist',
    title: 'Registered Dietitian & Maternal Nutrition Specialist',
    credentials: 'Registered Dietitian (RD), M.Sc. Clinical Nutrition',
    experience: '8+ years experience',
    availability: 'Next available: Friday at 1:30 PM',
    consultationModes: ['Video Call', 'Secure Chat'],
    rating: 4.8,
    reviewsCount: 94,
    avatarUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=200&auto=format&fit=crop&q=80',
    bio: 'Expert in nutrient-dense quick meals for busy working moms, postpartum energy restoration, healthy weight stabilization, and iron/calcium repletion while lactating.',
    specialties: ['Lactation Nutrition', 'Energy Restoration', 'Iron Deficiency', 'Quick Office Meal Prep'],
    nextAvailableSlots: ['Friday, 1:30 PM', 'Saturday, 11:00 AM', 'Monday, 10:30 AM', 'Tuesday, 4:00 PM']
  },
  {
    id: 'prof-5',
    name: 'Pooja Deshmukh, MPT',
    role: 'Physiotherapist',
    title: 'Senior Pelvic Health & Ergonomic Physiotherapist',
    credentials: 'Masters in Physiotherapy (MPT - Women\'s Health), Ergonomics Specialist',
    experience: '11+ years experience',
    availability: 'Next available: Friday at 3:00 PM',
    consultationModes: ['Video Call', 'In-Clinic'],
    rating: 4.9,
    reviewsCount: 131,
    avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&auto=format&fit=crop&q=80',
    bio: 'Focuses on core stability, diastasis recti recovery, desk posture optimization, and safe return to high-impact fitness and long commute tolerance post-delivery.',
    specialties: ['Diastasis Recti', 'Pelvic Floor Strengthening', 'Desk Ergonomics', 'Postpartum Back Pain'],
    nextAvailableSlots: ['Friday, 3:00 PM', 'Saturday, 2:00 PM', 'Monday, 11:00 AM', 'Wednesday, 4:30 PM']
  }
];

export const mockMentor = {
  name: 'Ananya Sharma',
  role: 'Return-to-Work Mentor',
  title: 'Principal Engineering Manager & Mother of 2',
  company: 'Acme Innovations',
  experience: 'Returned to work after two maternity leaves (2022 & 2024)',
  bio: 'Hi Priya! I lead a platform engineering team here at Acme and have been through two maternity leaves. I know firsthand how overwhelming it can feel balancing sprint releases, daycare pickups, and pumping schedules. I am here to share real advice on manager chats, boundary setting, and guilt-free pacing.',
  avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop&q=80',
  topics: ['Manager 1-on-1 Prep', 'Pumping between meetings', 'Handling separation guilt', 'Daycare transition trials'],
  initialMessages: [
    {
      id: 'm-1',
      sender: 'mentor',
      text: 'Hi Priya! Welcome to the Return-to-Work Bridge. I know 6 weeks before returning feels like an in-between time where you\'re thinking about work while still caring for baby 24/7.',
      timestamp: 'Yesterday, 10:15 AM'
    },
    {
      id: 'm-2',
      sender: 'mentor',
      text: 'My biggest advice for this week: do not stress about work emails yet. Just focus on locking down your childcare options and testing your bottle routine. How is your planning going so far?',
      timestamp: 'Yesterday, 10:16 AM'
    }
  ]
};

export const mockCommunityGroups: CommunityGroup[] = [
  {
    id: 'grp-1',
    name: 'Return-to-Work Mothers Circle',
    description: 'For women actively preparing for or in their first 6 months back at the office. Honest advice, schedules, and solidarity.',
    membersCount: 428,
    isJoined: true,
    category: 'Workplace Transition',
    icon: 'Briefcase'
  },
  {
    id: 'grp-2',
    name: 'Pumping & Nursing at Work',
    description: 'Workplace pumping tips, cooler bag hacks, managing executive meetings, and preserving supply while working.',
    membersCount: 312,
    isJoined: true,
    category: 'Feeding & Health',
    icon: 'HeartHandshake'
  },
  {
    id: 'grp-3',
    name: 'First-Time Mothers Sanctuary',
    description: 'Navigating sleep deprivation, identity changes, and newborn milestones with zero judgment.',
    membersCount: 560,
    isJoined: false,
    category: 'Postpartum',
    icon: 'Baby'
  },
  {
    id: 'grp-4',
    name: 'Managing Working Parent Guilt',
    description: 'Mindful coping strategies, boundary defense, and reframing quality time with your family.',
    membersCount: 289,
    isJoined: false,
    category: 'Mental Wellbeing',
    icon: 'Smile'
  }
];

export const mockCommunityPosts: CommunityPost[] = [
  {
    id: 'post-1',
    groupId: 'grp-1',
    authorName: 'Sneha Rao',
    authorBadge: 'Returned 2 Months Ago • Product Lead',
    timeAgo: '3 hours ago',
    title: 'How I handled my first sprint planning after 6 months away',
    content: 'I was terrified I had forgotten how to write specs or that my team had moved on. What saved me: I set a firm 4:30 PM hard stop for daycare pickup right on my Slack status. My manager was super supportive! You don\'t need to prove everything on Day 1.',
    likes: 47,
    isLiked: false,
    commentsCount: 14,
    tags: ['First Month', 'Sprint Planning', 'Boundaries']
  },
  {
    id: 'post-2',
    groupId: 'grp-2',
    authorName: 'Meera Kapur',
    authorBadge: 'Returned 4 Weeks Ago • Design Director',
    timeAgo: 'Yesterday',
    title: 'Medela Symphony room on Floor 4 is a lifesaver — here is my workflow',
    content: 'Just wanted to share for anyone returning soon: you only need to carry your personal flange and bottles! The machine is already there in the wellness room. I do 11:00 AM and 2:30 PM. Book the room in Outlook 3 days ahead!',
    likes: 38,
    isLiked: true,
    commentsCount: 9,
    tags: ['Office Pumping', 'Wellness Rooms', 'Tips']
  }
];

export const mockEmployerAnalytics: EmployerAnalytics = {
  eligibleEmployees: 248,
  enrolledEmployees: 182,
  programUtilizationRate: 73.4,
  resourceEngagementRate: 61.2,
  rtwBridgeParticipationRate: 68.5,
  monthlyTrends: [
    { month: 'Apr', enrolled: 142, activeBridge: 94, resourcesUsed: 78 },
    { month: 'May', enrolled: 154, activeBridge: 106, resourcesUsed: 89 },
    { month: 'Jun', enrolled: 163, activeBridge: 112, resourcesUsed: 98 },
    { month: 'Jul', enrolled: 171, activeBridge: 118, resourcesUsed: 104 },
    { month: 'Aug', enrolled: 177, activeBridge: 121, resourcesUsed: 110 },
    { month: 'Sep', enrolled: 182, activeBridge: 125, resourcesUsed: 115 }
  ],
  benefitUsageDistribution: [
    { category: 'Flexible Work & Phased Return', engagementPct: 88, count: 160 },
    { category: 'Lactation Suites Access', engagementPct: 76, count: 138 },
    { category: 'Childcare & Crèche Subsidy', engagementPct: 69, count: 125 },
    { category: 'Return-to-Work Mentorship', engagementPct: 64, count: 116 },
    { category: 'Confidential EAP Therapy', engagementPct: 41, count: 74 },
    { category: 'Pelvic Floor & Ergonomics', engagementPct: 37, count: 67 }
  ],
  rtwRetentionIndex: 92.4 // 92.4% retention at 12 months post-return
};
