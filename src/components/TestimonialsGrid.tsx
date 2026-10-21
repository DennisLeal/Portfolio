import { Quotes, ArrowUpRight } from '@/components/slab'
import { siteContent } from '@/data/siteContent'

export default function TestimonialsGrid() {
  return (
    <section className="pgrid tgrid" aria-labelledby="testimonials-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Testimonials</span>
        <h1 className="pgrid__title" id="testimonials-title">
          Recommendations from colleagues.
        </h1>
        <p className="pgrid__lede">
          LinkedIn recommendations from former iQor colleagues.
        </p>
      </header>

      <div className="home__glass tgrid__glass">
        <div className="tgrid__ledger">
          <div className="tgrid__ledger-head">
            <h2 className="tgrid__ledger-title">What colleagues say</h2>
            <p className="tgrid__ledger-sub">Shared on LinkedIn.</p>
          </div>

          <ul className="tgrid__clients" role="list">
            {siteContent.testimonials.map((testimonial, index) => (
              <li key={testimonial.name} className="tgrid__client">
                <span className="tgrid__client-ghost" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="tgrid__client-mark" aria-hidden="true">
                  <Quotes size={22} weight="duotone" />
                </div>
                <div className="tgrid__client-body">
                  <blockquote className="tgrid__client-daily">
                    {testimonial.quote}
                  </blockquote>
                  <div className="tgrid__client-head">
                    <span className="tgrid__client-name">{testimonial.name}</span>
                    <span className="tgrid__client-role">{testimonial.role}</span>
                  </div>
                  <p className="tgrid__client-meta">
                    {testimonial.date} · {testimonial.relationship}
                  </p>
                  <a
                    className="tgrid__client-link"
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View LinkedIn profile
                    <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
