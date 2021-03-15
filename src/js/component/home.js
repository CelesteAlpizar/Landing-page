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
				<div className="row">
					<div className="col-3">
						<Cards />
					</div>
					<div className="col-3">
						<Cards />
					</div>
					<div className="col-3">
						<Cards />
					</div>
					<div className="col-3">
						<Cards />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
