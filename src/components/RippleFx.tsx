import { useEffect } from 'react'
import { motionReduced } from '@/lib/a11y'

let ctx: AudioContext | null = null

// Short synthesized water-drop: a sine that falls in pitch, plus a softer
// echo. No audio file to ship or load.
function plink(strength = 1) {
  try {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AC) return
    ctx ??= new AC()
    if (ctx.state === 'suspended') void ctx.resume()
    const t = ctx.currentTime
    const drop = (start: number, from: number, to: number, vol: number) => {
      const osc = ctx!.createOscillator()
      const gain = ctx!.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(from, start)
      osc.frequency.exponentialRampToValueAtTime(to, start + 0.16)
      gain.gain.setValueAtTime(0.0001, start)
      gain.gain.exponentialRampToValueAtTime(vol * strength, start + 0.012)
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.28)
      osc.connect(gain).connect(ctx!.destination)
      osc.start(start)
      osc.stop(start + 0.3)
    }
    drop(t, 880, 340, 0.09)
    drop(t + 0.09, 660, 260, 0.04)
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
 * the contact point with a soft drop sound, and on a mouse a faint ripple trails
 * the cursor as it travels.
 */
export default function RippleFx() {
  useEffect(() => {
    let lastX = 0
    let lastY = 0
    let lastT = 0

    const onDown = (e: PointerEvent) => {
      if (motionReduced()) return
      ripple(e.clientX, e.clientY, 220, 3)
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
