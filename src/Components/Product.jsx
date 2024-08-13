import React from 'react'
import Button from './Button'

function Product({elem,mover,index}) {
  return (
    <div className='w-full py-5 h-[23rem] text-white bg-zinc-900'>
        <div onMouseEnter={()=>mover(index)}className='max-w-screen-xl mx-auto flex items-center justify-between '>
            <h1 className='text-5xl capitalize font-semibold py-20 '>{elem.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-10'>{elem.description}</p>
                <div className='w-1/4 flex items-center gap-5'>
                    {elem.live && <Button />}
                    {elem.case && <Button title="Case Study" />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product