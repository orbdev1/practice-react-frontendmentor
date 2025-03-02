import ProductCard from "./componentes/ProductCard";

function App() {
  const product = {
    name: "Gabrielle Essence Eau De Parfum",
    description:
      "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
    category: "Perfume",
    price: 149.99,
    originalPrice: 169.99,
    currency: "USD",
    image: {
      mobile: "/image-product-mobile.jpg",
      desktop: "/image-product-desktop.jpg",
    },
  };

  return (
    <>
      <article className="bg-cream h-screen w-screen flex justify-center items-center font-montserrat">
        <ProductCard product={product} />
      </article>
    </>
  );
}

export default App;
