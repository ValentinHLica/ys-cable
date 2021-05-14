import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Rodal from "rodal";

import styles from "../../../../styles/components/screens/Homepage/Gallery/index.module.scss";

import { GalleryItem } from "../../../../interfaces/gallery";

type Props = {
  images: GalleryItem[];
};

const Gallery: React.FC<Props> = ({ images }) => {
  const [modal, setModal] = useState<boolean>(false);
  const [modalSrc, setModalSrc] = useState<string>("");

  return (
    <Fragment>
      <section className={styles.container}>
        <div className="container">
          <h3>Gallery</h3>

          <ul className={styles.gallery__items}>
            {images.map((img, index) => {
              if (index > 3) {
                return;
              }

              return (
                <li
                  key={index}
                  onClick={() => {
                    setModal(true);
                    setModalSrc(`/images/gallery/${img.name}.${img.type}`);
                  }}
                >
                  <Image
                    src={`/images/gallery/${img.name}.${img.type}`}
                    alt="Image"
                    width={200}
                    height={200}
                    className={styles.item__image}
                  />
                </li>
              );
            })}
          </ul>

          <div className={styles.container__button}>
            <Link href="/gallery">View More</Link>
          </div>
        </div>
      </section>

      <Rodal
        visible={modal}
        onClose={() => {
          setModal(false);
        }}
        className={styles.gallery__modal}
      >
        <div>
          <img src={modalSrc} alt="Image" />
        </div>
      </Rodal>
    </Fragment>
  );
};

export default Gallery;
