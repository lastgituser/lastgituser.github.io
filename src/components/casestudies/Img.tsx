const Img = ({src, dim, children}: any) => {
    let bgClasses = "";
    if (typeof src === "string" && src !== "") {
        bgClasses = " bg-center bg-contain bg-no-repeat bg-" + src + " ";
    }
    return (
        <div className={"grid grid-cols-1 grid-rows-[auto_auto] gap-24 justify-items-center items-center row-start-1 " + dim + " " + bgClasses}>{children}</div>
    );
};

export default Img;