"use client";
import { useState } from "react";

export default function AddProduct() {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
    color: "",
    company: "",
  });

  function changeHandler(e) {
    setProductData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function addProductHandler() {
    const response = await fetch("http://localhost:3000/api/products", {
      method: "post",
      body: JSON.stringify(productData),
    });

    const data = await response.json();
    if (data.success) {
      alert("Product added Successfull");
    } else {
      alert("Product added failed");
    }
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-black">
      <h1 className="text-2xl m-3">Add Product Page</h1>
      <div className="flex flex-col gap-4 w-[300px]">
        <input
          placeholder="product name"
          name="name"
          value={productData.name}
          onChange={changeHandler}
          className="p-3 rounded-md"
        />
        <input
          placeholder="product price"
          name="price"
          value={productData.price}
          onChange={changeHandler}
          className="p-3 rounded-md"
        />
        <input
          placeholder="product category"
          name="category"
          value={productData.category}
          onChange={changeHandler}
          className="p-3 rounded-md"
        />
        <input
          placeholder="product color"
          name="color"
          value={productData.color}
          onChange={changeHandler}
          className="p-3 rounded-md"
        />
        <input
          placeholder="product company"
          name="company"
          value={productData.company}
          onChange={changeHandler}
          className="p-3 rounded-md"
        />
      </div>

      <button
        className="p-3 rounded-md bg-blue-400 w-[300px] mt-3"
        onClick={addProductHandler}
      >
        Add Product
      </button>
    </div>
  );
}
