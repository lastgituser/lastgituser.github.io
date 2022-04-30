const Section = ({type, title, row, children}: any) => {
    let sectionContentClasses = "grid grid-cols-3 grid-rows-3 gap-4";
    let textSpanClasses = "";
    if (typeof type === "string") {
        if (type === "text") {
            sectionContentClasses = "text-primary dark:text-secondary text-body font-body";
            textSpanClasses = " col-span-1 md:col-span-2 xl:col-span-1 ";
        } else if (type === "primary") {
            sectionContentClasses = "grid grid-cols-2 grid-rows-[auto_auto_auto] items-center justify-items-center gap-x-16 gap-y-4";
        }
    }
    let rowClasses = typeof row === "string" ? row : "";
    return (
        <div className={"grid grid-rows-[auto_auto] grid-cols-1 gap-x-16 items-center justify-self-center w-[90vw] max-w-[22rem]" + textSpanClasses + rowClasses}>
            <div className="text-primary dark:text-secondary text-heading font-body font-bold my-4 justify-self-start">
                {title}
            </div>
            <div className={sectionContentClasses}>
                {children}
            </div>
        </div>
    );
};

export default Section;