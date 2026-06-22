
import Container from '@components/Container/Container';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import ProjectCard from './ProjectCard/ProjectCard';
import { projects } from '@constants/projects';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <Container>
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Демонстрация моих последних работ"
          className={styles.title}
        />
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;