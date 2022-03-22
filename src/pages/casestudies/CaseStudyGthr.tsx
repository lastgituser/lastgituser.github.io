import "../../css/work/casestudies/hero.css";
import "../../css/work/casestudies/content.css";
import "../../css/work/casestudies/index.css";
import "../../css/work/casestudies/gthr/hero.css";
import "../../css/work/casestudies/gthr/content.css";

const CaseStudyGthr = () => {
    return (
        <>
            <section className="hero hero-cs" id="hero-gthr">
                <div className="mockup" id="mockup-left"></div>
                <div className="hero-title-back" id="hero-gthr-title-back"></div>
                <h1 className="hero-title" id="hero-gthr-title">gthr</h1>
                <div className="mockup" id="mockup-right"></div>
            </section>
            <section className="btf btf-cs" id="btf-gthr">
                <div className="btf-container">
                    <div className="content-textonly">
                        <div className="text">
                            <h2 className="text-title">About the Project</h2>
                            <p className="text-desc-2col">This project was my first project for the Georgia Tech Bootcamp. We were all tasked with coming up with an idea for a travel app. The project was individual, and each of us were responsible for empathizing, ideating, prototyping, and testing. I decided to design a product to help people who want to travel in a group more quickly, cheaply, and easily gather and travel. For research, I interviewed 5 travelers about their travel motivations, cohorts and destinations. To help people find trips to help their loneliness, I designed a travel social media app that provides a feed of trips sorted by preference. My design for the app came as inspiration from social media, travel, and ride-sharing apps. My research informed me that people traveled in groups to help their loneliness. People generally visit social media apps for their loneliness, but the apps also fail to provide a meaningful connection and instead feed into insecurities. I decided to challenge that by letting people join a trip to feel connected.</p>
                        </div>
                    </div>
                    <div className="content" id="content-problem">
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Problem</span></p>
                            <p className="text-desc-2col">Travelers who prefer to travel in groups to many locations need a way to gather and go there efficiently. Travelers are often concerned with the collective costs, agreement on the destination and trip, and scheduling the trip.</p>
                        </div>
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Solution</span></p>
                            <p className="text-desc-2col">The solution is a social media app to allow quick communication, agreement, and purchase of trip expenses for group trips.</p>
                        </div>
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Role</span></p>
                            <p className="text-desc-2col">I was the sole UX researcher and designer on the project.</p>
                        </div>
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Tools</span></p>
                            <p className="text-desc-2col">I used Miro for my ideation and Figma for the prototype.</p>
                        </div>
                    </div>
                    <div className="content" id="content-research">
                        <div className="text" id="text-research">
                            <h2 className="text-title">Research</h2>
                            <p className="text-desc-1col">I started by brainstorming potential users of an app for group travel, and I imagined users would be young adults who want to travel the world with friends and family, so I filled out a proto-persona accordingly. To verify how realistic that model was and learn what group travelers realistically want, I drafted an interview plan to find out how group travelers decide to travel, choose their cohort, and choose their destinations. I interviewed five people to learn about group travelers, and they expressed two main anxieties: <span className="bold">deciding where to travel and finding the cheapest way to travel</span>. I organized my interview insights by category into a Miro board into an affinity diagram. I narrowed down the interviewees' motivation to <span className="bold">taking a meaningful trip to connect with people</span>. Users were mainly frustrated by <span className="bold">strict schedules, travel costs, and indecision of trip details</span>. I collected the insights into goals and pain points into an empathy map, then extrapolated demographics and psychographics into a user persona.</p>
                        </div>
                        <div className="numbers" id="numbers-research">
                            <div className="number">
                                <h1 className="number-num">5</h1>
                                <p className="number-desc">one-to-one interviews</p>
                            </div>
                            <div className="number">
                                <h1 className="number-num">3</h1>
                                <p className="number-desc">prototypes</p>
                            </div>
                            <div className="number">
                                <h1 className="number-num">5</h1>
                                <p className="number-desc">usability tests</p>
                            </div>
                        </div>
                    </div>
                    <div className="content" id="content-defidea">
                        <div className="img" id="img-defidea"></div>
                        <div className="text" id="text-defidea">
                            <h2 className="text-title">Definition & Ideation</h2>
                            <p className="text-desc-1col">The interviewees wanted to find good places to visit quickly and cheaply with their friends, so I thought gthr would include Uber and Meetup functionality. The social aspect of the app would require Facebook's social feed functionality including travel app functionality for the travel details. I decided to prioritize the functions already from Uber, Meetup, and Facebook first, wishful functions next, then functions that I thought few people would use. I slimmed the feature prioritization matrix down to focus on what I could realistically get done for a minimum viable product.</p>
                        </div>
                    </div>
                    <div className="content" id="content-wireframing">
                        <div className="text" id="text-wireframing">
                            <h2 className="text-title">Wireframing</h2>
                            <p className="text-desc-1col">If users weren't going to travel with friends with gthr, they'd probably use travel apps, social media apps, meetup apps, or ride-sharing apps.</p>
                            <p className="text-desc-1col">To design the wireframe, I focused on the "book a trip" functionality. If a user wished to join a trip, they can choose one from their feed, which is sorted by preferences, press a button, pay if needed, and jump into navigation for the trip. I made sketches of an app with a social feed of trips that can be joined with a ride-sharing-like functionality, then refined them into a low fidelity prototype in InVision. I then refined it into a slightly refined prototype in Figma.</p>
                        </div>
                        <div className="img" id="img-wireframing">
                            <iframe title="gthr-wireframing-mobile" className="img-figma-mobile" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJrHxQ7XhzabbbR9XM9cxLT%2FWireframing-(Copy)%3Fpage-id%3D400569%253A448%26node-id%3D400569%253A462%26viewport%3D241%252C48%252C0.05%26scaling%3Dscale-down%26starting-point-node-id%3D400569%253A462" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="content" id="content-testing">
                        <div className="img" id="img-testing">
                            <iframe title="gthr-testing-mobile" className="img-figma-mobile" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOtdYUzvbxOKOCjwuqFgJiX%2Fgthr%3Fpage-id%3D1042%253A4039%26node-id%3D1042%253A4040%26viewport%3D241%252C48%252C0.15%26scaling%3Dscale-down%26starting-point-node-id%3D1042%253A4040" allowFullScreen></iframe>
                        </div>
                        <div className="text" id="text-testing">
                            <h2 className="text-title">Testing</h2>
                            <p className="text-desc-1col">I moved on to testing whether users found it useful. After creating the wireframe and prototype, I recruited users to test my prototype. Testing from five testers informed me that the testers wanted an indicator of the user's progress, to see trip info before payment info, and a way to switch travel method during a trip. I collected insights from the tests, sorted them into priority, and iterated my user flow and prototype. I then made some design improvements to the high fidelity prototype.</p>
                        </div>
                    </div>
                    <div className="content-textonly">
                        <div className="text">
                            <h2 className="text-title">Final Thoughts & Conclusion</h2>
                            <p className="text-desc-2col">I've learned that my idea is much bigger than I thought it was going to be, and one set of iterations won't be enough to fix all the issues and add all the features. I'm not as good at user interviews or user tests as prototyping or ideation, and I can improve by practicing interviewing people and talking to more people for tests. Travel social media has a potential to become a bigger project involving multiple designers and developers, but I will add to it soon.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CaseStudyGthr;