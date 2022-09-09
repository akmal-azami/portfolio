import { Link } from "@mui/material";
import React from "react";
import person from "./akmal.png";
import designer from "./designer.svg";
import "./Header.css";
import { Button, Box } from "@mui/material/";
import Aos from "aos";
import cv from "./Akmal Azami - CV - Front-End Developer.pdf";

const Header = () => {
	return (
		<div style={{ maxWidth: "1024px", margin: "1rem auto" }}>
			<section className="container">
				<div className="header__background-icon header__background">
					{/* <img src={designer} alt="designer" /> */}
				</div>
				<div className="header__wrapper header__grid grid ">
					<div className="header__wrapper_info" data-aos="zoom-in-right">
						<h5 className="section__text header__grid"> Akmal Azami </h5>
						<h1 style={{ margin: "-1rem" }}>Junior Front-end Developer</h1>
						<p className="p__paragraph--grey">
							Detail-oriented and solution-centred Web Developer with an experience of
							developing rich web applications and websites. Within extensive
							experience in fintech start-ups, seeking to implement software
							development skills in a junior/entry-level position. <br />
							<br /> Love building things, creating new stuff, learning new
							technologies and working with others to bring brilliant products.
						</p>
						<div className="button__group">
							<Button
								variant="contained"
								color="secondary"
								sx={{ fontSize: { md: "12px", sm: "10px" } }}
							>
								<a href={cv} download>
									{" "}
									DOWNLOAD CV{" "}
								</a>
							</Button>
							<Button variant="contained">
								<a href="#contact-me">CONTACT ME</a>
							</Button>
						</div>
						<div className="button__group">
							<Button variant="text" color="primary">
								<a
									href="https://www.linkedin.com/in/akmal-azami/"
									target="_blank"
									rel="noreferrer"
								>
									Linked In
								</a>
							</Button>
							<Button variant="text" color="primary">
								<a
									href="https://github.com/akmal-azami/"
									target="_blank"
									rel="noreferrer"
								>
									Github
								</a>
							</Button>
						</div>
					</div>
					<div
						className="header__wrapper_img header__grid-img"
						data-aos="zoom-in-left"
					>
						<img src={person} alt="designer" />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Header;
