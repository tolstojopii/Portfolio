import Container from "@components/Container/Container";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import SkillCategory from "./SkillCategory/SkillCategory";
import {
  skillCategories,
  achievements,
} from "@constants/skills";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <Container>
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Мои технические навыки и постоянный рост"
          className={styles.title}
        />

        <div className={styles.categories}>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

        <div className={styles.achievementsWrapper}>
          <h3 className={styles.achievementsTitle}>Achievements</h3>
          <div className={styles.achievements}>
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={achievement.id} className={styles.achievement}>
                  <div className={styles.achievementIcon}>
                    <Icon size={28} />
                  </div>
                  <div className={styles.achievementNumber}>
                    {achievement.number}
                  </div>
                  <div className={styles.achievementLabel}>
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
