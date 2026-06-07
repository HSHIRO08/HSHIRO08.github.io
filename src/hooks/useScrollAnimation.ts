import { useEffect, useRef, type DependencyList } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(
  selector: string,
  vars?: gsap.TweenVars,
  deps: DependencyList = []
) {
  const ctx = useRef<gsap.Context | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    ctx.current = gsap.context(() => {
      gsap.utils.toArray<Element>(selector).forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40, ...vars?.from },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            ...vars,
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
              ...(vars?.scrollTrigger as object),
            },
          }
        )
      })
    })

    return () => ctx.current?.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export function useClipReveal(
  ref: React.RefObject<Element | null>,
  deps: DependencyList = []
) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !ref.current) return

    const el = ref.current
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.4,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export function useParallax(
  ref: React.RefObject<Element | null>,
  amount = 80,
  deps: DependencyList = []
) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !ref.current) return

    const el = ref.current
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -amount / 2 },
        {
          y: amount / 2,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    })

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
