import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar border border-secondary rounded navbar-light  mb-3" style={{ background: "#e3f2fd" }}>
			{/* <Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link> */}
			<div className="m-auto">
				<Link to="/demo">
					<button className="btn">Formulario</button>
				</Link>
			</div>
			<div className="m-auto">
				<Link to="/dogs">
					<button className="btn">Perritos</button>
				</Link>
			</div>
			<div className="m-auto">
				<Link to="/demo">
					<button className="btn">Gatitos</button>
				</Link>
			</div>
		</nav>
	);
};
