import styles from './Gallery.module.css'

const photos = [
  { id: 1, title: 'Server Rack', image: '/images/server-rack.jpg' },
  { id: 2, title: 'Ai Workstation', image: '/images/ai-workstation.jpg' },
]

export default function Gallery() {
  const getImageUrl = (photo) => {
    if (photo.image) return photo.image
    return `https://via.placeholder.com/640x420?text=${encodeURIComponent(photo.title)}`
  }

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>Gallery</div>
        <h2 className={styles.title}>Project snapshots</h2>
        <p className={styles.desc}>
          A visual recap from the internship: research labs, team sessions, server installs,
          and experimentation spaces.
        </p>
      </div>

      <div className={styles.grid}>
        {photos.map((photo) => (
          <div key={photo.id} className={styles.card}>
            <img
              src={getImageUrl(photo)}
              alt={photo.title}
              className={styles.image}
            />
            <div className={styles.label}>{photo.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
