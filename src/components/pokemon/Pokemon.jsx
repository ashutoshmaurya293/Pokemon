import React from 'react'
import Usefeath from '../Usefeath';
import Image from '../Image/Image';
import Loading from '../loader/Loading';
import "./Pokemon.css"

const Pokemon = () => {
    
    const {pokemonList,isLoading} = Usefeath()
  return (
   <>
   {isLoading?(
    <Loading/>
   ):(
    <div className='pokemons'>
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