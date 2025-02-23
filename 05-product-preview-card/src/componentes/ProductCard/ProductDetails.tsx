import { ProductCardProps } from "./types";

export default function ProductDetails({ product }: ProductCardProps) {
  const currency: string = product.currency === "USD" ? "$" : "";

  return (
    <div className="p-6">
      <h3 className="font-medium uppercase text-dark-grayish-blue text-xs tracking-[.26rem]">
        {product.category}
      </h3>
      <h2 className="font-fraunces font-bold text-3xl">{product.name}</h2>
      <p className="font-medium text-dark-grayish-blue text-sm">
        {product.description}
      </p>
      <div className="flex items-center">
        <span className="font-fraunces text-dark-cyan font-bold text-3xl mr-2">
          {currency}
          {product.price}
        </span>
        <span className="font-fraunces text-grayish-blue text-sm line-through">
          {currency}
          {product.originalPrice}
        </span>
      </div>
    </div>
  );
}
