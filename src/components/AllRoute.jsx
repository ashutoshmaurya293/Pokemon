import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Details from "./Details/Details";
import Home from "./Home/Home";

const AllRoute = () => {
  return <div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
    </Routes>
  </div>;
};

export default AllRoute;
