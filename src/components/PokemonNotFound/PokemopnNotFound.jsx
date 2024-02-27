import React from 'react'
import "./PokemopnNotFound.css"
import { Link } from "react-router-dom"; // Import Link for navigation

const PokemopnNotFound = ({setsearch,search}) => {
  return (
    <div className='container'>
      <h1 className='heading'>404 - Page Not Found</h1>
      <p className='text'>
        Oops! {search} is not found in our list.
      </p>
      <p className='text'>
        Let's get you back on track. You can either go back to the{" "}
        <Link to="/"className='link' onClick={()=>setsearch()}>
          homepage
        </Link>{" "}
        or search more pokemon.
      </p>
    </div>
  );
};

export default PokemopnNotFound