import CaseStudyList from "../components/CaseStudyList";
import Hero from "../components/home/Hero";
import LetsConnect from "../components/home/LetsConnect";
import Skills from "../components/home/Skills";
import "../css/casestudies.css";
import "../css/home/skills.css";

const Home = () => {
    return (
        <>
            <Hero />
            <h1 className="heading-casestudies">Case Studies</h1>
            <CaseStudyList />
            <h1 className="heading-skills">Skills</h1>
            <Skills />
            <LetsConnect />
        </>
    );
};

export default Home;