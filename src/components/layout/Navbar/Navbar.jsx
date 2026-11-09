import { useState, useEffect } from 'react';
import { profileData } from '@/data/profile';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('porto_theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('porto_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo}>
          {profileData.name}
          <span className={styles.dot}>.</span>
        </a>

        <div className={styles.rightNav}>
          <nav>
            <ul className={styles.navList}>
              <li><a href="#about" className={styles.navLink}>Tentang</a></li>
              <li><a href="#projects" className={styles.navLink}>Proyek</a></li>
              <li><a href="#snapshots" className={styles.navLink}>Galeri</a></li>
              <li><a href="#skills" className={styles.navLink}>Keahlian</a></li>
              <li><a href="#contact" className={styles.navLinkContact}>Kontak</a></li>
            </ul>
          </nav>

          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle theme"
            title={`Ganti ke mode ${theme === 'dark' ? 'terang' : 'gelap'}`}
          >
            {theme === 'dark' ? (
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
