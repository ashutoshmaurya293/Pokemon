import React, { useEffect, useState } from "react";
import "./SingleImage.css";
import Loading from "../loader/Loading";

const SingleImage = (Data, { isLoading }) => {
  let firstImg = Data?.Data?.data?.sprites?.other?.home?.front_default;
  let secondImg = Data?.Data?.data?.sprites?.other?.dream_world?.front_default;
  let thirdImg = Data?.Data?.data?.sprites?.other?.home?.front_shiny;
  const [MainImg, setMainImg] = useState();
  useEffect(() => {
    setMainImg(firstImg);
  }, [Data]);

  console.log(thirdImg);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div id="fullSingle">
          <div className="MainImg">
            <div className="more">
              <div className="firstImg">
                <img
                  src={firstImg}
                  alt="tgh"
                  onClick={() => setMainImg(firstImg)}
                />
              </div>
              <div className="secondImg">
                <img
                  src={secondImg}
                  alt="gf"
                  onClick={() => setMainImg(secondImg)}
                />
              </div>
              <div className="thirdImg">
                <img
                  src={thirdImg}
                  alt="dfg"
                  onClick={() => setMainImg(thirdImg)}
                />
              </div>
            </div>
            <div className="img">
              <img src={MainImg} alt="" />
            </div>
          </div>
          <div className="details"></div>
        </div>
      )}
    </>
  );
};

export default SingleImage;
