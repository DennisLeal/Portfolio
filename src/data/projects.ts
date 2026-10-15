export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  /** Optional - omit for gradient placeholder cards */
  imageSrc?: string
  /** CSS object-position override. Defaults to 'top center'. */
  imagePosition?: string
  /** External brand color - not a site token. Passed via --app-color inline prop. */
  accentColor: string
  stats: AppStat[]
  badge: string
}

/** @deprecated use AppProject */
export type MobileApp = AppProject

/**
 * Your apps. Every value is a PLACEHOLDER. Screenshots live in
 * public/placeholders/ - swap in your own (960x514 works well).
 */
const STATS: AppStat[] = [
  { value: '1', label: 'Project' },
  { value: '100%', label: 'Completion' },
]

export const mobileApps: MobileApp[] = [
  {
    name: 'Kcal Log',
    tagline: 'AI-assisted personal calorie logging.',
    description: 'An innovative personal calorie logging application developed with AI assistance to simplify health tracking and nutritional monitoring.',
    imageSrc: '/placeholders/app-1.jpg',
    imagePosition: '50% 30%',
    accentColor: '#2563EB',
    stats: STATS,
    badge: 'AI Tool',
  },
]

export const webApps: AppProject[] = [
  {
    name: 'Zelven Labs',
    tagline: 'AI development initiative.',
    description: 'A software initiative utilizing advanced AI development agents to build scalable and efficient software solutions.',
    accentColor: '#0EA5E9',
    stats: STATS,
    badge: 'Innovation',
  },
  {
    name: 'WFM Tracking Workflow',
    tagline: 'Excel-based training logs.',
    description: 'Created a streamlined Excel-based tracking workflow specifically for training logs to increase visibility and reporting accuracy.',
    accentColor: '#16A34A',
    stats: STATS,
    badge: 'WFM',
  },
  {
    name: 'WFM Reporting Dashboard',
    tagline: 'Lookup-driven reporting.',
    description: 'Developed high-impact lookup-driven reporting and dashboards for real-time workforce management analytics.',
    accentColor: '#F59E0B',
    stats: STATS,
    badge: 'Analytics',
  },
]
