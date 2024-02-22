import React from "react";
import "./Image.css";
import { Link } from "react-router-dom";

const Image = ({ img, name, id, type }) => {
  return (
    <Link to={`/details/${id}`}>
      <div className="card">
        <div className="card-image-container">
          <img src={img} alt="image" />
        </div>
        <p className="name">
          Name - <span className="card-title">{name}</span>
        </p>
        <p className="card-des">

        {type.types[0].type.name}
        </p>
      </div>
    </Link>
  );
};

export default Image;
