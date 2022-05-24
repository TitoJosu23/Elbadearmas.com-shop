import React from "react";

import "../../styles/CarouselTienda.css";

export const CarouselTienda = () => {
  return (
    <div className="carousel-row">
      <div>
        <h3 className="text-left">Tienda</h3>
        <div></div>
      </div>
      {/* este es la carta */}
      <div className="card-group">
        <div className="card card-carousel">
          <img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card card-carousel">
          <img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card card-carousel">
          <img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
