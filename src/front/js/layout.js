import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context } from "./store/appContext";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { SignUp } from "./pages/sign-up.jsx"; //Include SignUp

import { Navbarcentral } from "./component/navbarcentral";
import { Navbar } from "./component/navbar";
import { Experiences } from "./pages/footer";
import { Dogs } from "./component/dogs";
import { Dog } from "./pages/dog";
import { FooterCentral } from "./component/footercentral";
import { LogIn } from "./pages/log-in.jsx";
import { FormAdop } from "./component/formAdop";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		actions.loadDogs();

		setLoading(false);
	}, []);

	return (
		<div className="d-flex flex-column h-100 ">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbarcentral />
					<Switch>
						<Route exact path="/">
							<Navbar />
							<Home />
							<Experiences />
						</Route>
						{/* <Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route> */}
						<Route exact path="/dogs">
							<Dogs data={store.dogs} />
						</Route>
						<Route exact path="/dog/:id">
							<Dog data={store.dogs} />
						</Route>
						<Route exact path="/sign-up">
							<SignUp />
						</Route>
						<Route exact path="/log-in">
							<LogIn />
						</Route>
						<Route exact path="/formulario">
							<FormAdop />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<FooterCentral />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
