import { useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './MobileMenu.module.css';

const MobileMenu = ({ isOpen, onClose }) => {
  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>

      <div className={styles.overlay} onClick={onClose} />


      <div className={styles.content}>

        <button className={styles.closeButton} onClick={onClose}>
          <X size={28} />
        </button>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={styles.link}
            >
              {link.name}
              <span className={styles.linkUnderline} />
            </button>
          ))}
        </nav>


        <div className={styles.footer}>
          <p>© 2026 Frontend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;