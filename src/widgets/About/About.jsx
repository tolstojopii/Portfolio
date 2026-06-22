import Container from "@components/Container/Container";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import styles from "./About.module.css";
import { Code2, Palette, Database, GitBranch, Cpu, Layers,  } from "lucide-react";

const About = () => {
  const technologies = [
    { name: "HTML5", icon: Code2, color: "#E34F26" },
    { name: "CSS3", icon: Palette, color: "#1572B6" },
    { name: "JavaScript", icon: Code2, color: "#F7DF1E" },
    { name: "React", icon: Cpu, color: "#61DAFB" },
    { name: "Vue", icon: Layers, color: "#4FC08D" },
    { name: "Node.js", icon: Database, color: "#339933" },
    { name: "Git", icon: GitBranch, color: "#F05032" },
    { name: "TypeScript", icon: Code2, color: "#3178C6" },
    
  ];

  return (
    <section className={styles.section} id="about">
      <Container>
        <SectionTitle
          title="About me"
          subtitle="Кто я такой"
          className={styles.title}
        />
        <div className={styles.bio}>
          <p>
            Я увлеченный фронтенд-разработчик с чувством дизайна и
            любовью к созданию удобных пользовательских интерфейсов. Мой путь в
            веб-разработке начался с любопытства и перерос в стремление
            создавать идеальные с точки зрения производительности приложения,
            которые нравятся пользователям.
          </p>
          <p>
            В настоящее время я постоянно расширяю свой набор навыков и
            стремлюсь стать Full-Stack-разработчиком. Надо быть в курсе последних тенденций
            и лучших практик в отрасли.
          </p>
          <p>
            Изучаю новые технологии,
            делюсь своими знаниями.
          </p>
        </div>
        <div className={styles.techGrid}>
  {technologies.map((tech, index) => {
    const Icon = tech.icon
    return (
      <div key={tech.name} className={styles.techItem}>
        <Icon size={32} style={{ color: tech.color }} />
        <span className={styles.name}>{tech.name}</span>
      </div>
    )
  })}
</div>
      </Container>
    </section>
  );
};

export default About;
