import React from "react";
import styles from "./Certificate.module.css";
import { getImageUrl } from "../../utils";

export const Certificates = () => {
    const certificates = [
        {
            id: 1,
            image: "about/certificate1.png",
            title: "Certificate Title 1",
            issuer: "Issuer 1",
            link: "#",
            date: "2024"
        },
        {
            id: 2,
            image: "https://media.licdn.com/dms/image/v2/D562DAQETZufozbF-ww/profile-treasury-image-shrink_1920_1920/B56ZyLdRCuI0Ac-/0/1771866232230?e=1775631600&v=beta&t=YbDzkudBnV7Y-n5avg3BcUev8MT6ni1C5zXmvbHfc3o",
            title: "Certificate Title 2",
            issuer: "Issuer 2",
            link: "#",
            date: "2025"
        },
        {
            id: 3,
            image: "https://media.licdn.com/dms/image/v2/D562DAQEpPfJEPDbdRg/profile-treasury-image-shrink_800_800/B56ZyLZNiUIIAY-/0/1771865169321?e=1775631600&v=beta&t=hhruzAVM4qobyoieCUFB5a-XFWRqBXKejtIPjMFbO9w",
            title: "Certificate Title 3",
            issuer: "Issuer 3",
            link: "#",
            date: "2023"
        },
        {
            id: 4,
            image: "https://media.licdn.com/dms/image/v2/D5622AQFHK48yZ0wJGA/feedshare-shrink_800/B56Zr3SPwTIYAk-/0/1765085347304?e=1776902400&v=beta&t=5dJX2lKYzsAfHxCSyhmvVz3r5rU7S0rymB4y-eZ2xW4",
            title: "Certificate Title 4",
            issuer: "Coursera",
            link: "https://media.licdn.com/dms/image/v2/D5622AQFHK48yZ0wJGA/feedshare-shrink_800/B56Zr3SPwTIYAk-/0/1765085347304?e=1776902400&v=beta&t=5dJX2lKYzsAfHxCSyhmvVz3r5rU7S0rymB4y-eZ2xW4",
            date: "2023"
        },
        {
            id: 5,
            image: "https://media.licdn.com/dms/image/v2/D562DAQEWoiieKKm9Gg/profile-treasury-image-shrink_1920_1920/B56ZbzI339G4Ac-/0/1747835912680?e=1775635200&v=beta&t=tQSXQ1FJV2uX1ynlQhWxERBdq74_Gu7g9yMGk6ZgLdA",
            title: "Certificate Title 5",
            issuer: "LinkedIn",
            link: "#",
            date: "2023"
        },
        {
            id: 6,
            image: "https://media.licdn.com/dms/image/v2/D562DAQEWj4HDrXhc0w/profile-treasury-image-shrink_800_800/B56ZbzHu8qHgAg-/0/1747835616679?e=1775631600&v=beta&t=eD0IOG-9iFpmhkVuESIsXkIeWQlBmX7jK2EndR5Smx8",
            title: "Certificate Title 6",
            issuer: "Issuer 6",
            link: "#",
            date: "2020"
        },
        {
            id: 7,
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~4VZ6WJQMVWOG/CERTIFICATE_LANDING_PAGE~4VZ6WJQMVWOG.jpeg",
            title: "Certificate Title 6",
            issuer: "Issuer 6",
            link: "#",
            date: "2020"
        },
        {
            id: 8,
            image: `about/certificate2.jpg`,
            title: "Certificate Title 8",
            issuer: "Issuer 6",
            link: "#",
            date: "2020"
        },
        {
            id: 9,
            image: `about/certificate3.png`,
            title: "Certificate Title 6",
            issuer: "Issuer 6",
            link: "#",
            date: "2020"
        },
        {
            id: 10,
            image: `about/certificate4.png`,
            title: "Certificate Title 6",
            issuer: "Issuer 6",
            link: "#",
            date: "2020"
        },
        {
            id: 11,
            image: `about/certificate5.png`,
            title: "Certificate Title 6",
            issuer: "Issuer 6",
            link: "#",
            date: "2020"
        },
        {
            id: 12,
            image: `about/certificate6.png`,
            title: "Certificate Title 6",
            issuer: "Issuer 6",
            link: "#",
            date: "2020"
        },
        {
            id: 13,
            image: `about/certificate7.png`,
            title: "Certificate Title 6",
            issuer: "Issuer 6",
            link: "#",
            date: "2020"
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