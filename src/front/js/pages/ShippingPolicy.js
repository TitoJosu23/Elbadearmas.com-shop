import React from "react";
import "../../styles/ShippingPolicy.css";

export const ShippingPolicy = () => {
	return (
		<>
        <div className="container-sp">
            <div class="sp-1">
		        <h2>ShippingPolicy</h2>
            </div>
            <div className="to-line"></div>
            <div class="sp-2">
                <h4>SHIPPING</h4>
            </div>
            <div className="sp-3">
                <p className="DeleteM-sp">U.S. orders over $150 are FREE. </p>
                <p className="DeleteM-sp">Orders are processed and shipped in the order they are received. Shipping charges are nonrefundable.</p>
                <p className="DeleteM-sp">Orders under $150 is pay for the client. </p>
            </div>
        </div>
		</>
	);
};
