import { motion } from 'motion/react'
import { ShieldIcon, EyeIcon, ZapIcon, FileCheckIcon, LinkIcon, GlobeIcon } from './Icons'
import SectionHeading from './SectionHeading'

const features = [
  {
    icon: ShieldIcon,
    title: 'Tamper-proof records',
    text: 'Every entry is cryptographically hashed and chained. Change one byte and the whole network notices.',
  },
  {
    icon: EyeIcon,
    title: 'Full transparency',
    text: 'Anyone with permission can trace the complete history of a record, from first entry to latest update.',
  },
  {
    icon: ZapIcon,
    title: 'Instant verification',
    text: 'Verify ownership or authenticity in seconds instead of waiting days for paperwork and manual checks.',
  },
  {
    icon: FileCheckIcon,
    title: 'Smart contracts',
    text: 'Transfers and approvals execute automatically once every condition is met. No middlemen required.',
  },
  {
    icon: LinkIcon,
    title: 'Easy integration',
    text: 'Plug Bhuchain into your existing systems with clean REST APIs and SDKs for web and mobile.',
  },
  {
    icon: GlobeIcon,
    title: 'Always available',
    text: 'A distributed network of nodes keeps your data online, with no single point of failure.',
  },
]

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <SectionHeading
          eyebrow="Why Bhuchain"
          title="Built for records that must never lie"
          text="Everything you need to store, share and verify important data with complete confidence."
        />

        <motion.div
          className="features"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {features.map(({ icon: FeatureIcon, title, text }) => (
            <motion.article
              key={title}
              className="feature"
              variants={card}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="feature__icon">
                <FeatureIcon />
              </div>
              <h3 className="feature__title">{title}</h3>
              <p className="feature__text">{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
