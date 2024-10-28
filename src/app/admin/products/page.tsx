import ProductForm from '@/components/admin/ProductForm'
import React from 'react'

export default function page() {
    return (
        <div className='h-[calc(100vh-96px)] w-full grid place-items-center overflow-y-auto'>
            <div className='bg-white w-[700px] rounded-lg p-4'>
                <ProductForm />
            </div>
        </div>
    )
}
