import React from 'react'
import Link from 'next/link'

function Button({content='pitch your story',link='#pitch'}) {
  return (
    <Link href={link} className='p-4 bg-volt text-xs tracking-widest uppercase font-heading border-r-4 border-b-4 border-transparent hover:border-ink transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1'>
      {content}
    </Link>
  )
}

export default Button
