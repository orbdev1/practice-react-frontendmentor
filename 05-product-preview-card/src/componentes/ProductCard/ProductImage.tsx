import { ImageProps } from "./types";

export default function ProductImage({ image }: ImageProps) {
  return (
    <div className="">
      <picture>
        <source srcSet={image.desktop} media="(min-width: 641px)" />
        <source srcSet={image.mobile} media="(max-width: 640px)" />
        <img
          src={image.mobile}
          alt="Image of product"
          className="w-full h-auto"
        />
      </picture>
    </div>
  );
}
