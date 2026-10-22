import React from 'react'

type FeatureProps = {
  title: string;
  description: string;
};

const features: FeatureProps[] = [
  {
    title: "ONE MINUTE, ONE STORY",
    description:
      "Short enough to watch between stops. Long enough to know what actually happened and why it matters.",
  },
  {
    title: "A NEW DROP EVERY DAY",
    description:
      "Daily uploads keep the feed current. Come back tomorrow and there's something new to open.",
  },
  {
    title: "UNFILTERED VOICES",
    description:
      "Stories told by the people inside them, with context added and nothing sanded off.",
  },
];


function SixtysecondsSection() {
  return (
    <div className='py-20 px-8 bg-violet scroll-mt-25' id='60s'>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* left div */}
        <div className="flex flex-col gap-2">
            <h1 className="text-[clamp(8rem,22vw,20rem)] leading-none font-heading font-bold text-volt">
                60
            </h1>
            <p className="text-white font-heading tracking-wider text-3xl md:text-4xl lg:text-5xl uppercase max-w-xl">
                Seconds.<br/> That's the rule.
            </p>
        </div>


        {/* right div */}
        <div className="flex flex-col">
            {features.map((i,index)=>(
                <div key={index} className="flex gap-6 items-start justify-start p-5 py-8 border-t-2 border-soft/50 last:border-b-2">
                <div className='items-start'>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                   viewBox="68 61 134 134"
                    className="h-7 w-7 text-cyan"
                    aria-hidden
                    fill='#24daff'
                    >
                        <polygon fill="24daff" points="182.41 61.57 137.9 106.08 132.74 106.08 88.24 61.57 182.41 61.57" />
                        <polygon fill="24daff" points="182.41 194.53 137.9 150.01 132.74 150.02 88.24 194.53 182.41 194.53" />
                        <polygon fill="24daff" points="201.8 80.96 157.29 125.47 157.29 130.63 201.8 175.13 201.8 80.96" />
                        <polygon fill="24daff" points="68.84 80.96 113.36 125.47 113.35 130.63 68.84 175.13 68.84 80.96" />
                    </svg>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-heading text-xl uppercase text-white">
                        {i.title}
                    </h3>
                    <p className="text-sm text-white">
                        {i.description}
                    </p>
                </div>

            </div>
            ))}
            
        </div>

      </div>
    </div>
  )
}

export default SixtysecondsSection
