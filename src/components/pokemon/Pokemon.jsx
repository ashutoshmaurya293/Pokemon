import React from 'react'
import Usefeath from '../Usefeath';
import Image from '../Image/Image';
import Loading from '../loader/Loading';
import "./Pokemon.css"
import Button from '../buttons/Button';

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
   <div className="buttons">
   <Button button={false}/>
   <Button button={true}/>
   </div>
   </>
  )
}

export default Pokemon