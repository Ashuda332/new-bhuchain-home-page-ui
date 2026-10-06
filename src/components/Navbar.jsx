import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import { LogoMark, MenuIcon, CloseIcon } from './Icons'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#blocks', label: 'Live chain' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav__inner" aria-label="Main">
        <a href="#top" className="nav__logo" aria-label="Bhuchain home">
          <motion.span
            whileHover={{ rotate: 60 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            style={{ display: 'inline-flex' }}
          >
            <LogoMark />
          </motion.span>
          <span>BHUCHAIN</span>
        </a>

        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav__link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <motion.a
            href="#contact"
            className="btn btn--gold btn--sm"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Get started
          </motion.a>
          <button
            type="button"
            className="nav__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            className="nav__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {links.map((l, i) => (
              <motion.li
                key={l.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
