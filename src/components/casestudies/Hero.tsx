import { HeroInfo } from "../../classes/casestudy/HeroInfo";

const Hero = (props: HeroInfo) => {
    const heroClasses = "w-full grid items-center justify-items-center grid-cols-2 grid-rows-[12rem_1fr_1fr] sm:grid-rows-[12rem_1fr] max-w-[100rem] justify-self-center";
    const mockupClasses = "w-full sm:w-[45vh] sm:max-w-[45vw] h-[calc((100vh-6rem-12rem-2rem)/2)] sm:h-[calc(100vh-6rem-12rem-2rem)] bg-center bg-contain bg-no-repeat col-span-2 sm:col-span-1 ";
    const mockupImg = "bg-mockup-img-" + props.mockup;
    return (
        <section className={"h-[calc(100vh-6rem)] flex justify-center w-full bg-casestudy-" + props.mockup + "-light dark:bg-casestudy-" + props.mockup + "-dark"}>
            <div className={heroClasses}>
                <div className="my-8 w-11/12 md:w-auto z-0 text-center align-middle text-primary dark:text-secondary break-words text-heading md:text-display font-display font-bold bg-secondary dark:bg-primary px-8 py-4 rounded-[2rem] bg-opacity-80 col-span-2">{props.title}</div>
                <div className={mockupClasses + mockupImg + "-1"}></div>
                <div className={mockupClasses + mockupImg + "-2"}></div>
            </div>
        </section>
    );
};

export default Hero;