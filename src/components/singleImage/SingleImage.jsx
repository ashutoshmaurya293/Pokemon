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

  // console.log(Data.Data?.data);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div id="fullSingle">
          <div className="MainImg">
            <div className="more">
              <div
                className={MainImg == firstImg ? "firstImg border" : "firstImg"}
              >
                <img
                  src={firstImg}
                  alt=""
                  onClick={() => setMainImg(firstImg)}
                />
              </div>
              <div
                className={
                  MainImg == secondImg ? "secondImg border" : "secondImg"
                }
              >
                <img
                  src={secondImg}
                  alt=""
                  onClick={() => setMainImg(secondImg)}
                />
              </div>
              <div
                className={MainImg == thirdImg ? "thirdImg border" : "thirdImg"}
              >
                <img
                  src={thirdImg}
                  alt=""
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
