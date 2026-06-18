import styles from './Timeline.module.css'

const weeks = [
  {
    week: 'Week 1–2',
    title: 'Orientation & Setup',
    desc: 'Onboarding at NT Innovation Center. Set up local AI environment, installed Ollama and pulled first models. Explored the infrastructure of the Innovation Center\'s GPU server.',
    side: 'left',
  },
  {
    week: 'Week 3–4',
    title: 'Local LLM Research',
    desc: 'Deployed and benchmarked local language models: Llama 4 Scout, Gemma 3:27B, and Qwen 3.5. Evaluated performance, latency, and use-cases for enterprise internal tools.',
    side: 'right',
  },
  {
    week: 'Week 5–6',
    title: 'Quantum Computing Exploration',
    desc: 'Set up quantum computing simulation server. Studied quantum circuit design, superposition, and entanglement concepts through hands-on simulations.',
    side: 'left',
  },
  {
    week: 'Week 7–8',
    title: 'Polymer Simulation & Final Project',
    desc: 'Contributed to polymer simulator research. Integrated AI assistance into simulation workflows. Presented final research findings to Innovation Center team.',
    side: 'right',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className={styles.section}>
      <div className={styles.eyebrow}>8 Weeks</div>
      <h2 className={styles.title}>Internship journey</h2>
      <p className={styles.desc}>
        From onboarding to independent research contributions — week by week.
      </p>

      <div className={styles.wrap}>
        <div className={styles.lineCol}>
          <div className={styles.line} />
        </div>

        {weeks.map((item, i) => (
          <div key={i} className={styles.row}>
            {item.side === 'left' ? (
              <>
                <div className={`${styles.card} ${styles.cardLeft}`}>
                  <div className={styles.week}>{item.week}</div>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemDesc}>{item.desc}</div>
                </div>
                <div className={styles.dotWrap}>
                  <div className={styles.dot} />
                </div>
                <div />
              </>
            ) : (
              <>
                <div />
                <div className={styles.dotWrap}>
                  <div className={styles.dot} />
                </div>
                <div className={`${styles.card} ${styles.cardRight}`}>
                  <div className={styles.week}>{item.week}</div>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemDesc}>{item.desc}</div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
