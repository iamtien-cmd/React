import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lien Hue Tien</h1>
        <p className={styles.description}>
        Small steps every day lead to big achievements over time
        
        </p>
        <a href="mailto:lienhuetien01@gmail.com" className={styles.contactBtn}>
          Contact Me
          
        </a>
        <p className={styles.description}></p>
      </div>
   
      
         <img
        src={getImageUrl("hero/buoc.png")}
        alt="Hero image of me"
        className={styles.roundedImage}
      />
     
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
