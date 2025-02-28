"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Product } from "../page";

const DetailsPage = () => {
  const params = useParams();

  const id = params.details;
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const storedCart = JSON.parse(localStorage.getItem("product") ?? "[]");

      const foundProduct = storedCart.find((p: Product) => p.id === Number(id));
      setProduct(foundProduct);
    }
  }, [id]);

  return (
    <div>
      <h1>Details Page </h1>
      {product && (
        <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-100 h-40  rounded-md"
          />
          <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-600">{product.price}</p>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
