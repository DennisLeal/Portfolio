import { siteContent } from '@/data/siteContent'

export default function WorkExperience() {
  return (
    <section className="pgrid egrid" aria-labelledby="experience-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Career history</span>
        <h1 className="pgrid__title" id="experience-title">
          Work Experience
        </h1>
        <p className="pgrid__lede">
          Résumé-based responsibilities across WFM operations, technical troubleshooting, and
          enterprise client support.
        </p>
      </header>

      <ol className="egrid__timeline">
        {siteContent.careerPath.map((position, index) => (
          <li className="egrid__item" key={`${position.employer}-${position.role}`}>
            <span className="egrid__marker" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <article className="egrid__card">
              <div className="egrid__meta">
                <span>{position.period}</span>
                {position.location && <span>{position.location}</span>}
              </div>
              <h2 className="egrid__role">{position.role}</h2>
              <p className="egrid__employer">{position.employer}</p>
              <ul className="egrid__highlights">
                {position.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
