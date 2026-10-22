import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { headerLinks } from '@/data/Links'

function Footer() {
  return (
    <div className='bg-violet px-8 py-10'>
      <div className="flex flex-col gap-10 max-w-7xl mx-auto">
        <div className="flex justify-between flex-wrap gap-6">
            <div className="relative w-50 aspect-[2019/514] shrink-0">
                        <Image src='/images/logo.png' alt='unbox logo' fill className='object-contain'/>
            </div>
            <div className="flex flex-col font-heading  text-white md:text-right">
                <span className="block text-cyan">Untold.</span>
            <span className="block ">Unfiltered.</span>
            <span className="block">Unboxed.</span>
            </div>
        </div>

        <div className="flex flex-wrap gap-10 justify-between">
            <p className="text-white  font-semibold text-sm">
                New Zeland Media House . unbox.live
            </p>
            <div className="flex flex-wrap gap-5">
                {headerLinks.map((i,index)=>(
                    <Link key={index} href={i.link} className='text-white text-sm underline underline-offset-6 capitalize cursor-pointer font-medium'>{i.label}</Link>
                ))}
            </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
