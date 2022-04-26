const OneCol = ({title, children}: any) => {
    let titleClasses = " my-2 ";
    if (typeof title === "boolean") {
        titleClasses = " mt-4 ";
    }
    return (
        <div className={"max-w-[20rem] col-fill-balance col-count-1 2xl:col-count-2 2xl:max-w-[40rem] font-body text-body" + titleClasses}>{children}</div>
    );
};

export default OneCol;