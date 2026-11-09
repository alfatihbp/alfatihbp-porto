import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const { title, description, tags, demoUrl, githubUrl, image, featured, rotation } = project;

  return (
    <article
      className={`${styles.card} ${featured ? styles.featuredCard : ''}`}
      style={{ '--card-rotation': rotation || '0deg' }}
    >
      {/* Tape decoration */}
      <div className={styles.tape} />

      {/* Image Mockup Container */}
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.projectImage} />
          <div className={styles.imageGlow} />
          {featured && <span className={styles.featuredBadge}>⭐ Featured Project</span>}
        </div>
      )}

      {/* Project Content */}
      <div className={styles.content}>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.footer}>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.primaryBtn}`}
            >
              Live Demo ↗
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.secondaryBtn}`}
            >
              GitHub Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
