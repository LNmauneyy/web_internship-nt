import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.avatar}>TA</div>
        <div>
          <p className={styles.role}>Research Assistant</p>
          <h1 className={styles.name}>Teerapol A.</h1>
        </div>
      </div>

      <div className={styles.section}>
        <h2>English Bio</h2>
        <p>
          Computer Education student at KMUTNB researching local AI, quantum computing,
          and polymer simulation at National Telecom PCL Innovation Center.
        </p>
      </div>

      <div className={styles.tags}>
        <span>English</span>
        <span>Portfolio</span>
      </div>
    </aside>
  )
}
