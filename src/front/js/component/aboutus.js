import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo-zaguatech.png";
export const AboutUs = () => (
	<div className="container mt-5">
		<div className="row align-items-start">
			<div className="col" />
			<div className="col">
				<h1>¿Quienes Somos?</h1>
			</div>
			<div className="col">
				<img className="py-1" src={logo} alt="Logo" style={{ width: "150px" }} />
			</div>
		</div>
		<p className="text-justify">
			<strong>Zaguatech</strong> nace como un proyecto de 4 amigos programadores:
			<a href="https://github.com/LaburgosCR" target="__blank">
				&nbsp;Luis Diego Larraburo Brenes
			</a>
			,
			<a href="https://github.com/davidmorasalazar" target="__blank">
				&nbsp; David Mora Salazar
			</a>
			,
			<a href="https://github.com/LuisAlvarado-19" target="__blank">
				&nbsp; Luis Alvarado Fernandez &nbsp;
			</a>
			y
			<a href="https://github.com/ingmoiss" target="__blank">
				&nbsp; Moises Navarro
			</a>
			; nos complementamos sumando creatividad, esfuerzo y perfección.
			<br />
			<strong>Zaguatech</strong> es una web que viene a dar ayuda a las Fundaciones en Costa Rica enfocadas en
			todos aquellos animales que por muchas razones se encuentran sin hogar y viven en las calles en condiciones
			muy lamentables. Gracias a nuestra plataforma facilitaremos el trámite de adopción de perros y gatos en
			busca de un hogar amoroso para así rehabilitar a los animales en estado de indefensión y maltrato.
			<br /> Podrán encontrar una lista de perros y gatos disponibles en adopción que se encuentran en diferentes
			Fundaciones a lo largo del territorio costarricense, sus características e información necesaria para
			iniciar el proceso de adopción.
			<br /> Esperamos que esta plataforma sea de gran utilidad y que todas las personas nos compartan sus
			experiencias con sus mascotas.
			<br />
			<br /> Y tu?................ Ya adoptaste una mascota?
		</p>
	</div>
);
