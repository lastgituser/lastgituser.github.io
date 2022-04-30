import { Link } from "react-router-dom";
import { CaseStudyInfo } from "../classes/CaseStudyInfo";

const CaseStudy = ( props:CaseStudyInfo ) => {
    const mockups = ["bg-mockup-img-" + props.mockup + "-1", "bg-mockup-img-" + props.mockup + "-2"];
    const desktop = {
        "first": (props.desktop ? " col-span-2" : ""),
        "second": (props.desktop ? " hidden" : ""),
    };
    const mockup1 = "bg-center bg-no-repeat bg-contain " + mockups[0] + desktop.first;
    const mockup2 = "bg-center bg-no-repeat bg-contain " + mockups[1] + desktop.second;
    return (
        <Link className="group w-full grid grid-cols-1 grid-rows-[auto_auto] md:grid-cols-2 md:grid-rows-1 items-center justify-items-center py-4 md:py-16 no-underline max-w-[100rem] even:grid-flow-row-dense" to={"/work/" + props.title.replace(/ /g,'')}>
            <div className="w-[90vw] md:w-[50vw] h-[30rem] max-h-[20rem] max-w-[20rem] md:max-h-full md:max-w-[30rem] grid grid-cols-2 grid-rows-1 md:group-even:col-start-2">
                <div className={mockup1}></div>
                <div className={mockup2}></div>
            </div>
            <div className="text-primary dark:text-secondary max-w-[20rem] m-4 md:m-8 flex flex-col col-span-2 md:col-span-1">
                <div className="text-heading font-body font-bold ">{props.title}</div>
                <div className="text-body font-display font-bold my-4">{props.skills}</div>
                <div className="text-body font-body font-normal my-4">{props.description}</div>
                <span className="py-4 px-8 bg-accent-dark text-secondary dark:bg-accent dark:text-primary mr-auto mt-8 rounded-2xl text-body font-display font-bold hover:bg-primary dark:hover:bg-secondary">Check it out</span>
            </div>
        </Link>
    );
};

export default CaseStudy;