import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (section) => {
    setActive(section)
    setMenuOpen(false)
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className={styles.logoMark}>AS</span>
        <span className={styles.logoDot} />
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l}>
            <button
              className={`${styles.link} ${active === l ? styles.activeLink : ''}`}
              onClick={() => handleNav(l)}
            >
              {l}
            </button>
          </li>
        ))}
        <li>
          <a
            href="mailto:abdullahisalahdiis5395@gmail.com"
            className={styles.ctaBtn}
          >
            Hire Me
          </a>
        </li>
      </ul>

      <button
        className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
