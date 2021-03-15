import React from "react";

export function Cards() {
	return (
		<div className="card text-center m-3" style={{ width: "18rem" }}>
			<div className="card-body p-0">
				<img
					className="card-img-top"
					src="https://picsum.photos/500/400"
				/>
				<h5 className="card-title">Card title</h5>
				<p className="card-text p-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<a href="#" className="btn btn-primary mb-3">
					Find Out More!
				</a>
			</div>
		</div>
	);
}
