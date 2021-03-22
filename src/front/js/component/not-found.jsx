import React from "react";
import { Link } from "react-router-dom";
import perro from "../../img/perro.png";

export function NotFound() {
	return (
		<div className="container">
			<div className="row d-flex">
				<div className="col">
					<h1 className="not-found text-center">404</h1>
					<h1 className="text-center">La Página no funciona</h1>
				</div>
				<div className="col d-flex justify-content-center">
					<img src={perro} alt="" className="" style={{ width: "300px" }} />
				</div>
			</div>
			<div className="row">
				<div className="col-md">
					<p className="text-center">
						Ir a <Link to="/">pagina principal</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
