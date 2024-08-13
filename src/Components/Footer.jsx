import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-zinc-900'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32 '>
            <div className='basis-1/2'>
               <h1 className='text-9xl font-bold tracking-tight  '>refokus.</h1>
            </div>
            <div className='basis-1/2 flex '>
                <div className='basis-1/3 flex flex-col gap-1'>
                    <h1 className='text-zinc-500 mb-10 capitalize '>Socials</h1>
                    {["Instagram","Twitter","Facebook"].map((elem,index)=>
                        <a key={index} className='block mt-3 text-zinc-600 capitalize '>{elem}</a>
                    )}
                </div>
                <div className='basis-1/3 flex flex-col gap-1'>
                    <h1 className='text-zinc-500 mb-10 capitalize '>Socials</h1>
                    {["Home","Work","Careers","Contact"].map((elem,index)=>
                        <a key={index} className='block mt-3 text-zinc-600 capitalize '>{elem}</a>
                    )}
                </div>
                <div className='basis-1/2 flex flex-col items-end justify-center gap-4'>
                    <p className='text-end'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <button className='bg-blue-700 border-2 mt-10 border-zinc-200 px-4 py-1 text-start '>Enterprise Partner</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer