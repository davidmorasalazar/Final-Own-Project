import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar border-top shadow-sm  navbar-light  mb-3" style={{ background: "#e3f2fd" }}>
			<div className="m-auto">
				<Link to="/formulario">
					<button className="btn">Registrar mascota</button>
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
