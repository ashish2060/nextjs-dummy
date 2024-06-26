"use client";
import { useEffect, useState } from "react";

export default function UpdateProduct({ params }) {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
    color: "",
    company: "",
  });

  useEffect(() => {
    fetchProductDetails();
  }, []);

  async function fetchProductDetails() {
    const res = await fetch(
      `http://localhost:3000/api/products/${params.productId}`
    );
    const data = await res.json();
    console.log("data", data);
    setProductData({
      name: data.data.name,
      price: data.data.price,
      category: data.data.category,
      color: data.data.color,
      company: data.data.company,
    });
  }

  function changeHandler(e) {
    setProductData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function updateProduct() {
    const res = await fetch(
      `http://localhost:3000/api/products/${params.productId}`,
      {
        method: "put",
        body: JSON.stringify(productData),
      }
    );
    const data = await res.json();
    console.log("data", data);
    if (data.success) {
      alert("Product Updated Successfull");
      setProductData({
        name: "",
        price: "",
        category: "",
        color: "",
        company: "",
      });
    } else {
      alert("Product Updation Failed");
    }
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-black">
      <h1 className="text-2xl m-3 text-white">Update Product</h1>
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
        onClick={updateProduct}
      >
        Update Product
      </button>
    </div>
  );
}
