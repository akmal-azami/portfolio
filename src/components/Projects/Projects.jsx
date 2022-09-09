import React from "react";
import "./Projects.css";
import portfolio1 from "./portfolio1.jpg";
import portfolio2 from "./portfolio2.jpg";
import portfolio3 from "./portfolio3.jpg";
import portfolio4 from "./portfolio4.jpg";
const Projects = () => {
	return (
		<section>
			<h1 className="header__text">Projects</h1>
			<div className="project__wrapper-grid grid">
				<div className="grid-item column__one">
					<img className="zoom" src={portfolio1} alt="Redlight App" />
					<div className="project__content-initial">
						<h2 classsName="project__title1">-REDLIGHT - MOVIE DISCOVERY APP</h2>
					</div>
					<div className="project__content fade">
						<h2 classsName="project__title">-REDLIGHT - MOVIE DISCOVERY APP</h2>
						One Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo
						accusantium deserunt, exercitationem facilis dolore tempora, numquam
						blanditiis repellendus sint quos ad sequi, doloribus ex suscipit! Nemo
						quos numquam, deserunt ea hic quasi animi esse voluptatem distinctio
						maxime at, eligendi magni velit id possimus provident aperiam, deleniti
						alias. Delectus, temporibus!
					</div>
				</div>

				<div className="grid-item column__two">
					<img className="zoom" src={portfolio2} alt="Traveller App" />
					<div className="project__content fade">
						One Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo
						accusantium deserunt, exercitationem facilis dolore tempora, numquam
						blanditiis repellendus sint quos ad sequi, doloribus ex suscipit! Nemo
						quos numquam, deserunt ea hic quasi animi esse voluptatem distinctio
						maxime at, eligendi magni velit id possimus provident aperiam, deleniti
						alias. Delectus, temporibus!
					</div>
				</div>
				<div className="grid-item column__three">
					<img className="zoom" src={portfolio3} alt="Moshified" />
					<div className="project__content fade">
						One Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo
						accusantium deserunt, exercitationem facilis dolore tempora, numquam
						blanditiis repellendus sint quos ad sequi, doloribus ex suscipit! Nemo
						quos numquam, deserunt ea hic quasi animi esse voluptatem distinctio
						maxime at, eligendi magni velit id possimus provident aperiam, deleniti
						alias. Delectus, temporibus!
					</div>
				</div>
				<div className="grid-item column__four">
					<img className="zoom" src={portfolio4} alt="restaurant website" />
					<div className="project__content fade">
						One Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo
						accusantium deserunt, exercitationem facilis dolore tempora, numquam
						blanditiis repellendus sint quos ad sequi, doloribus ex suscipit! Nemo
						quos numquam, deserunt ea hic quasi animi esse voluptatem distinctio
						maxime at, eligendi magni velit id possimus provident aperiam, deleniti
						alias. Delectus, temporibus!
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
