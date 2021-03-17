import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context } from "./store/appContext";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { SignUp } from "./pages/sign-up.jsx"; //Include SignUp

import { Navbarcentral } from "./component/navbarcentral";
import { Navbar } from "./component/navbar";

import { Dogs } from "./component/dogs";
import { Dog } from "./pages/dog";
import { Cats } from "./component/cats";
import { Cat } from "./pages/cat";
import { FooterCentral } from "./component/footercentral";
import { LogIn } from "./pages/log-in.jsx";
import { FormAdop } from "./component/formAdop";
import { AboutUs } from "./component/aboutus";
import { NotFound } from "./component/not-found.jsx";

//include PrivateRoute
import { PrivateRoute } from "./routers/private-route";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);
	const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	actions.loadDogs();

	// 	setLoading(false);
	// }, []);

	return (

		<div className="d-flex flex-column h-100 ">

			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbarcentral />
					<Navbar />

					<Switch>
						<Route exact path="/">
							<Home />
							<Experiences />
						</Route>

						<Route exact path="/dogs">
							<Dogs data={store.dogs} />
						</Route>
						<Route exact path="/dog/:id">
							<Dog data={store.dogs} />
						</Route>
						<Route exact path="/cats">
							<Cats data={store.cats} />
						</Route>
						<Route exact path="/cat/:id">
							<Cat data={store.cats} />
						</Route>
						<Route exact path="/sign-up">
							<SignUp />
						</Route>
						<Route exact path="/log-in">
							<LogIn />
						</Route>
						<Route exact path="/AboutUs">
							<AboutUs />
						</Route>
						<PrivateRoute exact path="/formulario" component={FormAdop} />
						<Route>
							<NotFound />
						</Route>
					</Switch>
					<FooterCentral />

				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
