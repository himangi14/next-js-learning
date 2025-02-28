"use client";
import { useEffect, useState } from "react";
import ProductPage, { Product } from "./products/page";
import CartScreen from "./cart/page";

const HomePage = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState("products");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    setCart(storedCart);
  }, []);

  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white h-screen p-6">
        <ul>
          <li
            className="mb-4 cursor-pointer hover:underline"
            onClick={() => setActiveTab("products")}
          >
            Products
          </li>
          <li
            className="cursor-pointer hover:underline"
            onClick={() => setActiveTab("cart")}
          >
            My Cart ({cart.length})
          </li>
        </ul>
      </aside>
      <main className="flex-1 container mx-auto p-6">
        {activeTab === "products" ? (
          <ProductPage
            addToCart={addToCart}
            cart={cart}
            removeFromCart={removeFromCart}
          />
        ) : (
          <CartScreen cart={cart} removeFromCart={removeFromCart} />
        )}
      </main>
    </div>
  );
};

export default HomePage;
