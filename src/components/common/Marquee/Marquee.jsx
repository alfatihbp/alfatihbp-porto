import styles from './Marquee.module.css';

const items = [
  '⚡ REACT DEVELOPER',
  '✦ UI/UX OBSESSED',
  '🌱 CLEAN ARCHITECTURE',
  '✦ HIGH PERFORMANCE',
  '🚀 INTERACTIVE EXPERIENCES',
  '✦ ASYMMETRICAL DESIGN',
  '☕ PIXEL PERFECT',
];

export default function Marquee() {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.track}>
        {/* Double the list for infinite seamless loop */}
        {[...items, ...items].map((item, index) => (
          <span key={index} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

