import React from "react";

import CardT from "../../styles/CardT.css";

export const CardT = () => {
  return (
    <div className="card-carousel">
      <img
        className="card-img-top"
        src="https://img1.wsimg.com/isteam/ip/dec62967-41b1-4326-9140-9f7297fee5d8/ols/PhotoRoom-20210820_184515.png/:/rs=w:1200,h:1200/:/rs=w:480,cg:true,m"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};
