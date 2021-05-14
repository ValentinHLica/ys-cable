import { Dispatch, SetStateAction } from "react";

export interface GalleryItem {
    name: string;
    type: string;
}

export interface Categories {
    galleryCategory: string;
    setGalleryCategory: Dispatch<SetStateAction<string>>;
}
