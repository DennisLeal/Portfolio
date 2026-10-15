import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import Autopilot, { TOOLS } from '@/components/Autopilot'
import { siteContent } from '@/data/siteContent'

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          WFM Systems & AI Automation
        </h1>
        <p className="pgrid__lede">
          Specialized support for global workforce management teams and AI-powered app development.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">My Method</span>
            <h2 className="sgrid__method-title" id="method-title">
              Analyze. Optimize.
              <br />
              <span>Stabilize.</span>
            </h2>
            <p className="sgrid__method-sub">
              A systematic approach to fixing WFM platform issues and scaling automation.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            <li className="sgrid__stage" style={{ '--i': 0 } as CSSProperties}>
              <span className="sgrid__stage-ghost" aria-hidden="true">01</span>
              <span className="sgrid__stage-icon" aria-hidden="true">
                <MagnetStraight size={22} weight="duotone" />
              </span>
              <h3 className="sgrid__stage-label">Diagnosis.</h3>
              <p className="sgrid__stage-body">Analyzing the current configuration and mapping data flows.</p>
              <ul className="sgrid__stage-chips" role="list">
                <li className="sgrid__stage-chip">Audit</li>
                <li className="sgrid__stage-chip">Mapping</li>
              </ul>
            </li>
            <li className="sgrid__stage" style={{ '--i': 1 } as CSSProperties}>
              <span className="sgrid__stage-ghost" aria-hidden="true">02</span>
              <span className="sgrid__stage-icon" aria-hidden="true">
                <Timer size={22} weight="duotone" />
              </span>
              <h3 className="sgrid__stage-label">Optimization.</h3>
              <p className="sgrid__stage-body">Applying technical fixes to routing and distribution rules.</p>
              <ul className="sgrid__stage-chips" role="list">
                <li className="sgrid__stage-chip">Configuration</li>
                <li className="sgrid__stage-chip">Tuning</li>
              </ul>
            </li>
            <li className="sgrid__stage" style={{ '--i': 2 } as CSSProperties}>
              <span className="sgrid__stage-ghost" aria-hidden="true">03</span>
              <span className="sgrid__stage-icon" aria-hidden="true">
                <Trophy size={22} weight="duotone" />
              </span>
              <h3 className="sgrid__stage-label">Stabilization.</h3>
              <p className="sgrid__stage-body">Continuous monitoring to ensure system stability.</p>
              <ul className="sgrid__stage-chips" role="list">
                <li className="sgrid__stage-chip">Support</li>
                <li className="sgrid__stage-chip">Monitoring</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Expertise, listed.</h2>
            <p className="sgrid__offers-sub">Comprehensive support for operational stability.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {siteContent.services.map((s, i) => (
              <li key={i} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <span className="sgrid__service-index" aria-hidden="true">{String(i + 1).padStart(2, '0')} / 0{siteContent.services.length}</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">Expert</span>
                <ul className="sgrid__bullets" role="list">
                  <li className="sgrid__bullet">
                    <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                    <span>{s.description}</span>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">Live automation</span>
              <h2 className="sgrid__flow-title">Zelven Labs Engine</h2>
              <p className="sgrid__flow-sub">
                Directing AI coding agents to design and ship functional software products end-to-end.
              </p>
            </div>
            <ul className="sgrid__flow-tools" role="list">
              {TOOLS.map(({ Icon: ToolIcon, label }) => (
                <li key={label} className="sgrid__flow-tool">
                  <ToolIcon size={14} weight="duotone" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </header>
          <div className="sgrid__flow-main">
            <Autopilot compact maxScale={1.08} />
          </div>
        </div>
      </div>
    </section>
  )
}
