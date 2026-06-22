import styles from './Header.module.css'
import { useState, useEffect } from 'react';
import Navigation from './Navigation/Navigation'
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu/MobileMenu'


const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(()=>{
    const handleScroll = () =>{
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768){
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return(
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo}>
          FD
        </a>
        <Navigation />


        <button className={styles.burger} onClick={toggleMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}/>
    </header>
  ) 
}


export default Header;