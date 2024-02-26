import React from "react";
import "./Input.css";
import useDebounce from "../Hooks/useDebounce";

const Input = ({ setsearch }) => {
  const debounce = useDebounce((e)=>setsearch(e.target.value))
  return (
    <div className="fullInput">
      <div className="search">
        <input placeholder="Search..."
         type="text" 
         onChange={debounce}
         />
        <button type="submit">Search</button>
      </div>
    </div>
  );
};

export default Input;
