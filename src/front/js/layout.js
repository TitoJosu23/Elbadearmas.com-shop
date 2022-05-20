import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Podcast } from "./pages/Podcast";
import { Tienda } from "./pages/Tienda";
import { Single } from "./pages/single";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";
import { ReturnPolicy } from "./pages/ReturnPolicy";
import { ShippingPolicy } from "./pages/ShippingPolicy";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/podcast">
							<Podcast />
						</Route>
						<Route exact path="/tienda">
							<Tienda />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/privacypolicy">
							<PrivacyPolicy />
						</Route>
						<Route exact path="/TermsConditions">
							<TermsConditions />
						</Route>
						<Route exact path="/ReturnPolicy">
							<ReturnPolicy />
						</Route>
						<Route exact path="/ShippingPolicy">
							<ShippingPolicy />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
