import styles from "./SectionTitle.module.css";

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`${styles.title} ${className}`}>
      <h2 >{title}</h2>
      <div className={styles.line} />
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
