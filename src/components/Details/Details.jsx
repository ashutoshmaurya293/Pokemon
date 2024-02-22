import React from "react";
import { useParams } from "react-router-dom";
import UseSingleImage from "../Hooks/UseSingleImage";
import SingleImage from "../singleImage/SingleImage";

const Details = () => {
  const { id } = useParams();
  const { Data } = UseSingleImage(id);
  // console.log(Data?.data);

  return <div>
    <SingleImage Data = {Data}/>
  </div>;
};

export default Details;
