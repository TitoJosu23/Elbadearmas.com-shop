import React from "react";

import "../../styles/CarouselTienda.css";

export const CarouselTienda = () => {
	return (
		<div className="carousel-row">
            <div>
			    <h3 className="text-left">Tienda</h3>
                    <div></div>
            </div>
            <div className="card">
            <img className="card-img-top CT-img" src="https://via.placeholder.com/400x400" alt="Card image cap" />
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
		</div>
        </div>
	); 
};
