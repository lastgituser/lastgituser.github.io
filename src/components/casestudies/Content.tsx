import { ContentInfo } from "../../classes/casestudy/ContentInfo";

const Content = (props:ContentInfo) => {
    const color = "bg-casestudy-" + props.colorCode + "-light dark:bg-casestudy-" + props.colorCode + "-dark";
    const classes = props.problem ? "flex flex-col items-center" :
                    props.textOnly ? "grid grid-cols-1 grid-rows-1 items-center justify-items-center" :
                    "grid xl:grid-cols-[1fr_auto_auto_1fr] gap-24 grid-rows-[auto_auto] grid-flow-row-dense xl:grid-flow-col xl:grid-rows-1 items-center justify-items-center";
    return (
        <div className={classes + " text-primary dark:text-secondary py-16 px-8 xl:px-16 dark:odd:bg-primary odd:bg-secondary " + color}>{props.children}</div>
    );
};

export default Content;