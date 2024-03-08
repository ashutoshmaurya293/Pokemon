import React from "react";
import "./GoHome.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";

const GoHome = () => {
  return (
    <div id="home">
      <Link to={"/"}>
        <FaArrowLeft id="icon" />
      </Link>
    </div>
  );
};

export default GoHome;
