import React from 'react'
import "./Image.css"

const Image = ({img,name}) => {
  return (
    <div class="card">
    <div class="card-image-container">
      <img src={img} alt="sdafgsegsdf" />
    </div>
    <p class="card-title">{name}</p>
    <p class="card-des">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
      natus modi repellendus dolorem unde odio sequi! Porro, cum maiores tempore
      suscipit laudantium perspiciatis, illo sunt, reprehenderit quae est
      blanditiis.
    </p>
  </div>
  
  )
}

export default Image