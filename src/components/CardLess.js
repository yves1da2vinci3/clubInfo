import React from 'react'
import './card.css';
import  Button from'./Button';
function CardLess({Title}) {
    return (
        <div className='cardLess'>
            <div className='cardLessIcon'>
                
            </div>
            <div className='cardLessTitle'>
                {Title}
                </div>
                <div className='cardLessReasons'>
                   <ul>
                       <li><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></li>
                       <li><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></li>
                       <li><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></li>
                   </ul>
                </div>
                <div className='cardLessBtn'>
                <Button Title='EN SAVOIR PLUS' bgColor='blue-600' textColor='white'/>
                </div>
    </div>
    )
}

export default CardLess
