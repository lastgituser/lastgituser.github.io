import SkillsSection from "../SkillsSection";

const Skills = () => {
    return (
        <div className="bg-secondary dark:bg-primary flex flex-col items-center w-full">
            <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-8 items-start justify-items-center pt-8 pb-16 md:py-8 px-4 md:px-16 max-w-[100rem]">
                <div className="bg-skills-ux-light dark:bg-skills-ux-dark bg-contain bg-center bg-no-repeat h-[90vw] md:h-[40vw] xl:h-[20vw] max-h-[20rem] w-[90vw] md:w-[40vw] xl:w-[20vw] max-w-[20rem] self-center justify-self-center"></div>
                <SkillsSection name="User Empathy" 
                               description="I ensure people feel comfortable opening up about issues. I respect people and never drag them to an answer. I ask relevant questions and don't probe if the people don't feel safe. I let people tell me their needs rather than force it out of them." />
                <SkillsSection name="User Research" 
                               description="I use insights from the interviews I conducted to get a good idea of the main pain points that the people found, then narrow down the issues to what was mentioned the most. I narrowed down group travel needs to wanting to feel like a part of a community for example." />
                <SkillsSection name="Usability Testing" 
                               description="I design tasks around what I found to be important in the research phase. I respect people when testing a website or app to let them find issues that prevent them doing what I tasked them with. I allow tasks to be simple and relevant like signup for a travel app to guage usability." />
            </div>
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-8 items-start justify-items-center pt-4 pb-16 md:py-8 px-4 md:px-16 max-w-[100rem]">
                <SkillsSection name="Web Dev" 
                               description="I collaborate with other developers with different experience and knowledge to develop effective websites. For the GT SGA, I helped develop a website in HTML5/CSS3 and ExpressJS to replace the current JacketPages website." />
                <SkillsSection name="App Dev" 
                               description="I modularize and organize code to ensure my app uses reusable and intuitive code. I developed educational apps to teach children science topics such as simple machines and grammar topics like nouns using a seamless development system." />
                <SkillsSection name="Back End Dev" 
                               description="I keep up-to-date with many technologies to improve the quality of the code and collaborate with front end developers to ensure quality products get developed. At AT&T, I worked with other engineers to create APIs to let users of those APIs add data to tables easily." />
                <div className="bg-skills-dev-light dark:bg-skills-dev-dark bg-contain bg-center bg-no-repeat h-[90vw] md:h-[40vw] xl:h-[20vw] max-h-[20rem] w-[90vw] md:w-[40vw] xl:w-[20vw] max-w-[20rem] self-center justify-self-center"></div>
            </div>
        </div>
    );
};

export default Skills;