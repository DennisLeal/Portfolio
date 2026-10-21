/**
 * YOUR IDENTITY - start here.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'
import { siteContent } from '@/data/siteContent'

const ICONS = `${import.meta.env.BASE_URL}icons/`

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
  handle: '@DennisLeal',
  role: 'IEX Administrator · WFM Support',
  avatarSrc: `${import.meta.env.BASE_URL}ProfilePhoto.png?v=20261022`,
  verifiedLabel: 'NICE IEX Administrator',
  email: siteContent.hero.contact.email,
  location: siteContent.hero.location,
  stats: [
    { value: '10+ years', label: 'Contact-center WFM', Icon: Briefcase },
    { value: 'NICE IEX', label: 'Administration & support', Icon: SealCheck },
    { value: 'Real-Time', label: 'Operations experience', Icon: Clock },
  ],
  displayName: { line1: 'IEX Administrator', line2: 'Workforce Management' },
  hero: {
    body: siteContent.hero.about,
    portraitSrc: `${import.meta.env.BASE_URL}ProfilePhoto.png?v=20261022`,
    portraitAlt: 'Dennis Leal Portrait',
  },
  socials: [
    {
      label: 'LinkedIn profile',
      href: siteContent.hero.contact.linkedin,
      iconPath: `${ICONS}linkedin.svg`,
    },
    {
      label: 'GitHub profile',
      href: siteContent.hero.contact.github,
      iconPath: `${ICONS}ai/github.svg`,
    },
  ],
}
