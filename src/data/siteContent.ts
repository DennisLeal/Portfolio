/**
 * SITE CONTENT - THE SINGLE SOURCE OF TRUTH
 *
 * Edit this file to change any text on your website.
 * When you change a value here, it will update everywhere automatically.
 */

export type PortfolioProject = {
  id: string
  category: 'wfm' | 'apps' | 'ai'
  categoryLabel: string
  name: string
  oneLiner: string
  features: string[]
  previewItems: string[]
  imageSrc?: string
  imageAlt?: string
  status: string
  links: {
    live?: string
    source?: string
    additionalSource?: string
  }
}

export const siteContent = {
  hero: {
    headline:
      'IEX Administrator | Workforce Management | Real-Time Operations | Technical Troubleshooting',
    about:
      'I am a Workforce Management professional with 10+ years of contact-center experience across Real-Time Analysis, WFM supervision, and NICE IEX administration and support. I investigate IEX, WebStation, RCP, access, upload, configuration, and data issues by checking symptoms and validating relevant settings and records, then document findings and coordinate the appropriate fix or escalation.',
    location: 'Talisay, Negros Occidental, Philippines',
    contact: {
      email: 'lealdennis110@gmail.com',
      linkedin: 'https://linkedin.com/in/dennis-l-0b52695b',
      github: 'https://github.com/DennisLeal',
    },
  },

  services: [
    {
      title: 'NICE IEX Administration & Troubleshooting',
      description:
        'Investigate configuration, upload, forecast, AHT/intraday data, access, and unexpected-behavior issues in NICE IEX; validate findings and coordinate resolution or escalation.',
    },
    {
      title: 'WebStation, RCP & User Access Support',
      description:
        'Troubleshoot Agent and Supervisor WebStation display issues, RCP problems, login and user-access concerns, and coordinate with internal or vendor support when needed.',
    },
    {
      title: 'WFM Configuration & Data Validation',
      description:
        'Validate IEX-related configuration and supporting data to isolate mismatches, investigate upload or schedule-processing issues, and prepare clear escalation findings.',
    },
    {
      title: 'Real-Time WFM Operations',
      description:
        'Experience monitoring intraday staffing, adherence, service-level indicators, agent activity, and operational exceptions, with coordination across WFM and Operations.',
    },
    {
      title: 'Excel Reporting & Workflow Automation',
      description:
        'Build and refine Excel trackers, reporting workflows, validation, dashboards, formulas, PivotTables, and VBA/macros for WFM administration and operational tracking.',
    },
    {
      title: 'Incident Documentation & Stakeholder Support',
      description:
        'Record symptoms, investigation steps, findings, workarounds, and corrective actions; communicate impact and status with WFM, Operations, technical teams, and vendors.',
    },
  ],

  careerPath: [
    {
      role: 'IEX Administrator — WFM Support / Technical Troubleshooting',
      employer: 'iQor Philippines',
      period: 'April 2022 – Present',
    },
    {
      role: 'Workforce Management Supervisor / Real-Time Operations',
      employer: 'iQor Philippines',
      period: 'April 2016 – April 2022',
    },
    {
      role: 'Real-Time Analyst',
      employer: 'iQor Philippines',
      period: 'September 2014 – April 2016',
    },
    {
      role: 'Client Support Analyst / Mobile RTA',
      employer: 'Concur Technologies, Inc.',
      period: 'June 2013 – August 2014',
    },
  ],

  education: [
    {
      name: 'Information & Technology',
      institution: 'Systems Technology Institute (STI), Ormoc',
      year: '2005',
    },
    {
      name: 'Computer Hardware Servicing NC II',
      institution: 'TESDA',
      detail: '40 hours',
    },
  ],

  resumeMetrics: [
    { value: '100+', label: 'NICE technical issues resolved' },
    { value: '95%+', label: 'first-contact resolution for NICE product issues' },
    { value: '30%', label: 'fewer administrative errors after process improvements' },
    { value: '500+', label: 'agents supported in WFM supervision' },
    { value: '25%', label: 'forecast-accuracy improvement from recommendations' },
  ],

  certifications: [
    {
      name: 'GitHub Essential Training: 1 The Basics',
      issuer: 'LinkedIn Learning',
      year: '2026',
      imageSrc: `${import.meta.env.BASE_URL}certifications/linkedin-learning-github-essential-training.png`,
    },
    {
      name: 'Strategic Prompt Engineering: From Fundamentals to Expertise',
      issuer: 'LinkedIn Learning',
      year: '2026',
      imageSrc: `${import.meta.env.BASE_URL}certifications/linkedin-learning-040020.png`,
    },
    {
      name: 'AI-Powered Content Generation for Communications and Social Media Marketing by Adobe',
      issuer: 'LinkedIn Learning',
      year: '2026',
      imageSrc: `${import.meta.env.BASE_URL}certifications/linkedin-learning-040027.png`,
    },
  ],

  projects: [
    {
      id: 'wfm-class-tracking',
      category: 'wfm',
      categoryLabel: 'WFM · Excel',
      name: 'WFM Class & Scenario Tracking',
      oneLiner:
        'An Excel workflow built around SPTR and Class Summary sheets for repeatable WFM training records.',
      features: [
        'Uses structured scoring fields and validation.',
        'Includes a record/clear process for repeatable scenario documentation.',
      ],
      previewItems: ['SPTR', 'Class Summary', 'Scoring', 'Record / Clear'],
      status: 'Practical WFM work',
      links: {},
    },
    {
      id: 'wfm-reporting',
      category: 'wfm',
      categoryLabel: 'WFM · Excel',
      name: 'WFM Reporting & Excel Automation',
      oneLiner:
        'Excel trackers, dashboards, lookup-driven reporting, and automation concepts for real-time and operational workflows.',
      features: [
        'Uses formulas, PivotTables, validation, and conditional formatting.',
        'Includes practical Excel and VBA/macros work for WFM tracking and administration.',
      ],
      previewItems: ['Excel trackers', 'Dashboards', 'PivotTables', 'VBA / macros'],
      status: 'Practical WFM work',
      links: {},
    },
    {
      id: 'kcal-log',
      category: 'apps',
      categoryLabel: 'Personal project · PWA',
      name: 'Kcal Log',
      oneLiner:
        'A personal calorie logging PWA with meal entries, Filipino foods, and daily, weekly, and monthly summaries.',
      features: [
        'Log a food or item with calories, time, and optional notes.',
        'Browse a foods list that includes Filipino dishes and portion amounts.',
        'Set a personal target and review daily, weekly, or monthly totals.',
      ],
      previewItems: [],
      imageSrc: `${import.meta.env.BASE_URL}projects/kcal-log.png`,
      imageAlt: 'Kcal Log meal-entry screen from the supplied project carousel',
      status: 'Live PWA',
      links: {
        live: 'https://dennisleal.github.io/kcal-log/',
        source: 'https://github.com/DennisLeal/kcal-log',
        additionalSource: 'https://github.com/DennisLeal/kcal-log-app',
      },
    },
    {
      id: 'winsentinel',
      category: 'ai',
      categoryLabel: 'Personal project · Prototype',
      name: 'WinSentinel',
      oneLiner:
        'A browser prototype for exploring Windows security signals through selectable scenarios and a 3D dashboard.',
      features: [
        'The public demo uses simulated signals; it is not a live threat monitor.',
        'Includes a verdict view, scenario controls, signal feed, and security suggestions.',
        'The public repository documents separate read-only local Windows observations and their limitations.',
      ],
      previewItems: [],
      imageSrc: `${import.meta.env.BASE_URL}projects/winsentinel.png`,
      imageAlt: 'WinSentinel simulated security dashboard from the supplied project carousel',
      status: 'Prototype · demo signals are simulated',
      links: {
        live: 'https://DennisLeal.github.io/WinSentinel/',
        source: 'https://github.com/DennisLeal/WinSentinel',
      },
    },
    {
      id: 'zelven-labs',
      category: 'ai',
      categoryLabel: 'AI-assisted initiative',
      name: 'Zelven Labs',
      oneLiner:
        'An AI-assisted coding initiative focused on turning product ideas into working software through plain-language direction and iterative testing.',
      features: [
        'Uses AI development agents and GitHub-based workflows.',
        'Focuses on directing, testing, and refining software ideas through iteration.',
      ],
      previewItems: ['Product ideas', 'Plain-language direction', 'AI agents', 'Iterative testing'],
      status: 'Initiative',
      links: {},
    },
    {
      id: 'wfm-portfolio',
      category: 'wfm',
      categoryLabel: 'Public GitHub repository',
      name: 'Workforce Management Portfolio',
      oneLiner:
        'A public HTML portfolio repository presenting my workforce management background and résumé.',
      features: [
        'The repository includes a WFM portfolio page and résumé files.',
        'Its README summarizes forecasting, scheduling, real-time monitoring, and Excel-based WFM work.',
      ],
      previewItems: ['WFM background', 'Real-time operations', 'Excel'],
      status: 'Public repository',
      links: {
        source: 'https://github.com/DennisLeal/workforce-management-portfolio',
      },
    },
  ] as PortfolioProject[],

  testimonials: [
    {
      name: 'Mark Angelo Santiago',
      role: 'Customer / Technical Support Lead • Data Analyst • Product QA',
      date: 'November 22, 2019',
      relationship: 'Worked on different teams',
      quote:
        "I've worked with Dennis since my day one in iQor Dasmariñas and I must say he's one of the best colleague I've ever had a pleasure of working with. His skills in managing/staffing people are one of the best I've seen so far. A highly respected RTA among his peers. Definitely someone that can be an asset to the company wherever he may be. Best of luck on your future endeavors.",
      linkedin: 'https://www.linkedin.com/in/markangelo-ph/',
    },
    {
      name: 'Hernie Tan',
      role: 'Workforce Management Analyst',
      date: 'November 16, 2019',
      relationship: 'Worked on the same team',
      quote:
        'Great Team Player and Fun to Work With. Working with him creates a relaxing kind of vibe in the workplace. With his experience in the Workforce Management indsutry, he is one of the best resource person to reach with. He is reliable and adept in driving the team towards your day to day goal. Always looking forward to work with him for future projects.',
      linkedin: 'https://www.linkedin.com/in/hernietan/',
    },
  ],
}
