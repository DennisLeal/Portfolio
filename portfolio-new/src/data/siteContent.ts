/**
 * SITE CONTENT - THE SINGLE SOURCE OF TRUTH
 *
 * Edit this file to change any text on your website.
 * When you change a value here, it will update everywhere automatically.
 */

export const siteContent = {
  hero: {
    headline: 'Workforce management systems specialist & AI-assisted app builder',
    about: '10+ years in Philippine contact centers. I started in client support, moved into real-time analysis and real-time monitoring supervision, and now administer the systems a global WFM team depends on: building and maintaining configuration, fixing issues fast, and keeping work from being delayed. I also build and ship apps with AI-assisted coding through Zelven Labs.',
    location: 'Philippines',
    contact: {
      email: 'lealdennis110@gmail.com',
      linkedin: 'https://linkedin.com/in/dennis-l-0b52695b',
      github: 'https://github.com/Papsitv',
    },
    availability: 'Open to remote WFM support and small app builds',
  },

  services: [
    {
      title: 'WFM System Administration',
      description: 'Building and maintaining what a workforce management system runs on - management units, contact types, queues, skills and distribution rules.',
    },
    {
      title: 'New Program Setup',
      description: 'Standing up every entity for a new line of business from scratch, so data flows correctly from the phone system and calls route to the right program.',
    },
    {
      title: 'Global WFM Support',
      description: 'Fast diagnosis of login, MFA/SSO and application errors for WFM teams across regions, including why an upload or report fails, so work isn\'t delayed.',
    },
    {
      title: 'Real-Time Monitoring Support',
      description: 'Hands-on experience as a Real-Time Analyst and monitoring supervisor - watching live contact center activity and escalating issues early.',
    },
    {
      title: 'Migration & Rollout Support',
      description: 'Broadcast communications, user guides, stakeholder meetings and vendor escalation during a global platform migration.',
    },
    {
      title: 'AI-Assisted App Building (Zelven Labs)',
      description: 'Web apps, installable PWAs and Android apps, including PH payment checkout (PayMongo) and automated delivery.',
    },
  ],

  careerPath: [
    {
      role: 'WFM Systems Administrator',
      employer: 'iQor Philippines',
      period: '2022 - Present',
    },
    {
      role: 'Workforce Supervisor, Real-Time Monitoring',
      employer: 'iQor Philippines',
      period: '2016 - 2022',
    },
    {
      role: 'Real-Time Analyst',
      employer: 'iQor Philippines',
      period: '2014 - 2016',
    },
    {
      role: 'Client Support Analyst',
      employer: 'Concur Technologies, Inc.',
      period: '2013 - 2014',
    },
  ],

  certifications: [
    {
      name: 'GitHub Essential Training: 1 The Basics',
      issuer: 'LinkedIn Learning',
      year: '2026',
    },
    {
      name: 'Strategic Prompt Engineering: From Fundamentals to Expertise',
      issuer: 'LinkedIn Learning',
      year: '2026',
    },
    {
      name: 'AI-Powered Content Generation for Communications and Social Media Marketing by Adobe',
      issuer: 'LinkedIn Learning',
      year: '2026',
    },
  ],

  projects: [
    {
      id: 'kcal-log',
      name: 'Kcal Log',
      oneLiner: 'A simple calorie tracker that installs like a native app.',
      problem: 'Tracking nutrition is often tedious and cumbersome with complex apps. I wanted a streamlined way to log calories that felt like a native part of the phone.',
      features: [
        'Daily / weekly / monthly summary with a day-by-day ledger',
        'Food-pattern breakdown by weekday',
        'First-launch guide',
        'Installs like a native app: PWA + signed Android APK',
        '7-day free trial, then ₱79 one-time unlock',
      ],
      builtWith: 'HTML/JavaScript PWA on GitHub Pages, PWABuilder (Android APK), PayMongo checkout, Make.com automation for post-payment delivery',
      status: 'Live',
      links: {
        live: 'https://papsitv.github.io/kcal-log/',
        source: 'https://github.com/Papsitv/kcal-log',
      },
    },
    {
      id: 'zelven-labs',
      name: 'Zelven Labs',
      oneLiner: 'My AI-assisted software studio. I direct AI coding agents to design, build and ship products end to end.',
      problem: 'Traditional software development can be slow and expensive for solo founders. I use AI agents to accelerate the design and build process.',
      features: [
        'Rapid prototyping using AI coding agents',
        'End-to-end product lifecycle management',
        'Deployment of functional PWAs and apps',
        'Integration of local payment gateways',
      ],
      builtWith: 'AI Development Agents, Modern Web Frameworks, GitHub Pages',
      status: 'Active',
      links: {
        live: '#',
        source: '#',
      },
    },
  ],
}
