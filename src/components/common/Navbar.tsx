'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { headerLinks } from '@/data/Links'
import Button from './Button'
import {Menu,X} from 'lucide-react'

function Navbar() {
    const [drawerOpen,setDrawerOpen] = useState(false)
    const toggleNavbar = ()=>{
        setDrawerOpen(!drawerOpen)
    }
  return (
    <div className='sticky backdrop-blur-lg z-50 top-0 bg-violet px-8 py-6 border-b border-soft/20'>
        <div className="flex items-center justify-between gap-5 max-w-7xl mx-auto">

           <div className="relative w-32 aspect-[2019/514] shrink-0">
            <Image src='/images/logo.png' alt='unbox logo' fill className='object-contain'/>
           </div>

           <div className="flex gap-4 capitalize font-semibold text-white hidden lg:flex">
                {headerLinks.map((i,index)=>(
                    <Link className='hover:text-volt' key={index} href={i.link}>{i.label}</Link>
                ))}
           </div>

           <div className="hidden lg:flex">
            <Button/>
           </div>

           <div className="lg:hidden flex">
            <button onClick={toggleNavbar} className='text-white font-bold cursor-pointer'>
                {drawerOpen ?(
                    <X />
                ): (
                    <Menu/>
                )}
            </button>
           </div>   
        </div>
        {drawerOpen && 
            <div className="absolute right-0 z-20 w-full flex flex-col lg:hidden bg-violet p-8 gap-6">
                <ul className='flex flex-col gap-2'>
                     {headerLinks.map((i,index)=>(
                        <li key={index}>
                            <Link className='hover:text-volt text-white capitalize font-semibold' key={index} href={i.link}>{i.label}</Link>
                        </li>
                    ))}
                </ul>
                 <Button/>
            </div>
           }
    </div>
  )
}

export default Navbar
