import axios from "axios";
import React from "react";
import Usefeath from "../Usefeath";

const MorePokemon = ({type}) => {
  const { pokemonList } = Usefeath(`https://pokeapi.co/api/v2/type/${type}`);
//   console.log(pokemonList);
  const a = pokemonList.slice(0,8)
  console.log(a);
  return <div>MorePokemon</div>;
};

export default MorePokemon;
