import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Cards } from "./cards.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div>
			<div className="container-fluid p-0">
				<Navbar />
			</div>
			<div className="container-fluid">
				<Jumbotron />
			</div>
			<div className="row">
				<div className="container-fluid">
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
			<div className="container-fluid p-0">
				<Footer />
			</div>
		</div>
	);
}
