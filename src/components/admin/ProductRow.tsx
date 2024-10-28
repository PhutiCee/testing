import { IProduct } from '@/app/admin/dashboard/page';
import { setLoading } from '@/redux/features/loadingSlice';
import { setProduct } from '@/redux/features/productSlice';
import { useAppDispatch } from '@/redux/hooks';
import { makeToast } from '@/utils/helper';
import axios from 'axios';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react'
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin5Line } from 'react-icons/ri';

interface PropsType {
    srNo: number;
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
    product: IProduct;
}
export default function ProductRow({ srNo, setOpenPopup, setUpdateTable, product }: PropsType) {
    const dispatch = useAppDispatch()

    const onEdit = () => {
        dispatch(setProduct(product))
        setOpenPopup(true)
    }
    const onDelete = () => {
        dispatch(setLoading(true))
        axios.delete(`/api/delete_product/${product._id}`).then((res) => {
            console.log(res);
            makeToast("Product deleted")
            setUpdateTable((prevState) => !prevState);
        }).catch((err) => console.log(err)
        ).finally(() => dispatch(setLoading(false)))
    }
    return (
        <tr>
            <td><div>{srNo}</div></td>
            <td><div>{product.title}</div></td>
            <td>R {product.price}</td>
            <td className='py-2'>
                <Image src={product.imgSrc} alt='product_image' height={40} width={40} />
            </td>
            <td>
                <div className='text-2xl flex items-center gap-2 text-gray-600'>
                    <CiEdit className='cursor-pointer hover:text-black' onClick={onEdit} />
                    <RiDeleteBin5Line className='cursor-pointer hover:text-red-500 text-xl' onClick={onDelete} />
                </div>
            </td>
        </tr>
    )
}
