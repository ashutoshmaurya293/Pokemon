import React from "react";
import { useParams } from "react-router-dom";
import UseSingleImage from "../Hooks/UseSingleImage";
import SingleImage from "../singleImage/SingleImage";
import PokemopnNotFound from "../PokemonNotFound/PokemopnNotFound";

const Details = ({ pokemonName,setsearch,search }) => {
  const mainName = pokemonName?.toLowerCase();
  const { id } = useParams();
  const { Data, isLoading, DataNotFound } = UseSingleImage(id, mainName);
  return (
    <div>
      {DataNotFound ? (
        <PokemopnNotFound setsearch ={setsearch} search={search}/>
      ) : (
        <SingleImage Data={Data} isLoading={isLoading} />
      )}
    </div>
  );
};

export default Details;
