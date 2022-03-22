import "../../css/home/skills.css";
import uxskills from "../../images/skillspics/uxskills.png";
import devskills from "../../images/skillspics/devskills.png";

const Skills = () => {
    return (
        <>
        <div className="list-skills regular">
            <img className="skills-img" id="img-uxskills" src={uxskills} alt="UX Skills" />
            <div className="skills-subsection">
                <h2 className="skills-subsection-title">User Empathy</h2>
                <p className="skills-subsection-text">I ensure people feel comfortable opening up about issues. I respect people and never drag them to an answer. I ask relevant questions and don’t probe if the people don’t feel safe. I let people tell me their needs rather than force it out of them.</p>
            </div>
            <div className="skills-subsection">
                <h2 className="skills-subsection-title">User Research</h2>
                <p className="skills-subsection-text">I use insights from the interviews I conducted to get a good idea of the main pain points that the people found, then narrow down the issues to what was mentioned the most. I narrowed down group travel needs to wanting to feel like a part of a community for example.</p>
            </div>
            <div className="skills-subsection">
                <h2 className="skills-subsection-title">Usability Testing</h2>
                <p className="skills-subsection-text">I design tasks around what I found to be important in the research phase. I respect people when testing a website or app to let them find issues that prevent them doing what I tasked them with. I allow tasks to be simple and relevant like signup for a travel app to guage usability.</p>
            </div>
        </div>
        <div className="list-skills reverse">
            <div className="skills-subsection">
                <h2 className="skills-subsection-title">Web Dev</h2>
                <p className="skills-subsection-text">I collaborate with other developers with different experience and knowledge to develop effective websites. For the GT SGA, I helped develop a website in HTML5/CSS3 and ExpressJS to replace the current JacketPages website.</p>
            </div>
            <div className="skills-subsection">
                <h2 className="skills-subsection-title">App Dev</h2>
                <p className="skills-subsection-text">I modularize and organize code to ensure my app uses reusable and intuitive code. I developed educational apps to teach children science topics such as simple machines and grammar topics like nouns using a seamless development system.</p>
            </div>
            <div className="skills-subsection">
                <h2 className="skills-subsection-title">Back End Dev</h2>
                <p className="skills-subsection-text">I keep up-to-date with many technologies to improve the quality of the code and collaborate with front end developers to ensure quality products get developed. At AT&T, I worked with other engineers to create APIs to let users of those APIs add data to tables easily.</p>
            </div>
            <img className="skills-img" id="img-devskills" src={devskills} alt="Dev Skills" />
        </div>
        </>
    );
};

export default Skills;