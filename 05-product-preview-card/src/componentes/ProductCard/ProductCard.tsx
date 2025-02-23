import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";

import { ProductCardProps } from "./types";

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <section className="overflow-hidden mx-4 max-w-3xl bg-white rounded-2xl flex flex-col items-center justify-center sm:flex-row ">
      <ProductImage image={product.image} />
      <ProductDetails product={product} />
    </section>
  );
}
