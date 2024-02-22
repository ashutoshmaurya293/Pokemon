import React from "react";
import "./SingleImage.css";

const SingleImage = () => {
  return (
    <div id="fullSingle">
      <div className="MainImg">
        <div className="more">
          <div className="firstImg"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png" alt="" /></div>
          <div className="secondImg"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png" alt="" /></div>
          <div className="thirdImg"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png" alt="" /></div>
        </div>
        <div className="img">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png" alt="" />
        </div>
      </div>
      <div className="details"></div>
    </div>
  );
};

export default SingleImage;
