import { removeFromCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import React from 'react'
import { CgClose } from 'react-icons/cg';
interface PropsType {
    id: string;
    title: string;
    img: string;
    price: number;
    quantity: number;
}
export default function CartProduct({ id, title, img, price, quantity }: PropsType) {
    const dispatch = useAppDispatch()
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <img className='h-20' src={img} alt={title} />
                <div className='space-y-2'>
                    <h3 className='font-medium'>{title}</h3>
                    <p className='text-gray-600 text-lg'>{quantity} x {price}</p>
                </div>
            </div>
            <CgClose className='cursor-pointer' onClick={() => dispatch(removeFromCart(id))} />
        </div>
    )
}
