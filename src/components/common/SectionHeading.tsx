import React from 'react'
type props = {
    eyebrow:string,
    main:any,
    description?:any,
    eyebrowBg?:string,
    eyebrowColor?:string,
    paraColor?:string
}

function SectionHeading({eyebrow,main,description,eyebrowBg='bg-white',eyebrowColor='text-black',paraColor='text-black'}:props) {
  return (
    <div className='flex justify-between tablet:flex-row flex-col gap-2'>
      <div className="flex flex-col gap-2">
        {eyebrow &&
        <h4 className={`uppercase font-heading text-xs tracking-widest font-bold inline-block w-fit pl-5 pr-30 md:pr-50 py-1 -rotate-3 origin-left ${eyebrowBg} ${eyebrowColor}`}>
            {eyebrow}
        </h4>
      }

      {main &&
        <div className={`uppercase tracking-normal font-heading text-3xl md:text-5xl lg:text-6xl `}>
            {main}
        </div>
      }
      </div>

      {description &&
        <p className={`${paraColor} max-w-sm text-sm mt-3 font-medium tablet:self-end`}>
            {description}
        </p>
      }
    </div>
  )
}

export default SectionHeading
