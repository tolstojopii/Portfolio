import { Mail } from "lucide-react";
import { socialLinks } from "@constants/socialLinks";
import styles from './ContactInfo.module.css'

const ContactInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoBlock}>
        <h3 className={styles.title}>
          <Mail size={24} className={styles.icon} />
          Direct Contact
        </h3>
        <p className={styles.text}>
          Ищу работу. Если вам нужен frontend-разработчик - я готов и всегда рад получать новые знание и опыт в проектах 
        </p>
        <p className={styles.text}>
          Обращайтесь ко мне через форму обратной связи или в социальных сетях. Я отвечаю как можно быстрее
        </p>
        <a href="mailto:4eburek_731@mail.ru" className={styles.email}>
          4eburek_731@mail.ru
        </a>
      </div>

      <div className={styles.socialBlock}>
        <h3 className={styles.socialTitle}>Connect With Me</h3>
        <div className={styles.socialList}>
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={24} style={{ color: link.color }} />
                </div>
                <span className={styles.socialName}>{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
