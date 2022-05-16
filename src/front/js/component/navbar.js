import React from "react";

import { Button } from 'react-bootstrap';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<img src="http://img1.wsimg.com/isteam/ip/dec62967-41b1-4326-9140-9f7297fee5d8/Logo%20con%20tipograf%C3%ADa%20circular%20para%20servici-0001.png/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100/qt=q:95"></img>
  <a className="navbar-brand" href="#">¿Quién soy?</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Podcast <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Tienda</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">E-Books</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Fit-Lab</a>
      </li>
	  <li className="nav-item">
        <a className="nav-link" href="#">Blog</a>
      </li>
	  <li className="nav-item">
        <a className="nav-link" href="#">Contacto</a>
      </li>
    </ul>
  </div>
</nav>
	);
};
