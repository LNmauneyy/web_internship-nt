import styles from './Skills.module.css'

const skills = [
  { icon: '🦙', name: 'Ollama / Local AI', level: 'LLM deployment & inference' },
  { icon: '⚡', name: 'Llama 4 Scout', level: "Meta's open-source frontier model" },
  { icon: '💎', name: 'Gemma 3:27B', level: "Google's multilingual LLM" },
  { icon: '🌐', name: 'Qwen 3.5', level: "Alibaba's open-weight model" },
  { icon: '⚛️', name: 'Quantum Computing', level: 'Circuit simulation & qubits' },
  { icon: '🧬', name: 'Polymer Simulator', level: 'Molecular dynamics research' },
  { icon: '🐧', name: 'Linux Server Admin', level: 'GPU server setup & maintenance' },
  { icon: '🐍', name: 'Python', level: 'Research scripting & automation' },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.eyebrow}>Tools & Tech</div>
      <h2 className={styles.title}>Skills gained</h2>
      <p className={styles.desc}>Hands-on tools and technologies used during the internship.</p>

      <div className={styles.grid}>
        {skills.map((s) => (
          <div key={s.name} className={styles.card}>
            <div className={styles.iconWrap}>{s.icon}</div>
            <div>
              <div className={styles.skillName}>{s.name}</div>
              <div className={styles.skillLevel}>{s.level}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
