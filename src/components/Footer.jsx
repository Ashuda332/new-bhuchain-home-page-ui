import { motion } from 'motion/react'
import { LogoMark, GithubIcon, XBrandIcon, LinkedinIcon } from './Icons'

const columns = [
  { title: 'Product', links: ['Features', 'How it works', 'Pricing', 'API docs'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
]

const YEAR = new Date().getFullYear()

const socials = [
  { icon: GithubIcon, label: 'GitHub' },
  { icon: XBrandIcon, label: 'X' },
  { icon: LinkedinIcon, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#top" className="nav__logo" aria-label="Bhuchain home">
            <LogoMark />
            <span>BHUCHAIN</span>
          </a>
          <p>Tamper-proof records and transactions, secured on the blockchain.</p>
          <div className="footer__socials">
            {socials.map(({ icon: SocialIcon, label }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                className="footer__social"
                whileHover={{ y: -3 }}
              >
                <SocialIcon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {columns.map((c) => (
          <div key={c.title} className="footer__col">
            <h3>{c.title}</h3>
            <ul>
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container footer__bottom">
        <span>© {YEAR} Bhuchain. All rights reserved.</span>
        <span className="footer__status">
          <span className="dot" /> All systems operational
        </span>
      </div>
    </footer>
  )
}
