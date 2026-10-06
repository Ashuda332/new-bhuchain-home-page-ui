import { useRef } from 'react'
import { motion, useScroll } from 'motion/react'
import SectionHeading from './SectionHeading'

const steps = [
  {
    title: 'Submit',
    text: 'Upload a record or start a transaction from the dashboard, app or API.',
  },
  {
    title: 'Validate',
    text: 'Independent nodes check the data and reach consensus within seconds.',
  },
  {
    title: 'Seal',
    text: 'The record is hashed into a new block and linked to the chain forever.',
  },
  {
    title: 'Verify',
    text: 'Share a proof link. Anyone can confirm authenticity instantly.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 60%'],
  })

  return (
    <section className="section section--alt" id="how">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title="From entry to proof in four steps"
          text="A simple flow on the surface, backed by battle-tested cryptography underneath."
        />

        <div className="timeline" ref={ref}>
          <div className="timeline__track" aria-hidden="true">
            <motion.div className="timeline__fill" style={{ scaleY: scrollYProgress }} />
          </div>

          <ol className="timeline__list">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                className="step"
                initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  className="step__num"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.15 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.span>
                <div className="step__card">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
