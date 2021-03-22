import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
	var loggedIn = sessionStorage.getItem("is_logged");

	return <Route {...rest}>{loggedIn != "true" ? <Redirect to="/log-in" /> : <Component />}</Route>;
};

PrivateRoute.propTypes = {
	component: PropTypes.func
};
