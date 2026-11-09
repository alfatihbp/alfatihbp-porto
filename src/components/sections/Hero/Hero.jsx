import { profileData } from '@/data/profile';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="about" className={styles.heroSection}>
      <div className={`container ${styles.heroGrid}`}>
        {/* Left Column: Asymmetrical Typography & Content */}
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <span className={styles.pulseDot} />
            <span>{profileData.status}</span>
          </div>

          <h1 className={styles.headline}>
            Membangun Web <span className={styles.highlight}>Interaktif</span> & Penuh Karakter.
          </h1>

          <p className={styles.bio}>
            {profileData.bio}
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryButton}>
              Eksplor Proyek ↗
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Hubungi Saya
            </a>
          </div>

          {/* Mini sticker tags */}
          <div className={styles.stickerRow}>
            <span className={`${styles.sticker} ${styles.sticker1}`}>⚡ Fast & Responsive</span>
            <span className={`${styles.sticker} ${styles.sticker2}`}>✨ React Specialist</span>
            <span className={`${styles.sticker} ${styles.sticker3}`}>🇮🇩 {profileData.location}</span>
          </div>
        </div>

        {/* Right Column: Creative Scrapbook Photo Frame & Collage */}
        <div className={styles.visualContent}>
          {/* Main Polaroid Frame */}
          <div className={styles.polaroidCard}>
            {/* Masking tape on top */}
            <div className={styles.tape} />

            <div className={styles.imageWrapper}>
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className={styles.profileImg}
              />
              <div className={styles.imageOverlay} />
            </div>

            <div className={styles.polaroidCaption}>
              <p className={styles.captionName}>{profileData.name}</p>
              <p className={styles.captionRole}>Creative Developer • Crafting Interfaces</p>
            </div>
          </div>

          {/* Overlapping Floating Stats Card */}
          <div className={styles.floatingStats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>{profileData.projectsCompleted}</span>
              <span className={styles.statLabel}>Proyek Web</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>{profileData.experienceYears}</span>
              <span className={styles.statLabel}>Tahun Eksplorasi</span>
            </div>
          </div>

          {/* Floating Sticker */}
          <div className={styles.floatingBadge}>
            ✦ 100% CODE DRIVEN
          </div>
        </div>
      </div>
    </section>
  );
}
