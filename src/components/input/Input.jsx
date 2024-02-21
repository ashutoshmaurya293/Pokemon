import React from 'react'
import "./Input.css"

const Input = () => {
  return (
    <div className='fullInput'>
    <div class="search">
    <input placeholder="Search..." type="text"/>
    <button type="submit">Search</button>
  </div>
  </div>
  )
}

export default Input