import React from 'react'
import Marquee from './Marquee'

function Marquees() {
    var data = [
        ["https://th.bing.com/th/id/R.83eab36f8ebe21cd09608ea73d95523a?rik=rss%2beh5LjtGYIw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fMicrosoft-Logo-Transparent-Background.png&ehk=rqBs2L0Wm3uKUNNIPlHrIPBJHzHIZCC8ju1yM4NkW2g%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.25f77468729361d5c12f5ca2685a850e?rik=Yea6fZgaj8wUHg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fRolex-Logo-Transparent-Background.png&ehk=j4WtoNE3uY5hLc3UsLz2kJNrZxQqupDpErZbGokY0xs%3d&risl=&pid=ImgRaw&r=0",
        "https://clipartcraft.com/images/transparent-logo-vector-8.png",
        "https://purepng.com/public/uploads/large/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png",
        "https://www.freepnglogos.com/uploads/company-logo-png/bmw-car-company-logo-png-transparent-image-3.png",
        "https://freepngimg.com/thumb/pepsi_logo/32190-5-pepsi-logo.png"
        ],
        ["https://purepng.com/public/uploads/large/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png","https://www.freepnglogos.com/uploads/company-logo-png/bmw-car-company-logo-png-transparent-image-3.png","https://freepngimg.com/thumb/pepsi_logo/32190-5-pepsi-logo.png","https://th.bing.com/th/id/R.83eab36f8ebe21cd09608ea73d95523a?rik=rss%2beh5LjtGYIw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fMicrosoft-Logo-Transparent-Background.png&ehk=rqBs2L0Wm3uKUNNIPlHrIPBJHzHIZCC8ju1yM4NkW2g%3d&risl=&pid=ImgRaw&r=0","https://th.bing.com/th/id/R.25f77468729361d5c12f5ca2685a850e?rik=Yea6fZgaj8wUHg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fRolex-Logo-Transparent-Background.png&ehk=j4WtoNE3uY5hLc3UsLz2kJNrZxQqupDpErZbGokY0xs%3d&risl=&pid=ImgRaw&r=0","https://clipartcraft.com/images/transparent-logo-vector-8.png"],

    ]
  return (
    <div className='py-52 w-full relative overflow-hidden bg-zinc-900'>
        {data.map((elem,index)=>{
            return <Marquee key={index} imgURL={elem} />
        })}
    </div>
  )
}

export default Marquees