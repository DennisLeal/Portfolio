import { useEffect } from 'react'
import { motionReduced } from '@/lib/a11y'

let ctx: AudioContext | null = null

// Soft UI click: Kenney "Interface Sounds" (CC0), see public/sounds/.
let buffer: AudioBuffer | null = null
let loading = false

function plink() {
  try {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AC) return
    ctx ??= new AC()
    if (ctx.state === 'suspended') void ctx.resume()
    const c = ctx
    if (!buffer) {
      if (!loading) {
        loading = true
        fetch(`${import.meta.env.BASE_URL}sounds/click.mp3`)
          .then((r) => r.arrayBuffer())
          .then((data) => c.decodeAudioData(data))
          .then((b) => {
            buffer = b
          })
          .catch(() => {
            loading = false
          })
      }
      return
    }
    const src = c.createBufferSource()
    const gain = c.createGain()
    src.buffer = buffer
    src.playbackRate.value = 0.95 + Math.random() * 0.1
    gain.gain.value = 0.7
    src.connect(gain).connect(c.destination)
    src.start()
  } catch {
    /* audio is a bonus; never break the page over it */
  }
}
function ripple(x: number, y: number, size: number, rings: number, cls = '') {
  for (let i = 0; i < rings; i++) {
    const el = document.createElement('span')
    el.className = `ripple-fx__ring ${cls}`
    el.style.left = `${x}px`
    el.style.top = `${y}px`
    el.style.setProperty('--ripple-size', `${size}px`)
    el.style.animationDelay = `${i * 140}ms`
    document.body.appendChild(el)
    el.addEventListener('animationend', () => el.remove(), { once: true })
  }
}

/**
 * Pointer "sensor": every press (mouse or touch) sends a water ripple out from
 * the contact point with a soft click sound, and on a mouse a faint ripple trails
 * the cursor as it travels.
 */
export default function RippleFx() {
  useEffect(() => {
    let lastX = 0
    let lastY = 0
    let lastT = 0

    const onDown = (e: PointerEvent) => {
      if (motionReduced()) return
      ripple(e.clientX, e.clientY, 220, e.pointerType === 'mouse' ? 3 : 2)
      plink()
    }
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || motionReduced()) return
      const now = performance.now()
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY)
      if (dist < 110 || now - lastT < 160) return
      lastX = e.clientX
      lastY = e.clientY
      lastT = now
      ripple(e.clientX, e.clientY, 90, 1, 'ripple-fx__ring--faint')
    }

    window.addEventListener('pointerdown', onDown, { passive: true })
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return null
}
