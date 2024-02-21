import React from "react";
import "./Image.css";
import { Link } from "react-router-dom";

const Image = ({ img, name,id }) => {
  return (
   <Link to={`/details/${id}`}>
    <div className="card">
      <div className="card-image-container">
        <img src={img} alt="image" />
      </div>
      <p className="card-title">{name}</p>
     
    </div>
   </Link>
  );
};

export default Image;
