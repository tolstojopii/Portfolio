import Container from "@components/Container/Container";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import ContactInfo from "./ContactInfo/ContactInfo";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <Container>
        <SectionTitle
          title="Get In Touch"
          subtitle="Жду ваши предложения у себя в сообщениях"
          className={styles.title}
        />
        <div className={styles.grid}>
          <ContactInfo />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
