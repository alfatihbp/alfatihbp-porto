import { skillsData } from '@/data/skills';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import styles from './Skills.module.css';

const rotations = ['-1.5deg', '1.5deg', '-1deg'];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <SectionTitle
          title="Keahlian & Teknologi"
          subtitle="Teknologi dan tools yang sering saya gunakan dalam perancangan aplikasi web."
        />

        <div className={styles.grid}>
          {skillsData.map((category, idx) => (
            <div
              key={category.category}
              className={styles.card}
              style={{ '--skill-rotation': rotations[idx % rotations.length] }}
            >
              <div className={styles.tape} />
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <ul className={styles.skillList}>
                {category.skills.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    <span className={styles.dot}>✦</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
