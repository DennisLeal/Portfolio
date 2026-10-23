import { useEffect } from 'react'
import { motionReduced } from '@/lib/a11y'

let ctx: AudioContext | null = null

// Short synthesized lightsaber swing: two slightly detuned saw waves give the
// beating hum, a low-pass sweep opens and closes like a pass-by, and a quiet
// sub tone adds body. No audio file to ship or load.
function plink(strength = 1) {
  try {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AC) return
    ctx ??= new AC()
    if (ctx.state === 'suspended') void ctx.resume()
    const c = ctx
    const t = c.currentTime
    const dur = 0.4

    const master = c.createGain()
    master.gain.setValueAtTime(0.0001, t)
    master.gain.exponentialRampToValueAtTime(0.028 * strength, t + 0.05)
    master.gain.exponentialRampToValueAtTime(0.0001, t + dur)

    const filter = c.createBiquadFilter()
    filter.type = 'lowpass'
    filter.Q.value = 4
    filter.frequency.setValueAtTime(350, t)
    filter.frequency.exponentialRampToValueAtTime(1600, t + 0.13)
    filter.frequency.exponentialRampToValueAtTime(300, t + dur)

    const tone = (type: OscillatorType, from: number, peak: number, to: number, vol: number) => {
      const osc = c.createOscillator()
      const gain = c.createGain()
      osc.type = type
      osc.frequency.setValueAtTime(from, t)
      osc.frequency.exponentialRampToValueAtTime(peak, t + 0.12)
      osc.frequency.exponentialRampToValueAtTime(to, t + dur)
      gain.gain.value = vol
      osc.connect(gain).connect(filter)
      osc.start(t)
      osc.stop(t + dur + 0.02)
    }
    tone('sawtooth', 95, 150, 105, 0.6)
    tone('sawtooth', 99, 156, 109, 0.6)
    tone('sine', 55, 75, 52, 0.8)

    filter.connect(master).connect(c.destination)
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
 * the contact point with a soft lightsaber swing sound, and on a mouse a faint ripple trails
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
