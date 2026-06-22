import { motion } from "motion/react";
import styles from "./SkillCategory.module.css";
import SkillProgressBar from "../SkillProgressBar/SkillProgressBar";


const SkillCategory = ({ category, index }) => {
  const Icon = category.icon;


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={styles.category}
    >
      <div className={styles.categoryHeader}>
        <div className={styles.iconWrapper}>
          <Icon size={24} />
        </div>
        <h3 className={styles.categoryTitle}>{category.title}</h3>
      </div>
      <div className={styles.skills}>
        {category.skills.map((skill, skillIndex) => (
          <SkillProgressBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={index * 0.1 + skillIndex * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;
