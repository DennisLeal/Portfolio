import { Link } from 'react-router-dom'
import { SealCheck, CaretRight, Quotes, Stack, Briefcase } from '@/components/slab'
import { profile } from '@/data/profile'
import { siteContent } from '@/data/siteContent'
import QuickMenu from './QuickMenu'

/**
 * Home on a phone, the parts the rail and the bento used to carry:
 *
 *   HomeProfile  avatar, name, verified mark, handle and the QuickMenu
 *                (theme + accessibility) - the rail's identity block, laid flat
 *   HomeStats    three proof facts (profile.stats), each named by a glyph so
 *                it reads at a glance
 *   HomeExplore  one shelf card per rail view in a snap row, then the first
 *                LinkedIn recommendation
 */

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt="" width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">
          {profile.name}
          <SealCheck
            size={16}
            weight="fill"
            className="hprofile__verified"
            aria-label={profile.verifiedLabel}
          />
        </span>
        <span className="hprofile__handle">
          {profile.handle} · {profile.role}
        </span>
      </div>
      <QuickMenu className="hprofile__menu" />
    </header>
  )
}

export function HomeStats() {
  return (
    <ul className="hstats" role="list">
      {profile.stats.map(({ value, label, Icon }, i) => (
        <li key={i}>
          <Icon className="hstats__icon" size={18} weight="duotone" aria-hidden="true" />
          <b className="hstats__value">{value}</b>
          <span className="hstats__label">{label}</span>
        </li>
      ))}
    </ul>
  )
}

const TILES = [
  {
    n: '01',
    label: 'Projects',
    to: '/projects',
    title: 'WFM work & software projects',
    desc: 'Excel workflows, Kcal Log, and WinSentinel.',
    img: siteContent.projects.find((project) => project.id === 'kcal-log')?.imageSrc,
  },
  {
    n: '02',
    label: 'Support areas',
    to: '/services',
    title: 'NICE IEX & WFM support',
    desc: 'Troubleshooting, real-time operations, and Excel.',
    Icon: Stack,
  },
  {
    n: '03',
    label: 'Testimonials',
    to: '/testimonials',
    title: 'Recommendations from colleagues',
    desc: 'Two LinkedIn recommendations.',
    Icon: Quotes,
  },
  {
    n: '04',
    label: 'Software projects',
    to: '/projects',
    title: 'Kcal Log & WinSentinel',
    desc: 'A calorie-logging PWA and a simulated security prototype.',
    img: siteContent.projects.find((project) => project.id === 'winsentinel')?.imageSrc,
  },
  {
    n: '05',
    label: 'Work Experience',
    to: '/experience',
    title: 'Career history',
    desc: 'Roles across NICE IEX support, WFM, real-time operations, and client support.',
    Icon: Briefcase,
  },
  {
    n: '06',
    label: 'About',
    to: '/about',
    title: `Hi, I'm ${profile.firstName}.`,
    desc: 'IEX Administrator with 10+ years in contact-center WFM.',
    img: profile.avatarSrc,
  },
] as const

export function HomeExplore() {
  const recommendation = siteContent.testimonials[0]

  return (
    <>
      <div className="hsec">
        <h2 className="hsec__title">Explore</h2>
      </div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={`${t.n}-${t.to}`}>
            <Link to={t.to} className={`htile${'accent' in t && t.accent ? ' htile--accent' : ''}`}>
              {'img' in t ? (
                <span className="htile__media">
                  <img className="htile__img" src={t.img} alt="" loading="lazy" />
                </span>
              ) : (
                <span className="htile__media htile__glyph">
                  <t.Icon size={52} weight="duotone" aria-hidden="true" />
                </span>
              )}
              <span className="htile__body">
                <span className="htile__n">
                  {t.n} {t.label}
                </span>
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* A header that links carries its chevron on the title itself. */}
      <div className="hsec">
        <h2 className="hsec__title">
          <Link to="/testimonials" className="hsec__link">
            What colleagues say
            <CaretRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </h2>
      </div>
      <Link
        to="/testimonials"
        className="hproof"
        aria-label={`Read ${recommendation.name}'s LinkedIn recommendation`}
      >
        <span className="hproof__stage hproof__stage--quote" aria-hidden="true">
          <Quotes size={36} weight="fill" />
        </span>
        <span className="hproof__copy">
          <span className="hproof__title">“{recommendation.quote}”</span>
          <span className="hproof__meta">
            {recommendation.name} · {recommendation.role}
          </span>
        </span>
      </Link>
    </>
  )
}
