import React from "react";

import Layout from "../components/Layout";
import Contact from "../components/screens/Contact";

const ContactPage: React.FC = () => {
  const metaData = {
    title: "Contact Us",
  };

  return (
    <Layout {...metaData}>
      <main>
        <Contact />
      </main>
    </Layout>
  );
};

export default ContactPage;
