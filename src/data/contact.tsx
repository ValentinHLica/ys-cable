import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

import {
    LocationIcon,
    FacebookLogoIcon,
    InstagramIcon,
    LinkedinIcon,
} from "../components/CustomIcons";

export const contactInfo = {
    contact: [
        {
            text: "+44 7718 580561",
            url: "tel:",
            icon: <PhoneOutlined />,
        },
        {
            text: "+44 7960 469065",
            url: "tel:",
            icon: <PhoneOutlined />,
        },
        {
            text: "ber_yscablingsolutions@outlook.com",
            url: "mailto:",
            icon: <MailOutlined />,
        },
        {
            text: "London",
            icon: <LocationIcon />,
        },
    ],

    social: [
        {
            url: "https://www.facebook.com/YSCABLINGSOLUTIONS",
            icon: <FacebookLogoIcon />,
        },
        {
            url: "https://www.instagram.com/ys_cabling_solutions/",
            icon: <InstagramIcon />,
        },
        {
            url: "https://www.linkedin.com/in/ber-sufaj-371231128",
            icon: <LinkedinIcon />,
        },
    ],
};
