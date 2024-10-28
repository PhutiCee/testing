import { connectDb } from "@/lib/db";
import Product from "@/lib/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const {imgSrc, fileKey, title, category, price} = body

        connectDb();

        const data = await Product.create({
            imgSrc, fileKey, title, category, price
        })
        return NextResponse.json({msg: "Product added", data})
    } catch (error) {
        return NextResponse.json({error, msg: "Something went wrong"}, {status: 400})
    }
}