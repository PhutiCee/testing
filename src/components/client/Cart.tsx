import { useAppSelector } from '@/redux/hooks';
import React, { Dispatch, SetStateAction } from 'react'
import { CgClose } from 'react-icons/cg';
import CartProduct from './CartProduct';
interface PropsType {
    setShowCart: Dispatch<SetStateAction<boolean>>;
}
export default function Cart({ setShowCart }: PropsType) {
    const products = useAppSelector((state) => state.cartReducer)
    const getTotal = () => {
        let total = 0;
        products.forEach((item) => (total = total + item.price * item.quantity))
        return total
    }
    return (
        <div className='bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll'>
            <div className='max-w-lg min-h-full w-full bg-white absolute right-0 top-0 p-6'>
                <CgClose className='absolute right-0 top-0 m-6 text-2xl cursor-pointer' onClick={() => setShowCart(false)} />
                <h3 className='pt-6 text-lg font-medium text-gray-600 uppercase'>Your Cart</h3>
                <div className='mt-6 space-y-2'>
                    {products?.map((item: any) => (
                        <CartProduct
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            quantity={item.quantity} />
                    ))}
                </div>

                <div className='flex justify-between items-center font-medium text-xl py-4'>
                    <p>Total:</p>
                    <p>R {getTotal()}</p>
                </div>

                <button className='bg-green-500 text-white w-full rounded-lg py-2 hover:bg-green-700'>Checkout</button>
            </div>
        </div>
    )
}
