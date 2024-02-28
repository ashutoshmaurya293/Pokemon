import React from "react";
import Usefeath from "../Usefeath";
import Image from "../Image/Image";

const MorePokemon = ({ type }) => {
  const { pokemonList } = Usefeath(`https://pokeapi.co/api/v2/type/${type}`);
  //   console.log(pokemonList);
  const a = pokemonList.slice(0, 8);
  console.log(a);
  return (
    <div className="pokemons">
      {a.map((e) => {
        return (
          <Image key={e.id} img={e?.image} name={e.name} id={e.id} type={e} />
        );
      })}
    </div>
  );
};

export default MorePokemon;
