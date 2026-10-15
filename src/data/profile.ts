/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Every value below is a PLACEHOLDER.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'
import { siteContent } from '@/data/siteContent'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
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
  avatarSrc: '/ProfilePhoto.jpg',
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
    portraitSrc: '/ProfilePhoto.jpg',
    portraitAlt: 'Dennis Leal Portrait',
  },
  socials: [
    { label: 'LinkedIn profile', href: siteContent.hero.contact.linkedin, iconPath: '/icons/linkedin.svg' },
    { label: 'GitHub profile', href: siteContent.hero.contact.github, iconPath: '/icons/github.svg' },
  ],
}
