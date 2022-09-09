import * as React from "react";
import Card from "@mui/material/Card";
import {
	CardActions,
	CardContent,
	Button,
	Typography,
	CardMedia,
	Grid,
	Box,
} from "@mui/material/";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import useMediaQuery from "@mui/material/";

import portfolio1 from "./portfolio1.jpg";
import portfolio2 from "./portfolio2.png";
import portfolio3 from "./portfolio3.png";
import portfolio4 from "./portfolio4.png";

export default function MediaCard() {
	return (
		<Box style={{ maxWidth: "1024px", margin: "1rem auto" }}>
			<h1>Projects</h1>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={6}>
					<Card
						sx={{
							display: "inline-block",
							justifyContent: "center",
							alignItems: "center",
							maxWidth: 450,
							margin: "1rem",
							backgroundColor: "#F4F4F4",
							height: { xs: "100%", md: 750 },
						}}
					>
						<CardMedia
							component="img"
							height="450px"
							image={portfolio1}
							alt="portfolio 1"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								RedLight - See What's Next
							</Typography>
							<Typography gutterBottom variant="body2" color="text.secondary">
								AI powered Movie App that lets the users to search for their favourite
								movies, see movie details, including cast, trailers and websites, and
								get recommendation. Users can create an account and add movies to their
								watchlist.
							</Typography>
							<Box sx={{ marginTop: "1rem" }}>
								<Typography variant="body1" color="text.primary">
									Tools: React JS, Redux, Axios, Alan AI, TMDB API,
								</Typography>
							</Box>
						</CardContent>
						<CardActions
							gutterBottom
							size="small"
							variant="outlined"
							style={{ justifyContent: "space-between", margin: 10, color: "grey" }}
						>
							<Button endIcon={<LanguageIcon />}>
								<a
									href="https://redlight.netlify.app/"
									target="_blank"
									rel="noreferrer"
								>
									Website
								</a>
							</Button>
							<Button endIcon={<GitHubIcon />}>
								<a
									href="https://github.com/akmal-azami/redlight_akmal"
									target="_blank"
									rel="noreferrer"
								>
									Source Code
								</a>
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card
						sx={{
							display: "inline-block",
							justifyContent: "center",
							alignItems: "center",
							maxWidth: 450,
							margin: "1rem",
							backgroundColor: "#F4F4F4",
							height: { xs: "100%", md: 750 },
						}}
					>
						<CardMedia
							component="img"
							height="450px"
							image={portfolio2}
							alt="portfolio 1"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Traveller - search. then go
							</Typography>
							<Typography gutterBottom variant="body2" color="text.secondary">
								Traveller is an AI powered travelling map website for finding
								restaurants, hotels and attractions based on the location of the user
							</Typography>
							<Box sx={{ marginTop: "1rem" }}>
								<Typography variant="body1" color="text.primary">
									Tools: React JS, Alan AI, RAPID API, Material UI
								</Typography>
							</Box>
						</CardContent>
						<CardActions
							gutterBottom
							size="small"
							variant="outlined"
							style={{ justifyContent: "space-between", margin: 10, color: "grey" }}
						>
							<Button endIcon={<LanguageIcon />}>
								{" "}
								<a
									href="https://travellercom.netlify.app/"
									target="_blank"
									rel="noreferrer"
								>
									Website
								</a>
							</Button>
							<Button endIcon={<GitHubIcon />}>
								{" "}
								<a
									href="https://github.com/akmal-azami/traveller"
									target="_blank"
									rel="noreferrer"
								>
									Source Code
								</a>
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card
						sx={{
							display: "inline-block",
							justifyContent: "center",
							alignItems: "center",
							maxWidth: 450,
							margin: "1rem",
							backgroundColor: "#F4F4F4",
							height: { xs: "100%", md: 750 },
						}}
					>
						<CardMedia
							component="img"
							height="450px"
							image={portfolio3}
							alt="portfolio 1"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Envio - Cloud Hosting for Pros
							</Typography>
							<Typography gutterBottom variant="body2" color="text.secondary">
								Envio is a cloud hosting website built using pure HTML and CSS. The
								responsive website was built using the mobile-first approach using BEM
								convention and images were optimised for performance
							</Typography>
							<Box sx={{ marginTop: "1rem" }}>
								<Typography variant="body1" color="text.primary">
									Tools: HTML, CSS
								</Typography>
							</Box>
						</CardContent>
						<CardActions
							gutterBottom
							size="small"
							variant="outlined"
							style={{ justifyContent: "space-between", margin: 10, color: "grey" }}
						>
							<Button endIcon={<LanguageIcon />}>
								{" "}
								<a
									href="https://enviocloud.netlify.app/"
									target="_blank"
									rel="noreferrer"
								>
									Website
								</a>
							</Button>

							<Button endIcon={<GitHubIcon />}>
								<a
									href="https://github.com/akmal-azami/envio"
									target="_blank"
									rel="noreferrer"
								>
									Source Code
								</a>
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card
						sx={{
							display: "inline-block",
							justifyContent: "center",
							alignItems: "center",
							maxWidth: 450,
							margin: "1rem",
							backgroundColor: "#F4F4F4",
							height: { xs: "100%", md: 750 },
						}}
					>
						<CardMedia
							component="img"
							height="450px"
							image={portfolio4}
							alt="portfolio 1"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								TJ Cheng - World-Class Japanese and Chinese Fine Dining
							</Typography>
							<Typography gutterBottom variant="body2" color="text.secondary">
								TJ Cheng New York Offers Two Distinct Cuisines, Serving Chinese And
								Japanese Dishes With A Modern Approach From The Dedicated Japanese Sushi
								Bar And Chinese Main Kitchen.
							</Typography>
							<Box>
								<Typography variant="body1" color="text.primary">
									Tools: React JS, HTML, CSS
								</Typography>
							</Box>
						</CardContent>
						<CardActions
							gutterBottom
							size="small"
							variant="outlined"
							style={{ justifyContent: "space-between", margin: 10, color: "grey" }}
						>
							<Button endIcon={<LanguageIcon />}>
								<a href="https://tjcheng.netlify.app/" target="_blank" rel="noreferrer">
									Website
								</a>
							</Button>
							<Button endIcon={<GitHubIcon />}>
								<a
									href="https://github.com/akmal-azami/tjcheng_restaurant_website"
									target="_blank"
									rel="noreferrer"
								>
									Source Code
								</a>
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
}
