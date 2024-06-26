"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState("");
  console.log(file);
  async function uploadHandler() {
    const data = new FormData();
    data.set("file", file);
    const res = await fetch("http://localhost:3000/api/upload", {
      method: "post",
      body: data,
    });
    const result = await res.json();
    if (result.success) {
      alert("File upload successfull");
    } else {
      alert("File not found");
    }
  }
  return (
    <div>
      <Link href={"/addproducts"}>Add Product</Link>
      <Link href={"/addproducts"}>Add Product</Link>

      <div>
        <input type="file" onChange={(e) => setFile(e.target?.files?.[0])} />
        <button className="p-3 bg-blue-600" onClick={uploadHandler}>
          upload
        </button>
      </div>
    </div>
  );
}
