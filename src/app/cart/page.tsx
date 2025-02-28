import { Product } from "../products/page";

const CartScreen = ({
  cart,
  removeFromCart,
}: {
  cart: Product[];
  removeFromCart: (id: number) => void;
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((product, index) => (
            <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <button
                onClick={() => removeFromCart(product.id)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartScreen;
