import { motion } from "motion/react";
import { Heart, Code } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.glowLine} />

      <div className={styles.container}>
        <div className={styles.copy}>
          © {currentYear} Frontend Developer. All rights reserved.
        </div>

        <div className={styles.built}>
          <span>Built with</span>
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className={styles.heartWrapper}
          >
            <Heart size={16} className={styles.heart} />
          </motion.div>
          <span>and</span>
          <Code size={16} className={styles.code} />
          <span>using React + CSS Modules</span>
        </div>

        <button onClick={scrollToTop} className={styles.backToTop}>
          Back to Top 
        </button>
      </div>
    </footer>
  );
};

export default Footer;
