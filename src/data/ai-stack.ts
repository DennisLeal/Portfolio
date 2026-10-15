/**
 * The systems tree shown in the Projects "systems" pop-up (and as chips on
 * Home and in the Projects bento card).
 */

import {
  Sparkle,
  Coffee,
  Robot,
  Article,
  FilmSlate,
  UsersThree,
  Database,
  SlackLogo,
  MagnifyingGlass,
  ChatCircleDots,
  FlowArrow,
  PhoneCall,
  Browser,
  Broadcast,
  Timer,
} from '@/components/slab'
import type { Icon } from '@/components/slab'
import { profile } from '@/data/profile'

export type StackStatus = 'Live' | 'Internal' | 'Beta'

export type StackLogo = { src: string; name: string }

export type StackNode = {
  id: string
  name: string
  what: string
  stack?: string
  status?: StackStatus
  Icon: Icon
  logos?: StackLogo[]
  children?: StackNode[]
}

const WFM_LOGO: StackLogo = { src: '/icons/vscode.svg', name: 'WFM Tools' }
const AI_LOGO: StackLogo = { src: '/icons/openai.svg', name: 'AI' }

export const aiStack: StackNode = {
  id: 'root',
  Icon: Sparkle,
  name: profile.name,
  what: 'Workforce Management and AI-assisted automation systems.',
  stack: 'NICE IEX & AI Agents',
  children: [
    {
      id: 'wfm-core',
      Icon: Database,
      name: 'WFM Operations',
      what: 'Core workforce management and real-time analysis systems.',
      children: [
        {
          id: 'nice-iex',
          Icon: PhoneCall,
          logos: [WFM_LOGO],
          name: 'NICE IEX',
          what: 'Operational and functional administration and troubleshooting.',
          stack: 'NICE IEX Administrator',
          status: 'Live',
        },
        {
          id: 'rt-analysis',
          Icon: Timer,
          logos: [WFM_LOGO],
          name: 'Real-Time Analysis',
          what: 'Intraday performance monitoring and service-level management.',
          stack: 'RTA / Supervision',
          status: 'Live',
        },
      ],
    },
    {
      id: 'ai-dev',
      Icon: Robot,
      name: 'AI Development',
      what: 'Leveraging AI agents to build scalable software and logs.',
      children: [
        {
          id: 'kcal-log',
          Icon: Coffee,
          logos: [AI_LOGO],
          name: 'Kcal Log',
          what: 'AI-assisted personal calorie logging application.',
          stack: 'AI Assistant / Web',
          status: 'Internal',
        },
        {
          id: 'zelven-labs',
          Icon: Browser,
          logos: [AI_LOGO],
          name: 'Zelven Labs',
          what: 'Software initiative utilizing AI development agents.',
          stack: 'AI Agents',
          status: 'Beta',
        },
      ],
    },
    {
      id: 'data-tools',
      Icon: Article,
      name: 'Data & Reporting',
      what: 'Advanced analytics and automated reporting tools.',
      children: [
        {
          id: 'excel-vba',
          Icon: Database,
          logos: [WFM_LOGO],
          name: 'Excel/VBA Macros',
          what: 'Automated lookup-driven reporting and training logs.',
          stack: 'Advanced Excel / VBA',
          status: 'Live',
        },
      ],
    },
  ],
}
