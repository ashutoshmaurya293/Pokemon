import React from "react";
import "./Image.css";

const Image = ({ img, name }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={img} alt="image" />
      </div>
      <p className="card-title">{name}</p>
     
    </div>
  );
};

export default Image;
