import React from 'react'
import SectionHeading from '../common/SectionHeading'
import TopicsCard from '../common/TopicsCard';

const categories = [
  {
    eyebrow: "HARBOUR BLUE",
    title: "POLITICS & WORLD",
    description:
      "Parliament, policy and geopolitics, with the context first.",
    bgColor: "#2376DF",
    eyebrowColor: "#FFFFFF",
    titleColor: "#FFFFFF",
    descriptionColor: "#FFFFFF",
  },
  {
    eyebrow: "DIGITAL CYAN",
    title: "TECHNOLOGY",
    description:
      "Startups, AI and the apps changing how we work.",
    bgColor: "#00D2C0",
    eyebrowColor: "#000000",
    titleColor: "#000000",
    descriptionColor: "#000000",
  },
  {
    eyebrow: "CULTURE PLUM",
    title: "CULTURE & FASHION",
    description:
      "Music, style and the scenes setting the tone.",
    bgColor: "#D20FDB",
    eyebrowColor: "#FFFFFF",
    titleColor: "#FFFFFF",
    descriptionColor: "#FFFFFF",
  },
  {
    eyebrow: "POUTUKAWA RED",
    title: "LIFESTYLE & COMMUNITY",
    description:
      "Housing, work, neighbourhoods and local people.",
    bgColor: "#F2181D",
    eyebrowColor: "#FFFFFF",
    titleColor: "#FFFFFF",
    descriptionColor: "#FFFFFF",
  },
  {
    eyebrow: "KITCHEN TERRACOTTA",
    title: "FOOD",
    description:
      "Kitchens, markets and the families behind them.",
    bgColor: "#FF4B23",
    eyebrowColor: "#FFFFFF",
    titleColor: "#FFFFFF",
    descriptionColor: "#FFFFFF",
  },
  {
    eyebrow: "SIGNAL KŌWHAI",
    title: "PLACES",
    description:
      "Where to go, and the towns you haven't heard of.",
    bgColor: "#FFB624",
    eyebrowColor: "#000000",
    titleColor: "#000000",
    descriptionColor: "#000000",
  },
  {
    eyebrow: "RIMU GREEN",
    title: "EDUCATION & WELLBEING",
    description:
      "Schools, study, health and getting settled.",
    bgColor: "#0DD33C",
    eyebrowColor: "#000000",
    titleColor: "#000000",
    descriptionColor: "#000000",
  },
  {
    eyebrow: "YOUR COLOUR",
    title: "UNTOLD",
    description:
      "The story nobody's covering yet. Send it in.",
    bgColor: "#111111",
    eyebrowColor: "#FFFF00",
    titleColor: "#FFFF00",
    descriptionColor: "#FFFFFF",
  },
];

function TopicsSection() {
  return (
    <div className='bg-white px-8 py-20 scroll-mt-25' id='topics'>
      <div className="flex flex-col gap-10 max-w-7xl mx-auto">
        <SectionHeading eyebrow='topics' main={<>Pick your <br/> <span className='text-gray-800'>colour.</span></>} eyebrowBg='bg-black' eyebrowColor='text-white'
        description="Every story carries its topic colour, so you know what you're opening before it plays." />

        <div className="grid grid-cols-1 md:grid-cols-2 tablet:grid-cols-4">
            {
                categories.map((i,index)=>(
                    <TopicsCard 
                        key={index} 
                        eyebrow={i.eyebrow}
                        eyebrowColor={i.eyebrowColor}
                        description={i.description}
                        descriptionColor={i.descriptionColor}
                        title={i.title}
                        titleColor={i.titleColor}
                        bgColor={i.bgColor}
                     />
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default TopicsSection
