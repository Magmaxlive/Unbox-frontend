import React from 'react'
import Image from 'next/image'
import { categoryColors } from '@/data/CategoryColors'

type Props = {
    category: keyof typeof categoryColors
    categoryColor?: string
    title: string
    location: string
    time: string
    image: string
    duration?: string
    link?: string
}

function VideoCard({
    category,
    categoryColor = categoryColors[category] ?? 'bg-violet',
    title,
    location,
    time,
    image,
    duration = '0:60',
    link = '#',
}: Props) {
    return (
        <div
          className="group relative flex flex-col justify-between aspect-[9/16] p-4 bg-ink bg-cover bg-center overflow-hidden cursor-pointer"
          style={{ backgroundImage: `url(${image})` }}
        >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

            {/* play button - visible on hover */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-black/40" />
                <Image
                  src="/images/unbox_icon.png"
                  alt="Play"
                  width={80}
                  height={80}
                  className="relative w-20 h-20 transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            <div className="relative flex justify-between items-start gap-5">
                <span className={`px-2 py-1 text-white font-heading uppercase text-xs tracking-wider ${categoryColor}`}>
                    {category}
                </span>
                <span className="text-white font-heading text-xs tabular-nums bg-ink/50 p-1">{duration}</span>
            </div>

            <div className="relative flex flex-col gap-2">
                <h3 className="text-white font-heading uppercase text-lg leading-tight">{title}</h3>
                <p className="text-white/70 text-xs capitalize">
                    {location} · {time}
                </p>
            </div>
        </div>
    )
}

export default VideoCard
