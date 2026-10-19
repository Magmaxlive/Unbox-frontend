import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { headerLinks } from '@/data/Links'
import Button from './Button'

function Navbar() {
  return (
    <div className='bg-violet px-8 py-6'>
        <div className="flex items-center justify-between gap-5 max-w-7xl mx-auto">

           <div className="relative w-32 aspect-[2019/514] shrink-0">
            <Image src='/images/logo.png' alt='unbox logo' fill className='object-contain'/>
           </div>

           <div className="flex gap-4 capitalize font-semibold text-white hidden lg:flex">
                {headerLinks.map((i,index)=>(
                    <Link className='hover:text-volt' key={index} href={i.link}>{i.label}</Link>
                ))}
           </div>

           <Button/>
        </div>
    </div>
  )
}

export default Navbar
