import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@/components/slab'
import { profile } from '@/data/profile'
import { siteContent } from '@/data/siteContent'
import { A11Y_EVENT, motionReduced } from '@/lib/a11y'
import ToolsMarquee from './ToolsMarquee'
import HomeBento from './HomeBento'
import { HomeProfile, HomeStats, HomeExplore } from './HomeMobile'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useIsPhone } from '@/hooks/useMediaQuery'

/**
 * Home. One viewport, three bands, no scroll:
 *
 *   head       the display line the intro writes, then the lede
 *   tools      "Tools I work with" beside the marquee, on its own plate
 *   showcase   the bento - one card per view, see HomeBento - on its own
 *
 * The grid is `auto auto 1fr` so the showcase absorbs the slack instead of
 * pushing the panel into a scrollbar. Every other view scrolls; this one is
 * laid out to the box.
 *
 * On a phone the page becomes an app screen: a profile header where the rail
 * used to be, the proof stats under the lede, and the bento replaced by a
 * snap row of tiles (HomeMobile). The CTA leaves the head - the tab bar's
 * Contact action carries it on every screen.
 *
 * `.home__title` is also the intro's landing target: IntroOverlay measures it
 * and flies its copy into this exact rect, so the line the visitor watched
 * being written is the line that stays on the page.
 */
export default function Home() {
  useScrollReveal()
  const phone = useIsPhone()
  const { displayName, hero } = profile
  const videoRef = useRef<HTMLVideoElement>(null)
  const [autoplay, setAutoplay] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !motionReduced(),
  )

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateAutoplay = () => setAutoplay(!reducedMotion.matches && !motionReduced())
    reducedMotion.addEventListener('change', updateAutoplay)
    window.addEventListener(A11Y_EVENT, updateAutoplay)
    return () => {
      reducedMotion.removeEventListener('change', updateAutoplay)
      window.removeEventListener(A11Y_EVENT, updateAutoplay)
    }
  }, [])

  useEffect(() => {
    if (!autoplay) videoRef.current?.pause()
  }, [autoplay])

  const portraitSrc = phone
    ? `${import.meta.env.BASE_URL}ProfilePhoto-m.webp?v=1`
    : profile.hero.portraitSrc

  const video = (
    <div className="home__intro-video">
      <video
        ref={videoRef}
        className="home__intro-player"
        autoPlay={autoplay}
        loop
        muted
        playsInline
        controls
        preload="metadata"
        width={270}
        height={480}
        poster={portraitSrc}
        aria-label="An animated introduction to Dennis Leal's WFM experience and projects. Unmute for a spoken voice-over."
        title="Unmute for voice-over"
      >
        <source
          src={`${import.meta.env.BASE_URL}videos/dennis-leal-wfm-intro.mp4?v=6`}
          type="video/mp4"
        />
        Your browser does not support embedded video.
      </video>
    </div>
  )

  const tools = (
    <div className="home__glass home__glass--tools">
      <div className="home__tools">
        <div className="home__tools-head">
          <span className="home__tools-eyebrow">Daily drivers</span>
          <h2 className="home__tools-label">Tools I work with</h2>
        </div>
        <ToolsMarquee />
      </div>
    </div>
  )

  return (
    <section className="home" aria-labelledby="home-title">
      {phone && <HomeProfile />}

      <div className="home__intro">
        <div className="home__head">
          <div className="home__headline">
            <h1 className="home__title" id="home-title">
              <span className="home__line">
                {displayName.line1} | {displayName.line2}
              </span>
            </h1>

            {!phone && (
              <Link className="home__cta" to="/contact">
                Get in touch
                <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
              </Link>
            )}
          </div>

          <p className="home__lede">{hero.body}</p>
          <Link className="home__experience-cta" to="/experience">
            View work experience
            <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
          </Link>
          {phone && <HomeStats />}
        </div>

        {phone && (
          <div className="home__intro-media">{video}</div>
        )}
        {!phone && (
          <Link className="home__career" to="/experience" aria-label="Career snapshot - view full work experience">
            <span className="home__career-eyebrow">Career snapshot</span>
            <ol className="home__career-list">
              {siteContent.careerPath.map(({ role, employer, period }, i) => (
                <li key={`${employer}-${period}`} className={i === 0 ? 'is-current' : undefined}>
                  <span className="home__career-period">{period}</span>
                  <span className="home__career-role">{role.split(' — ')[0]}</span>
                  <span className="home__career-employer">{employer}</span>
                </li>
              ))}
            </ol>
            <ul className="home__career-stats" role="list">
              {profile.stats.map(({ value, label }) => (
                <li key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </Link>
        )}
      </div>

      {/* Two plates, not one. The tools band and the bento are different
          objects - a strip you read across and a grid you pick from - and one
          shared sheet made the strip look like the bento's header. */}
      {phone ? (
        <>
          {tools}
          <HomeExplore />
        </>
      ) : (
        <div className="home__stage">
          <div className="home__stage-video">{video}</div>
          <div className="home__stage-main">
            {tools}
            <div className="home__glass home__glass--showcase">
              <div className="home__showcase">
                <HomeBento />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
