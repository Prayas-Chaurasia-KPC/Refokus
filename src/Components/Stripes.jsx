import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    var data = [
        {url:"https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=600",number:48},
        {url:"https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=600",number:2},
        {url:"https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600",number:48},
        {url:"https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=600",number:2},
        {url:"https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=600",number:11},
        {url:"https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600",number:2},



    ]
  return (
    <div className='flex items-center mt-20'>
        {data.map((elem,index)=>{
            return <Stripe key={index} url={elem.url} number={elem.number} />  
        })}
    </div>
  )
}

export default Stripes