import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const COUNTER_URL = 'https://hits.sh/dennisleal.github.io/Portfolio.svg'

export default function VisitorCounter({ className = '' }: { className?: string }) {
  const { pathname } = useLocation()
  const [unavailable, setUnavailable] = useState(false)

  return (
    <a
      className={`visitor-counter ${className}`.trim()}
      href="https://hits.sh/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Portfolio page-view counter, provided by Hits.sh"
    >
      <span>Page views</span>
      {unavailable ? (
        <span className="visitor-counter__unavailable">Unavailable</span>
      ) : (
        <img
          key={pathname}
          src={`${COUNTER_URL}?style=flat-square`}
          alt=""
          decoding="async"
          onError={() => setUnavailable(true)}
        />
      )}
    </a>
  )
}
