import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {
    var data = [
        {   title:"Arqitel",
            description:" ljkjkjkjjkjkjhiollkajnlnd;ajwp9  ucmjnjnlnjbnkgjbkbdlfknvlinfopjp9;weuphbilijkjjbgols09iuwe  odskv kjf kiuhe89   qeoibudbgiluwyhp9uwdldnlkubi8qWye98ehfkjfgjbjg ",
            live:true,
            case:false,
        },
        {   title:"TTR",
            description:" ljkjkjkjjkjkjhiollkajnlnd;ajwp9  ucmjnjnlnjbnkgjbkbdlfknvlinfopjp9;weuphbilijkjjbgols09iuwe  odskv kjf kiuhe89   qeoibudbgiluwyhp9uwdldnlkubi8qWye98ehfkjfgjbjg ",
            live:true,
            case:false,
        },
        {   title:"YIR 2022",
            description:" ljkjkjkjjkjkjhiollkajnlnd;ajwp9  ucmjnjnlnjbnkgjbkbdlfknvlinfopjp9;weuphbilijkjjbgols09iuwe  odskv kjf kiuhe89   qeoibudbgiluwyhp9uwdldnlkubi8qWye98ehfkjfgjbjg ",
            live:true,
            case:true,
        },
        {   title:"Yahoo!",
            description:" ljkjkjkjjkjkjhiollkajnlnd;ajwp9  ucmjnjnlnjbnkgjbkbdlfknvlinfopjp9;weuphbilijkjjbgols09iuwe  odskv kjf kiuhe89   qeoibudbgiluwyhp9uwdldnlkubi8qWye98ehfkjfgjbjg ",
            live:true,
            case:true,
        },
        
        
        
    ]

    const [pos,setPos] = useState(0) ;
    const mover = (val)=>{
        setPos(val*23)
    }


  return (
    <div className=' relative bg-zinc-900'>
        {data.map((elem,index)=>{
            return <Product mover={mover} key={index} index={index} elem={elem} />
        })}
        <div className='absolute top-0 w-full h-full pointer-events-none '>
            <motion.div
            initial={{y: pos,x:"-50%"}}
            animate={{y: pos+'rem'}}
            transition={{ease:[0.76,0,0.24,1],duration: 0.6}}
             className='window absolute w-[32rem] h-[23rem] bg-sky-100 left-[44%] -translate-x-[50%] overflow-hidden '>
                <motion.div
                animate={{y: pos+'rem'}}
                transition={{ease:[0.76,0,0.24,1],duration: 0.6}}
                 className='absolute w-full h-full bg-sky-100 '>
                </motion.div>
                <motion.div
                animate={{y: pos+'rem'}}
                transition={{ease:[0.76,0,0.24,1],duration: 0.6}} className='absolute w-full h-full bg-sky-100 '>
                </motion.div>
                <motion.div
                animate={{y: pos+'rem'}}
                transition={{ease:[0.76,0,0.24,1],duration: 0.6}} className='absolute w-full h-full bg-sky-100 '>
                </motion.div>
                <motion.div
                animate={{y: pos+'rem'}}
                transition={{ease:[0.76,0,0.24,1],duration: 0.6}} className='absolute w-full h-full bg-sky-100 '>
                </motion.div>
            </motion.div>
        </div>
    </div>


  )
}

export default Products