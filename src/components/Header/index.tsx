import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";

import { MenuOutlined } from "@ant-design/icons";

import Drawer from "./Drawer";
import menu from "../../data/menu.json";

import styles from "../../styles/components/Header/index.module.scss";

const Header = () => {
    const brandName = process.env.NEXT_PUBLIC_BRAND_NAME;

    const [drawerState, setDrawerState] = useState<boolean>(false);
    const [stickyHeader, setStickyHeader] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setStickyHeader(true);
            } else {
                setStickyHeader(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (drawerState) {
            document.querySelector("body").style.overflowY = "hidden";
        } else {
            document.querySelector("body").style.overflowY = "visible";
        }
    }, [drawerState]);

    return (
        <Fragment>
            <header
                className={`${styles.header} ${
                    stickyHeader ? styles.header___sticky : ""
                }`}
            >
                <div className="container">
                    <div className={styles.header__container}>
                        <Link href="/">
                            <a className={styles.header__logo}>
                                <img
                                    src="/images/logo.jpeg"
                                    alt={`${brandName} Logo`}
                                />
                            </a>
                        </Link>

                        <ul className={styles.header__menu}>
                            {menu.map((item, index) => {
                                const { name, route } = item;
                                return (
                                    <li key={index}>
                                        <Link href={route}>{name}</Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <button
                            className={styles.header__dropdown__button}
                            onClick={() => setDrawerState(true)}
                        >
                            <MenuOutlined />
                        </button>
                    </div>
                </div>
            </header>

            <Drawer visible={drawerState} setDrawerState={setDrawerState} />
        </Fragment>
    );
};

export default Header;
