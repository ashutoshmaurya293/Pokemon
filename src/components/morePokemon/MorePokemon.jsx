import React from "react";
import Usefeath from "../Usefeath";
import Image from "../Image/Image";
import "./MorePokemon.css";

const MorePokemon = ({ type }) => {
  const { pokemonList } = Usefeath(`https://pokeapi.co/api/v2/type/${type}`);
  //   console.log(pokemonList);
  const slicePokemon = pokemonList.slice(0, 8);
  return (
    <>
      <h1>Similar type of pokemons</h1><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="arrow"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>

      <div className="pokemons">
        {slicePokemon.map((e) => {
          return (
            <Image key={e.id} img={e?.image} name={e.name} id={e.id} type={e} />
          );
        })}
      </div>
    </>
  );
};

export default MorePokemon;
