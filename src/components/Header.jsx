
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d2719a874bfc55c896b536adff07c11678b83bf6f5b56a404387eb5dc665409?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a"
          alt="Company Logo"
          className={styles.logoImage}
        />
      </div>
      <nav className={styles.navigation}>
        <a href="#home" className={styles.navLink}>
          Home
        </a>
        <a href="#why-choose-us" className={styles.navLink}>
          Why Choose Us
        </a>
        <a href="#our-process" className={styles.navLink}>
          Our Process
        </a>
        <a href="#services" className={styles.navLink}>
          Services
        </a>
        <a href="#contact" className={styles.navLink}>
          Contact
        </a>
        <a href="#faq" className={styles.navLink}>
          FAQ
        </a>
      </nav>
      <button className={styles.contactButton}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b06b2b2867b32392a4d910544812447eaea9465d26a4fd26969c46f64dd73e9?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a"
          alt=""
          className={styles.buttonIcon}
        />
        <span className={styles.buttonText}>Stuur ons een bericht</span>
      </button>
    </header>
  );
};

export default Header;
