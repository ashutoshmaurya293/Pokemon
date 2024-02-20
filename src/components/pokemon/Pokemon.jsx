import React from 'react'
import Usefeath from '../Usefeath';
import axios from 'axios';
import Image from '../Image/Image';
import Loading from '../loader/Loading';

const Pokemon = () => {
    
    const {pokemonList,isLoading} = Usefeath()
  return (
   <>
   {isLoading?(
    <Loading/>
   ):(
    <div>
    {pokemonList.map((e)=>{;
      return(
        <Image key={e.id} img={e?.image} name = {e.name}/> 
      )
    })}
  </div>
   )}
   </>
  )
}

export default Pokemon