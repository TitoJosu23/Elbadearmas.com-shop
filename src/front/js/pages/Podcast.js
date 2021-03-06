import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/Podcast.css";

export const Podcast = () => {
  return (
    <div className="podcast-container">
      <h3>La Empresa</h3>
      <div className="center-div-podcast">
        <div className="podcast-img-1">
          <img src="https://img1.wsimg.com/isteam/stock/DxeZmJo/:/rs=w:600,h:300,cg:true,m"></img>
        </div>
        <div className="text-1">
          <h3>Nuestro equipo</h3>
          <p>
            Cuéntales a las personas acerca de tus profesionales informáticos de
            alto nivel.
          </p>
        </div>
      </div>
    </div>
  );
};
