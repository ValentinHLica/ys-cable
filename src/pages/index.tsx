import React from "react";

import Layout from "../components/Layout";
import Services from "../components/screens/Homepage/Services";
import Slogan from "../components/screens/Homepage/Slogan";
import Gallery from "../components/screens/Homepage/Gallery";

import { GalleryItem } from "../interfaces/gallery";

type Props = {
  images: GalleryItem[];
};

const HomePage: React.FC<Props> = ({ images }) => {
  const metaData = {
    title: "Homepage",
  };

  return (
    <Layout {...metaData}>
      <main>
        <Slogan />
        <Services />
        <Gallery images={images} />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const images = [
    {
      name: "homepage/0",
      type: "jpeg",
    },
    {
      name: "homepage/2",
      type: "jpeg",
    },
    {
      name: "images/1",
      type: "JPG",
    },
    {
      name: "homepage/4",
      type: "jpeg",
    },
  ];

  return {
    props: { images },
  };
}

export default HomePage;
