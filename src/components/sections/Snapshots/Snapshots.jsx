import { snapshotsData } from '@/data/snapshots';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import styles from './Snapshots.module.css';

export default function Snapshots() {
  return (
    <section id="snapshots" className={styles.section}>
      <div className="container">
        <SectionTitle
          title="Di Balik Layar 📸"
          subtitle="Koleksi foto ruang kerja, proses ngoding malam hari, dan ide yang sedang dieksplorasi."
        />

        <div className={styles.scrapbookCanvas}>
          {snapshotsData.map((snap) => (
            <div
              key={snap.id}
              className={styles.photoFrame}
              style={{ '--snap-rotation': snap.rotation }}
            >
              {/* Tape sticker */}
              <div className={styles.tape} />

              <div className={styles.imageBox}>
                <img src={snap.image} alt={snap.caption} className={styles.image} />
              </div>

              <div className={styles.captionBox}>
                <span className={styles.tag}>{snap.tag}</span>
                <p className={styles.captionText}>{snap.caption}</p>
              </div>
            </div>
          ))}

          {/* Sticky Post-it Note in the Collage */}
          <div className={styles.stickyNote}>
            <div className={styles.pin} />
            <p className={styles.noteTitle}>⚡ NOTE TO SELF</p>
            <p className={styles.noteBody}>
              "Code is like humor. When you have to explain it, it’s bad."
            </p>
            <span className={styles.noteSignature}>— Always Ship Quality.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

