"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
interface IProduct {
    _id: string
    imgSrc: string;
    fileKey: string;
    title: string;
    price: number;
    category: string;
}
export default function TrendingProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("/api/products").then(res => setProducts(res.data)).catch((err) => console.log(err))

    }, [])
    return (
        <div className='container mt-16 mx-auto'>
            <div className='grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>
                {products.map((item: IProduct) => (
                    <ProductCard key={item._id}
                        id={item._id}
                        title={item.title}
                        img={item.imgSrc}
                        category={item.category}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}
