import ParticlesBackground from './ParticlesBackground';
import Button from '@components/Button/Button'
import Container from '@components/Container/Container'
import styles from './Hero.module.css'


const Hero = () => {

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <section className={styles.section}>
      <ParticlesBackground />
      <Container>
      <h1>Frotend Developer</h1>
      <h3>Crafting Digital Experiences</h3>
      <p>Увлекаюсь созданием понятных, эффективных интерфейсов и исключительных пользовательских сценариев. Стремлюсь писать элегантный код и постоянно изучаю новые технологии.</p>
      <div className={styles.buttons}>
      <Button variant="primary" size="large" onClick={scrollToProjects}>
        View My Work
      </Button>
      <Button variant="secondary" href="https://github.com/tolstojopii">
        GitHub
      </Button >
      </div>
      </Container>
    </section>
  )
}

export default Hero