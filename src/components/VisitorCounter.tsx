import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const COUNTER_URL = 'https://visitor-badge.laobi.icu/badge'
const COUNTER_QUERY =
  '?page_id=dennisleal.Portfolio&left_text=views&left_color=555555&right_color=2f855a&height=20'

export default function VisitorCounter({ className = '' }: { className?: string }) {
  const { pathname } = useLocation()
  const [unavailable, setUnavailable] = useState(false)

  return (
    <a
      className={`visitor-counter ${className}`.trim()}
      href="https://visitor-badge.laobi.icu/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Portfolio page-view counter, provided by visitor-badge.laobi.icu"
    >
      {unavailable ? (
        <span className="visitor-counter__unavailable">Unavailable</span>
      ) : (
        <img
          key={pathname}
          src={`${COUNTER_URL}${COUNTER_QUERY}`}
          alt=""
          decoding="async"
          onError={() => setUnavailable(true)}
        />
      )}
    </a>
  )
}
