import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Timeline from './Timeline'
import Research from './Research'
import Skills from './Skills'
import Gallery from './Gallery'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className={styles.divider} />
        <About />
        <hr className={styles.divider} />
        <Timeline />
        <hr className={styles.divider} />
        <Research />
        <hr className={styles.divider} />
        <Skills />
        <hr className={styles.divider} />
        <Gallery />
      </main>
      <footer className={styles.footer}>
        © 2026 Teerapol Aeamsa-ard · KMUTNB · Internship at National Telecom PCL Innovation Center
      </footer>
    </>
  )
}
