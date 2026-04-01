import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.imageGallery}>
          <img
            src={getImageUrl("about/avt1.jpg")}
            alt="Me Photo 1"
            className={styles.photo1}
          />
          <img
            src={getImageUrl("about/avt2.jpg")}
            alt="Me Photo 2"
            className={styles.photo2}
          />
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemIcon}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Hobbies & Interests</h3>
              <p>
                Playing chess, swimming, traveling, watching movies, and exploring new cuisines :3
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Who am I?</h3>
              <p>
                I was born in 2004 and grew up in Soc Trang. Currently, I am pursuing my studies at the University of Technology and Education, majoring in Information Technology. This field has always fascinated me because of its endless possibilities to innovate, solve problems, and shape the future through technology.
              </p>
            </div>
          </li>
        </ul>
      </div>


    </section>
  );
};
