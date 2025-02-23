export interface Image {
  mobile: string;
  desktop: string;
}

export interface ImageProps {
  image: Image;
}

export interface Product {
  name: string;
  description: string;
  category: string;
  price: number;
  originalPrice: number;
  currency: string;
  image: Image;
}

export interface ProductCardProps {
  product: Product;
}
