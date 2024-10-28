"use client"
import SideBar from '@/components/admin/SideBar';
import { useAppSelector } from '@/redux/hooks'
import React, { Children } from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    const isLoading = useAppSelector((store) => store.loadingReducer);

    return (
        <div className='flex'>
            <SideBar />
            <div className="w-full h-full">
                {/* <NavBar /> */}
                <div className='h-16 w-full'></div>
                <div className='bg-gray-200 p-4 h-[calc(100vh-64px)]'>{children}</div>
            </div>
            {isLoading && (<div>Loading...</div>)}
        </div>
    )
}
