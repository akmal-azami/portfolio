import React from "react";
import moshlogo from "./moshlogo.svg";
import { CardContent, Card, CardMedia, Typography } from "@mui/material/";
import "./Education.css";
import ironhack from "./ironhack.png";
import mosh from "./mosh.png";
import google from "./google.png";
import freeCodeCamp from "./freeCodeCamp.png";
import qmul from "./qmul.png";
import aat1 from "./aat1.png";

const Education = () => {
	return (
		<>
			<div className="container ">
				<h1 className="title-header">Education and Qualifications</h1>
				<div className="education">
					<div className="education_card">
						<img src={ironhack} alt="" />
					</div>
					<div className="education_card">
						<img src={mosh} alt="" />
					</div>
					<div className="education_card">
						<img src={google} alt="" />
					</div>
					<div className="education_card">
						<img src={freeCodeCamp} alt="" />
					</div>
				</div>
				<div className="education1">
					<div className="education_card-qualif">
						<img src={qmul} alt="" />
						<h2>Queen Mary University of London</h2>
						<p>BSc Economics and Finance</p>
					</div>
					<div className="education1">
						<div className="education_card-qualif">
							<img src={aat1} alt="" />
							<h2>Association of Accounting Technicians</h2>
							<p>Accounting Qualification</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Education;
