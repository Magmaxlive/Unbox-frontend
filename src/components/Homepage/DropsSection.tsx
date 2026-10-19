import React from 'react'
import SectionHeading from '../common/SectionHeading'

function DropsSection() {
  return (
    <div className='bg-ink px-8 py-20'>
      <div className="flex flex-col max-w-7xl mx-auto gap-8">
        <div className="flex tablet:flex-row flex-col gap-5 justify-between tablet:items-center">
            <SectionHeading eyebrow="Today's drops"
            eyebrowBg='bg-volt'
            main={
                <div className='text-white'>
                    Five stories.<br/>
                    <span className='text-volt'>Five minutes.</span>
                </div>
            } />
            <p className="text-soft max-w-sm">
                Every upload runs one minute. Tap a story to start its clock. This lineup is a sample of the daily format.
            </p>
        </div>
      </div>
    </div>
  )
}

export default DropsSection
