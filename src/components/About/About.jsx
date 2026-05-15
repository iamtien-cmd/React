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
              <img src={getImageUrl("about/cute-panda-coding.svg")} alt="Panda coding" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Profile</h3>
              <p>
                Motivated Software Engineering student with strong foundation in Java Web development, Object-Oriented Programming, and database systems. Experienced in developing web applications using Java, Spring Boot, RESTful APIs, and SQL databases. Familiar with frontend technologies including HTML, CSS, JavaScript, Bootstrap, and ReactJS. Seeking a Software Engineer position to further develop backend and full-stack development skills.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemIcon}>
              <img src={getImageUrl("about/cute-fox-learning.svg")} alt="Fox learning" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                <strong>Ho Chi Minh City University of Technology and Engineering</strong><br/>
                Bachelor of Engineering in Information Technology (2022 – Present)<br/>
                Expected Graduation: July 2026 | GPA: 3.72/4
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemIcon}>
              <img src={getImageUrl("about/cute-rabbit-trophy.svg")} alt="Rabbit with trophy" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Certificates & Achievements</h3>
              <p>
                • Samsung Innovation Campus – Cloud & Big Data<br/>
                • Marvell Vietnam Excellence Scholarship 2026<br/>
                • Excellent Student – Five Criteria (3 Consecutive Years)<br/>
                • Advanced Youth Following Ho Chi Minh's Teachings<br/>
                • Academic Encouragement Award for 2 out of 7 eligible semesters<br/>
                • CodeLearn: C++ Basic, Java, OOP, Data Structures & Algorithms
              </p>
            </div>
          </li>
        </ul>
      </div>


    </section>
  );
};
