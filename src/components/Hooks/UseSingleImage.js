import axios from "axios";
import { useEffect, useState } from "react";

const UseSingleImage = (id,pokemonName) => {
    const [Data, setData] = useState()
    const [isLoading, setisLoading] = useState(true)
  async function downloadePokemon() {
   try {
    let response;
    if(pokemonName){
      response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    }else{
      response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }
    setisLoading(false)
    setData(response)
   } catch (error) {
    console.log("something went wrong");
   }
  }
  useEffect(() => {
    downloadePokemon()
  }, [id])
  return {Data,isLoading}
};

export default UseSingleImage;
