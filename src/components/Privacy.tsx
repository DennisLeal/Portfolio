import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * Privacy Policy - the visitor-counter disclosure is specific to this site.
 * The remaining sections still need the owner's complete policy details.
 */
export default function Privacy() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Privacy Policy">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: October 22, 2026</p>

        <div className="legal-page__body">
          <h2>Who this covers</h2>
          <p>PLACEHOLDER - tell me what to put here: who runs this site and which sites this policy applies to.</p>

          <h2>What is collected</h2>
          <p>
            This site displays a page-view counter provided by{' '}
            <a href="https://hits.sh/" target="_blank" rel="noopener noreferrer">
              Hits.sh
            </a>
            . Loading the counter sends a request to that service, which receives the technical
            information normally sent with a web request. The counter records page views, not
            verified unique people; refreshing or navigating to another page may add another
            count.
          </p>

          <h2>How it is used</h2>
          <p>PLACEHOLDER - tell me what to put here: what you do with that data and who else sees it.</p>

          <h2>How long it is kept</h2>
          <p>PLACEHOLDER - tell me what to put here: retention periods and how to ask for deletion.</p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
