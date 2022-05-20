import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

export const Footer = () => (
	<footer className="text-center footer">
		<div className="container-footer">
			<Link to="/PrivacyPolicy">Política de privacidad</Link>
			<Link to="/TermsConditions">Términos y condiciones</Link>
			<Link to="/ReturnPolicy">ReturnPolicy</Link>
			<Link to="/ShippingPolicy">Shipping Policy</Link>
		</div> 
</footer> 
);
