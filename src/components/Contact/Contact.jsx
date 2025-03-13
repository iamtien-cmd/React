import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:lienhuetien01@gmail.com">lienhuetien01@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ti%C3%AAn-li%C3%AAn-b34a88222/">linkedin-huetien</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/iamtien-cmd">github-huetien</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/youtubeIcon.png")} alt="Youtube icon" />
          <a href="https://www.youtube.com/@34.lienhuetien92">Youtube-huetien</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/facebookIcon.png")} alt="Facebook icon" />
          <a href="https://www.facebook.com/hue.tien.551579/">Youtube-huetien</a>
        </li>
        
      </ul>
    </footer>
  );
};
