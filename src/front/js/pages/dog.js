
import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Table, Media, Container, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function Dog(props) {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const intId = parseInt(id);
	const history = useHistory();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const goBack = () => {
		history.goBack();
	};
	return (
		<Container>
			<Media className="mt-5 margenes m-auto">
				{store.pets.map((each, i) => {

					if (i == intId) {
						return (
							<div key={i}>
								<Row>
									<Col responsive="md">

										<img
											width={400}
											height={300}
											className="align-self-center mr-3"
											src={each.imageURL}
											alt="Generic placeholder"
										/>
									</Col>
									<Col responsive="md">
										<Media.Body className="text-center">
											<h5>{each.pet_name}</h5>
											<p>{each.description}</p>
										</Media.Body>
									</Col>
								</Row>
								<Table responsive="md">
									<thead>
										<tr>
											<th>Nombre de la Fundación</th>
											<th>Sexo</th>
											<th>Edad</th>
											<th>Tamaño</th>
											<th>Ubicación</th>
											<th>Temperamento</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{each.fundation_name}</td>
											<td>{each.sexo}</td>
											<td>{each.edad}</td>
											<td>{each.tamaño}</td>
											<td>{each.province}</td>
											<td>{each.temperamento}</td>
										</tr>
									</tbody>
								</Table>
								<Button variant="dark" onClick={() => goBack()}>
									Volver

								</Button>
							</div>
						);
					}
				})}
			</Media>
		</Container>
	);
}

Dog.propTypes = {
	data: PropTypes.any
};
