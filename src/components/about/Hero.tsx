const Hero = () => {
    return (
        <section className="bg-secondary dark:bg-primary w-full flex justify-center">
            <div className="grid grid-rows-[auto_auto] xl:grid-cols-[2fr_3fr] xl:grid-rows-1 items-center justify-items-center gap-8 max-w-[100rem] w-[90vw] xl:h-[calc(100vh-6rem)]">
                <div className="grid grid-cols-1 grid-rows-[auto_auto] max-w-md text-primary dark:text-secondary">
                    <div className="text-display font-display font-bold">About</div>
                    <div className="text-body font-body">
                        UX designer with background in software engineering and a Bachelor's of Science in Computer Science from Georgia Tech. Certificate from Georgia Tech UX Bootcamp with skills in HTML5, CSS, Javascript, NodeJS, React, React Native, Angular, ExpressJS, Interaction Design, User Interface Design, Information Architecture, UX Writing, User Experience Research, Visual Prototyping & Wireframing. Innovative professional passionate about developing digital products that solve human problems. Strengths in creativity, software development, teamwork, and implementing projects from ideas. Interviewed users and designed and iterated prototypes for numerous websites and apps. Adapted wireframes and prototypes based on user tests and usability feedback to enhance the experience. Software development background combined with an ability to adapt designs for users makes me a valuable addition to any design team.
                    </div>
                </div>
                <div className="bg-logo bg-contain bg-center bg-no-repeat h-full w-full max-w-xl min-h-[20rem] invert dark:filter-none"></div>
            </div>
        </section>
    );
};

export default Hero;