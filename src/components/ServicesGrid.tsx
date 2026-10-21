import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Article } from '@/components/slab'
import { siteContent } from '@/data/siteContent'

const SUPPORT_STAGES = [
  {
    label: 'Investigate',
    description:
      'Review reported IEX, WebStation, RCP, access, upload, or schedule-processing symptoms.',
    chips: ['Symptoms', 'Impact'],
    Icon: MagnetStraight,
  },
  {
    label: 'Validate',
    description:
      'Check relevant configuration and data across IEX-related entities and supporting systems.',
    chips: ['Configuration', 'Data'],
    Icon: Timer,
  },
  {
    label: 'Document & coordinate',
    description:
      'Record findings and workarounds, then coordinate corrective action or technical/vendor escalation.',
    chips: ['Findings', 'Escalation'],
    Icon: Article,
  },
]

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Support areas</span>
        <h1 className="pgrid__title" id="services-title">
          WFM, NICE IEX & Technical Support
        </h1>
        <p className="pgrid__lede">
          Areas grounded in my contact-center, NICE IEX, real-time operations, and Excel experience.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">Troubleshooting approach</span>
            <h2 className="sgrid__method-title" id="method-title">
              Investigate.
              <br />
              <span>Validate. Coordinate.</span>
            </h2>
            <p className="sgrid__method-sub">
              My current work focuses on operational and functional troubleshooting, not backend
              software engineering.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {SUPPORT_STAGES.map(({ label, description, chips, Icon }, index) => (
              <li className="sgrid__stage" key={label} style={{ '--i': index } as CSSProperties}>
                <span className="sgrid__stage-ghost" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="sgrid__stage-icon" aria-hidden="true">
                  <Icon size={22} weight="duotone" />
                </span>
                <h3 className="sgrid__stage-label">{label}.</h3>
                <p className="sgrid__stage-body">{description}</p>
                <ul className="sgrid__stage-chips" role="list">
                  {chips.map((chip) => (
                    <li className="sgrid__stage-chip" key={chip}>
                      {chip}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Experience-backed areas</h2>
            <p className="sgrid__offers-sub">
              Responsibilities and practical skills from my supplied résumé and work history.
            </p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {siteContent.services.map((service, index) => (
              <li key={service.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <span className="sgrid__service-index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')} /{' '}
                      {String(siteContent.services.length).padStart(2, '0')}
                    </span>
                  </span>
                  <span className="bento__title">{service.title}</span>
                  <span className="bento__desc">{service.description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
