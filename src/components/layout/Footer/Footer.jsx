import { profileData } from '@/data/profile';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <p className={styles.copyright}>
          © {currentYear} {profileData.name}. All rights reserved.
        </p>

        <div className={styles.socials}>
          {profileData.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

