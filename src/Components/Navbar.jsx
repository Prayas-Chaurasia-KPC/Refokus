import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-6 bg-#1c1c1c flex items-center justify-between border-b-2 border-zinc-700 '>
        <div className="nleft flex gap-4">
            <img className='w-[10%] mt-0' src="src\assets\refokus_logo.png" ></img>
            <div className='links flex gap-14 '>
                {["Home", "About", "Services", "Contact","","News"].map((elem,index) =>(
                    <a href="#" key={index} className='font-regular text-sm flex items-center gap-1 '>
                        {elem.length === 0 ? <span className='w-0.5 h-6 bg-zinc-700'></span> : null}
                        {index === 1 ? (<span style={{boxShadow:"0 0 0.35em #00FF19"}} className='inline-block w-2 h-2 bg-green-400 rounded-full '></span>) : null} 
                        {elem}
                    </a>
                ))}
            </div>
        </div>
        <Button />
    </div>
    
  )
}

export default Navbar