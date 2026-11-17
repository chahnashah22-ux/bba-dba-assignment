export type EducationCategory = 'all' | 'undergraduate' | 'schooling';
export type SkillCategory = 'all' | 'design' | 'analytical' | 'communication';

export interface HighlightMetric {
  label: string;
  value: string;
  detail: string;
}

export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  credential: string;
  category: Exclude<EducationCategory, 'all'>;
  categoryLabel: string;
  highlight?: string;
  summary: string;
}

export interface ExperienceItem {
  id: string;
  index: string;
  discipline: string;
  title: string;
  role: string;
  summary: string;
  tags: string[];
  details: {
    overview: string;
    focusAreas: string[];
    learnings: string;
  };
}

export interface CapabilityItem {
  id: string;
  index: string;
  name: string;
  category: Exclude<SkillCategory, 'all'>;
  categoryLabel: string;
  application: string;
}

export const PROFILE = {
  name: 'Chahna Shah',
  eyebrow: 'Student · Entrepreneur · Creative Thinker',
  email: 'chahnashah22@gmail.com',
  portraitSrc: '/assets/chahna-portrait.jpg',
  portraitAlt: 'Portrait of Chahna Shah',
  heroBio:
    'First-year business student pursuing an Integrated BBA–MBA at Nirma University alongside an online BBA in Digital Business & Entrepreneurship at IIM Bangalore.',
  aboutHeading: 'Curiosity meets creativity.',
  aboutLead:
    "I'm a commerce student with a keen interest in business, entrepreneurship and design. I enjoy turning ideas into meaningful projects, blending analytical thinking with creativity—from working with spreadsheets and presentations to exploring art and building a jewellery brand.",
  aboutPillars: [
    {
      title: 'Analytical Commerce Foundation',
      body: 'Grounded in structured business coursework across Nirma University and IIM Bangalore, translating numbers, spreadsheets, and market research into clear strategic narratives.',
    },
    {
      title: 'Entrepreneurial & Visual Craft',
      body: 'Applying design sensibility to product presentation, brand storytelling, and hands-on art mediums—bridging commercial clarity with thoughtful visual execution.',
    },
  ],
  contactHeading: 'Have something in mind?',
  contactSubcopy:
    "I'm always open to learning, collaborating and exploring new opportunities.",
  footerNote: '© 2026 Chahna Shah · Designed with intention.',
};

