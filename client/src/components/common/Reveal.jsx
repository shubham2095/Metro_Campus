import { useEffect, useRef, useState } from 'react'

// Wraps children and reveals them with an animation when scrolled into view.
// Props:
//   delay      – ms before the animation starts (stagger)
//   direction  – 'up' | 'down' | 'left' | 'right' (default 'up')
//   once       – if false, re-animates every time it scrolls in/out (default true)
//   className  – extra classes
export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  once = true,
  className = '',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect users who prefer reduced motion — show instantly, no animation.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  // starting offset based on direction
  const offset = {
    up: 'translateY(36px)',
    down: 'translateY(-36px)',
    left: 'translateX(36px)',
    right: 'translateX(-36px)',
  }[direction]

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0, 0)' : offset,
        transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}