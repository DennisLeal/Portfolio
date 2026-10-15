import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'
import { siteContent } from '@/data/siteContent'

/**
 * AboutGrid - Updated to a flexible layout to prevent header overlap
 * and support professional summaries of varying length.
 */

const GITHUB = { src: '/icons/ai/github.svg', name: 'GitHub' }
const CLAUDE = { src: '/icons/ai/claude-color.svg', name: 'Claude' }
const OPENAI = { src: '/icons/openai.svg', name: 'OpenAI' }
const VSCODE = { src: '/icons/vscode.svg', name: 'VS Code' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'WFM Administration',
    marks: [GITHUB, VSCODE],
  },
  {
    index: '02',
    title: 'Real-Time Monitoring',
    marks: [GITHUB, VSCODE],
  },
  {
    index: '03',
    title: 'AI Application Dev',
    marks: [CLAUDE, OPENAI, GITHUB],
  },
  {
    index: '04',
    title: 'Systems Troubleshooting',
    marks: [VSCODE, GITHUB],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid" style={{ padding: '4rem 2rem' }} aria-labelledby="about-title">
      <header className="pgrid__head" style={{ marginBottom: '3rem' }}>
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Workforce management systems specialist & AI-assisted app builder.
        </p>
      </header>

      <div className="home__glass" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        padding: '2rem',
        borderRadius: '2rem',
        background: 'var(--glass)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--glass-border)'
      }}>
        <div className="agrid__copy">
          <p className="agrid__lead" style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            {siteContent.hero.about}
          </p>

          <div className="agrid__note" style={{ marginBottom: '2rem' }}>
            <p style={{ opacity: 0.8, lineHeight: '1.6' }}>
              I focus on the critical infrastructure of the contact center, ensuring that
              the systems a global WFM team depends on are configured correctly and running without delay.
            </p>
          </div>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap" style={{ marginBottom: '1rem' }}>
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
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
                <img src="/icons/ai/github.svg" alt="GitHub" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">GitHub Essential Training</span>
                <span className="agrid__cell-meta">LinkedIn Learning · 2026</span>
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

            <a className="agrid__cell agrid__cell--wide" href={profile.socials[0].href} target="_blank" rel="noopener noreferrer">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/icons/linkedin.svg" alt="LinkedIn" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">LinkedIn Profile</span>
                <span className="agrid__cell-meta">Connect with me</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={profile.avatarSrc}
            alt={profile.hero.portraitAlt}
            loading="eager"
            decoding="async"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '2rem' }}
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
