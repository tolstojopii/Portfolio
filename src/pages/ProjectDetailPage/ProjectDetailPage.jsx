import { useParams, Link } from 'react-router-dom';
import { projects } from '@constants/projects';
import Container from '@components/Container/Container';
import styles from './ProjectDetailPage.module.css';

const ProjectDetailPage = () => {
  const { id } = useParams();
  
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <Container className={styles.container}>
        <div className={styles.notFound}>
          <h1>404</h1>
          <p>Проект не найден</p>
          <Link to="/" className={styles.backLink}>Вернуться на главную</Link>
        </div>
      </Container>
    );
  }

  return (
    <Container className={styles.container}>
      <div className={styles.project}>

        <h1 className={styles.title}>{project.title}</h1>

        <div className={styles.imageWrapper}>
          <img 
            src={project.image} 
            alt={project.title} 
            className={styles.image} 
          />
        </div>


        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag.trim()}
            </span>
          ))}
        </div>


        {!project.demoUrl && !project.githubUrl ? (
          <div className={styles.unavailable}>
            <h2>Проект временно недоступен</h2>
            <p>Демо и репозиторий проекта возможно будут добавлены позже</p>
          </div>
        ) : (
          <div className={styles.links}>
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                 Демо
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                 Код
              </a>
            )}
          </div>
        )}


        <Link to="/" className={styles.backLink}>
          ← Вернуться на главную
        </Link>
      </div>
    </Container>
  );
};

export default ProjectDetailPage;