import { Link, useNavigate } from 'react-router-dom';
import Button from '@components/Button/Button';
import { motion } from 'motion/react';
import { useState } from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleDemoClick = (e) => {
    e.stopPropagation();
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    } else {
      navigate(`/project/${project.id}`);
    }
  };

  const handleCodeClick = (e) => {
    e.stopPropagation();
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    } else {
      navigate(`/project/${project.id}`);
    }
  };

  return (
    <motion.div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link to={`/project/${project.id}`} className={styles.link}>
        <div className={styles.imageWrapper}>
          <img src={project.image} alt={project.title} className={styles.image} />
          {isHovered && (
            <div className={styles.overlay}>
              <Button variant="primary" size="small">
                Подробнее
              </Button>
            </div>
          )}
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className={styles.tag}>{tag.trim()}</span>
            ))}
            {project.tags.length > 3 && (
              <span className={styles.tag}>+{project.tags.length - 3}</span>
            )}
          </div>
          <div className={styles.buttons}>
            <Button
              variant="primary"
              size="small"
              onClick={handleDemoClick}
            >
              Demo
            </Button>
            <Button
              variant="secondary"
              size="small"
              onClick={handleCodeClick}
            >
              Code
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;