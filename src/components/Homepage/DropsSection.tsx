import React from 'react'
import SectionHeading from '../common/SectionHeading'
import VideoCard from '../common/VideoCard'
import { sample } from '@/data/DropSample'
import WeeksCard from '../common/WeeksCard'

function DropsSection() {
  return (
    <div className='bg-ink px-8 py-20 scroll-mt-25' id='today'>
      <div className="flex flex-col max-w-7xl mx-auto gap-8">
        
            <SectionHeading eyebrow="Today's drops"
            eyebrowBg='bg-volt'
            main={
                <div className='text-white'>
                    Five stories.<br/>
                    <span className='text-volt'>Five minutes.</span>
                </div>
            }
            description=" Every upload runs one minute. Tap a story to start its clock. This lineup is a sample of the daily format."
            paraColor='text-soft'
             />
            
        

        {/* lg+ static grid */}
        <div className="hidden lg:grid grid-cols-5 gap-5">
          {sample.map((i, index) => (
            <VideoCard key={index} category={i.category} title={i.title} location={i.location} time={i.time} image={i.image} />
          ))}
        </div>

        {/* below lg - scrollable grid (looks like grid at rest) */}
        <div className="lg:hidden overflow-x-auto snap-x snap-mandatory">
          <div className="flex gap-5">
            {sample.map((i, index) => (
              <div
                key={index}
                className="snap-start shrink-0 w-full md:w-[calc((100%-2.5rem)/3)] tablet:w-[calc((100%-3.75rem)/4)]"
              >
                <VideoCard category={i.category} title={i.title} location={i.location} time={i.time} image={i.image} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between md:flex-row flex-col gap-4">
          <p className="text-soft/80 text-sm">One drop a day, every day. Here's this week:</p>
          <WeeksCard/>
        </div>
      </div>
    </div>
  )
}

export default DropsSection
