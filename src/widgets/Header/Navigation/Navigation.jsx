import styles from './Navigation.module.css';

const Navigation = () => {
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
    }
  };

  return (
    <nav className={styles.nav}>
      {navLinks.map((link) => (
        <button
          key={link.id}
          onClick={() => scrollToSection(link.id)}
          className={styles.link}
        >
          {link.name}
          <span className={styles.underline} />
        </button>
      ))}
    </nav>
  );
};

export default Navigation;