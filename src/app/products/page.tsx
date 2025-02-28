"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$10",
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$20",
    image:
      "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$30",
    image:
      "https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    name: "Product 4",
    price: "$40",
    image:
      "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    name: "Product 5",
    price: "$50",
    image:
      "https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const ProductPage = ({
  addToCart,
  cart,
  removeFromCart,
}: {
  addToCart: (product: Product) => void;
  cart: Product[];
  removeFromCart: (id: number) => void;
}) => {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(products));
  }, []);
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Online Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
              onClick={() => router.push(`/products/${product.id}`)}
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            {cart.filter((p) => p.id === product.id).length == 0 && (
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </button>
            )}

            {cart.filter((p) => p.id === product.id).length > 0 && (
              <button
                onClick={() => removeFromCart(product.id)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Remove from Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
