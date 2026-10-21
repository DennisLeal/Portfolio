import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Robot,
  Medal,
  Stack,
  Quotes,
  SealCheck,
  Database,
  Timer,
  Article,
  Coffee,
  ShieldCheck,
} from '@/components/slab'
import { profile } from '@/data/profile'
import { siteContent } from '@/data/siteContent'

/**
 * Home's showcase: one card per rail view, each an index of what that view
 * holds, each built from content the portfolio already ships. Every card is
 * a link. Nothing here invents a fact - the funnels, the tools, the clients
 * and the credentials are the same records the views render in full.
 *
 * Motion is transform-only on a clipped inner track, so a card never adds
 * height and Home stays a single viewport.
 */

const PROJECT_SHOTS = siteContent.projects.flatMap((project) =>
  project.imageSrc ? [project.imageSrc] : [],
)

const OFFER_ICONS = [Database, Timer, Article, User, Stack]
const OFFERS = siteContent.services.slice(0, OFFER_ICONS.length).map((service, index) => ({
  ...service,
  Icon: OFFER_ICONS[index],
}))

// Three photos of you, fanned. Small copies are fine - the fan shows them under 100px.
const PHOTOS = [profile.avatarSrc, profile.avatarSrc, profile.avatarSrc]

const AI_PROJECTS = [
  { name: 'Kcal Log', Icon: Coffee },
  { name: 'WinSentinel', Icon: ShieldCheck },
  { name: 'Zelven Labs', Icon: Robot },
]

function CardHead({ Icon, title, desc }: { Icon: typeof FolderOpen; title: string; desc: string }) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  const half = Math.ceil(AI_PROJECTS.length / 2)
  const toolRows = [AI_PROJECTS.slice(0, half), AI_PROJECTS.slice(half)]

  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {/* Projects: project screenshots from the supplied carousel. */}
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead
          Icon={FolderOpen}
          title="Projects"
          desc="WFM Excel workflows and personal software projects."
        />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {[...PROJECT_SHOTS, ...PROJECT_SHOTS].map((src, i) => (
              <span key={i} className="bento__shot">
                <img src={src} alt="" loading="lazy" decoding="async" />
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* About: a fanned stack of photos. */}
      <Link to="/about" className="bento__card bento__card--about">
        <CardHead
          Icon={User}
          title="About"
          desc="IEX Administrator with 10+ years across WFM and real-time operations."
        />
        <div className="bento__media bento__fan" aria-hidden="true">
          {PHOTOS.map((src, i) => (
            <span key={`${src}-${i}`} className="bento__photo" style={{ ['--i' as string]: i }}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </Link>

      {/* Personal software projects, shown as project-name chips. */}
      <Link to="/projects" className="bento__card bento__card--ai">
        <CardHead
          Icon={Robot}
          title="AI-Assisted Projects"
          desc="Kcal Log, WinSentinel, and the Zelven Labs initiative."
        />
        <div className="bento__media bento__chips" aria-hidden="true">
          {toolRows.map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map((n, i) => (
                  <span key={`${n.name}-${i}`} className="bento__chip">
                    <n.Icon size={15} weight="duotone" />
                    {n.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>

      {/* A certificate preview links to the complete credential gallery. */}
      <Link to="/about" className="bento__card bento__card--creds">
        <CardHead Icon={Medal} title="Credentials" desc="Three LinkedIn Learning certificates." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <img
            className="bento__certificate-preview"
            src={siteContent.certifications[0].imageSrc}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <span className="bento__badge-tag">
            <SealCheck size={14} weight="fill" />
            LinkedIn Learning · 2026
          </span>
        </div>
      </Link>

      {/* Services: the five offers as a compact index. */}
      <Link to="/services" className="bento__card bento__card--services">
        <CardHead
          Icon={Stack}
          title="Support Areas"
          desc="NICE IEX troubleshooting, WFM operations, and Excel work."
        />
        <ul className="bento__media bento__offers" role="list">
          {OFFERS.map(({ Icon, title, description }, i) => (
            <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile">
                <Icon size={15} weight="duotone" aria-hidden="true" />
              </span>
              <span className="bento__offer-text">
                <span className="bento__offer-title">{title}</span>
                <span className="bento__offer-note">{description}</span>
              </span>
              <span className="bento__offer-num" aria-hidden="true">
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </Link>

      {/* Testimonials: client cards drifting up a clipped column. */}
      <Link to="/testimonials" className="bento__card bento__card--quotes">
        <CardHead
          Icon={Quotes}
          title="Testimonials"
          desc="Recommendations from former colleagues."
        />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...siteContent.testimonials, ...siteContent.testimonials].map((testimonial, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  <Quotes size={14} weight="fill" />
                  <b>{testimonial.name}</b>
                </span>
                <span className="bento__review-role">{testimonial.role}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
