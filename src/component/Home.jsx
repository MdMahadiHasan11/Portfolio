import About from "./About";
import Banner from "./Banner";
import Contract from "./Contract";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Services from "./Services";
import Technology from "./Technology";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Education></Education>
            <Services></Services>
            <Technology></Technology>
            <Projects></Projects>
            <Experience></Experience>
            <Contract></Contract>
        </div>
    );
};

export default Home;