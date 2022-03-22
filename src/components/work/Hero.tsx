import "../../css/work/hero.css";
import CaseStudyList from "../CaseStudyList";

const Hero = () => {
    return (
        <>
            <section id="work-hero">
                <div className="hero-container">
                    <h1 className="hero-title">My Work</h1>
                    <CaseStudyList />
                </div>
            </section>
        </>
    );
};

export default Hero;