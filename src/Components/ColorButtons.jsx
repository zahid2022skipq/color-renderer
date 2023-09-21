import React from 'react'
import './Colorbutton.css'


const ColorButtons = ({colorname, handleClick}) => {
  return (
    <div className='btn-container' style={{backgroundColor:colorname}}>
        <button onClick={() => handleClick(colorname)} style={{backgroundColor:colorname, color:"white"}}>{colorname}</button>
    </div>
  )
}

export default ColorButtons