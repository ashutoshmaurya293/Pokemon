import React from "react";
import "./Image.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Image = ({ img, name, id, type }) => {
  return (
    <Link to={`/details/${id}`}>
      <div className="card">
        <div className="card-image-container">
          <LazyLoadImage src={img} effect="blur" />
        </div>
        <p className="name">
          Name - <span className="card-title">{name}</span>
        </p>
        <p className="card-des">{type.types[0].type.name}</p>
      </div>
    </Link>
  );
};

export default Image;
