import { Image, Video, Transformation, CloudinaryContext } from "cloudinary-react";
import React, { Component, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
export const FormAdop = () => {
	const [user_name, setUser] = useState("");
	const [pet_name, setUserlastname] = useState("");
	const [fundation_name, setFundation] = useState("");
	const [phone_number, setPhone] = useState("");
	const [description, setDescription] = useState("");
	const [tamaño, setTamaño] = useState("");
	const [sexo, setSexo] = useState("");
	const [temperamento, setTemperamento] = useState("");
	const [edad, setEdad] = useState("");
	const [province, setProvince] = useState("");
	// const [cat, setCat] = useState("");
	const [pet, setPet] = useState("perro");
	const [vacunas, setVacunas] = useState(false);
	const [redirect, setRedirect] = useState(false);
	// Estados de las fotos
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = event => {
		setSelectedFile(event.target.files[0]);
	};
	const history = useHistory();
	// Alertas
	const handleSubmit = e => {
		e.preventDefault();
		console.log(pet, vacunas);
		const formData = new FormData();
		formData.append("file", selectedFile);
		formData.append("upload_preset", "ekn3qqlw");
		// let vacunasstring = "No";
		// //Validating empty fields
		// if (vacunas === true) {
		// 	vacunasstring = "Si";
		// }
		if (
			user_name === "" ||
			fundation_name === "" ||
			pet_name === "" ||
			description === "" ||
			phone_number === "" ||
			tamaño === "" ||
			sexo === "" ||
			temperamento === "" ||
			edad === "" ||
			// cat === "" ||
			// dog === "" ||
			phone_number === "" ||
			province === "Province"
		) {
			alert("Please fill all the entries");
		}
		// if (cat === "" && dog === "") {
		// 	alert("Please fill all the entries");
		// }
		// Creating body
		fetch("https://api.cloudinary.com/v1_1/davidmorasalazar/upload", { method: "POST", body: formData })
			.then(res => res.json())
			.then(res => {
				const data = {
					user_name: user_name,
					fundation_name: fundation_name,
					pet_name: pet_name,
					description: description,
					tamaño: tamaño,
					sexo: sexo,
					temperamento: temperamento,
					// cat: cat,
					pet: pet,
					edad: edad,
					phone_number: phone_number,
					province: province,
					vacunas: vacunas,
					imageURL: res.url
				};
				//FETCH POST method
				fetch("https://3001-blue-cattle-jgnu48gm.ws-us03.gitpod.io/pets", {
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
							response.text().then(text => alert(text));
							history.push(data.pet == "perro" ? "/dogs" : "/cats");
						}
						return response.json();
					})
					.then(data => {
						console.log("User registered an animal");
					})
					.catch(error => {
						console.error("Error:", error);
					});
			});
	};
	return (
		<body
			style={{
				backgroundImage: `url(https://ak.picdn.net/shutterstock/videos/17178685/thumb/1.jpg)`
			}}>
			<div className="container my-3">
				<div className="row">
					<div className="col-md">
						<h1 className="font text-center mb-0 mt-3" style={{ color: "black" }}>
							Registrar mascota
						</h1>
					</div>
				</div>
				<div className="text-center d-flex justify-content-center align-items-center ">
					<form className="rounded shadow px-2" style={{ width: "600px" }} onSubmit={e => handleSubmit(e)}>
						<div className="form-row my-2">
							<div className="col-md ">
								<div className="custom-file">
									<input type="file" className="custom-file-input" onChange={changeHandler} />
									<label
										className="custom-file-label"
										aria-describedby="inputGroupFileAddon02"
										onChange={handleSubmit}>
										Foto de la mascota
									</label>
								</div>
							</div>
						</div>
						<div className="form-row my-2">
							<div className="col-md ">
								<input
									type="text"
									className="form-control form-control-lg"
									placeholder="Nombre completo"
									required
									onChange={e => setUser(e.target.value)}
								/>
							</div>
						</div>
						<div className="form-row my-2">
							<div className="col-md">
								<input
									type="text"
									className="form-control form-control-lg"
									placeholder="Nombre de la mascota"
									required
									onChange={e => setUserlastname(e.target.value)}
								/>
							</div>
						</div>
						<div className="form-row my-2">
							<div className="col-md">
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
									type="number"
									className="form-control form-control-lg"
									placeholder="Número de teléfono"
									required
									onChange={e => setPhone(e.target.value)}
								/>
							</div>
						</div>
						<div className="form-row my-2">
							<div className="col-md">
								<div className="form-floating">
									<textarea
										className="form-control"
										placeholder="Descripción de la mascota"
										id="floatingTextarea2"
										style={{ height: "100px" }}
										required
										onChange={e => setDescription(e.target.value)}
									/>
								</div>
							</div>
						</div>
						<div className="form-row my-2">
							<div className="col-md">
								<div className="row">
									<div className="col">
										<input
											type="number"
											className="form-control"
											placeholder="Tamaño CM"
											onChange={e => setTamaño(e.target.value)}
										/>
									</div>
									<div className="col">
										<select
											className="form-control form-control-lg"
											onChange={e => setSexo(e.target.value)}>
											<option selected>Sexo</option>
											<option>Hembra</option>
											<option>Macho</option>
										</select>
									</div>
									<div className="col">
										<input
											type="text"
											className="form-control"
											placeholder="Temperamento"
											onChange={e => setTemperamento(e.target.value)}
										/>
									</div>
									<div className="col">
										<input
											type="number"
											className="form-control"
											placeholder="Edad Meses"
											onChange={e => setEdad(e.target.value)}
										/>
									</div>
								</div>
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
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio1"
									value="perro"
									checked={pet === "perro" ? true : false}
									onClick={e => setPet(e.target.value)}
								/>
								<label
									className="form-check-label"
									htmlForm="inlineRadio1"
									// onChange={e => setDog(e.target.value)}
								>
									Perro
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio2"
									value="gato"
									checked={pet === "perro" ? false : true}
									onClick={e => setPet(e.target.value)}
								/>
								<label
									className="form-check-label"
									htmlForm="inlineRadio2"
									// onChange={e => setCat(e.target.value)}
								>
									Gato
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox1"
									value="option1"
									checked={vacunas}
									onClick={e => setVacunas(!vacunas)}
								/>
								<label
									className="form-check-label"
									htmlhtmlForm="inlineCheckbox1"
									// checked={e => setVacunas(e.target.checked)}
								>
									Vacunas al día
								</label>
							</div>
							{/* <Link to={`/dogs/`}> */}
							<button type="submit" className="btn btn-primary mr-1">
								Enviar información
							</button>
							{/* </Link> */}
						</div>
					</form>
				</div>
			</div>
		</body>
	);
};
