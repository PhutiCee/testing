import { connectDb } from "@/lib/db";
import Product from "@/lib/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, URLParams: any) {
    try {
        const body = await req.json()
        const id = URLParams.params.id
        const {name, category, price} = body

        connectDb();

        const data = await Product.findByIdAndUpdate(id,{
            name,
            category,
            price,
        })
        return NextResponse.json({msg: "Product added", data})
    } catch (error) {
        return NextResponse.json({error, msg: "Something went wrong"}, {status: 400})
    }
}