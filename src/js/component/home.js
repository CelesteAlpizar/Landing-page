import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Cards } from "./cards.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="container-fluid">
				<div className="row m-3">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
			<Footer />
		</div>
	);
}
