import { ImageProps } from "./types";

export default function ProductImage({ image }: ImageProps) {
  return (
    <div className="sm:w-1/2 min-h-40 h-auto relative">
      <picture className="w-full h-full">
        <source srcSet={image.desktop} media="(min-width: 640px)" />
        <source srcSet={image.mobile} media="(max-width: 639px)" />
        <img
          src={image.mobile}
          alt="Image of product"
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-radial from-transparent to-black/70 to-300%"></div>
    </div>
  );
}
