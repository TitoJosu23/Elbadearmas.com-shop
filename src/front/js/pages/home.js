import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div className="container-home">
				<div className="img-part">
					<img src="https://i.redd.it/52f61nfzmwl51.jpg" className="img-home"></img>
					<div></div>
					<h2 className="tittle-in-img">Elba de Armas</h2>
				</div>
				<div className="welcome-home">
					<h2>¡Bienvenidos!</h2>
					<p>Hola, Soy Elba y me encantan que estes aquí espero que disfrutes de mi contenido y todo lo que tengo para ofrecerte  ¡Besos!  </p>
				</div>
			</div>
		</div>
	); 
};
