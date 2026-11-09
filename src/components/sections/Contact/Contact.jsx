import { profileData } from '@/data/profile';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import styles from './Contact.module.css';

export default function Contact() {
  const emailSocial = profileData.socials.find((s) => s.icon === 'email');

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <SectionTitle
          title="Mari Kolaborasi 🤝"
          subtitle="Punya ide proyek menarik atau ingin berdiskusi seputar web development? Pintu selalu terbuka!"
        />

        <div className={styles.envelopeCard}>
          <div className={styles.tape} />

          <span className={styles.stamp}>✦ FAST RESPONSE</span>

          <h3 className={styles.cardHeading}>Siap Mewujudkan Ide Anda?</h3>
          <p className={styles.message}>
            Saya selalu bersemangat untuk mengerjakan proyek baru, membangun antarmuka inovatif, atau sekadar bertukar wawasan tentang teknologi modern.
          </p>

          <div className={styles.actions}>
            {emailSocial && (
              <a href={emailSocial.url} className={styles.emailButton}>
                Kirim Email Langsung
              </a>
            )}
          </div>

          <div className={styles.socialChips}>
            {profileData.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.chip}
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
