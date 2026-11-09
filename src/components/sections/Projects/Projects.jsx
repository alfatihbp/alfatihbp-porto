import { projectsData } from '@/data/projects';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import ProjectCard from '@/components/common/ProjectCard/ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <SectionTitle
          title="Proyek Pilihan"
          subtitle="Beberapa proyek web yang telah saya kembangkan baru-baru ini."
        />

        <div className={styles.grid}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

