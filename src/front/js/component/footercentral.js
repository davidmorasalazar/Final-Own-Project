import React, { Component } from "react";
export const FooterCentral = () => (
	<ul id="footer" className="nav justify-content-center  footer mt-3 p-2">
		<li className="nav-item">
			<a id="text1" className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
				<b>All Rights Reserved</b>
			</a>
		</li>
		<li className="nav-item">
			<a className="nav-link" href="https://www.cinde.org/es" rel="noopener noreferrer" target="_blank">
				<img
					id="cinde"
					src="https://www.cinde.org/assets/logo-es-2747ca9cf9565297a9fe10ae3b394b672373297ff186f8de3bf7b07f0fc4ba3e.svg"
				/>
			</a>
		</li>
		<li className="nav-item">
			<a
				className="nav-link"
				href="https://4geeksacademy.com/es/location/costa-rica-san-jose"
				rel="noopener noreferrer"
				target="_blank">
				<img id="geeks" src="https://assets.breatheco.de/apis/img/icon/4geeks.png" />
			</a>
		</li>
	</ul>
);
