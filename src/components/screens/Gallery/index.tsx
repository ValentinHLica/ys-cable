import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import Rodal from "rodal";

import Categories from "./Categories";

import styles from "../../../styles/components/screens/Gallery/index.module.scss";

import { GalleryItem } from "../../../interfaces/gallery";

type Props = {
    images: GalleryItem[];
    videos: GalleryItem[];
};

const Gallery: React.FC<Props> = ({ images, videos }) => {
    const [modal, setModal] = useState<boolean>(false);
    const [modalSrc, setModalSrc] = useState<string>("");
    const [galleryCategory, setGalleryCategory] = useState<"image" | "video">(
        "image"
    );
    const playingVideo = useRef<HTMLVideoElement>();

    useEffect(() => {
        if (modalSrc.endsWith("MP4") && !modal) {
            playingVideo.current.pause();
        } else if (modalSrc.endsWith("MP4") && modal) {
            playingVideo.current.play();
        }
    }, [modal]);

    return (
        <section className={styles.gallery}>
            <div className="container">
                <div className={styles.gallery__container}>
                    <h1 className={styles.gallery__title}>Gallery</h1>

                    <Categories
                        galleryCategory={galleryCategory}
                        setGalleryCategory={setGalleryCategory}
                    />

                    {galleryCategory === "image" && (
                        <ul className={styles.gallery__items}>
                            {images.map((img, index) => (
                                <li
                                    key={index}
                                    onClick={() => {
                                        setModal(true);
                                        setModalSrc(
                                            `/images/gallery/images/${img.name}.${img.type}`
                                        );
                                    }}
                                >
                                    <Image
                                        src={`/images/gallery/images/${img.name}.${img.type}`}
                                        alt="Image"
                                        width={200}
                                        height={200}
                                        className={styles.item__image}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}

                    {galleryCategory === "video" && (
                        <ul className={styles.gallery__items}>
                            {videos.map((video, index) => {
                                if (video.type === "MP4") {
                                    return;
                                }

                                return (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setModal(true);
                                            setModalSrc(
                                                `/images/gallery/videos/${video.name}.MP4`
                                            );
                                        }}
                                    >
                                        <Image
                                            src={`/images/gallery/videos/${video.name}.png`}
                                            alt="Image"
                                            width={200}
                                            height={200}
                                            className={styles.item__image}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    <Rodal
                        visible={modal}
                        onClose={() => {
                            setModal(false);
                        }}
                        className={styles.gallery__modal}
                    >
                        <div>
                            {galleryCategory === "image" && (
                                <img src={modalSrc} alt="Image" />
                            )}

                            {galleryCategory === "video" && (
                                <video
                                    src={modalSrc}
                                    className={styles.item__image}
                                    autoPlay
                                    controls
                                    ref={playingVideo}
                                ></video>
                            )}
                        </div>
                    </Rodal>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
