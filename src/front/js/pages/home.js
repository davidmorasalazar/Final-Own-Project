import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Carousel, Container, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Carousel className="carousel">
				<Carousel.Item rounded>
					<a href="https://www.pedigree.com/" target="_blank" rel="noreferrer">
						<img
							className="d-block w-100"
							src="https://www.elpublicista.info/wp-content/uploads/2018/06/Pedrigree.png"
							alt="Characters"
							rounded
						/>
						<Carousel.Caption>
							<h3>Characters</h3>
							<p>Find Your Favorites Star Wars Characters</p>
						</Carousel.Caption>
					</a>
				</Carousel.Item>

				<Carousel.Item>
					<a href="https://www.hillspet.co.cr/" target="_blank" rel="noreferrer">
						<img
							style={{ height: "500px" }}
							className="d-block w-100"
							src="https://www.hillspet.es/content/dam/cp-sites/hills/hills-pet/global/2020-homepage-redesign/hillspet-homepage-heropacklockup-packaged.png"
							alt="Characters"
							rounded
						/>
					</a>
				</Carousel.Item>
				<Carousel.Item>
					<a href="https://escuelacaninalatejera.es/" target="_blank" rel="noreferrer">
						<img
							style={{ height: "500px" }}
							className="d-block w-100"
							src="https://i.ytimg.com/vi/kTZjtPfDWmo/maxresdefault.jpg"
							alt="Characters"
							rounded
						/>
					</a>
				</Carousel.Item>
				<Carousel.Item>
					<a href="https://www.purina-latam.com/cam/cr" target="_blank" rel="noreferrer">
						<img
							style={{ height: "500px" }}
							className="d-block w-100"
							src="https://i.ytimg.com/vi/zthc86WuMAI/maxresdefault.jpg"
							alt="Characters"
							rounded
						/>
					</a>
				</Carousel.Item>
			</Carousel>
			<div className="flex-row d-flex justify-content-center">
				<div>
					<div className="card " style={{ marginTop: "30px" }}>
						<span className=" text-center p-3">Vive nuestras experiencias</span>
					</div>
				</div>
			</div>
			<Carousel className="carousel1">
				<Carousel.Item rounded>
					<img
						className="d-block w-100"
						src="https://3.bp.blogspot.com/--S8RvjDIcsY/UcJXV81oxzI/AAAAAAAAE_Y/-mYFSsRCjxY/s1600/Descargar+Pack+Fondos+de+Pantalla+Animales+en+HD+(396).jpg"
						alt="Characters"
						rounded
					/>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://www.mundoperros.es/wp-content/uploads/2017/07/perro-adoptado-830x553.jpg"
						alt="Characters"
						rounded
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://www.24horas.cl/incoming/article1112091.ece/ALTERNATES/w620h350/dozer.jpg"
						alt="Characters"
						rounded
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://media.cnnchile.com/sites/4/2020/12/20090.jpg"
						alt="Characters"
						rounded
					/>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};
