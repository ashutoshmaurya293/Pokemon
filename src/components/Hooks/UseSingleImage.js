import axios from "axios";
import { useEffect, useState } from "react";

const UseSingleImage = (id) => {
    const [Data, setData] = useState()
    const [isLoading, setisLoading] = useState(true)
    const mainUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
  async function downloadePokemon() {
    const response = await axios.get(mainUrl);
    // console.log(mainUrl);
    setisLoading(false)
    setData(response)
  }
  useEffect(() => {
    downloadePokemon()
  }, [id])
  return {Data,isLoading}
};

export default UseSingleImage;
