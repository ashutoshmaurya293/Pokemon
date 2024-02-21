import React, { useState } from "react";
import Usefeath from "../Usefeath";
import Image from "../Image/Image";
import Loading from "../loader/Loading";
import "./Pokemon.css";
import Button from "../buttons/Button";

const Pokemon = () => {
  const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon");
  const { pokemonList, isLoading, NexrUrl } = Usefeath(url);
  // console.log(url);
  function change(e){
    console.log(NexrUrl);
  if(e=="next"){
    seturl(NexrUrl)
    console.log(url);
  }
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="pokemons">
          {pokemonList.map((e) => {
            return <Image key={e.id} img={e?.image} name={e.name} />;
          })}
        </div>
      )}
      <div className="buttons" onClick={(e)=>change(e.target.value)}>
        <Button button={false} value = "adsf"/>
        <Button button={true} />
      </div>
    </>
  );
};

export default Pokemon;
