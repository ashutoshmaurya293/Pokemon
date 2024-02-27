import axios from "axios";
import { useEffect, useState } from "react";

const UseSingleImage = (id,pokemonName) => {
    const [Data, setData] = useState()
    const [DataNotFound, setDataNotFound] = useState(false)
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
    setDataNotFound(false)
   } catch (error) {
    console.log("something went Wrong");
<<<<<<< HEAD
    setDataNotFound(true)
=======
>>>>>>> 869f70e20f726155578e5ac0f9becf480f897952
   }
  }
  useEffect(() => {
    downloadePokemon()
  }, [id])
  return {Data,isLoading,DataNotFound}
};

export default UseSingleImage;
