/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Hero.module.css";
import Line from "./verticalline/Line";



const Hero = () => {
  return (
    <section className={styles.hero}>
      <Line/>
      <div className={styles.content}>
        <div className={styles.mainHeadline}>

          <span className={styles.regularText}>Your new website for </span>
          <span className={styles.highlightedText}>$300</span>
        </div>
        <p className={styles.subheadline}>
          Join the leaders in the industry with a custom website, built with the
          technology of the future.
        </p>
        <p className={styles.locationText}>
          Websites for starting & established businesses in{" "}
          <span className={styles.locationHighlight}>Haarlem</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
