import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { headerLinks } from '@/data/Links'

function Navbar() {
  return (
    <div className='bg-violet px-8 py-8'>
        <div className="flex justify-between gap-5 max-w-7xl mx-auto">
           <div className="relative w-32 aspect-[2019/514] shrink-0">
            <Image src='/images/logo.png' alt='unbox logo' fill className='object-contain'/>
           </div>
           <div className="flex gap-4 capitalize font-semibold text-white">
                {headerLinks.map((i,index)=>(
                    <Link key={index} href={i.link}>{i.label}</Link>
                ))}
           </div>
        </div>
    </div>
  )
}

export default Navbar
