import React from "react";
import styles from "./Activities.module.css";
import { getImageUrl } from "../../utils";

export const Activities = () => {
    return (
        <section className={styles.container} id="extracurriculars">
            <h2 className={styles.title}>Extracurriculars</h2>
            <p className={styles.subtitle}>Photos from extracurricular activities and events</p>
            <div className={styles.grid}>
                {[1, 2, 3, 4].map((i) => (
                    <div className={styles.card} key={i}>
                        <img
                            src={getImageUrl(`about/activity${i}.png`)}
                            alt={`Activity ${i}`}
                            className={styles.image}
                        />
                        <div className={styles.cardBody}>
                            <p className={styles.cardTitle}>Extracurricular {i}</p>
                            <p className={styles.cardCaption}>Short description or date</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
