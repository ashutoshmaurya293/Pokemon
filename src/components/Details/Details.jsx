import React from "react";
import { useParams } from "react-router-dom";
import UseSingleImage from "../Hooks/UseSingleImage";
import SingleImage from "../singleImage/SingleImage";

const Details = ({pokemonName}) => {
  const mainName = pokemonName.toLowerCase()
  const { id } = useParams();
  const { Data,isLoading } = UseSingleImage(id,mainName);
  return <div>
    <SingleImage Data = {Data} isLoading={isLoading}/>
  </div>;
};

export default Details;
