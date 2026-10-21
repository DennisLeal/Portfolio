import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  ArrowUpRight,
  Article,
  Briefcase,
  Coffee,
  CursorClick,
  Database,
  FlowArrow,
  Robot,
  ShieldCheck,
  X,
} from '@/components/slab'
import type { Icon } from '@/components/slab'
import { siteContent, type PortfolioProject } from '@/data/siteContent'
import { useIsPhone } from '@/hooks/useMediaQuery'

type Category = PortfolioProject['category']
type Filter = Category | 'all'

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'wfm', label: 'WFM' },
  { key: 'apps', label: 'Apps' },
  { key: 'ai', label: 'AI-assisted' },
]

const PROJECT_ICONS: Record<string, Icon> = {
  'wfm-class-tracking': Article,
  'wfm-reporting': FlowArrow,
  'kcal-log': Coffee,
  winsentinel: ShieldCheck,
  'zelven-labs': Robot,
  'wfm-portfolio': Briefcase,
}

const PROJECT_LINKS = [
  { key: 'live', label: 'Open live project' },
  { key: 'source', label: 'View GitHub repository' },
  { key: 'additionalSource', label: 'View related repository' },
] as const

function ProjectPreview({ project }: { project: PortfolioProject }) {
  if (project.imageSrc) {
    return (
      <div className="bento__media pgrid__project-media">
        <img
          className="pgrid__project-image"
          src={project.imageSrc}
          alt={project.imageAlt ?? ''}
          loading="lazy"
          decoding="async"
        />
      </div>
    )
  }

  return (
    <ul className="bento__media pgrid__project-preview" role="list" aria-hidden="true">
      {project.previewItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function ProjectDetails({ project }: { project: PortfolioProject }) {
  const Icon = PROJECT_ICONS[project.id] ?? Database
  const links = PROJECT_LINKS.flatMap(({ key, label }) => {
    const href = project.links[key]
    return href ? [{ href, label }] : []
  })

  return (
    <article className={`pdetail${project.imageSrc ? ' pdetail--image' : ''}`}>
      <div className="pdetail__copy">
        <span className="pdetail__eyebrow">
          <Icon size={16} weight="duotone" aria-hidden="true" />
          {project.categoryLabel}
        </span>
        <h2 className="pdetail__title">{project.name}</h2>
        <p className="pdetail__summary">{project.oneLiner}</p>
        <p className="pdetail__status">{project.status}</p>

        <h3 className="pdetail__section-title">Project details</h3>
        <ul className="pdetail__features">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        {links.length > 0 && (
          <div className="pdetail__links">
            {links.map((link) => (
              <a
                key={link.href}
                className="pdetail__link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>

      {project.imageSrc && (
        <figure className="pdetail__figure">
          <img src={project.imageSrc} alt={project.imageAlt ?? ''} />
          <figcaption>{project.imageAlt}</figcaption>
        </figure>
      )}
    </article>
  )
}

function ProjectModal({ project, onClose }: { project: PortfolioProject; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div
      className="pmodal"
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <button
        ref={closeRef}
        type="button"
        className="pmodal__close"
        onClick={onClose}
        aria-label="Close project details"
      >
        <X size={18} weight="bold" />
      </button>
      <div className="pmodal__stage">
        <ProjectDetails project={project} />
      </div>
    </div>,
    document.body,
  )
}

export default function ProjectsGrid() {
  const [open, setOpen] = useState<PortfolioProject | null>(null)
  const [category, setCategory] = useState<Filter>('all')
  const phone = useIsPhone()
  const triggerRef = useRef<HTMLElement | null>(null)
  const projects = siteContent.projects.filter(
    (project) => !phone || category === 'all' || project.category === category,
  )

  const show = useCallback((project: PortfolioProject, element: HTMLElement) => {
    triggerRef.current = element
    setOpen(project)
  }, [])
  const close = useCallback(() => {
    setOpen(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">
          Selected WFM work & software projects
        </h1>
        <p className="pgrid__lede">
          Excel-based WFM workflows, public GitHub projects, and AI-assisted work—described from my
          résumé, project carousel, and public repositories.
        </p>
      </header>

      {phone && (
        <div className="pfilter" role="group" aria-label="Filter projects">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className="pfilter__btn"
              aria-pressed={category === filter.key}
              onClick={() => setCategory(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}

      <div className="home__glass pgrid__glass">
        <span className="pgrid__hint" aria-hidden="true">
          <CursorClick size={14} weight="duotone" />
          Select a project for details
        </span>
        <div className="bento bento--projects">
          {projects.map((project) => {
            const Icon = PROJECT_ICONS[project.id] ?? Database
            return (
              <button
                key={project.id}
                type="button"
                className="bento__card bento__card--btn pgrid__project-card"
                onClick={(event) => show(project, event.currentTarget)}
                aria-haspopup="dialog"
              >
                <span className="bento__head">
                  <span className="bento__label">
                    <span className="bento__icon">
                      <Icon size={20} weight="duotone" aria-hidden="true" />
                    </span>
                    <span className="bento__title">{project.name}</span>
                  </span>
                  <span className="pgrid__project-category">{project.categoryLabel}</span>
                  <span className="bento__desc">{project.oneLiner}</span>
                  <ArrowUpRight
                    size={15}
                    weight="bold"
                    aria-hidden="true"
                    className="bento__arrow"
                  />
                </span>
                <ProjectPreview project={project} />
              </button>
            )
          })}
        </div>
      </div>

      {open && <ProjectModal project={open} onClose={close} />}
    </section>
  )
}
