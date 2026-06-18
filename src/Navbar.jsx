import styles from './Navbar.module.css'

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>TA</div>
        Teerapol A.
      </div>
      <ul className={styles.links}>
        {['about', 'timeline', 'research', 'skills', 'gallery'].map((id) => (
          <li key={id}>
            <button onClick={() => scrollTo(id)} className={styles.link}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <button className={styles.cta} onClick={() => scrollTo('about')}>Contact Me</button>
    </nav>
  )
}
