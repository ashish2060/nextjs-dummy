import { ProductModel } from "@/utils/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  const id = content.params.id;
  await mongoose.connect(process.env.MONGO_URL);

  const data = await ProductModel.findOne({ _id: id });
  if (!data) {
    return NextResponse.json({ success: false, message: "Error" });
  }

  return NextResponse.json({ success: true, data });
}

export async function PUT(request, content) {
  const data = await request.json();
  const id = content.params.id;
  console.log("id", id);
  console.log("data", data);

  await mongoose.connect(process.env.MONGO_URL);

  const product = await ProductModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return NextResponse.json({ success: true, product });
}
