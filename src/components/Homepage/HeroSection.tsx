import React from 'react'
import Image from 'next/image'
import Clock from './Clock'

function HeroSection() {
  return (
    <section className='relative bg-violet overflow-hidden'>
        {/* shards - tablet+ only, at section level */}
        <div
          aria-hidden
          className="pointer-events-none hidden tablet:block absolute inset-y-0 left-0 w-[44%] bg-white"
          style={{ clipPath: 'polygon(0 0, 100% 0, 62% 100%, 0 100%)' }}
        />
        <div
          aria-hidden
          className="pointer-events-none hidden tablet:block absolute top-0 left-[30%] w-[22%] h-[46%] bg-volt"
          style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
        />
        <div
          aria-hidden
          className="pointer-events-none hidden tablet:block absolute top-[30%] left-0 w-[7%] h-[42%] bg-cyan"
          style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
        />

        {/* tagline - top right, tablet+ only */}
        <div className="hidden tablet:block absolute right-8 top-6 font-heading text-[0.78rem] leading-tight text-right tracking-wider z-20 text-white">
            <span className="block text-cyan">Untold.</span>
            <span className="block text-volt">Unfiltered.</span>
            <span className="block">Unboxed.</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 pt-7 tablet:min-h-[620px] grid grid-cols-1 tablet:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-end gap-6">
            {/* image col - 2nd on mobile, 1st on tablet */}
            <div className="order-2 tablet:order-1 relative z-10 w-full -mx-8 tablet:mx-0 tablet:justify-self-end overflow-hidden tablet:overflow-visible">
                {/* mobile shards - inside image col only */}
                <div
                  aria-hidden
                  className="tablet:hidden pointer-events-none absolute inset-0 bg-white"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)' }}
                />
                <div
                  aria-hidden
                  className="tablet:hidden pointer-events-none absolute top-[12%] left-[25%] w-[55%] h-[35%] bg-volt"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                />
                <div
                  aria-hidden
                  className="tablet:hidden pointer-events-none absolute top-[42%] left-0 w-[8%] h-[22%] bg-cyan"
                  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
                />

                {/* clock - mobile only, above image */}
                <Clock className="relative tablet:hidden text-white mb-6 px-8" />

                <div className="relative w-full max-w-[420px] tablet:max-w-[470px] mx-auto tablet:mx-0 tablet:-mb-1 animate-[rise_1s_cubic-bezier(.2,.8,.2,1)_both]">
                    <Image
                      src="/images/hero.webp"
                      alt="A person in a black hoodie with an open cardboard box for a head, Auckland's skyline, a pōhutukawa and a gull bursting out of it"
                      width={940}
                      height={1175}
                      priority
                      className="w-full h-auto"
                    />
                </div>
            </div>

            {/* copy col - 1st on mobile, 2nd on tablet */}
            <div className="order-1 tablet:order-2 relative z-10 grid gap-6 content-end pt-6 pb-10 tablet:pt-10 tablet:pb-16 text-white">
                <span className="inline-flex items-center gap-2 w-fit px-3 py-1.5 bg-ink text-xs uppercase tracking-widest font-semibold">
                    <i className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                    New drop every day · Aotearoa
                </span>

                <h1 className="font-heading leading-[0.95] text-[clamp(2.6rem,7.4vw,6.1rem)] font-display uppercase">
                    <span className="block animate-[slam_0.7s_cubic-bezier(.2,.8,.2,1)_both]">Break</span>
                    <span className="block text-volt animate-[slam_0.7s_cubic-bezier(.2,.8,.2,1)_both] [animation-delay:0.08s]">open</span>
                    <span className="block animate-[slam_0.7s_cubic-bezier(.2,.8,.2,1)_both] [animation-delay:0.16s]">what</span>
                    <span className="block text-volt animate-[slam_0.7s_cubic-bezier(.2,.8,.2,1)_both] [animation-delay:0.24s]">matters.</span>
                </h1>

                <p className="max-w-[44ch] text-[1.12rem] text-fg-soft">
                    Sixty-second stories from Aotearoa, told straight. <b className="text-white font-semibold">Politics, neighbourhoods, food, fashion, tech and the world</b>, from the people living it.
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                    <a
                      href="#drops"
                      className="inline-flex items-center gap-2 px-4 py-3 bg-volt text-ink text-xs uppercase tracking-widest font-heading border-r-4 border-b-4 border-transparent hover:border-ink transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 w-fit"
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                            <path d="M2 1l11 6-11 6z" fill="currentColor" />
                        </svg>
                        Watch today&apos;s drop
                    </a>

                    {/* clock - tablet+ only, inline with button */}
                    <Clock className="flex" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
