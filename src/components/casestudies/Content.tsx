import { ContentInfo } from "../../classes/casestudy/ContentInfo";

const Content = (props:ContentInfo) => {
    const color = "bg-casestudy-" + props.colorCode;
    const classes = props.problem ? "flex flex-col items-center" :
                    props.textOnly ? "grid grid-cols-1 grid-rows-1 items-center justify-items-center" :
                    "grid lg:grid-cols-[1fr_auto_auto_1fr] gap-24 grid-rows-[auto_auto] grid-flow-row-dense lg:grid-flow-col lg:grid-rows-1 items-center justify-items-center";
    return (
        <div className={classes + " py-16 px-4 lg:px-16 odd:bg-secondary " + color}>{props.children}</div>
    );
};

export default Content;