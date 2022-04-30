const BTF = ({children}: any) => {
    return (
        <section className="bg-secondary dark:bg-primary w-full flex items-center justify-center">
            <div className="w-[90vw] max-w-[100rem] grid grid-cols-1 grid-rows-12 md:grid-cols-2 md:grid-rows-8 xl:grid-cols-3 xl:grid-rows-4 py-16 grid-flow-row-dense items-start justify-items-center gap-x-24 gap-y-8">
                {children}
            </div>
        </section>
    );
};

export default BTF;