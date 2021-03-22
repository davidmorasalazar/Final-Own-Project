import React, { useState, useContext, useEffect } from "react";
import { Card, Container, CardDeck, Button, Col, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Cats = () => {
	const { store, actions } = useContext(Context);
	const [searchItem, setSearch] = useState();
	console.log(store.pets.pet);
	useEffect(() => {
		actions.loadDogs();
		// setLoading(false);
	}, []);

	return (
		<Container>
			<h1 className="text-center mt-5">Gatitos</h1>
			{/* <Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={actions.search} />
				<Button variant="outline-dark">Search</Button>
			</Form> */}
			{/* {store.pets.pet ? (
				""
			) : ( */}
			<CardDeck className="margenes">
				{store.pets.map((pets, i) => {
					return (
						<>
							{pets.pet == "gato" ? (
								<Col className="mt-5 mb-10" md={4} key={i}>
									<Card className="shadow" style={{ width: "18rem" }}>
										<Card.Img variant="top" src={pets.imageURL} style={{ height: "18rem" }} />
										<Card.Body>
											<Card.Title className="text-center">{pets.pet_name}</Card.Title>
											<Card.Text>
												<p>
													<strong>Sexo: </strong>
													<span>{pets.sexo}</span>
												</p>
												<p>
													<strong>Edad: </strong>
													<span>{pets.edad}</span>
												</p>
												<p>
													<strong>Ubicación: </strong>
													<span>{pets.province}</span>
												</p>
											</Card.Text>
											<ButtonToolbar
												className="justify-content-between"
												aria-label="Toolbar with Button groups">
												<Link to={`/dog/${i}`}>
													<Button variant="primary">Iniciar Adopción</Button>
												</Link>
											</ButtonToolbar>
										</Card.Body>
									</Card>
								</Col>
							) : (
								" "
							)}
						</>
					);
				})}
			</CardDeck>
			{/* )} */}
		</Container>
	);
};
