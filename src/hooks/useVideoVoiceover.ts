import { useEffect, type RefObject } from 'react'

// One line per 4s slide of dennis-leal-wfm-intro.mp4 (0, 4, 8, 12, 16s).
const SLIDE_SECONDS = 4
const LINES = [
  "I'm Dennis Leal, an I-E-X Administrator with ten years in workforce management. First, WFM class and scenario tracking.",
  'A NICE I-E-X admin operations playbook.',
  'Kcal Log, a calorie tracking app.',
  'WinSentinel, a Windows security prototype.',
  "And Zelven Labs, AI-assisted software. Let's work together.",
]

function pickVoice(synth: SpeechSynthesis) {
  const voices = synth.getVoices().filter((v) => v.lang.toLowerCase().startsWith('en'))
  return (
    voices.find((v) => /natural|online|google/i.test(v.name)) ??
    voices.find((v) => v.lang.toLowerCase() === 'en-us') ??
    voices[0]
  )
}

/**
 * Reads the intro video's slides aloud once the visitor unmutes it. The video
 * has no audio track, so this is browser speech kept in step with the
 * playhead: it stops on mute, pause, loop, seek and when the tab is hidden.
 */
export function useVideoVoiceover(ref: RefObject<HTMLVideoElement | null>, layoutKey: unknown) {
  useEffect(() => {
    const video = ref.current
    const synth = typeof window !== 'undefined' ? window.speechSynthesis : undefined
    if (!video || !synth) return

    let last = -1

    const speak = (index: number) => {
      const utterance = new SpeechSynthesisUtterance(LINES[index])
      utterance.rate = 1.1
      utterance.lang = 'en-US'
      const voice = pickVoice(synth)
      if (voice) utterance.voice = voice
      synth.speak(utterance)
    }

    const stop = () => {
      synth.cancel()
      last = -1
    }

    const onTime = () => {
      if (video.muted || video.paused) return
      const index = Math.min(LINES.length - 1, Math.floor(video.currentTime / SLIDE_SECONDS))
      if (index === last) return
      if (index < last || index > last + 1) synth.cancel()
      last = index
      speak(index)
    }

    const onVolume = () => {
      if (video.muted) stop()
      else onTime()
    }
    const onPause = () => synth.pause()
    const onPlay = () => synth.resume()
    const onHidden = () => {
      if (document.hidden) stop()
    }

    video.addEventListener('timeupdate', onTime)
    video.addEventListener('volumechange', onVolume)
    video.addEventListener('pause', onPause)
    video.addEventListener('play', onPlay)
    video.addEventListener('seeking', stop)
    document.addEventListener('visibilitychange', onHidden)

    return () => {
      video.removeEventListener('timeupdate', onTime)
      video.removeEventListener('volumechange', onVolume)
      video.removeEventListener('pause', onPause)
      video.removeEventListener('play', onPlay)
      video.removeEventListener('seeking', stop)
      document.removeEventListener('visibilitychange', onHidden)
      synth.cancel()
    }
  }, [ref, layoutKey])
}
