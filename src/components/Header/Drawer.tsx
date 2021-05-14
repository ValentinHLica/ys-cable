import React, { Fragment, Dispatch, SetStateAction } from "react";
import Link from "next/link";

import { CloseOutlined } from "@ant-design/icons";

import menu from "../../data/menu.json";

import styles from "../../styles/components/Header/drawer.module.scss";

type Props = {
    visible: boolean;
    setDrawerState: Dispatch<SetStateAction<boolean>>;
};

const Drawer: React.FC<Props> = ({ visible, setDrawerState }) => {
    return (
        <Fragment>
            <div
                className={`${styles.drawer__background} ${
                    visible ? styles.drawer__background___open : ""
                }`}
                onClick={() => {
                    setDrawerState(false);
                }}
            ></div>
            <ul
                className={`${styles.drawer} ${
                    visible ? styles.drawer___open : ""
                }`}
            >
                <li
                    onClick={() => {
                        setDrawerState(false);
                    }}
                >
                    <CloseOutlined />
                </li>

                {menu.map((item, index) => {
                    const { name, route } = item;
                    return (
                        <li key={index}>
                            <Link href={route}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        </Fragment>
    );
};

export default Drawer;
