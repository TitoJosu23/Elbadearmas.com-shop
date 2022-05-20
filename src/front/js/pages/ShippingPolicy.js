import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ShippingPolicy = () => {
	return (
		<>
        <div class="SP-1">
		    <h2>ShippingPolicy</h2>
        </div>
        <div class="SP-2">
            <h4>SHIPPING</h4>
        </div>
        <div className="SP-3">
            <p>U.S. orders over $150 are FREE. </p>
            <p>Orders are processed and shipped in the order they are received. Shipping charges are nonrefundable.</p>
            <p>Orders under $150 is pay for the client. </p>
        </div>
		</>
	);
};
