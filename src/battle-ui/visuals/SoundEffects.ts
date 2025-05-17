import { Howl } from 'howler'

const SOUNDS: Record<string, string> = {
  hit: '/sounds/hit.wav'
}

const cache: Record<string, Howl> = {}

export function playSound(key: keyof typeof SOUNDS) {
  if (!cache[key]) {
    cache[key] = new Howl({ src: [SOUNDS[key]] })
  }
  cache[key].play()
}

export function muteAll(muted: boolean) {
  Howl.mute(muted)
  localStorage.setItem('mute', muted ? '1' : '0')
}

/* TESTS */
if (process.argv[1] && process.argv[1].includes('SoundEffects.ts')) {
  playSound('hit')
  console.log('Sound test complete')
}

