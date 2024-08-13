import { motion } from 'framer-motion'
import React from 'react'

function  Marquee({imgURL}) {
  return (
    <div className='flex w-full py-5 gap-10 overflow-hidden '>

        <motion.div
        initial={{x:"0"}}
        animate={{x:"-100%"}}
        transition={{ease:'linear',duration:10,repeat:Infinity}}
         className='flex flex-shrink-0 gap-20 py-10 pr-40 '>
          {imgURL.map((url,index) => <img key={index} src={url} className='w-30 h-20 flex-shrink' />)}
        </motion.div>

        <motion.div
        initial={{x:"0"}}
        animate={{x:"-100%"}}
        transition={{ease:'linear',duration:10,repeat:Infinity}}
         className='flex flex-shrink-0 gap-20 py-10 pr-40 '>
          {imgURL.map((url,index) => <img key={index} src={url} className='w-30 h-20 flex-shrink' />)}
        </motion.div>
    </div>
  )
}

export default Marquee