import { motion, useAnimationControls } from 'framer-motion'

export interface AnimationSequence {
  key: string
  duration: number
}

const REGISTRY: Record<string, AnimationSequence> = {
  physical: { key: 'hit', duration: 0.5 },
  special: { key: 'blast', duration: 0.5 },
  status: { key: 'flash', duration: 0.3 }
}

export function useMoveAnimation(type: keyof typeof REGISTRY) {
  const controls = useAnimationControls()
  const seq = REGISTRY[type]
  const start = async () => {
    await controls.start({ opacity: [0, 1, 0], transition: { duration: seq.duration } })
  }
  return { controls, start }
}

export const MotionDiv = motion.div

/* TESTS */
if (process.argv[1] && process.argv[1].includes('Animations.ts')) {
  const { controls, start } = useMoveAnimation('physical')
  start().then(() => console.log('Animation complete'))
}

