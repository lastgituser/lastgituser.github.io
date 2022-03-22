import "../../css/work/casestudies/hero.css";
import "../../css/work/casestudies/content.css";
import "../../css/work/casestudies/index.css";
import "../../css/work/casestudies/h2r/hero.css";
import "../../css/work/casestudies/h2r/content.css";

const CaseStudyHope2Restoration = () => {
    return (
        <>
            <section className="hero hero-cs" id="hero-h2r">
                <div className="mockup" id="mockup-left"></div>
                <div className="hero-title-back" id="hero-h2r-title-back"></div>
                <h1 className="hero-title" id="hero-h2r-title">Hope2Restoration</h1>
                <div className="mockup" id="mockup-right"></div>
            </section>
            <section className="btf btf-cs" id="hero-h2r">
                <div className="btf-container">
                    <div className="content-textonly">
                        <div className="text">
                            <h2 className="text-title">About the Project</h2>
                            <p className="text-desc-2col">This project was my fifth project for the Georgia Tech Bootcamp. We were all tasked with redesigning a website for a cause or create a new app or website. The project was a group project, and I worked with Kelly Jewell and Johnny Thomas. All three of us were responsible for empathizing and ideating, prototyping, and testing, and we developed the website. We decided to redesign the website for a non-profit for homeless people named Hope2Restoration. For research, we conducted usability tests to learn how to improve the functionality. To help donators donate to Hope2Restoration faster, we streamlined donate path and redesigned the website.</p>
                            <p className="text-desc-2col">Our final design for the app came as inspiration from other nonprofit websites. Our research informed me that people wanted an easy option to donate and volunteer. People also found the website difficult to navigate and information hard to find. We decided to reorganize the information in the website and designed pages to streamline the navigation.</p>
                        </div>
                    </div>
                    <div className="content" id="content-problem">
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Problem</span></p>
                            <p className="text-desc-2col">The Hope2Restoration website isn't easy to use nor is it easy to access crucial information to volunteer and donate, and Hope2Restoration isn't getting enough volunteers and donations.</p>
                        </div>
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Solution</span></p>
                            <p className="text-desc-2col">We added a Donate button on the homepage, an easier and simpler volunteer path, and redesigned the information to make it easier to find a way to donate and learn about Hope2Restoration's mission to help homeless people.</p>
                        </div>
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Role</span></p>
                            <p className="text-desc-2col">I performed research, prototyping, testing, and development of the website and prototypes with both my team members.</p>
                        </div>
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Tools</span></p>
                            <p className="text-desc-2col">We used Zoom to conduct the research and testing, Miro to ideate, and Figma to create our prototypes, and Visual Studio Code to develop the website.</p>
                        </div>
                    </div>
                    <div className="content" id="content-research">
                        <div className="text" id="text-research">
                            <h2 className="text-title">Research</h2>
                            <p className="text-desc-1col">We started research by brainstorming who could use the website. We figured that users would be donators who had experience being homeless and empathized with the homeless experience. We contacted the stakeholder to get a firsthand account of what the organization needs, who mainly volunteers, and who uses the website. We then tested the original website with six people, and they found three main issues: the website is <span className="bold">difficult to use</span>, there is <span className="bold">no Donation button</span>, and the website's <span className="bold">information is written and organized poorly</span>. We decided to focus our new prototype on a design that keeps the Donator persona in mind.</p>
                        </div>
                        <div className="numbers" id="numbers-research">
                            <div className="number">
                                <h1 className="number-num">1</h1>
                                <p className="number-desc">stakeholder interview</p>
                            </div>
                            <div className="number">
                                <h1 className="number-num">4</h1>
                                <p className="number-desc">prototypes</p>
                            </div>
                            <div className="number">
                                <h1 className="number-num">6</h1>
                                <p className="number-desc">usability tests</p>
                            </div>
                        </div>
                    </div>
                    <div className="content" id="content-def">
                        <div className="img" id="img-def"></div>
                        <div className="text" id="text-def">
                            <h2 className="text-title">Definition</h2>
                            <p className="text-desc-1col" id="subhead-ui"><span className="bold">User Insight</span></p>
                            <p className="text-desc-1col">Dale, a formerly homeless donator who cares about helping the homeless, needs to trust H2R and an easy way to donate or volunteer because people who empathize with difficulties want to quickly help out without too many hurdles.</p>
                            <p className="text-desc-1col" id="subhead-ps"><span className="bold">Problem Statement</span></p>
                            <p className="text-desc-1col">H2R aids the homeless population, domestic violence survivors, and people coming out of incarceration through donations, resume assessments, or advocacy in the job and house search. They need donations and volunteers, and rely on word of mouth. Testers described the website as busy and frustrating, and were unsure of how to volunteer for and contact them. How might we create more direct and humanizing navigation, an intuitive user flow, and a clean layout, to display H2R's authenticity, compassion, and abilities?</p>
                        </div>
                    </div>
                    <div className="content" id="content-idea">
                        <div className="img" id="img-idea"></div>
                        <div className="text" id="text-idea">
                            <h2 className="text-title">Ideation</h2>
                            <p className="text-desc-1col">Users noted that the website wasn't easy to navigate, so we figured that reorganizing the information would help users the best. Users liked knowing where the money was going, but didn't like that the information about the donations was difficult to find. We decided to add a Donate and Volunteer button in the front of the website, clean up the interface of the website, and reorganize the information on the website.</p>
                        </div>
                    </div>
                    <div className="content" id="content-proto">
                        <div className="text" id="text-proto">
                            <h2 className="text-title">Prototyping</h2>
                            <p className="text-desc-1col">To prototype, we decided to make the color scheme lighter to change the tone of the website from dreary to hopeful and friendly, and simplified the information. We split up the information into pages that made it easier to access volunteer and donate options. We built out a style guide with the elements we put in the prototype. We built out a flow to volunteer for Hope2Restoration.</p>
                        </div>
                        <div className="img" id="img-proto">
                            <iframe title="h2r-proto-desktop" className="img-figma-desktop" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FM5BM55E4loMk1ZoIkH7VpB%2FH2R-GROUP-PROJECT-(Copy)%3Fpage-id%3D118%253A475%26node-id%3D118%253A592%26viewport%3D241%252C48%252C0.05%26scaling%3Dscale-down-width%26starting-point-node-id%3D118%253A592" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="content" id="content-test">
                        <div className="img" id="img-test">
                            <iframe title="h2r-test-desktop" className="img-figma-desktop" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FM5BM55E4loMk1ZoIkH7VpB%2FH2R-GROUP-PROJECT-(Copy)%3Fpage-id%3D183%253A251%26node-id%3D179%253A270%26viewport%3D241%252C48%252C0.03%26scaling%3Dscale-down-width%26starting-point-node-id%3D179%253A270" allowFullScreen></iframe>
                        </div>
                        <div className="text" id="text-test">
                            <h2 className="text-title">Testing</h2>
                            <p className="text-desc-1col">Our testers noted the website was unintuitive, so we tested the same tasks on the new prototype. We built out flows to volunteer, donate, and call for H2R, and tested them with new testers. Testing was very useful and helped find issues to fix. Testers liked the information organization and site design. Users more easily completed the tasks with the new layout, which increased our confidence regarding how we designed the website.</p>
                        </div>
                    </div>
                    <div className="content" id="content-fp">
                    </div>
                    <div className="content-textonly" id="content-textonly-final">
                        <div className="text">
                            <h2 className="text-title">Final Thoughts & Conclusion</h2>
                            <p className="text-desc-2col">Hope2Restoration works incredibly hard to help homeless people, and they've gained a reputation among many other reputable organizations. The current website is in need of a redesign. In the future, we'd like to build out the entire site in a CMS so H2R doesn't need to contact a dev team to manage content. We will present our new design to Hope2Restoration.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CaseStudyHope2Restoration;