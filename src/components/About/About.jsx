import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/avt1.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Hobby</h3>
              <p>
                Play chess, go swimming, travel, watch movie, foodie :3
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
         
      
      <p>
      I was born in 2004 and grew up in Soc Trang. Currently, I am pursuing my studies at the University of Technology and Education, where I am majoring in Information Technology. This field has always fascinated me because of its endless possibilities to innovate, solve problems, and shape the future through technology.
     </p>
      
      
          </li>
      
        </ul>
      </div>
    </section>
  );
};
