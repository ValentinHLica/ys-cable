import React, { Fragment } from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

type Props = {
    title: string;
    description?: string;
};

const Layout: React.FC<Props> = ({ title, description, children }) => {
    const brandName = process.env.NEXT_PUBLIC_BRAND_NAME;
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    const language = "en-GB";

    return (
        <Fragment>
            <Head>
                <title>{`${`${title} / ${brandName}`}`}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="title" content={`${title} - ${brandName}`} />
                <meta name="description" content={description} />
                <link rel="canonical" href={domain} />
                <meta name="author" content={brandName} />
                <meta
                    name="keyword"
                    content="Network Installation, Voice and Data Cabling, Fibre Optic Cabling, Optic Fibre Cabling, CAT5, CAT6A, CAT5E, CAT6,  Data Cabling London, Structured Cabling Installers"
                />
                <meta name="copyright" content={brandName} />
                <meta name="locale" content={language} />
                <meta name="base_url" content={domain} />
                <meta name="robots" content="all" />
                <meta name="language" content={language} />
                <meta name="twitter:widgets:csp" content="on" />
                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content={`${title} - ${brandName}`}
                />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="" />
                <meta name="twitter:url" content={domain} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${title} - ${brandName}`} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content="" />
                <meta property="og:url" content={domain} />
                <meta
                    property="og:site_name"
                    content={`${title} - ${brandName}`}
                />
                <meta property="og:locale" content={language} />
            </Head>

            <Header />
            {children}
            <Footer />
        </Fragment>
    );
};

Layout.defaultProps = {
    description:
        "YS - Cable cabling company specialising in the installation of fibre optic, copper cabling, Wi-Fi, CCTV and IP security.",
};

export default Layout;
