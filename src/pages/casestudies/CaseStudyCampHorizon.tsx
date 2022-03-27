const CaseStudyCampHorizon = () => {
    return (
        <>
            <section className="hero hero-cs" id="hero-ch">
                <div className="mockup" id="mockup-left"></div>
                <div className="hero-title-back" id="hero-ch-title-back"></div>
                <h1 className="hero-title" id="hero-ch-title">Camp Horizon</h1>
                <div className="mockup" id="mockup-right"></div>
            </section>
            <section className="btf btf-cs">
                <div className="btf-container">
                    <div className="content-textonly">
                        <div className="text">
                            <h2 className="text-title">About the Project</h2>
                            <p className="text-desc-2col">This project was my fourth project for the Georgia Tech Bootcamp. We were all tasked with redesigning a non-profit website. The project was a group project, and I worked with Courtney Williams and Ryan Fitzpatrick. All three of us were responsible for empathizing and ideating, prototyping, and testing. We decided to each redesign the Camp Horizon website. For research, we conducted usability tests to learn how to improve the functionality. To help donators donate to Camp Horizon more easily, we added a donate button and redesigned the website.</p>
                            <p className="text-desc-2col">Our final design for the app came as inspiration from other nonprofit websites. Our research informed me that people wanted an easy option to donate and volunteer. People also found the information on each webpage confusing and the website too wordy. We decided to put volunteer and donate options in the home page and make the information easier to read and access.</p>
                        </div>
                    </div>
                    <div className="content" id="content-problem">
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Problem</span></p>
                            <p className="text-desc-2col">The Camp Horizon website isn't easy to use, and Camp Horizon isn't getting enough volunteers and donations.</p>
                        </div>
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Solution</span></p>
                            <p className="text-desc-2col">We added Volunteer and Donate buttons on the homepage and redesigned the information to make it easier to find information on donation tiers and Camp Horizon's mission to help foster children.</p>
                        </div>
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Role</span></p>
                            <p className="text-desc-2col">I performed research, prototyping, and testing with both my team members.</p>
                        </div>
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Tools</span></p>
                            <p className="text-desc-2col">We used Zoom to conduct the research and testing, Miro to ideate, and Figma to create our prototypes.</p>
                        </div>
                    </div>
                    <div className="content" id="content-research">
                        <div className="text" id="text-research">
                            <h2 className="text-title">Research</h2>
                            <p className="text-desc-1col">We started research by brainstorming who could use the website. We figured that users would either be a guardian who wants to adopt a kid who wants to know if Camp Horizon helps kids, a donator who wants to donate to support Camp Horizon, and a volunteer who wants to volunteer at Camp Horizon to care for the foster kids. We then tested the original website with five people, and they found three main issues: the website is <span className="bold">too wordy</span>, there is <span className="bold">no Donation button</span>, and the website's <span className="bold">information is organized poorly</span>. We decided to focus our new prototype given the Donator persona.</p>
                        </div>
                        <div className="numbers" id="numbers-research">
                            <div className="number">
                                <h1 className="number-num">5</h1>
                                <p className="number-desc">one-to-one interviews</p>
                            </div>
                            <div className="number">
                                <h1 className="number-num">4</h1>
                                <p className="number-desc">prototypes</p>
                            </div>
                            <div className="number">
                                <h1 className="number-num">7</h1>
                                <p className="number-desc">usability tests</p>
                            </div>
                        </div>
                    </div>
                    <div className="content" id="content-def">
                        <div className="img" id="img-def"></div>
                        <div className="text" id="text-def">
                            <h2 className="text-title">Definition</h2>
                            <p className="text-desc-1col" id="subhead-ui"><span className="bold">User Insight</span></p>
                            <p className="text-desc-1col">When researching organizations that help foster children, a potential donor/volunteer finds the Camp Horizon website confusing and he fears the organization may be untrustworthy. He worries that the money that he donates won't reach the children that he wants to help. How might we redesign the Camp Horizon website to be more intuitive, actionable, and trustworthy for potential donors and volunteers?</p>
                            <p className="text-desc-1col" id="subhead-ps"><span className="bold">Problem Statement</span></p>
                            <p className="text-desc-1col">A philanthropist who grew up as a foster child now wants to give back by volunteering or donating to an organization that helps foster kids. He discovered Camp Horizon online but finds the website confusing and he fears the organization may be untrustworthy. He worries that the money that he donates won't reach the children that he wants to help. He wishes the website was more clear and concise and the volunteer and donate actions were more easily accessible.</p>
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
                            <p className="text-desc-1col">To prototype, we decided to make the color scheme darker to make it look more authoritative, but keep most of the information the same. We made the donation tier information prominent on the donations page, and we made both the mobile and desktop have a Donation modal to donate. We built out a style guide with the elements we put in the prototype. We built out a flow to donate to Camp Horizon.</p>
                        </div>
                        <div className="img" id="img-proto">
                            <iframe title="ch-proto-desktop" className="img-figma-desktop" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTA8Zeq39hwxJ1s54nRVpkW%2FPrototypes%3Fnode-id%3D71%253A2471%26starting-point-node-id%3D71%253A2471%26scaling%3Dscale-down" allowFullScreen></iframe>
                            <iframe title="ch-proto-mobile" className="img-figma-mobile" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTA8Zeq39hwxJ1s54nRVpkW%2FPrototypes%3Fnode-id%3D71%253A2471%26starting-point-node-id%3D71%253A2471%26scaling%3Dscale-down" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="content" id="content-test">
                        <div className="img" id="img-test">
                            <iframe title="ch-test-desktop" className="img-figma-desktop" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTA8Zeq39hwxJ1s54nRVpkW%2FPrototypes%3Fnode-id%3D71%253A2471%26starting-point-node-id%3D71%253A2471%26scaling%3Dscale-down" allowFullScreen></iframe>
                            <iframe title="ch-test-mobile" className="img-figma-mobile" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTA8Zeq39hwxJ1s54nRVpkW%2FPrototypes%3Fkind%3D%26node-id%3D135%253A1089%26page-id%3D132%253A759%26scaling%3Dscale-down%26starting-point-node-id%3D135%253A1089%26viewport%3D241%252C48%252C0.2" allowFullScreen></iframe>
                        </div>
                        <div className="text" id="text-test">
                            <h2 className="text-title">Testing</h2>
                            <p className="text-desc-1col">Our testers noted the donation option to be the most useful, so we tested that improvement. We built out a flow to donate $600 to Camp Horizon to test with users. Testing was very useful and helped find issues to fix. Testers liked the site structure and design. Every user successfully completed the task, which made us confident about how we designed the homepage.</p>
                        </div>
                    </div>
                    <div className="content" id="content-fp">
                    </div>
                    <div className="content-textonly" id="content-textonly-final">
                        <div className="text">
                            <h2 className="text-title">Final Thoughts & Conclusion</h2>
                            <p className="text-desc-2col">Camp Horizon is an incredibly noble and worthwhile organization. The current Camp Horizon site is in need of a redesign. In the future, we’d like to build out the entire site and present this to Camp Horizon as a free potential design upgrade.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CaseStudyCampHorizon;