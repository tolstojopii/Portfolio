import About from "@widgets/About/About"
import Contact from "@widgets/Contact/Contact"
import Hero from "@widgets/Hero/Hero"
import Project from "@widgets/Projects/Projects"
import Skills from "@widgets/Skills/Skills"


const HomePage = () => {
  return (
    <div>
    <Hero />
    <About />
    <Project />
    <Skills />
    <Contact />
    </div>
  )
}

export default HomePage