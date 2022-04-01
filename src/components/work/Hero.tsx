import "../../css/work/hero.css";
import CaseStudyList from "../CaseStudyList";

const Hero = () => {
    return (
        <>
            <section className="w-full bg-secondary dark:bg-primary">
                <div className="grid-cols-1 grid-rows-[auto_auto] max-w-[100rem] py-8 mx-auto">
                    <div className="text-secondary m-0 text-center text-display font-display font-bold">My Work</div>
                    <CaseStudyList />
                </div>
            </section>
        </>
    );
};

export default Hero;