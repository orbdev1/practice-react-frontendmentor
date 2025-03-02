import { ProductCardProps } from "./types";

export default function ProductDetails({ product }: ProductCardProps) {
  const currency: string = product.currency === "USD" ? "$" : "";

  return (
    <div className="h-full flex flex-col gap-4 sm:gap-8">
      <h3 className="font-medium uppercase text-dark-grayish-blue text-xs tracking-[.26rem] sm:text-base sm:tracking-[.38rem]">
        {product.category}
      </h3>
      <h2 className="font-fraunces font-bold text-3xl sm:text-[2.6rem]/none">
        {product.name}
      </h2>
      <p className="font-medium text-dark-grayish-blue text-sm sm:text-lg">
        {product.description}
      </p>
      <div className="flex items-center">
        <span className="font-fraunces text-dark-cyan font-bold text-3xl mr-6 sm:text-[2.6rem]">
          {currency}
          {product.price}
        </span>
        <span className="text-grayish-blue font-medium text-dark-grayish-blue text-sm line-through sm:text-base">
          {currency}
          {product.originalPrice}
        </span>
      </div>
    </div>
  );
}
