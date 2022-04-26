import { NumberInfo } from "../../classes/casestudy/NumberInfo";

const Number = (props: NumberInfo) => {
    const color = "bg-casestudy-" + props.colorCode + "-light dark:bg-casestudy-" + props.colorCode + "-dark";
    return (
        <div className={"rounded-2xl flex flex-col items-center justify-center h-[14rem] w-[14rem] my-4 " + color}>
            <div className="m-0 font-body text-number font-bold">{props.number}</div>
            <div className="m-0 text-center">{props.desc}</div>
        </div>
    );
};

export default Number;