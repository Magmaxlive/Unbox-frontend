import React from 'react'

type MarqueeItem = { name: string; color: string }

const marqueeItems: MarqueeItem[] = [
    { name: 'technology',       color: 'text-tech' },
    { name: 'geopolitics',      color: 'text-politics' },
    { name: 'places',           color: 'text-tour' },
    { name: 'wellbeing',        color: 'text-edu' },
    { name: 'politics',         color: 'text-politics' },
    { name: 'local community',  color: 'text-culture' },
    { name: 'lifestyle',        color: 'text-life' },
    { name: 'fashion',          color: 'text-culture' },
    { name: 'food',             color: 'text-food' },
]

function Pill({ name, color }: MarqueeItem) {
    return (
        <div
          className="flex items-center gap-2  pl-3 pr-5  shrink-0"
          style={{ clipPath: 'polygon(0 0, 100% 0, 94% 100%, 0 100%)' }}
        >
            <svg width="15" height="15" viewBox="0 0 10 10" aria-hidden="true" className={color}>
                <path d="M0 1h10L5 9z" fill="currentColor" />
            </svg>
            <span className="font-heading text-sm uppercase text-white tracking-wider whitespace-nowrap">
                {name}
            </span>
        </div>
    )
}

function Row() {
    return (
        <div className="flex shrink-0 items-center gap-6 pr-6">
            {marqueeItems.map((i, index) => (
                <Pill key={index} name={i.name} color={i.color} />
            ))}
        </div>
    )
}

function MarqueeSection() {
  return (
    <div className='bg-black py-4 border-y-4 border-volt overflow-hidden'>
      <div className="flex w-max animate-marquee group-hover:[animation-play-state-paused]">
        <Row/>
        <Row/>
      </div>
    </div>
  )
}

export default MarqueeSection
