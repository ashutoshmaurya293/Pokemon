import React from "react";
import { useParams } from "react-router-dom";
import UseSingleImage from "../Hooks/UseSingleImage";
import SingleImage from "../singleImage/SingleImage";
import PokemopnNotFound from "../PokemonNotFound/PokemopnNotFound";

<<<<<<< HEAD
const Details = ({ pokemonName }) => {
  const mainName = pokemonName?.toLowerCase();
  const { id } = useParams();
  const { Data, isLoading, DataNotFound } = UseSingleImage(id, mainName);
  return (
    <div>
      {DataNotFound ? (
        <PokemopnNotFound />
      ) : (
        <SingleImage Data={Data} isLoading={isLoading} />
      )}
    </div>
  );
=======
const Details = ({pokemonName}) => {
  const mainName = pokemonName.toLowerCase()
  const { id } = useParams();
  const { Data,isLoading } = UseSingleImage(id,mainName);
  return <div>
    <SingleImage Data = {Data} isLoading={isLoading}/>
  </div>;
>>>>>>> 869f70e20f726155578e5ac0f9becf480f897952
};

export default Details;
