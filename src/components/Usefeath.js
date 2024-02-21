import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Usefeath = (url) => {
    const [pokemonList, setpokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [NexrUrl, setNexrUrl] = useState()
    async function downloadePokemon() {
        setIsLoading(true)
      const response = await axios.get(url);
      // console.log(response.data.next);
      setNexrUrl(response.data.next)
      const pokemonResult = response.data.results;
      // console.log(pokemonResult);
      const pokemonResultPromise = pokemonResult.map((pokemon) =>
        axios.get(pokemon.url)
      );
      const pokemonData = await axios.all(pokemonResultPromise);
        const res = pokemonData.map((pokeData) => {
          const pokemon = pokeData.data;
        //   console.log(pokemon);
          return {
            id:pokemon.id,
            name: pokemon.name,
            image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front.shine,
            types: pokemon.types              
          }
          })
          // console.log(res);
          setpokemonList(res)
      setIsLoading(false);
      // console.log(pokemonData);
    }
    useEffect(() => {
      downloadePokemon();
    }, [url]);
    return {
        pokemonList,isLoading,NexrUrl
    }
}

export default Usefeath