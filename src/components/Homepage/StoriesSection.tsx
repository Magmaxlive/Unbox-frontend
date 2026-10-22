import React from 'react'
import SectionHeading from '../common/SectionHeading'
import StoryCard from '../common/StoryCard';

const audienceCards= [
  {
    image: "/images/p1.webp",
    title: "THE SCROLLING LOCAL",
    category: "CORE AUDIENCE",
    duration: "20s",
    location: "Auckland",
    content:
      "Gets the news from short-form video. Wants quick context without being talked down to.",
    number: 1,
  },
  {
    image: "/images/p2.webp",
    title: "THE NEW AOTEAROA",
    category: "CORE AUDIENCE",
    duration: "20s–40s",
    location: "Recent migrant",
    content:
      "Building a life here and learning how the country works. Finds NZ news hard to follow without context.",
    number: 2,
  },
  {
    image: "/images/p3.webp",
    title: "THE COMMUNITY CONNECTOR",
    duration: "30s–40s",
    location: "Auckland",
    content:
      "Follows housing, work, schools and neighbourhoods. Wants stories that touch real life.",
    number: 3,
  },
  {
    image: "/images/p4.webp",
    title: "THE INFORMED OBSERVER",
    duration: "40s–50s",
    location: "Aotearoa",
    content:
      "Already follows current affairs. Wants the bigger picture behind the headlines.",
    number: 4,
  },
];

function StoriesSection() {
  return (
    <div className='bg-white px-8 py-20 scroll-mt-25' id='who'>
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

            <div className="grid grid-cols-1 md:grid-cols-2 tablet:grid-cols-4 gap-6">
                {audienceCards.map((i,index)=>(
                    <StoryCard key={index} 
                    image={i.image}
                    title={i.title}
                    category={i.category}
                    duration={i.duration}
                    location={i.location}
                    content={i.content}
                    number={index+1} />
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default StoriesSection
