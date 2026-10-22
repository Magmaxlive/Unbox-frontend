import React from 'react'
import SectionHeading from '../common/SectionHeading'
import Image from 'next/image'
import PitchForm from '../common/PitchForm'

function ContactSection() {
  return (
    <div className='bg-ink px-8 py-20'>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-15 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
            <SectionHeading eyebrow='Your turn' eyebrowBg='bg-volt' main={
            <div className='text-white'>Got a story? <span className="text-volt">unbox</span><br/> <span className="text-cyan">it.</span> </div>
        } />
            <p className="text-soft  max-w-sm">Tell us what's happening in your street, your community or your feed. If it can be told in sixty seconds, we want to hear it.</p>
            <div className="relative aspect-[16/9] mt-4 -mx-8 tablet:mx-0">
                <Image src='/images/collage.webp' fill alt='Collage' className='object-contain scale-100' />
            </div>
        </div>

        <PitchForm/>
        
      </div>
    </div>
  )
}

export default ContactSection