export const HERO_HIGHLIGHTS: HighlightMetric[] = [
  {
    value: 'IIM Bangalore',
    label: 'Online BBA (DBE)',
    detail: '2026 – Present · First Year',
  },
  {
    value: 'Nirma University',
    label: 'Integrated BBA–MBA',
    detail: '2026 – Present · First Year',
  },
  {
    value: 'Chaah Jewels',
    label: 'Co-founder',
    detail: 'Branding & Product Presentation',
  },
  {
    value: '97.2%',
    label: 'Class XII Commerce',
    detail: 'Udgam School for Children · 2026',
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'nirma',
    period: '2026 – Present',
    institution: 'Nirma University',
    credential: 'Integrated BBA–MBA · First Year',
    category: 'undergraduate',
    categoryLabel: 'Undergraduate',
    summary:
      'Building core foundations in management principles, business economics, and analytical problem-solving.',
  },
  {
    id: 'iimb',
    period: '2026 – Present',
    institution: 'IIM Bangalore',
    credential: 'Online BBA in Digital Business & Entrepreneurship · First Year',
    category: 'undergraduate',
    categoryLabel: 'Undergraduate',
    summary:
      'Studying digital commerce models, venture creation, and technology-enabled business strategy.',
  },
  {
    id: 'udgam',
    period: 'Class XII · 2026',
    institution: 'Udgam School for Children',
    credential: 'Commerce Stream',
    category: 'schooling',
    categoryLabel: 'Higher Secondary',
    highlight: 'Board Result: 97.2%',
    summary:
      'Completed senior secondary schooling in Commerce with distinction across accountancy, economics, and business studies.',
  },
  {
    id: 'st-kabir',
    period: 'Class X · 2024',
    institution: 'St. Kabir School',
    credential: 'Secondary Schooling',
    category: 'schooling',
    categoryLabel: 'Secondary',
    highlight: 'Board Result: 94.83%',
    summary:
      'Strong academic foundation across core disciplines prior to specializing in Commerce.',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'chaah-jewels',
    index: '01',
    discipline: 'Entrepreneurship',
    title: 'Co-founder · Chaah Jewels',
    role: 'Co-founder & Brand Lead',
    summary:
      'Co-founder of an imitation jewellery brand, exploring brand building, product presentation and creative marketing.',
    tags: ['Branding', 'Entrepreneurship', 'Product Presentation'],
    details: {
      overview:
        'Co-founded Chaah Jewels to explore hands-on venture building in the imitation jewellery space—bringing together aesthetic curation, visual merchandising, and digital audience engagement.',
      focusAreas: [
        'Shaping the brand identity and visual tone for imitation jewellery collections.',
        'Planning product presentation, styling, and photography layouts for digital storefronts.',
        'Experimenting with creative marketing campaigns and customer communication.',
      ],
      learnings:
        'Translated classroom business concepts into day-to-day entrepreneurial practice—balancing design appeal with customer positioning.',
    },
  },
  {
    id: 'social-mobility',
    index: '02',
    discipline: 'Academic Project',
    title: 'Social Mobility Documentary',
    role: 'Research & Visual Storytelling',
    summary:
      'Exploring the concept of social mobility through research, interviews and visual storytelling.',
    tags: ['Research', 'Storytelling', 'Interviews'],
    details: {
      overview:
        'An academic documentary inquiry examining how educational access, economic opportunity, and personal agency shape social mobility across communities.',
      focusAreas: [
        'Conducting background desk research to frame key socio-economic questions.',
        'Preparing structured interview guides and conversing directly with participants.',
        'Editing qualitative narratives into a cohesive visual storytelling arc.',
      ],
      learnings:
        'Strengthened empathetic interviewing, narrative synthesis, and the ability to communicate complex social themes clearly.',
    },
  },
  {
    id: 'art-design',
    index: '03',
    discipline: 'Creative Practice',
    title: 'Art & Design',
    role: 'Independent Practice & Certified Study',
    summary:
      'Interested in sketching, painting, resin art and nail art; completed a certified course in nail art.',
    tags: ['Creativity', 'Design', 'Certified Nail Art'],
    details: {
      overview:
        'An ongoing studio practice across fine and applied craft mediums—cultivating patience, colour sensitivity, and tactile attention to detail.',
      focusAreas: [
        'Sketching and painting studies exploring composition, form, and tonal balance.',
        'Working with resin art to experiment with layering, pigments, and surface finishes.',
        'Completed a certified course in nail art focusing on precision design techniques.',
      ],
      learnings:
        'Direct hands-on craft sharpens visual judgement across everything from slide layouts to jewellery styling.',
    },
  },
];

export const CAPABILITY_ITEMS: CapabilityItem[] = [
  {
    id: 'canva',
    index: '01',
    name: 'Canva',
    category: 'design',
    categoryLabel: 'Design',
    application: 'Brand collateral, social creatives, and clean visual layouts for Chaah Jewels and academic work.',
  },
  {
    id: 'excel',
    index: '02',
    name: 'Microsoft Excel',
    category: 'analytical',
    categoryLabel: 'Analytical',
    application: 'Structured commerce analysis, financial tracking, and organized tabular comparisons.',
  },
  {
    id: 'powerpoint',
    index: '03',
    name: 'PowerPoint',
    category: 'communication',
    categoryLabel: 'Communication',
    application: 'Narrative slide decks that pair quantitative findings with restrained visual pacing.',
  },
  {
    id: 'communication',
    index: '04',
    name: 'Communication',
    category: 'communication',
    categoryLabel: 'Communication',
    application: 'Clear written and spoken expression honed through documentary interviews and team collaboration.',
  },
  {
    id: 'creative-thinking',
    index: '05',
    name: 'Creative Thinking',
    category: 'design',
    categoryLabel: 'Design',
    application: 'Connecting entrepreneurial opportunities with visual ideation, branding, and tactile craft.',
  },
  {
    id: 'presentation-design',
    index: '06',
    name: 'Presentation Design',
    category: 'design',
    categoryLabel: 'Design',
    application: 'Structuring typographic hierarchy, spacing, and visual flow for persuasive business storytelling.',
  },
];
