import CaseStudyList from "../components/CaseStudyList";
import Hero from "../components/home/Hero";
import LetsConnect from "../components/home/LetsConnect";
import Skills from "../components/home/Skills";
import HeroIllustrationDark from "../components/p5/HeroIllustrationDark";
import HeroIllustrationLight from "../components/p5/HeroIllustrationLight";

const Home = () => {
    return (
        <>
            <HeroIllustrationLight />
            <HeroIllustrationDark />
            <Hero />
            <h1 className="font-display text-display font-bold text-center bg-secondary text-primary dark:bg-primary dark:text-secondary pt-4">Case Studies</h1>
            <CaseStudyList />
            <h1 className="font-display text-display font-bold text-center bg-secondary text-primary dark:bg-primary dark:text-secondary pt-4">Skills</h1>
            <Skills />
            <LetsConnect />
        </>
    );
};

export default Home;