import React from 'react'

type week = {
    day:string,
    active:boolean
}

const days:week[]=[
   {
    day:'monday',
    active:true
   },
   {
    day:'tuesday',
    active:true
   },
   {
    day:'wednesday',
    active:false
   },
   {
    day:'thursday',
    active:false
   },
   {
    day:'friday',
    active:false
   },
   {
    day:'saturday',
    active:false
   },
   {
    day:'sunday',
    active:false
   },

]

function WeeksCard() {
  return (
    <div className='flex gap-2'>
      {days.map((i,index)=>(
        <div key={index} className={`p-1 px-3 text-sm uppercase font-bold ${i.active ? 'bg-volt text-ink' : 'bg-transparentbg text-white'}`} aria-label={i.day}>
           {i.day[0]}
        </div>
      ))}
    </div>
  )
}

export default WeeksCard
