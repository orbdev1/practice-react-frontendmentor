export default function AddToCartButton() {
  return (
    <button className="mt-4 bg-dark-cyan w-full py-4 font-bold text-white flex items-center justify-center rounded-lg gap-4 hover:bg-dark-cyan-dark md:text-lg cursor-pointer">
      <img
        className="w-5 h-5"
        src="/icon-cart.svg"
        alt="Boton agregar carrito"
      />
      <span>Add to Cart</span>
    </button>
  );
}
