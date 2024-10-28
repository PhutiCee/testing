import { addToCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { makeToast } from '@/utils/helper';
import React from 'react';
import { BiCartAdd } from 'react-icons/bi';

interface propsType {
    id: string;
    img: string;
    title: string;
    price: number;
    category: string;
}

export default function ProductCard({ id, img, title, price, category }: propsType) {
    const dispatch = useAppDispatch();

    const addProductToCart = () => {
        const payLoad = {
            id,
            img,
            title,
            price,
            quantity: 1,
        };
        dispatch(addToCart(payLoad));
        makeToast("Added to cart");
    };

    return (
        <div className="max-w-sm bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="bg-gray-100">
                <img className="w-full h-48 object-cover" src={img} alt={title} />
            </div>

            <div className="p-6">
                <p className="text-sm text-gray-500 mb-1">{category}</p>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
                <h3 className="text-xl font-semibold text-green-500 mb-4">R{price}</h3>

                <button
                    onClick={addProductToCart}
                    className="w-full flex items-center justify-center gap-2 text-gray-700 py-2 px-4 rounded-lg hover:bg-blue-400 transition-colors duration-200"
                >
                    <BiCartAdd className="text-xl" />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    );
}
