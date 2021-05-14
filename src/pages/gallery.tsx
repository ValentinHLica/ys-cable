import React from "react";

import Layout from "../components/Layout";
import Gallery from "../components/screens/Gallery";

import getFiles from "../utils/getGallery";
import { GalleryItem } from "../interfaces/gallery";

type Props = {
  images: GalleryItem[];
  videos: GalleryItem[];
};

const GalleryPage: React.FC<Props> = ({ images, videos }) => {
  const metaData = {
    title: "Gallery",
  };

  return (
    <Layout {...metaData}>
      <main>
        <Gallery images={images} videos={videos} />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const images = getFiles("/public/images/gallery/images");
  const videos = getFiles("/public/images/gallery/videos");

  return {
    props: { images, videos },
  };
}

export default GalleryPage;
