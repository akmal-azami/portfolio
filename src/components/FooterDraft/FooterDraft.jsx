import React from "react";
import { ElfsightWidget } from "react-elfsight-widget";
import "./FooterDraft.css";
import Divider from "@mui/material/Divider";
import Footer from "../Footer/Footer";

const FooterDraft = () => {
	return (
		<>
			<Divider />
			<h3 className="container contact-header">
				Get in touch - let's work together
			</h3>
			<div className="container contact flex" id="contact-me">
				<div className="contact-details contact-grid ">
					<h6>Email</h6>
					<p>akmal@azami.io</p>
					<h6>Phone</h6>
					<p>+44 7884 375315</p>
					<h6>Messengers</h6>
					<a
						href="https://wa.me/447884375315"
						target="_blank"
						rel="noreferrer"
						target="_blank"
						rel="noreferrer"
					>
						Whatsapp /
					</a>
					<a
						href="https://t.me/akmal_azami"
						target="_blank"
						rel="noreferrer"
						target="_blank"
						rel="noreferrer"
					>
						Telegram
					</a>
				</div>
				<div className="contact-form contact-grid">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default FooterDraft;
