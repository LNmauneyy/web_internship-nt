import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.hero}>
      <div className={styles.orbitDot} />
      <div className={styles.badge}>
        <span className={styles.badgeDot} />
        Research Assistant · National Telecom PCL
      </div>
      <h1 className={styles.h1}>
        Hi, I'm <em className={styles.orange}>Teerapol</em>
        <br />
        <span className={styles.cyan}>Research</span> Assistant
      </h1>
      <p className={styles.sub}>
        Computer Education student at KMUTNB exploring Local LLM, Quantum Computing,
        and Polymer Simulation at National Telecom PCL Innovation Center.
      </p>
      <div className={styles.btns}>
        <button className={styles.btnPrimary} onClick={() => scrollTo('research')}>
          View Research ↓
        </button>
        <button className={styles.btnOutline} onClick={() => scrollTo('about')}>
          Download Certificate →
        </button>
      </div>
    </div>
  )
}
