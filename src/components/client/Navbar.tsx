import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

interface PropsType {
    setShowCart: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ setShowCart }: PropsType) {
    const cartCount = useAppSelector((state) => state.cartReducer.length
    )
    return (
        <header className="text-gray-600 bg-white shadow-md">
            <div className="mx-auto max-w-7xl flex items-center justify-around p-5">
                <nav className="flex items-center justify-stretch">
                    <label htmlFor="search" className="sr-only">Search</label>
                    <div className="relative flex-grow">
                        <BiSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        <input
                            id="search"
                            type="text"
                            className='border-b p-2 pl-8 w-full rounded focus:outline-none focus:border-indigo-500'
                            placeholder='Search...'
                        />
                    </div>
                </nav>

                <div className="flex-grow flex justify-center">
                    <Link href="/" className="flex font-medium items-center text-gray-900">
                        <span className="text-2xl font-bold">TITLE</span>
                    </Link>
                </div>

                <div className='text-gray-500 text-2xl relative cursor-pointer' onClick={() => setShowCart(true)}>
                    <AiOutlineShoppingCart />
                    <div className='absolute -top-4 -right-3 bg-red-600 w-6 h-6 rounded-full text-white text-sm grid place-items-center'>
                        {cartCount}
                    </div>
                </div>
            </div>
        </header>
    );
}
