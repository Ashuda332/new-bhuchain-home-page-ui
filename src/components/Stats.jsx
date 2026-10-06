import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'motion/react'

const stats = [
  { value: 12.4, decimals: 1, suffix: 'M+', label: 'Transactions secured' },
  { value: 99.99, decimals: 2, suffix: '%', label: 'Network uptime' },
  { value: 2.1, decimals: 1, suffix: 's', label: 'Average confirmation' },
  { value: 340, decimals: 0, suffix: '+', label: 'Partner organisations' },
]

function Counter({ value, decimals, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setDisplay,
    })
    return () => controls.stop()
  }, [inView, reduce, value])

  return (
    <span ref={ref} className="stat__value">
      {display.toFixed(decimals)}
      <span className="text-gold">{suffix}</span>
    </span>
  )
}

export default function Stats() {
  return (
    <section className="stats" aria-label="Bhuchain in numbers">
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="stat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Counter {...s} />
            <span className="stat__label">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
