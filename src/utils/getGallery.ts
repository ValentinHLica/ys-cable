import fs from "fs";
import { GalleryItem } from "../interfaces/gallery";

export default (dir: string): GalleryItem[] => {
    const files = [];

    fs.readdirSync(`${process.cwd()}${dir}`).forEach((file) => {
        const imageInfo = file.split(".");

        files.push({
            name: imageInfo[0],
            type: imageInfo[1],
        });
    });

    return files;
};
