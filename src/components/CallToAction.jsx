import { motion } from 'motion/react'
import { ArrowRightIcon } from './Icons'

export default function CallToAction() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          className="cta"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cta__border" aria-hidden="true" />
          <div className="cta__content">
            <h2 className="cta__title">
              Ready to put your records <span className="text-gold">on-chain?</span>
            </h2>
            <p className="cta__text">
              Talk to our team and get a free walkthrough of how Bhuchain fits your workflow.
            </p>
            <div className="hero__ctas cta__actions">
              <motion.a
                href="mailto:hello@bhuchain.com"
                className="btn btn--gold"
                whileHover={{ scale: 1.04, boxShadow: '0 0 40px var(--gold-glow)' }}
                whileTap={{ scale: 0.97 }}
              >
                Book a demo
                <ArrowRightIcon size={18} />
              </motion.a>
              <motion.a
                href="#features"
                className="btn btn--ghost"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore features
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
