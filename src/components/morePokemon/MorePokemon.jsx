import React from "react";
import Usefeath from "../Usefeath";
import Image from "../Image/Image";
import "./MorePokemon.css";
import { FaArrowRight } from "react-icons/fa";
import Loading from "../loader/Loading";

const MorePokemon = ({ type }) => {
  const { pokemonList, isLoading } = Usefeath(
    `https://pokeapi.co/api/v2/type/${type}`
  );
  //   console.log(pokemonList);
  const slicePokemon = pokemonList.slice(0, 8);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="similer">
            <h1>Similar type of pokemons</h1>
            <FaArrowRight />
          </div>
          <div className="pokemons">
            {slicePokemon.map((e) => {
              return (
                <Image
                  key={e.id}
                  img={e?.image}
                  name={e.name}
                  id={e.id}
                  type={e}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default MorePokemon;
