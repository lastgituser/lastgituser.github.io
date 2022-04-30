import { ExpItemInfo } from "../../classes/ExpItemInfo";

const ExpItem = (props: ExpItemInfo) => {
    const bgClasses = " bg-" + props.img + " ";
    return (
        <div className="grid grid-rows-[auto_auto] grid-cols-1 gap-x-8 col-span-2 items-center justify-items-center">
            <div className={"row-start-1 col-start-1 dark:invert opacity-10 bg-no-repeat bg-center bg-contain h-40 w-40" + bgClasses}>
            </div>
            <div className="row-start-1 col-start-1 font-display text-number font-bold text-primary dark:text-secondary">
                {props.num}
            </div>
            <div className="font-display text-body font-bold text-primary dark:text-secondary mt-2">
                {props.desc}
            </div>
        </div>
    );
};

export default ExpItem;