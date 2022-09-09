import {
	AboutMe,
	Header,
	Footer,
	PreviousExperience,
	Projects,
	Testimonials,
	Education,
	Navbar,
	MediaCard,
	AutoplayCarousel,
	FooterDraft,
} from "./../src/components/index";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<MediaCard />
			{/* <AutoplayCarousel /> */}
			{/* <Projects /> */}
			{/* <AboutMe /> */}
			<Education />
			<PreviousExperience />
			{/* <Testimonials /> */}
			<FooterDraft />
			{/* <Footer /> */}
		</>
	);
}

export default App;
