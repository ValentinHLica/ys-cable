import React from "react";

import { StarOutlined } from "@ant-design/icons";

import ContactUs from "../../../ContactUs";

import aboutUsData from "../../../../data/about-us.json";
import styles from "../../../../styles/components/screens/Homepage/Services/index.module.scss";

const AboutUs: React.FC = () => {
    return (
        <section className={styles.about_us}>
            <div className="container">
                <div className={styles.about_us__container}>
                    <div className={styles.container__main__content}>
                        <h1 className={styles.main__content__title}>
                            OUR EXPERTISE
                        </h1>
                        <p className={styles.main__content__desc}>
                            With our team of electrician, jointers and cable
                            pullers , we offer our client solutions about
                            cables, consisting of :
                        </p>
                    </div>

                    <ul className={styles.container__items}>
                        {aboutUsData.services.map((service, index) => (
                            <li key={index} className={styles.container__item}>
                                <StarOutlined /> <p>{service}</p>
                            </li>
                        ))}
                    </ul>

                    <ContactUs />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
