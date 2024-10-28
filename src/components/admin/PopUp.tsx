import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { makeToast } from '@/utils/helper';
import axios from 'axios';
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

interface PropsType {
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
}

export default function PopUp({ setOpenPopup, setUpdateTable }: PropsType) {
    const productData = useAppSelector((state) => state.productReducer);
    const dispatch = useAppDispatch();

    const [inputData, setInputData] = useState({
        name: productData.title,
        category: productData.category,
        price: productData.price,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setLoading(true));

        axios.put(`/api/edit_product/${productData._id}`, inputData)
            .then(res => {
                makeToast("Product Updated");
                setUpdateTable(prevState => !prevState);
            })
            .catch(err => console.log(err))
            .finally(() => {
                dispatch(setLoading(false));
                setOpenPopup(false);
            });
    };

    return (
        <div className='fixed top-0 left-0 w-full h-screen bg-[#00000070] grid place-items-center'>
            <div className="bg-white w-full max-w-md py-8 px-4 rounded-lg text-center relative">
                <IoIosCloseCircleOutline className='absolute right-0 top-0 m-4 cursor-pointer hover:text-red-600' onClick={() => setOpenPopup(false)} />
                <h2 className="text-xl font-semibold">Edit Product</h2>
                <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
                    <input
                        type="text"
                        className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-full'
                        placeholder='Name'
                        value={inputData.name}
                        onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Category'
                        className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-full'
                        value={inputData.category}
                        onChange={(e) => setInputData({ ...inputData, category: e.target.value })}
                        required
                    />
                    <input
                        type="number"
                        placeholder='Price'
                        className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-full'
                        value={inputData.price}
                        onChange={(e) => setInputData({ ...inputData, price: e.target.value })}
                        required
                    />
                    <div className='flex justify-end'>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
