import Link from "next/link";
import React from "react";

import styles from "../styles/components/contact_us.module.scss";

const ContactUs: React.FC = () => {
    return (
        <div className={styles.container}>
            <h3>And So Much More</h3>
            <div className={styles.container__content}>
                <p>
                    We have the right Expertise and proven record with many
                    happy customers - Make us your 1st Choice for all your cable
                    installation needs
                </p>

                <div className={styles.container__button}>
                    <Link href="/contact">Get in touch with us today</Link>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
