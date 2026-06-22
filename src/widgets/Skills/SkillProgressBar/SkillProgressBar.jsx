import { motion } from "motion/react";
import styles from './SkillProgressBar.module.css'

const SkillProgressBar = ({ name, level, delay=0}) => {
  return (
    <div className={styles.skill}>
      <div className={styles.skillInfo}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.progressTrack}>
        <motion.div 
        initial={{width: 0}}
        whileInView={{width: `${level}%`}}
        viewport={{once: true}}
        transition={{delay, duration: 1, ease: 'easeOut'}}
        className={styles.progressFill}
        />
      </div>
    </div>
  )
}

export default SkillProgressBar