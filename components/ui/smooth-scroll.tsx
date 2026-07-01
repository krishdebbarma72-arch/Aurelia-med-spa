'use client'

import gsap from 'gsap'
import Lenis from 'lenis'
import { useEffect } from 'react'
import { useReducedMotion } from '@/lib/use-reduced-motion'

/**
 * Mounts a Lenis smooth-scroll instance for the whole page and syncs it to
 * GSAP's internal ticker, so any GSAP/ScrollTrigger-driven animation added
 * later stays perfectly in step with the smoothed scroll position.
 *
 * Renders nothing — side-effect only. Mount once near the root layout.
 */
export function SmoothScroll() {
  const reduced = useReducedMotion()

  useEffect(() => {
    // Respect prefers-reduced-motion: skip smoothing, let the browser's
    // native (instant) scroll behavior take over.
    if (reduced) return

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    })

    function onTick(time: number) {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(500, 33)

    return () => {
      gsap.ticker.remove(onTick)
      lenis.destroy()
    }
  }, [reduced])

  return null
}
