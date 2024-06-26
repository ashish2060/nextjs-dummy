import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ success: false, message: "No image found" });
  }

  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const path = `./public/${file.name}`;
  await writeFile(path, buffer);
  return NextResponse.json({
    success: true,
    message: "Image uploaded Successfull",
  });
}
