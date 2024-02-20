import React from 'react'
import Usefeath from '../Usefeath';
import axios from 'axios';
import Image from '../Image/Image';

const Pokemon = () => {
    
    const {pokemonList} = Usefeath()
    
  return (
    <div>
      {/* <Image img={pokemonList.Image}/> */}
      {pokemonList.map((e)=>{;
        return(
          <Image key={e.id} img={e?.image} name = {e.name}/> 
        )
      })}
    </div>
  )
}

export default Pokemon