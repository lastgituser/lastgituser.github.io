const Hero = () => {
    return (
        <>
            <div className="absolute h-[20vh] bg-gradient-to-t from-secondary dark:from-primary w-full z-0 bottom-0"></div>
            <section className="bg-transparent flex justify-center">
                <div className="justify-items-center xl:justify-items-start px-8 md:px-16 h-[calc(100vh-6rem)] grid grid-cols-2 grid-rows-[16rem_12rem_auto_8rem] md:grid-rows-[12rem_8rem_auto_8rem] xl:grid-rows-[15rem_10rem_auto] grid-flow-col max-w-[100rem] w-full" id="home-hero">
                    <div className="text-primary dark:text-secondary scale-90 sm:scale-100 col-span-full xl:col-span-1 xl:self-end flex flex-col justify-end">
                        <div className="flex flex-col md:flex-row justify-center xl:justify-start items-center md:items-baseline">
                            <span className="text-[6rem] leading-none font-display font-bold md:mr-8">Akhil</span>
                            <span className="text-[4rem] leading-none font-display font-bold">Kikkeri</span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center xl:justify-start items-center md:items-baseline">
                            <span className="text-[3rem] leading-none font-display font-thin mr-4">UX/UI</span>
                            <span className="text-[2rem] leading-none font-display font-thin">Developer</span>
                        </div>
                    </div>
                    <div className="col-span-full xl:col-span-1 self-center text-center xl:text-left text-body font-body text-primary dark:text-secondary max-w-lg">
                        Full Stack Developer and small business advocate designing and building websites to solve tomorrow's problems.
                    </div>
                    <a className="col-span-full xl:col-span-1 text-heading font-body text-secondary bg-accent-dark dark:text-primary dark:bg-accent font-bold rounded-2xl px-8 py-4 justify-self-center xl:justify-self-start hover:bg-primary dark:hover:bg-secondary transition ease-out duration-200 self-center xl:self-start" href="mailto:akhil.kikkeri.uxdev@gmail.com">Let's talk</a>
                    <div className="col-span-full row-start-3 col-start-1 xl:col-auto row-span-1 xl:row-span-full m-4 grid grid-cols-2 grid-rows-1 w-full justify-center xl:justify-start max-w-[30vh] xl:max-w-none">
                        <div className="bg-contain bg-center bg-no-repeat bg-hero-mockup-1 xl:h-[calc(100vh-8rem)]"></div>
                        <div className="bg-contain bg-center bg-no-repeat bg-hero-mockup-2 xl:h-[calc(100vh-8rem)]"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;