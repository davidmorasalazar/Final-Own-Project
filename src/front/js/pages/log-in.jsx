import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export function LogIn() {
	const [user_name, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [redirect, setRedirect] = useState(false);

	const { store, actions } = useContext(Context);

	const handleSubmit = e => {
		e.preventDefault();
		if (user_name === "" || password === "") {
			alert("Please fill all the entries");
		}

		// FETCH
		const data = {
			password: password,
			user_name: user_name
		};

		fetch("https://3001-emerald-catfish-fwavhd5r.ws-us03.gitpod.io/log-in/", {
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
				sessionStorage.setItem("user_token", data.token);
				sessionStorage.setItem("is_logged", "true");
				actions.loggedIn();
				console.log("Succesful log in");
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<div className="container alto mt-3">
			<div className="row">
				<div className="col-md">
					<h1 className="font text-center mb-0 mt-3">Log in</h1>
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
								placeholder="User name"
								required
								onChange={e => setUser(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-row my-2">
						<div className="col-md">
							<input
								type="password"
								className="form-control form-control-lg"
								placeholder="Password"
								required
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<div className="submit-row my-2 d-flex justify-content-end">
						<button type="submit" className="btn btn-primary mr-1">
							Log In
						</button>
						<button type="reset" className="btn btn-danger ml-1">
							Cancel
						</button>
					</div>
				</form>
			</div>
			<div className="row mt-3">
				<div className="col-md">
					<p className="text-center">
						Do not have an account? <Link to="/sign-up/">Sign up</Link>
					</p>
				</div>
			</div>
			{redirect ? <Redirect to="/" /> : ""}
		</div>
	);
}
