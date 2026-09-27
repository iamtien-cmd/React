import React from "react";
import styles from "./Activities.module.css";
import { getImageUrl } from "../../utils";

export const Activities = () => {
    const activities = [
        {
            title: "At Brunei – Small group",
            description: "Created a small group and shared the experience during the Brunei program.",
            image: "about/activity-brunei.png"
        },
        {
            title: "At Brunei – Team discussion",
            description: "Joined a collaborative discussion session with peers at Brunei.",
            image: "about/activity-brunei2.jpg"
        },
        {
            title: "At Brunei – Learning session",
            description: "Learning and exchanging ideas in an international academic environment.",
            image: "about/activity-brunei3.jpg"
        },
        {
            title: "At Brunei – Campus experience",
            description: "Captured the memorable campus experience during the Brunei program.",
            image: "about/activity-brunei4.jpg"
        },
        {
            title: "Ocean Week Brunei",
            description: "Participated in the Ocean Week activity and international learning program.",
            image: "about/activity-oceanweek.jpg"
        },
        {
            title: "NAB Innovation Centre Vietnam",
            description: "Worked in the WeCamp training environment and gained software engineering experience.",
            image: "about/activity-nab.png"
        },
        {
            title: "Mentoring & peer support",
            description: "Supported and learned from mentoring activities during the academic journey.",
            image: "about/activity-mentoring.png"
        },
        {
            title: "Volunteer exam support",
            description: "Helped with student support and exam season preparation in the community.",
            image: "about/activity-volunteer-exam.png"
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
