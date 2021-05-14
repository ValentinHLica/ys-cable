import React from "react";

import styles from "../../../styles/components/screens/Gallery/categories.module.scss";

import { Categories as CategoriesInterface } from "../../../interfaces/gallery";

const Categories: React.FC<CategoriesInterface> = ({
    galleryCategory,
    setGalleryCategory,
}) => {
    return (
        <div className={styles.gallery__categories}>
            <ul className={styles.categories__items}>
                <li
                    className={`${styles.category} ${
                        galleryCategory === "image"
                            ? styles.category__current
                            : ""
                    }`}
                    onClick={() => {
                        setGalleryCategory("image");
                    }}
                >
                    <p>Images</p>
                </li>

                <li
                    className={`${styles.category} ${
                        galleryCategory === "video"
                            ? styles.category__current
                            : ""
                    }`}
                    onClick={() => {
                        setGalleryCategory("video");
                    }}
                >
                    <p>Videos</p>
                </li>
            </ul>
        </div>
    );
};

export default Categories;
