import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Experiences = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Carousel className="carousel1">
				<Carousel.Item rounded>
					<Link to="/characters">
						<img
							className="d-block w-100"
							src="https://images4.alphacoders.com/673/thumb-1920-673740.jpg"
							alt="Characters"
							rounded
						/>
						<Carousel.Caption>
							<h3>Characters</h3>
							<p>Find Your Favorites Star Wars Characters</p>
						</Carousel.Caption>
					</Link>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/planetsView">
						<img
							className="d-block w-100"
							src="https://i.pinimg.com/originals/a7/95/96/a79596bdf26a00f6eda7e9e4d10c1e6c.jpg"
							alt="planets"
						/>
						<Carousel.Caption>
							<h3>Planets</h3>
							<p>Have a Look at The Names of The Planets</p>
						</Carousel.Caption>
					</Link>
				</Carousel.Item>
				<Carousel.Item>
					<Link to="/characters">
						<img
							className="d-block w-100"
							src="https://images4.alphacoders.com/673/thumb-1920-673740.jpg"
							alt="Characters"
						/>
						<Carousel.Caption>
							<h3>Characters</h3>
							<p>Find Your Favorites Star Wars Characters</p>
						</Carousel.Caption>
					</Link>
				</Carousel.Item>
				<Carousel.Item>
					<Link to="/characters">
						<img
							className="d-block w-100"
							src="https://images4.alphacoders.com/673/thumb-1920-673740.jpg"
							alt="Characters"
						/>
						<Carousel.Caption>
							<h3>Characters</h3>
							<p>Find Your Favorites Star Wars Characters</p>
						</Carousel.Caption>
					</Link>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};
