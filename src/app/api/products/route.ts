import { connectDb } from "@/lib/db";
import Product from "@/lib/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        connectDb();

        const data = await Product.find()
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({error, msg: "Something went wrong"}, {status: 400})
    }
}