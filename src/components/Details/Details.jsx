import React from "react";
import { useParams } from "react-router-dom";
import UseSingleImage from "../Hooks/UseSingleImage";
import SingleImage from "../singleImage/SingleImage";

const Details = () => {
  const { id } = useParams();
  const { Data } = UseSingleImage(id);
  console.log(Data?.data?.sprites?.other?.home?.front_default);

  return <div>
    <SingleImage/>
  </div>;
};

export default Details;
