import React from "react";
import styles from "./Certificate.module.css";
import { getImageUrl } from "../../utils";

export const Certificates = () => {
    const certificates = [
        {
            id: 1,
            image: "about/certificate10.png",
            title: "UBD–AUN Summer Camp 2026 Participant",
            issuer: "Brunei",
            link: "#",
            date: "2026"
        },
        {
            id: 2,
            image: "about/certificate8.png",
            title: "Wecamper NAB 2026",
            issuer: "NAB Innovation Centre Vietnam",
            link: "#",
            date: "2026"
        },
        {
            id: 3,
            image: "about/cert-creativityskill.png",
            title: "Complete course creativity skill",
            issuer: "Creative Skills Program",
            link: "#",
            date: "2026"
        },
        {
            id: 4,
            image: "about/cert-masteringIT.png",
            title: "Mastering IT",
            issuer: "Technology learning track",
            link: "#",
            date: "2026"
        },
        {
            id: 5,
            image: "about/cert-scholar.png",
            title: "Marvell Scholarship",
            issuer: "Marvell Vietnam",
            link: "#",
            date: "2026"
        },
        {
            id: 6,
            image: "about/cert-spring.png",
            title: "Spring Volunteer Program",
            issuer: "Community Service",
            link: "#",
            date: "2025"
        },
        {
            id: 7,
            image: "about/cert-thanhnienkhoe.png",
            title: "Advanced Youth Following Uncle Ho's Teachings",
            issuer: "School-Level Recognition",
            link: "#",
            date: "2024–2025"
        },
        {
            id: 8,
            image: "about/cert-exam.png",
            title: "Exam Support Volunteer",
            issuer: "Student Support Program",
            link: "#",
            date: "2024"
        },
        {
            id: 9,
            image: "about/cert-hair.jpg",
            title: "Creative Achievement",
            issuer: "Creative Skills",
            link: "#",
            date: "2024"
        }
    ];

    const resolveImageSrc = (image) => {
        if (!image) return "";
        return image.startsWith("http") ? image : getImageUrl(image);
    };

    return (
        <section className={styles.certSection} id="certificates">
            <h2 className={styles.certTitle}>Certificates</h2>
            <ul className={styles.certList}>
                {certificates.map((c) => (
                    <li className={styles.certItem} key={c.id}>
                        <img
                            src={resolveImageSrc(c.image)}
                            alt={c.title}
                            className={styles.certThumb}
                        />
                        <div className={styles.certInfo}>
                            <p className={styles.certName}>{c.title}</p>
                            <p className={styles.certIssuer}>{c.issuer} • {c.date}</p>
                            <a href={c.link} className={styles.certLink} target="_blank" rel="noreferrer">View</a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};