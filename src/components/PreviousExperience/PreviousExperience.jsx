import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import jcl from "./jcl.png";
import fortu from "./fortu.png";
import fortuphoto from "./fortuphoto.jpg";
import jclteam from "./jclteam.jpg";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

const PreviousExperience = () => {
	const [expanded, setExpanded] = React.useState(false);
	const [expanded2, setExpanded2] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	const handleExpandClick2 = () => {
		setExpanded2(!expanded2);
	};
	return (
		<div className="container">
			<h1 className="title-header">Work Experience</h1>
			<Grid
				container
				spacing={1}
				sx={{ justifyContent: "center", alignItems: "center" }}
			>
				<Grid item xs={12} sm={6}>
					<Card
						sx={{
							display: "inline-block",
							justifyContent: "center",
							alignItems: "center",
							maxWidth: 450,
							margin: "1rem",
							backgroundColor: "#F4F4F4",
						}}
					>
						<CardHeader
							avatar={
								<Avatar sx={{ bgcolor: "white" }} aria-label="JCL" src={jcl}></Avatar>
							}
							title="Jefferson Capital Limited"
							subheader="2017 - Present "
						/>
						<CardMedia
							component="img"
							height="194"
							image={jclteam}
							alt="Jefferson Team"
						/>
						<CardContent>
							<Typography variant="body2" color="text.secondary">
								Joined Jefferson capital in 2017 as an intern and later was employed by
								them as a Project Manager to lead Pocket Portfolio app. The app was
								intended for the use of High-Net-Worth clients to track their global
								wealth at real time
							</Typography>
							<Typography></Typography>
						</CardContent>
						<CardActions disableSpacing>
							<ExpandMore
								expand={expanded}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label="show more"
							>
								<ExpandMoreIcon />
							</ExpandMore>
						</CardActions>
						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<CardContent>
								<Typography paragraph>Some of the responsibilities:</Typography>
								<Typography paragraph>
									Assisted senior management with developing business plan, technical
									documentation plan, and budget
								</Typography>
								<Typography paragraph>
									Created user journey charts, designs sketches with intended
									functionalities for client app and admin panel for portfolio managers
								</Typography>
								<Typography paragraph>
									Managed recruitment, interviews and hiring of developers globally
								</Typography>
								<Typography paragraph>
									Developed key project goals and worked collaboratively with the teams
									to meet those goals
								</Typography>
							</CardContent>
						</Collapse>
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
						}}
					>
						<CardHeader
							avatar={
								<Avatar
									sx={{ bgcolor: "white" }}
									aria-label="Fortu"
									src={fortu}
								></Avatar>
							}
							title="Fortu Wealth Ltd"
							subheader="2019 - Present"
						/>
						<CardMedia component="img" height="194" image={fortuphoto} alt="Fortu" />
						<CardContent>
							<Typography variant="body2" color="text.secondary">
								While working with Jefferson Capital we recognised the gap in the market
								– affluent individuals were in need of a product that would simplify
								payments and investments, all from one app with a clean and simple UX. I
								was the Project Manager and Finace Officer since idea stage
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<ExpandMore
								expand={expanded}
								onClick={handleExpandClick2}
								aria-expanded={expanded}
								aria-label="show more"
							>
								<ExpandMoreIcon />
							</ExpandMore>
						</CardActions>
						<Collapse in={expanded2} timeout="auto" unmountOnExit>
							<CardContent>
								<Typography paragraph>
									Responsibilities | Front - End Developer (Part-Time)
								</Typography>
								<Typography paragraph>
									Updating and developing new components for the landing page
								</Typography>
								<Typography paragraph>
									Coding signed off desing into working web page of the back office and
									communicating to back-end through protobuf
								</Typography>
								<Typography paragraph>
									Work closely with back-end developers and designers to deliver
									consistent and reliable web experience{" "}
								</Typography>
								<Typography paragraph>
									Please check my CV for more information about previous responsibilities
								</Typography>
							</CardContent>
						</Collapse>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default PreviousExperience;
