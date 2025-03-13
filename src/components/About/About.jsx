import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Hobby</h3>
              <p>
                Play chess,go swimming, travel, watch movie
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
         
          <img
        src={getImageUrl("hero/avt1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <p>
        Life is just a game. Let's play together :))</p>
      
      
          </li>
      
        </ul>
      </div>
    </section>
  );
};
