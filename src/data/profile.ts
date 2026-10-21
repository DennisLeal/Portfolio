/**
 * YOUR IDENTITY - start here.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'
import { siteContent } from '@/data/siteContent'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Dennis Leal',
  firstName: 'Dennis',
  handle: '@Papsitv',
  role: 'Workforce Management Systems Specialist',
  avatarSrc: `${import.meta.env.BASE_URL}ProfilePhoto.png`,
  verifiedLabel: 'WFM Expert',
  email: siteContent.hero.contact.email,
  location: siteContent.hero.location,
  stats: [
    { value: '10+ yrs', label: 'Experience', Icon: Briefcase },
    { value: 'NICE IEX', label: 'Specialization', Icon: SealCheck },
    { value: 'GMT+8', label: 'Timezone', Icon: Clock },
  ],
  displayName: { line1: siteContent.hero.headline.split(' & ')[0], line2: siteContent.hero.headline.split(' & ')[1] },
  hero: {
    body: siteContent.hero.about,
    portraitSrc: `${import.meta.env.BASE_URL}ProfilePhoto.png`,
    portraitAlt: 'Dennis Leal Portrait',
  },
  socials: [
    { label: 'LinkedIn profile', href: siteContent.hero.contact.linkedin, iconPath: '/icons/linkedin.svg' },
    { label: 'GitHub profile', href: siteContent.hero.contact.github, iconPath: '/icons/github.svg' },
  ],
}
