import React from 'react'

function Stripe({url,number}) {
  return (
    <div className='w-[16.67%] px-4 py-3 border-t-2 border-b-2 border-r-2 border-zinc-600 flex justify-between '>
        <img className='w-10 h-10' src={url}></img>
        <span className='font-semibold'>{number}</span>
    </div>
  )
}

export default Stripe