import React from 'react'
import Image from 'next/image'

type cardProps={
    image:string;
    title:string;
    category?:string
    duration:string;
    location:string;
    content:string;
    number:number;
}

function StoryCard({image,title,category,duration,location,content,number}:cardProps) {
  return (
    <div className='flex flex-col gap-2'>
        <div className="relative aspect-square">
            <Image src={image} fill alt={title} className='absolute object-cover' />
        </div>
        <h6 className="font-heading text-violet-deep">{number}</h6>
        <h3 className="font-heading uppercase">{title}</h3>
        <h6 className="text-sm font-semibold text-ink">{duration}.{location}</h6>
        <p className="text-sm font-medium text-ink">{content}</p>
      
    </div>
  )
}

export default StoryCard
