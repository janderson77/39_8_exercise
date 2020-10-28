import React from 'react'
import './Box.css'

const Box = ({color, width, height, id, handleRemove}) => {
    return(
        <div className="Box" id={id} style={{backgroundColor: color, width: width, height: height}}>
            <button className='Box-button' onClick={handleRemove}>X</button>
        </div>
    )
}

export default Box