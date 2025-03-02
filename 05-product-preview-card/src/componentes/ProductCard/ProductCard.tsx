import AddToCartButton from "./AddToCartButton";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";

import { ProductCardProps } from "./types";

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <section className="overflow-hidden mx-4 max-w-lg shadow-md sm:max-w-3xl rounded-lg flex flex-col sm:flex-row">
      <ProductImage image={product.image} />
      <div className="bg-white p-6 sm:w-1/2 sm:flex sm:flex-col sm:justify-between sm:p-10">
        <ProductDetails product={product} />
        <AddToCartButton />
      </div>
    </section>
  );
}
