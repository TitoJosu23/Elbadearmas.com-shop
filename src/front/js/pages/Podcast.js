import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/Podcast.css";

export const Podcast = () => {
  return (
    <div className="podcast-container">
      <h3>La Empresa</h3>
      <img src="https://img1.wsimg.com/isteam/stock/DxeZmJo/:/rs=w:600,h:300,cg:true,m"></img>
    </div>
  );
};
