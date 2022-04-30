import { SectionItemInfo } from "../../classes/SectionItemInfo";

const SectionItem = (props: SectionItemInfo) => {
    const invert = props.invert ? " dark:invert " : "";
    const img = props.edu ? require("../../images/icons/edu/" + props.src) : require("../../images/icons/tech/" + props.src)
    return (
        <div className="flex flex-col items-center">
            <img className={"h-20 w-20" + invert} src={img} alt={props.desc} />
            <div className="text-primary dark:text-secondary font-bold font-display text-body my-2 leading-none">{props.desc}</div>
        </div>
    );
};

export default SectionItem;