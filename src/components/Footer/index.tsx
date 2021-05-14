import React from "react";
import Link from "next/link";

import { contactInfo } from "../../data/contact";
import menu from "../../data/menu.json";

import styles from "../../styles/components/Footer/index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <ul className={styles.footer__menu}>
          <li className={styles.menu__item}>
            <img
              src="/images/logo.jpeg"
              alt={`${process.env.NEXT_PUBLIC_BRAND_NAME} Logo`}
            />
          </li>

          <li className={styles.menu__item}>
            <h4 className={styles.item__title}>
              Contact Ylber-Ber Sufaj director
            </h4>
            <ul className={styles.item__content}>
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
          </li>
          <li className={styles.menu__item}>
            <h4 className={styles.item__title}>Navigation</h4>
            <ul className={styles.item__content}>
              {menu.map((item, index) => {
                const { name, route } = item;
                return (
                  <li key={index}>
                    <Link href={route}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className={styles.menu__item}>
            <h4 className={styles.item__title}>Social</h4>
            <ul className={`${styles.item__content} ${styles.footer__social}`}>
              {contactInfo.social.map((item, index) => {
                const { url, icon } = item;

                return (
                  <li key={index}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>

      <div className={styles.footer__copyright}>
        <p>
          All Right Reserved © 2004-{new Date().getFullYear()}{" "}
          {process.env.NEXT_PUBLIC_BRAND_NAME}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
