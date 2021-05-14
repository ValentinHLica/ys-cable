import React from "react";

import { QuotationIcon } from "../CustomIcons";

import testimonialsData from "../../data/testimonials.json";
import styles from "../../styles/components/Testimonials/index.module.scss";

const Testimonials: React.FC = () => {
    return (
        <section className={styles.testimonials}>
            <div className="container">
                <div className={styles.testimonials__container}>
                    <div className={styles.testimonials__content}>
                        <h1 className={styles.testimonials__title}>
                            Some of What Our Customers have Said!
                        </h1>

                        <p className={styles.testimonials__desc}>
                            Many years of excellent service and we’ve worked
                            with some awesome clients who love us and our work.
                            Check what they have to say about us.
                        </p>
                    </div>

                    <ul className={styles.testimonials__items}>
                        {testimonialsData.map((item, index) => {
                            const { name, comment } = item;

                            return (
                                <li
                                    className={styles.testimonials__item}
                                    key={index}
                                >
                                    <QuotationIcon />

                                    <p className={styles.item__text}>
                                        {comment}
                                    </p>
                                    <p className={styles.item__author}>
                                        {name}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
