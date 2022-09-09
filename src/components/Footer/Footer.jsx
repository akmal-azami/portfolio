import React from "react";
import "./Footer.css";
import logowebsite from "./logowebsite.svg";

const Footer = () => {
	return (
		<div className="container footer">
			<div>
				<img src={logowebsite} alt="" />
				<p className="p_footer">2022 &copy;Akmal Azami</p>
				<p className="p_footer">London, United Kingdom</p>
			</div>
		</div>
	);
};

export default Footer;
