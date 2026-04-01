import React from "react";
import styles from "./Awards.module.css";
import { getImageUrl } from "../../utils";

export const Awards = () => {
  return (
    <section className={styles.container} id="activity">
      <h2 className={styles.title}>Awards & Achievements</h2>
      <p className={styles.subtitle}>Highlights and recognitions</p>
      
      <div className={styles.grid}>
        {[5, 6, 7, 8, 9, 10].map((i) => (
          <div className={styles.card} key={i}>
            <img
              src={getImageUrl(`about/activity${i}.png`)}
              alt={`Award ${i}`}
              className={styles.image}
            />
            <div className={styles.cardBody}>
              <p className={styles.cardTitle}>Achievement {i}</p>
              <p className={styles.cardCaption}>Short description or date</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
