import { connectDb } from "@/lib/db";
import Product from "@/lib/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(URLParams: any) {
    try {
        const id = URLParams.params.id

        connectDb();

        const data = await Product.findByIdAndDelete(id)
        return NextResponse.json({msg: "Product Deleted"})
    } catch (error) {
        return NextResponse.json({error, msg: "Something went wrong"}, {status: 400})
    }
}