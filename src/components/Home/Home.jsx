import React, { useState } from "react";
import Input from "../input/Input";
import Pokemon from "../pokemon/Pokemon";
import Details from "../Details/Details";

const Home = () => {
  const [search, setsearch] = useState("");

  return (
    <div>
      <Input setsearch={setsearch} />
      {(!search)? <Pokemon /> : <Details key={search} pokemonName = {search}/>}
    </div>
  );
};

export default Home;
