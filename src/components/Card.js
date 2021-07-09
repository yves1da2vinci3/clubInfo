import React from 'react'
import './card.css';
function Card({image,title,description,level,price,duration}) {
    return (
        <div className='card'>
        <div className='imgCard'>
            <img src={image}/>
        </div>
        <div className='cardTitle'>
              {title}
        </div>
         <div className='cardDescription'>
           {description}
        </div>
        <div className='cardLevel'>
         {level}
        </div>
        <div className='cardReward'>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
</svg>
          {price}
        </div>
        <div className='cardDuration'>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg> {duration} jours
        </div>

    </div>
    )
}

export default Card
