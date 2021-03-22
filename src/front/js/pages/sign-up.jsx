import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

export function SignUp() {
	const [user_name, setUser] = useState("");
	const [fundation_name, setFundation] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone_number, setPhone] = useState("");
	const [province, setProvince] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		//Validating empty fields
		if (
			user_name === "" ||
			fundation_name === "" ||
			email === "" ||
			password === "" ||
			phone_number === "" ||
			province === "Province"
		) {
			alert("Please fill all the entries");
		}

		// Creating body
		const data = {
			user_name: user_name,
			fundation_name: fundation_name,
			email: email,
			password: password,
			phone_number: phone_number,
			province: province
		};

		//FETCH POST method
		fetch("https://3001-blue-cattle-jgnu48gm.ws-us03.gitpod.io/sign-up/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => {
				if (!response.ok) {
					response.text().then(text => alert(text));
					throw Error(response.statusText);
				} else {
					setRedirect(true);
				}
				return response.json();
			})
			.then(data => {
				console.log("New user was registered");
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<div className="container my-3">
			<div className="row">
				<div className="col-md">
					<h1 className="font text-center mb-0 mt-3">Registrarse</h1>
				</div>
			</div>
			<hr />
			<div className="text-center d-flex justify-content-center align-items-center ">
				<form className="rounded shadow px-2" style={{ width: "400px" }} onSubmit={e => handleSubmit(e)}>
					<div className="form-row my-2">
						<div className="col-md ">
							<input
								type="text"
								className="form-control form-control-lg"
								placeholder="Nombre de la Fundación"
								required
								onChange={e => setFundation(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-row my-2">
						<div className="col-md">
							<input
								type="text"
								className="form-control form-control-lg"
								placeholder="Usuario"
								required
								onChange={e => setUser(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-row my-2">
						<div className="col-md">
							<input
								type="email"
								className="form-control form-control-lg"
								placeholder="Email"
								required
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-row my-2">
						<div className="col-md">
							<input
								type="text"
								className="form-control form-control-lg"
								placeholder="Número de teléfono"
								required
								onChange={e => setPhone(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-row my-2">
						<div className="col-md">
							<input
								type="password"
								className="form-control form-control-lg"
								placeholder="Contraseña"
								required
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-row my-2">
						<div className="col-md">
							<select
								className="form-control form-control-lg"
								onChange={e => setProvince(e.target.value)}>
								<option selected>Provincia</option>
								<option>Limón</option>
								<option>Cartago</option>
								<option>Heredia</option>
								<option>San José</option>
								<option>Alajuela</option>
								<option>Puntarenas</option>
								<option>Guanacaste</option>
							</select>
						</div>
					</div>
					<div className="submit-row my-2 d-flex justify-content-end">
						<button type="submit" className="btn btn-primary mr-1">
							Registrarse
						</button>
						<button type="reset" className="btn btn-danger ml-1">
							Cancelar
						</button>
					</div>
				</form>
			</div>
			<div className="row mt-3">
				<div className="col-md">
					<p className="text-center">
						¿Ya tiene una cuenta? <Link to="/log-in">Ingresar</Link>
					</p>
				</div>
			</div>
			{redirect ? <Redirect to="/log-in" /> : ""}
		</div>
	);
}
