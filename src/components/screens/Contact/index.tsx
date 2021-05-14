import React from "react";

import { contactInfo } from "../../../data/contact";

import styles from "../../../styles/components/screens/ContactUs/index.module.scss";

const ContactUs: React.FC = () => {
    return (
        <section className={styles.container}>
            <div className="container">
                <h1>Contact Us</h1>

                <div className={styles.container__wrapper}>
                    <ul className={styles.container__card}>
                        {contactInfo.contact.map((item, index) => {
                            const { text, url, icon } = item;

                            if (!url) {
                                <li key={index}>
                                    {icon} {text}
                                </li>;
                            }

                            return (
                                <li key={index}>
                                    <a href={`${url}${text}`}>
                                        {icon} {text}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <ul
                        className={`${styles.container__card} ${styles.social}`}
                    >
                        {contactInfo.social.map((item, index) => {
                            const { url, icon } = item;

                            return (
                                <li key={index}>
                                    <a href={url}>{icon}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
