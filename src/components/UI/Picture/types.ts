import { ImageProps, StaticImageData } from "next/image";

export interface PictureProps extends Omit<ImageProps, "src"> {
  src?: string | StaticImageData;
}