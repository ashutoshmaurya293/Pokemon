import React from "react";
import { useParams } from "react-router-dom";
import UseSingleImage from "../Hooks/UseSingleImage";
import SingleImage from "../singleImage/SingleImage";

const Details = ({pokemonName}) => {
  const { id } = useParams();
  const { Data,isLoading } = UseSingleImage(id,pokemonName);
  // console.log(Data?.data);

  return <div>
    <SingleImage Data = {Data} isLoading={isLoading}/>
  </div>;
};

export default Details;
