import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

let theme = createTheme({
	palette: {
		primary: {
			main: "#000000",
		},
		secondary: {
			main: "#F7F8FA",
		},
	},
	typography: {
		fontFamily: ["Poppins", "sans-serif"].join(","),
	},
	components: {
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					h1: "h2",
					h2: "h2",
					h3: "h2",
					h4: "h2",
					h5: "h2",
					h6: "h2",
					subtitle1: "h2",
					subtitle2: "h2",
					body1: "span",
					body2: "span",
				},
			},
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
);
