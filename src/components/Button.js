import React from 'react'
import './button.css';
function Button({Title,bgColor,textColor}) {
    return (
        <div className={`btn bg-${ bgColor }`}>
                        <p className={`text-${textColor}`}>{Title}</p>
        </div>
    )
}

export default Button
