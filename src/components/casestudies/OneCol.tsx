const OneCol = ({children}: any) => {
    return (
        <div className="max-w-[20rem] col-count-1 2xl:col-count-2 2xl:max-w-[40rem] font-body text-body">{children}</div>
    );
};

export default OneCol;