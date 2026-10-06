import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import ChainVisual from './ChainVisual'
import { ArrowRightIcon, PlayIcon, ShieldIcon } from './Icons'

const ease = [0.22, 1, 0.36, 1]
const line1 = ['Trust', 'that', 'is']
const line2 = ['written', 'in', 'blocks.']

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
}
const word = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease } },
}
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
})

export default function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const glowY = useTransform(scrollY, [0, 600], [0, 120])

  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden="true" />
      <motion.div
        className="hero__glow hero__glow--a"
        style={{ y: glowY }}
        animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="hero__glow hero__glow--b"
        animate={reduce ? undefined : { x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className="hero__inner">
        <div className="hero__copy">
          <motion.span className="pill" {...fadeUp(0.1)}>
            <ShieldIcon size={16} />
            Secured on blockchain
          </motion.span>

          <motion.h1 className="hero__title" variants={container} initial="hidden" animate="show">
            <span className="hero__line">
              {line1.map((w) => (
                <motion.span key={w} variants={word} className="hero__word">
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="hero__line">
              {line2.map((w) => (
                <motion.span key={w} variants={word} className="hero__word text-gold">
                  {w}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p className="hero__sub" {...fadeUp(0.9)}>
            Bhuchain records every transaction on an immutable, transparent ledger, so your
            records can be verified instantly and never quietly changed.
          </motion.p>

          <motion.div className="hero__ctas" {...fadeUp(1.05)}>
            <motion.a
              href="#contact"
              className="btn btn--gold"
              whileHover={{ scale: 1.04, boxShadow: '0 0 40px var(--gold-glow)' }}
              whileTap={{ scale: 0.97 }}
            >
              Get started
              <ArrowRightIcon size={18} />
            </motion.a>
            <motion.a
              href="#how"
              className="btn btn--ghost"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <PlayIcon size={18} />
              See how it works
            </motion.a>
          </motion.div>

          <motion.ul className="hero__trust" {...fadeUp(1.2)}>
            <li>
              <strong>256-bit</strong> encryption
            </li>
            <li>
              <strong>0</strong> records altered
            </li>
            <li>
              <strong>24/7</strong> audit trail
            </li>
          </motion.ul>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.4 }}
        >
          <ChainVisual />
        </motion.div>
      </div>
    </section>
  )
}
