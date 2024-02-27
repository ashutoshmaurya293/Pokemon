import React, { useEffect, useState } from "react";
import "./SingleImage.css";
import Loading from "../loader/Loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import MorePokemon from "../morePokemon/MorePokemon";

const SingleImage = ({ Data, isLoading }) => {
  let firstImg = Data?.data?.sprites?.other?.home?.front_default;
  let secondImg = Data?.data?.sprites?.other?.dream_world?.front_default;
  let thirdImg = Data?.data?.sprites?.other?.home?.front_shiny;
  const [MainImg, setMainImg] = useState();
  // console.log(Data?.data);
  useEffect(() => {
    setMainImg(firstImg);
  }, [Data]);
  // console.log(isLoading);

  // console.log(Data?.data);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
    <>
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
              <img src={MainImg} />
            </div>
          </div>
          <div className="details">
            <div className="mainDetails">
              <h2>
                Name - <span className="color">{Data?.data.species.name}</span>
              </h2>
              <hr />
              <h3>
                Type -{" "}
                <span className="color">
                  {Data?.data.types[0].type?.name},{" "}
                  {Data?.data.types[1]?.type.name}
                </span>
              </h3>
              <p>
                Weight -<span className="color">{Data?.data.weight}</span>
              </p>
              <p>
                Height -<span className="color">{Data?.data.height}</span>
              </p>
            </div>
          </div>
        </div>
        <MorePokemon type = {Data?.data.types[0].type?.name}/>
    </>
      )}
    </>
  );
};

export default SingleImage;
