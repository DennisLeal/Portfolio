import { useEffect, type RefObject } from 'react'

// One line per 4s slide of dennis-leal-wfm-intro.mp4 (0, 4, 8, 12, 16s).
const SLIDE_SECONDS = 4
const LINES = [
  'Dennis Leal. Ten years in workforce management. Class and scenario tracking.',
  'A NICE I-E-X operations playbook.',
  'Kcal Log. A calorie tracker.',
  'WinSentinel. A security prototype.',
  "Zelven Labs. Let's build something together.",
]

const MALE_VOICE = /\b(guy|david|mark|daniel|george|james|ryan|brian|christopher|eric|male|alex|fred|aaron|arthur|thomas)\b/i
const FEMALE_VOICE = /\b(zira|hazel|susan|samantha|aria|jenny|sonia|libby|karen|moira|female|victoria|ava)\b/i

// Prefer a natural-sounding male English voice; fall back to any non-female one.
function pickVoice(synth: SpeechSynthesis) {
  const voices = synth.getVoices().filter((v) => v.lang.toLowerCase().startsWith('en'))
  const male = voices.filter((v) => MALE_VOICE.test(v.name) && !FEMALE_VOICE.test(v.name))
  return (
    male.find((v) => /natural|online/i.test(v.name)) ??
    male[0] ??
    voices.find((v) => !FEMALE_VOICE.test(v.name)) ??
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
      utterance.rate = 0.82
      utterance.pitch = 0.6
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
