const TwoCol = ({children}: any) => {
    return (
        <div className="max-w-[20rem] md:max-w-[40rem] 2xl:max-w-[80rem] col-fill-balance my-2 col-count-1 md:col-count-2 2xl:col-count-4 font-body text-body">{children}</div>
    );
};

export default TwoCol;