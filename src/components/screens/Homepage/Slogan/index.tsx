import React from "react";
import Link from "next/link";

import styles from "../../../../styles/components/screens/Homepage/Slogan/index.module.scss";

const Slogan: React.FC = () => {
    return (
        <section className={styles.container}>
            <div className="container">
                <div className={styles.container__slog}>
                    <div className={styles.slogan__content}>
                        <h1 className={styles.content__title}>
                            SPECIALISTS IN ALL TYPES OF CABLE INSTALLATION
                        </h1>

                        <p className={styles.content__desc}>
                            {process.env.NEXT_PUBLIC_BRAND_NAME} the company
                            that specialists in all types of cable installation
                            you may need.
                        </p>

                        <Link href="/contact">
                            <a className={styles.content__button}>Contact Us</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slogan;
