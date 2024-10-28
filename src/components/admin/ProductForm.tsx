"use client";
import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import { makeToast } from '@/utils/helper';
import axios from 'axios';
import React, { FormEvent, useState, ChangeEvent } from 'react';

interface IPayload {
    imgSrc: null | string;
    fileKey: null | string;
    title: string;
    price: string;
    category: string;
}

export default function ProductForm() {
    const [payLoad, setPayLoad] = useState<IPayload>({
        imgSrc: null,
        fileKey: null,
        title: "",
        price: "",
        category: "",
    });
    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPayLoad(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setLoading(true));

        axios.post("/api/add_product", payLoad)
            .then(res => {
                makeToast("Product added");
                setPayLoad({
                    imgSrc: null,
                    fileKey: null,
                    title: "",
                    price: "",
                    category: "",
                });
            })
            .catch(err => console.log(err))
            .finally(() => dispatch(setLoading(false)));
    };

    return (
        <div className="mx-auto p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
            <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-semibold text-center mb-4">Add Product</h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL:</label>
                    <input
                        type="text"
                        required
                        name="imgSrc"
                        value={payLoad.imgSrc || ""}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Name:</label>
                    <input
                        type="text"
                        required
                        name="title"
                        value={payLoad.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price:</label>
                    <input
                        type="text"
                        required
                        name="price"
                        value={payLoad.price}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category:</label>
                    <input
                        type="text"
                        required
                        name="category"
                        value={payLoad.category}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button type="submit" className="w-full py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors">
                    Add Product
                </button>
            </form>
        </div>
    );
}
