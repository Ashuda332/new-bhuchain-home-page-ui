import { motion } from 'motion/react'

export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-heading__title">{title}</h2>
      {text && <p className="section-heading__text">{text}</p>}
    </motion.div>
  )
}
