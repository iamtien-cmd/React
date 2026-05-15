import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.mainTitle}>
            <span className={styles.wave}>👋</span> Welcome to 
            <span className={styles.highlight}> HueTien's </span>
            <span className={styles.sparkle}>✨ Space ✨</span>
          </h1>
          <h2 className={styles.subtitle}>
            Chào mừng đến với thế giới 
            <span className={styles.magical}> kì diệu </span>
            của 
            <span className={styles.cute}> quetien </span>
            <span className={styles.hearts}>💖</span>
          </h2>
        </div>
        <p className={styles.description}>
          Small steps every day lead to big achievements over time 🚀
        </p>
        <a href="mailto:lienhuetien01@gmail.com" className={styles.contactBtn}>
          Contact Me 📧
        </a>
      </div>
   
      
         <img
        src={getImageUrl("hero/buoc.png")}
        alt="Hero image of me"
        className={styles.roundedImage}
      />
     
      {/* Cute floating animals */}
      <img
        src={getImageUrl("hero/cute-deer-floating.svg")}
        alt="Cute deer"
        className={styles.floatingAnimal1}
      />
      <img
        src={getImageUrl("hero/cute-owl-floating.svg")}
        alt="Cute owl"
        className={styles.floatingAnimal2}
      />
     
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
