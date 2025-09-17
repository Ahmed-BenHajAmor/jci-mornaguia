import React from 'react'
import "./Button.css"
function Button({text, to}) {
  return (
    <button className='contact'><a href={to}>{text}</a></button>
  )
}

export default Button