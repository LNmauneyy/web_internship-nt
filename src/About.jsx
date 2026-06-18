import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.eyebrow}>Certificate</div>
      <h2 className={styles.title}>Internship record</h2>
      <p className={styles.desc}>
        Official certification from National Telecom PCL Innovation Center, April–June 2026.
      </p>

      <div className={styles.card}>
        <div className={styles.field}>
          <label>Name</label>
          <p>Mr. Teerapol Aeamsa-ard</p>
        </div>
        <div className={styles.field}>
          <label>University</label>
          <p>King Mongkut's Institute of Technology North Bangkok (KMUTNB)</p>
        </div>
        <div className={styles.field}>
          <label>Host Organization</label>
          <p>National Telecom PLC — Innovation Center (Head Quarter)</p>
        </div>
        <div className={styles.field}>
          <label>Period</label>
          <p>20 April – 16 June 2026</p>
        </div>
        <div className={styles.field}>
          <label>Role</label>
          <p>Research Assistant</p>
        </div>
        <div className={styles.field}>
          <label>Supervisor</label>
          <p>
            Dr.–Ing. Somrak Petchartee
            <br />
            Senior Director, Innovation Center
          </p>
        </div>
        <div className={`${styles.field} ${styles.full}`}>
          <label>Recommendation</label>
          <p className={styles.quote}>
            "I were very impressed with Teerapol during his internship. He was punctual, engaged
            in his tasks and an excellent problem solver. His eagerness to succeed and his attention
            to detail were very welcome in my fast-paced environment."
          </p>
        </div>
      </div>
    </section>
  )
}
