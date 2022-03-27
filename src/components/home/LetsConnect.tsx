import LetsConnectLink from "../LetsConnectLink";

const LetsConnect = () => {
    return (
        <div className="bg-secondary dark:bg-primary text-primary dark:text-secondary w-full">
            <div className="flex flex-col xl:flex-row justify-between items-center py-8 px-4 md:px-16 max-w-[100rem] mx-auto">
                <div className="text-center md:text-left font-display text-display font-bold py-8">Let's Connect</div>
                <div className="max-w-[40rem] flex flex-row flex-wrap justify-center">
                    <LetsConnectLink title="LinkedIn" 
                                     link="https://linkedin.com/in/akhilkikkeri/" 
                                     img="linkedin.png" />
                    <LetsConnectLink title="Dribbble" 
                                     link="https://dribbble.com/anirvid" 
                                     img="dribbble.png" />
                    <LetsConnectLink title="Behance" 
                                     link="https://behance.net/akhilkikkeri" 
                                     img="behance.png" />
                    <LetsConnectLink title="Github" 
                                     link="https://github.com/lastgituser" 
                                     img="github-big-logo.png"
                                     invert={true} />
                </div>
            </div>
        </div>
    );
};

export default LetsConnect;