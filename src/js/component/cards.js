import React from "react";

export function Cards() {
	return (
		<div className="card text-center m-3" style={{ width: "18rem" }}>
			<div className="card-body">
				<img className="card-img-top" src="..." />
				<h5 className="card-title">Special title treatment</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
}
