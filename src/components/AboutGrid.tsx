import { ArrowUpRight, Article, Database, MapPin, PhoneCall, Timer } from '@/components/slab'
import type { Icon } from '@/components/slab'
import { profile } from '@/data/profile'
import { siteContent } from '@/data/siteContent'

/**
 * AboutGrid - Updated to a flexible layout to prevent header overlap
 * and support professional summaries of varying length.
 */

const ICONS = `${import.meta.env.BASE_URL}icons/`

type Capability = {
  index: string
  title: string
  Icon: Icon
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'NICE IEX Troubleshooting',
    Icon: Database,
  },
  {
    index: '02',
    title: 'WebStation, RCP & Access Support',
    Icon: PhoneCall,
  },
  {
    index: '03',
    title: 'Real-Time WFM Operations',
    Icon: Timer,
  },
  {
    index: '04',
    title: 'Excel Reporting & VBA',
    Icon: Article,
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" style={{ padding: '4rem 2rem' }} aria-labelledby="about-title">
      <header className="pgrid__head" style={{ marginBottom: '3rem' }}>
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          IEX Administrator | Workforce Management | Real-Time Operations | Technical
          Troubleshooting
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p
            className="agrid__lead"
            style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '1.5rem' }}
          >
            {siteContent.hero.about}
          </p>

          <div className="agrid__note">
            <h2 className="agrid__section-title">Experience & education</h2>
            <ul className="agrid__history" role="list">
              {siteContent.careerPath.map((position) => (
                <li key={`${position.employer}-${position.role}`}>
                  <strong>{position.role}</strong>
                  <span>
                    {position.employer} · {position.period}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="agrid__history agrid__history--education" role="list">
              {siteContent.education.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>
                  <span>
                    {item.institution}
                    {'year' in item && ` · ${item.year}`}
                    {'detail' in item && ` · ${item.detail}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <section className="agrid__metrics" aria-labelledby="resume-metrics-title">
            <h2 className="agrid__section-title" id="resume-metrics-title">
              Selected résumé figures
            </h2>
            <ul className="agrid__metrics-list" role="list">
              {siteContent.resumeMetrics.map((metric) => (
                <li className="agrid__metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </li>
              ))}
            </ul>
          </section>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks" aria-hidden="true">
                  <span className="agrid__mark">
                    <c.Icon size={20} weight="duotone" />
                  </span>
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          <div className="agrid__bar" style={{ marginTop: '3rem' }}>
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src={`${ICONS}linkedin.svg`} alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">LinkedIn Learning</span>
                <span className="agrid__cell-meta">Three course certificates</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">GMT+8 · Philippines</span>
              </span>
            </span>

            <a
              className="agrid__cell agrid__cell--wide"
              href={profile.socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src={`${ICONS}linkedin.svg`} alt="LinkedIn" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">LinkedIn Profile</span>
                <span className="agrid__cell-meta">Connect with me</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>

            <a
              className="agrid__cell agrid__cell--wide"
              href={profile.socials[1].href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src={profile.socials[1].iconPath} alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">GitHub Profile</span>
                <span className="agrid__cell-meta">Public projects and source code</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.avatarSrc}
            alt={profile.hero.portraitAlt}
            loading="eager"
            decoding="async"
            width={400}
            height={594}
          />
        </div>
      </div>

      <section className="agrid__certifications" aria-labelledby="certifications-title">
        <header className="agrid__certifications-head">
          <span className="pgrid__eyebrow">Certifications</span>
          <h2 className="pgrid__title" id="certifications-title">
            LinkedIn Learning
          </h2>
        </header>
        <ul className="agrid__certifications-list" role="list">
          {siteContent.certifications.map((certification) => (
            <li className="agrid__certification" key={certification.name}>
              <img
                className="agrid__certificate-image"
                src={certification.imageSrc}
                alt={`${certification.name} certificate`}
                loading="lazy"
                decoding="async"
                width={620}
                height={466}
              />
              <h3 className="agrid__certificate-title">{certification.name}</h3>
              <p className="agrid__certificate-meta">
                {certification.issuer} · {certification.year}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}
