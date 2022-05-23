import React from "react";

import '../../styles/navbar.css';

import { Button } from 'react-bootstrap';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark navBG w-100 sticky ">
		<img src="http://img1.wsimg.com/isteam/ip/dec62967-41b1-4326-9140-9f7297fee5d8/Logo%20con%20tipograf%C3%ADa%20circular%20para%20servici-0001.png/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100/qt=q:95" className="navbar-img"></img>
  <a className="navbar-brand" href="/">¿Quién soy?</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/podcast">Podcast <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item text-light">
        <a className="nav-link" href="/tienda">Tienda</a>
      </li>
      <li className="nav-item text-light">
        <a className="nav-link" href="ebooks">E-Books</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="fitlab">Fit-Lab</a>
      </li>
	  <li className="nav-item">
        <a className="nav-link" href="blog">Blog</a>
      </li>
	  <li className="nav-item">
        <a className="nav-link" href="contacto">Contacto</a>
      </li>
    </ul>
    <div className="vertical-line">
    </div>
    <img src="https://www.shareicon.net/data/2016/11/14/852267_user_512x512.png" className="img-nav-user" />
    <img src="https://devinefitnessequipment.co.nz/wp-content/uploads/2021/09/istockphoto-1206806317-170667a.jpeg" className="img-nav-car" ></img>
  </div>
</nav>
	);
};
