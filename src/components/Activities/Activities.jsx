import React from "react";
import styles from "./Activities.module.css";
import { getImageUrl } from "../../utils";

export const Activities = () => {
    const activities = [
        {
            title: "Summer Campaign Volunteer",
            description: "Participated in community service activities during summer campaign",
            image: "about/activity1.png"
        },
        {
            title: "Support Exam Season Volunteer",
            description: "Assisted students during exam preparation and examination period",
            image: "about/activity2.png"
        },
        {
            title: "Spring Volunteer Campaign",
            description: "Engaged in spring volunteer activities supporting local community",
            image: "about/activity3.png"
        },
        {
            title: "Community Service",
            description: "Active participation in various volunteer programs",
            image: "about/activity4.png"
        }
    ];

    return (
        <section className={styles.container} id="extracurriculars">
            <h2 className={styles.title}>Activities</h2>
            <p className={styles.subtitle}>Volunteer work and community engagement</p>
            <div className={styles.grid}>
                {activities.map((activity, i) => (
                    <div className={styles.card} key={i}>
                        <img
                            src={getImageUrl(activity.image)}
                            alt={activity.title}
                            className={styles.image}
                        />
                        <div className={styles.cardBody}>
                            <p className={styles.cardTitle}>{activity.title}</p>
                            <p className={styles.cardCaption}>{activity.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
