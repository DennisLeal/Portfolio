import { useMemo } from 'react'

const PERIOD = 800
const SPAN = PERIOD * 4

// A sine contour whose period divides PERIOD, so sliding it by exactly PERIOD
// lands on an identical frame: the CSS loop has no visible seam.
function wave(base: number, amp: number, cycles: number, phase: number) {
  const step = 20
  let d = ''
  for (let x = -PERIOD; x <= SPAN - PERIOD; x += step) {
    const y = base + amp * Math.sin((x / PERIOD) * Math.PI * 2 * cycles + phase)
    d += `${d ? 'L' : 'M'}${x} ${y.toFixed(1)}`
  }
  return d
}

const LINES = Array.from({ length: 14 }, (_, i) => ({
  d: wave(40 + i * 62, 34 + (i % 4) * 14, 1 + (i % 2), i * 0.55),
  duration: 46 + (i % 5) * 9,
  reverse: i % 3 === 0,
  opacity: 0.3 + (i % 3) * 0.12,
}))

/**
 * Looping contour lines behind every page. Pure SVG + CSS so it runs on phones
 * and on desktops where the WebGL shader is skipped.
 */
export default function MotionLines() {
  const paths = useMemo(() => LINES, [])
  return (
    <div className="motion-lines" aria-hidden="true">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        {paths.map((l, i) => (
          <path
            key={i}
            d={l.d}
            style={{
              animationDuration: `${l.duration}s`,
              animationDirection: l.reverse ? 'reverse' : 'normal',
              opacity: l.opacity,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
