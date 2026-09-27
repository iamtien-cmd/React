import React from "react";
import styles from "./Awards.module.css";
import { getImageUrl } from "../../utils";

export const Awards = () => {
  const rewards = [
    {
      title: "Five-Good Student Award",
      subtitle: "City level (2022–2023)",
      image: "about/reward-Five-Good Student Award--city(2022-2023).png.png"
    },
    {
      title: "Five-Good Student Award",
      subtitle: "City level (2023–2024)",
      image: "about/reward-Five-Good Student Award--city(2023-2024).png.png"
    },
    {
      title: "Five-Good Student Award",
      subtitle: "City level (2024–2025)",
      image: "about/reward-Five-Good Student Award--city(2024-2025).png"
    },
    {
      title: "Advanced Youth Following Uncle Ho's Teachings",
      subtitle: "2024–2025",
      image: "about/reward-Advanced Youth Following Uncle Ho’s Teachings– 2024, 2025.png"
    }
  ];

  return (
    <section className={styles.container} id="activity">
      <h2 className={styles.title}>Awards & Achievements</h2>
      <p className={styles.subtitle}>Highlights and recognitions</p>

      <div className={styles.grid}>
        {rewards.map((reward, i) => (
          <div className={styles.card} key={i}>
            <img
              src={getImageUrl(reward.image)}
              alt={reward.title}
              className={styles.image}
            />
            <div className={styles.cardBody}>
              <p className={styles.cardTitle}>{reward.title}</p>
              <p className={styles.cardCaption}>{reward.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
