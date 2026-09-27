import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const galleryPhotos = [
    "about/avt1.jpg",
    "about/avt2.jpg",
    "about/avt3.jpg",
    "about/avt4.jpg",
    "about/avt5.jpg"
  ];

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.imageGallery}>
          {galleryPhotos.map((photo, index) => (
            <img
              key={photo}
              src={getImageUrl(photo)}
              alt={`Me Photo ${index + 1}`}
              className={styles.photo}
            />
          ))}
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemIcon}>
              <img src={getImageUrl("about/cute-panda-coding.svg")} alt="Panda coding" />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Profile</h3>
              <p>
                Software Engineer with a strong foundation in Java, Object-Oriented Programming, backend development, and database systems. I have hands-on experience building Java applications, RESTful APIs, and full-stack projects using Spring Boot, ReactJS, and MongoDB/SQL. I enjoy solving practical engineering problems through clean architecture, testing, and iterative improvement.
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
                Bachelor of Engineering in Information Technology (2022 – 2026)<br/>
                GPA: 3.73/4
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
                • UBD–AUN Summer Camp 2026 Participant (Brunei)<br/>
                • Ocean Week Brunei 2026<br/>
                • Wecamper NAB 2026<br/>
                • Samsung Innovation Campus – Cloud & Big Data<br/>
                • Marvell Scholarship 2026<br/>
                • Five-Good Student Award – 2025, 2024, 2023<br/>
                • Advanced Youth Following Uncle Ho’s Teachings – 2024, 2025
              </p>
            </div>
          </li>
        </ul>
      </div>


    </section>
  );
};
