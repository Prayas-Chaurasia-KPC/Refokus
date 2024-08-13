import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
<FaArrowRightLong />

function Card({width,start,para,hover}) {
  return (
    <div className={` ${width} bg-zinc-800 p-5 rounded-xl min-h-[30rem] flex flex-col justify-between hover:${hover} `}>
        <div className='w-full'>
        <div className='w-full flex justify-between items-center'>
            <h3>one heading</h3>
            <FaArrowRightLong />
        </div>
        <h1 className='text-3xl font-bold mt-10 '>Whatever heading is ?</h1>
        </div>
        <div className='down w-full mt-60'>
            {
                start === true ? (
                    <>
                    <h1 className='text-6xl font-semibold tracking-tight '>Start a project</h1>
                    <button className='rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-500 ' >
                    Contact Us
                    </button>
                    </>
                ) : null 
            }
            {para && (
                <>
                <p className='text-sm text-zinc-500 font-medium mb-0 '>Lorem, ipsum dolor sit amet consectetur adipisicing.</p></>
            )}
        </div>
    </div>
  )
}

export default Card