import React from 'react'
import SectionHeading from '../common/SectionHeading'

function StoriesSection() {
  return (
    <div className='bg-white px-8 py-20'>
        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
            <SectionHeading eyebrow='Real people · real context'
            eyebrowBg='bg-cyan'
            main={
                <>
                    Stories start
                    with <span className='text-violet-deep'>people.</span>
                </>
            } 
            description='Built for Gen Z and for anyone new to New Zealand who wants a voice in how the country talks about itself.'
            />
        </div>
      
    </div>
  )
}

export default StoriesSection
