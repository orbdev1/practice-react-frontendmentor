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
      <div className="bg-[#2f2f2f] h-full w-screen flex justify-center items-center">
        <article className="font-montserrat">
          <ProductCard product={product} />
        </article>
      </div>
    </>
  );
}

export default App;
