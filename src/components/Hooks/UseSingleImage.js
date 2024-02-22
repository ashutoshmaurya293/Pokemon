import axios from "axios";
import { useEffect, useState } from "react";

const UseSingleImage = (id) => {
    const [Data, setData] = useState()
    const mainUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
  async function downloadePokemon() {
    const response = await axios.get(mainUrl);
    // console.log(mainUrl);
    setData(response)
  }
  useEffect(() => {
    downloadePokemon()
  }, [id])
  return {Data}
};

export default UseSingleImage;
