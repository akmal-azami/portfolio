import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, Button } from "@mui/material";
import logowebsite from "./logowebsite.svg";
import cv from "./Akmal Azami - CV - Front-End Developer.pdf";

const Navbar = () => {
	return (
		<>
			<nav className=" container navbar">
				<div className="navbar-logo">
					<a href="/">
						<img src={logowebsite} alt="logo" />
					</a>
				</div>

				<div className="navbar-menu--buttons">
					<a href="" target="_blank" rel="noreferrer">
						<Button
							style={{ marginRight: "1rem" }}
							variant="contained"
							color="secondary"
						>
							<a href={cv} download>
								DOWNLOAD CV
							</a>
						</Button>
					</a>
					<a href="#contact-me" rel="noreferrer">
						<Button variant="contained">CONTACT ME</Button>
					</a>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
