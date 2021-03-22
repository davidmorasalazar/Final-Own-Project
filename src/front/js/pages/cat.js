import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Table, Media, Container, Button, Image } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import "../../styles/index.scss";

export function Cat(props) {
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
		<Container className="mt-5">
			{store.pets.map((each, i) => {
				if (i == intId) {
					return (
						<div key={i} id="relative">
							<Row>
								<Col sm>
									<Image
										style={({ maxHeight: "370px" }, { maxWidth: "370px" })}
										className="align-self-center mr-3"
										src={each.imageURL}
										alt="Generic placeholder"
										rounded
									/>
								</Col>
								<Col sm>
									<Media.Body className="text-center">
										<h5>{each.pet_name}</h5>
										<p className="text-justify">{each.description}</p>
										<h5 className="text-left">Temperamento:</h5>
										<p>{each.temperamento}</p>
									</Media.Body>
								</Col>
							</Row>
							<Row className="mt-4">
								<Table responsive="md">
									<thead>
										<tr>
											<th>Nombre de la Fundación</th>
											<th>Sexo</th>
											<th>Edad</th>
											<th>Tamaño en CM</th>
											<th>Ubicación</th>
											<th>Vacunas</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{each.fundation_name}</td>
											<td>{each.sexo}</td>
											<td>{each.edad}</td>
											<td>{each.tamaño}</td>
											<td>{each.province}</td>
											{/* <td>{each.temperamento}</td> */}
											<td>{each.vacunas ? "Si" : "No"}</td>
										</tr>
									</tbody>
								</Table>
							</Row>
							<Row>
								<Button variant="dark" onClick={() => goBack()}>
									Volver
								</Button>
							</Row>
							<Row>
								<Col className="fixed-bottom">
									<WhatsAppWidget
										phoneNumber={each.phone_number}
										companyName={each.fundation_name}
										message="¡Buen día! 👋🏼        ¿Deseas más información de esta mascota?"
										textReplyTime="Típicamente responde en una hora"
										sendButton="Enviar"
									/>
								</Col>
							</Row>
						</div>
					);
				}
			})}
		</Container>
	);
}

Cat.propTypes = {
	data: PropTypes.any
};
