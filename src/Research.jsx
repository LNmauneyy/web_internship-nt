import styles from './Research.module.css'

const cards = [
  {
    icon: '🤖',
    iconBg: 'rgba(139,92,246,0.15)',
    title: 'Local LLM',
    desc: 'Deployed and benchmarked open-source large language models on-premises. Studied inference optimization and enterprise use cases without cloud dependency.',
    tags: ['Llama 4 Scout', 'Gemma 3:27B', 'Qwen 3.5', 'Ollama'],
    tagClass: 'purple',
  },
  {
    icon: '⚛️',
    iconBg: 'rgba(0,212,204,0.1)',
    title: 'Quantum Computing',
    desc: 'Explored quantum circuit simulation on dedicated research server. Studied qubit manipulation, superposition states, and the fundamentals of quantum advantage.',
    tags: ['Qubits', 'Superposition', 'Entanglement', 'Simulation'],
    tagClass: 'teal',
  },
  {
    icon: '🧬',
    iconBg: 'rgba(255,107,26,0.1)',
    title: 'Polymer Simulation',
    desc: 'Assisted in polymer molecular simulation research. Explored how computational models help predict material properties and accelerate advanced materials discovery.',
    tags: ['Molecular Design', 'Smart Materials', 'AI-assisted Sim'],
    tagClass: 'orange',
  },
]

export default function Research() {
  return (
    <section id="research" className={styles.section}>
      <div className={styles.eyebrow}>Three Disciplines</div>
      <h2 className={styles.title}>The research triad</h2>
      <p className={styles.desc}>Three cutting-edge fields. One internship. One innovation center.</p>

      <div className={styles.grid}>
        {cards.map((c) => (
          <div key={c.title} className={styles.card}>
            <div className={styles.icon} style={{ background: c.iconBg }}>{c.icon}</div>
            <h3 className={styles.cardTitle}>{c.title}</h3>
            <p className={styles.cardDesc}>{c.desc}</p>
            <div className={styles.tagRow}>
              {c.tags.map((t) => (
                <span key={t} className={`${styles.tag} ${styles[c.tagClass]}`}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
