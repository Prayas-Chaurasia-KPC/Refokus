import React, { useState } from 'react'
//Importing Framer Motion
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function Work() {

    const [images,setImgs] = useState([
        {url:"https://plus.unsplash.com/premium_photo-1714757483939-810e8af6eeab?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"50%",left:"50%",isActive:false},
        {url:"https://images.unsplash.com/photo-1714886772784-0aa62b017aa4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"55%",left:"45%",isActive:false},
        {url:"https://images.unsplash.com/photo-1715558666340-f47008461cf3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"50%",left:"50%",isActive:false},
        {url:"https://images.unsplash.com/photo-1715427345776-b3c07159c12f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"55%",left:"45%",isActive:false},
        {url:"https://images.unsplash.com/photo-1715452317871-1f5ec80c516b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzh8fHxlbnwwfHx8fHw%3D",top:"50%",left:"50%",isActive:false},
        {url:"https://images.unsplash.com/photo-1723442246044-7ccd50c84386?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"55%",left:"45%",isActive:false},
    ]) ;

    const { scrollYProgress } = useScroll()

    scrollYProgress.on("change",(data)=>{
        // console.log("Page scroll: ", Math.floor(data*100)) ;

        function imagesShow(arr){
            setImgs((prev)=>
                prev.map((item,index)=>
                    arr.indexOf(index) === -1 
                    ? {...item,isActive:false}
                    :{...item,isActive:true}
                )
            )
        }


        switch(Math.floor(data*100)){
            case 0:
                imagesShow([]) ;
                break ;
            case 1:
                imagesShow([0]) ;
                break ;
            case 2:
                imagesShow([0,1]) ;
                break ;
            case 3:
                imagesShow([0,1,2]) ;
                break ;
            case 4:
                imagesShow([0,1,2,3]) ;
                break ;
            case 4:
                imagesShow([0,1,2,3,4]) ;
                break ;
            case 5:
                imagesShow([0,1,2,3,4,5]) ;
                break ;


        }
    })

//     useMotionValueEvent(scrollYProgress, "change", (latest) => {
//         showHiddenImg(Math.floor(latest*100)) ;
//   })

//   function showHiddenImg(scrollY) {
//     // console.log("Page scroll: ", scrollY) ;
//     if(scrollY >= 1){
//         console.log("Show 1st img") ;
//     }
//   }


    


  return (
    <div className='w-full  mt-10'>
        <div className='max-w-screen-xl mx-auto text-center relative '>
            <h1 className='text-[30vw] leading-none font-semibold tracking-tight select-none '>
                work
            </h1>
            <div className='absolute top-0 w-full h-full '>
                {images.map((elem,index)=>{
                    return (elem.isActive && (<img key={index} className='w-[25%] rounded-lg absolute -translate-x-[50%] -translate-y-[50%] ' src={elem.url} alt="" style={{top: elem.top, left: elem.left}} />))
                })}
            </div>
        </div>
    </div>
  )
}

export default Work