import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
export const Navbar = () => {
	return (
		<nav className="navbar border-top shadow-sm  navbar-light  mb-3" style={{ background: "#e3f2fd" }}>
			<div className="m-auto">
				<Link to="/formulario">
					<Button className="btn" variant="outline-primary">
						Registrar mascota
					</Button>{" "}
				</Link>
			</div>
			<div className="m-auto">
				<Link to="/dogs">
					<Button className="btn" variant="outline-primary">
						Perros
					</Button>
				</Link>
			</div>
			<div className="m-auto">
				<Link to="/cats">
					<Button className="btn" variant="outline-primary">
						Gatos
					</Button>
				</Link>
			</div>
			<div className="m-auto">
				<Link to="/AboutUs">
					<Button className="btn" variant="outline-primary">
						¿Quiénes Somos?
					</Button>
				</Link>
			</div>
		</nav>
	);
};
