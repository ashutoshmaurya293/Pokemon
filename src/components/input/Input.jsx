import React from 'react'
import "./Input.css"

const Input = () => {
  return (
    <div className='fullInput'>
    <div className="search">
    <input placeholder="Search..." type="text"/>
    <button type="submit">Search</button>
  </div>
  </div>
  )
}

export default Input