import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Carousel, Container, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/Luis-Larraburo.jpg";
import logo1 from "../../img/Luis-Alvarado1.jpg";
import logo2 from "../../img/David-Mora.jpg";
import logo3 from "../../img/Maca.jpg";
import logo4 from "../../img/Gato.jpg";
import logo5 from "../../img/FotoMax.jpg";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Carousel className="carousel">
				<Carousel.Item rounded>
					<a href="https://www.pedigree.com/" target="_blank" rel="noopener noreferrer">
						<img
							style={{ height: "500px" }}
							className="d-block w-100"
							src="https://www.elpublicista.info/wp-content/uploads/2018/06/Pedrigree.png"
							alt="Characters"
							rounded
						/>
					</a>
				</Carousel.Item>

				<Carousel.Item>
					<a href="https://www.hillspet.co.cr/" target="_blank" rel="noopener noreferrer">
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
					<a href="https://escuelacaninalatejera.es/" target="_blank" rel="noopener noreferrer">
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
					<a href="https://www.purina-latam.com/cam/cr" target="_blank" rel="noopener noreferrer">
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
			<Carousel className="carousel1" style={{ marginTop: "50px" }}>
				<Carousel.Item rounded>
					<div className="media">
						<div className="media-body">
							<h5 className="mt-0 mb-1">¡Máx es mi mejor amigo!</h5>
							Es un perro trabajador, todas las mañanas se despierta para ir a la finca a cumplir con sus
							labores…… sentarse y ver que todo se cumpla. Además de ser un gran amigo es un perro fiel
							que se ha ganado el cariño y respeto de toda la familia. Desque que lo ví en la fundación
							sabía que tenía que ser mío y estoy súper feliz de tenerlo en casa.
						</div>
						<img className="d-block w-50" src={logo5} alt="Generic placeholder image" />
					</div>
				</Carousel.Item>

				<Carousel.Item rounded>
					<div className="media">
						<div className="media-body">
							<h5 className="mt-0 mb-1">Linux mi gata programadora favorita.</h5>
							Linux es una gata rescatada que en un inicio fue desechada porque pensaban que era macho, la
							recogí y estaba apunto de quedar ciega, la cuidamos y tratamos. A pesar de que nadie de la
							familia lo quería se ganó el corazón de todos nosotros. Mantuvo nombre de macho para
							recordar su motivo de rescate y porque vive a mi lado cuando estoy programando.
						</div>
						<img className="d-block w-50" src={logo4} alt="Generic placeholder image" />
					</div>
				</Carousel.Item>

				<Carousel.Item rounded>
					<div className="media">
						<div className="media-body">
							<h5 className="mt-0 mb-1">Si seguía su madre en esas condiciones, Frida no nace.</h5>
							Frida es la hija de una perra rescatada desde un criadero de animales. Su madre se
							encontraba en pésimas condiciones con mastitis y un embarazo que no se veía buen final, si
							seguía a su madre en esas condiciones, Frida no nacería. Ella es una perra muy fiel y
							juguetona, no se separa de nosotras, necesita dormir apegada a las personas y jamás me deja
							sola en mis horas de teletrabajo.
						</div>
						<img className="d-block w-50" src={logo3} alt="Generic placeholder image" />
					</div>
				</Carousel.Item>

				<Carousel.Item>
					<div className="media">
						<div className="media-body">
							<h5 className="mt-0 mb-1">La gordita de la casa.</h5>
							Ella es mi perrita, ya no perrita, ahora no deja de jugar con todo lo que hay, para mí es
							medio de relajación cuando termino de trabajar y necesito paz. Es la más inteligente, y
							contrario a lo que el mundo cree, su raza es sumamente respetuosa y nos ayudan a cuidar
							nuestras casitas. Fue una adopción de la fundación Animales del Sur y me hace feliz la vida.
						</div>
						<img className="d-block w-50" src={logo2} alt="Generic placeholder image" />
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="media">
						<div id="texto" className="media-body">
							<h5 className="mt-0 mb-1">¡Más que una mascota!</h5>
							<a id="texto2">
								Ha sido una de la experiencias más bonitas que he tenido en mi vida adopte a Scott
								cuando apenas tenía quince días de nacido, hubo momentos en los que pensé que realmente
								no iba a lograrlo puesto que él estaba muy pequeño pero aquí está y tiene nueve años
								conmigo y espero que esté muchos años más, y por supuesto también tengo a mi perrita
								negra que justo va cumplir un año de vivir en la casa y es la concentida de la casa :)
								adoptar una mascota es un acto muy noble y el animalito estará muy agradecido así que
								los invito adoptar a ustedes también!!
							</a>
						</div>

						<img
							className="d-block w-50"
							// style={{ borderRadius: "50%" }}
							src={logo1}
							alt="Generic placeholder image"
						/>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="media">
						<div className="media-body">
							<h5 className="mt-0 mb-1">¡Una amiga fiel en casa!</h5>
							Así es como puedo describir mis días desde la llegada de Coqueta a mi casa, es una perrita
							muy bien portada, amigable y fiel. Coqueta poco a poco ha ido superando su abandono en las
							calles, desde que la adoptamos ha estado súper contenta y agradecida. No se cansa de correr
							por toda la casa, y pues claro, una que otra diablura que sin duda alguna nos saca una
							sonrisa. Agradezco a Zaguatec por su ayuda en este proceso de adopción. Recomendado al 100%.
						</div>
						<img
							className="d-block w-50"
							// style={{ borderRadius: "50%" }}
							src={logo}
							alt="Generic placeholder image"
						/>
					</div>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};
