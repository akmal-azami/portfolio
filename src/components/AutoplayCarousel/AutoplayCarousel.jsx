import React from "react";
import alan from "./alan.png";
import axios from "./axios.png";
import cssimage from "./cssimage.png";
import htmllogo from "./htmllogo.png";
import jslogo from "./jslogo.png";
import materialUi from "./materialUi.png";
import rapidapi from "./rapidapi.png";
import react from "./react.png";
import redux from "./redux.png";
import "./AutoplayCarousel.css";

const AutoplayCarousel = () => {
	return (
		<div className="slider container">
			<div className="slide-track">
				<div className="slide">
					<img src={react} alt="" />
				</div>
				<div className="slide">
					<img src={redux} alt="" />
				</div>
				<div className="slide">
					<img src={htmllogo} alt="" />
				</div>
				<div className="slide">
					<img src={cssimage} alt="" />
				</div>
				<div className="slide">
					<img src={jslogo} alt="" />
				</div>
				<div className="slide">
					<img src={materialUi}  alt="" />
				</div>
				<div className="slide">
					<img src={rapidapi} alt="" />
				</div>
			</div>
		</div>
	);
};

export default AutoplayCarousel;
