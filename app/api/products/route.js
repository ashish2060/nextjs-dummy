import { ProductModel } from "@/utils/model/product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
  await mongoose.connect(process.env.MONGO_URL);

  const data = await ProductModel.find({});
  //   if (!data) {
  //     return NextResponse.json({ success: false, message: "Error" });
  //   }

  return NextResponse.json({ success: true, data });
}

export async function POST(request, content) {
  const productData = await request.json();

  await mongoose.connect(process.env.MONGO_URL);

  const newProduct = new ProductModel({
    name: productData.name,
    price: productData.price,
    company: productData.company,
    color: productData.color,
    category: productData.category,
  });

  await newProduct.save();
  console.log(productData);

  return NextResponse.json({ success: true, newProduct });
}
