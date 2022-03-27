const CaseStudyMyPetPal = () => {
    return (
        <>
            <section className="hero hero-cs" id="hero-mpp">
                <div className="mockup" id="mockup-left"></div>
                <div className="hero-title-back" id="hero-mpp-title-back"></div>
                <h1 className="hero-title" id="hero-mpp-title">MyPetPal</h1>
                <div className="mockup" id="mockup-right"></div>
            </section>
            <section className="btf btf-cs" id="btf-mpp">
                <div className="btf-container">
                    <div className="content-textonly">
                        <div className="text">
                            <h2 className="text-title">About the Project</h2>
                            <p className="text-desc-2col">This project was my second project for the the Georgia Tech & Trilogy Ed Bootcamp. We were split into groups of three or four and tasked with brainstorming ideas for an app. I was in a group of three, and I mainly worked on the ideation, but we all worked on every stage of the project. We decided to create an app for pet owners to schedule and assign pet care to friends. For research, we interviewed five pet owners about what pet care they engage in and what they would like to be able to do to take care of their pets. To let pet owners better manage pet care, we designed an app to schedule, track, and assign tasks for pet care.</p>
                            <p className="text-desc-2col">Our design for the app came as inspiration from scheduling apps. Our competitor analysis informed us that there weren't many apps that provided pet care task sharing, so we designed one. People use calendar apps for making schedules, so we designed our app after calendar apps. Calendar apps can't assign tasks to people in a social network, so we decided to change that.</p>
                        </div>
                    </div>
                    <div className="content" id="content-problem">
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Problem</span></p>
                            <p className="text-desc-2col">Pet owners have issues digitally sharing, tracking, and assigning, the daily task and responsibilities of pet ownership with other caretakers.</p>
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
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Team</span></p>
                            <p className="text-desc-2col">My team was Keenan Poll, Andrew Puckett, and Akhil Kikkeri</p>
                        </div>
                    </div>
                    <div className="content" id="content-research">
                        <div className="text" id="text-research">
                            <h2 className="text-title">Research</h2>
                            <p className="text-desc-1col">We began by brainstorming who our users would look like, and we imagined an older woman with several pets who lives with someone who takes care of her, so we filled out a proto-persona accordingly. To verify how realistic that model was, we drafted research objectives and questions to interview people.</p>
                            <p className="text-desc-1col">We interviewed five pet owners, and they expressed anxieties about <span className="bold">keeping track of the completion of the tasks and ensuring the tasks get assigned appropriately</span>. We collected the interview insights into an affinity diagram in a Miro board. We narrowed down our potential users' motivation to <span className="bold">wanting to take care of their pets</span>. Pet owners were frustrated about <span className="bold">tight schedules, people not completing tasks, and losing freedom in their life</span>. We collected the insights into the pet owners' pain points and goals into an empathy map, then we concluded what the average user must be like into a user persona.</p>
                        </div>
                        <div className="numbers" id="numbers-research">
                            <div className="number">
                                <h1 className="number-num">2</h1>
                                <p className="number-desc">prototypes</p>
                            </div>
                            <div className="number">
                                <h1 className="number-num">5</h1>
                                <p className="number-desc">one-to-one interviews</p>
                            </div>
                            <div className="number">
                                <h1 className="number-num">5</h1>
                                <p className="number-desc">usability tests</p>
                            </div>
                        </div>
                    </div>
                    <div className="content" id="content-def">
                        <div className="img" id="img-def"></div>
                        <div className="text" id="text-def">
                            <h2 className="text-title">Definition</h2>
                            <p className="text-desc-1col" id="subhead-ui"><span className="bold">User Insight</span></p>
                            <p className="text-desc-1col">Pet owners with busy schedules and families need an organized way to tend to their pets' needs and split work evenly between family members, because taking care of pets and sharing responsibilities can be cumbersome and lead to pet neglect.</p>
                            <p className="text-desc-1col" id="subhead-ps"><span className="bold">Problem Statement</span></p>
                            <p className="text-desc-1col">The constant balancing act of everyday life for pet owners can be difficult. While the extra effort of caring for your pet is well worth the time, maintaining a healthy balance for both pets and their owners is never an easy task. Our app looks to provide a detailed schedule with customized reminders to ensure everyone's well-being.</p>
                        </div>
                    </div>
                    <div className="content" id="content-idea">
                        <div className="text" id="text-idea">
                            <h2 className="text-title">Ideation</h2>
                            <p className="text-desc-1col">Our interviewees reported wanting to delegate work to others, so we figured assignment of tasks to people would be important functionality to add to MyPetPal. To keep track of the tasks, we would need to add task list functionality, and to sort the tasks by date, we would need a calendar functionality. We decided to prioritize calendar, task list, and task assignment functionality and made all our wishful functionality later on the priority matrix.</p>
                            <p className="text-desc-1col">MyPetPal will provide users a way to give people tasks for pet care, keep track of them, and organize them by date. With that information, we created a user scenario, storyboard and user journey map keeping in mind that users will feel frustrated by their lives, schedule a task for someone, and feels happy when they see that task completed.</p>
                            <p className="text-desc-1col" id="subhead-vp"><span className="bold">Value Proposition</span></p>
                            <p className="text-desc-1col">MyPetPal is the quick and easy way for busy pet owners to manage their pet’s care. From scheduling reminders, to assigning responsibilities, and even tracking your pet care progress, MyPetPal puts it all in one easy to use app. MyPetPal aims to improve the well being of both pets and their owners.</p>
                        </div>
                        <div className="img" id="img-idea"></div>
                    </div>
                    <div className="content" id="content-wireframing">
                        <div className="img" id="img-wireframing">
                            <iframe title="mpp-wireframing-mobile" className="img-figma-mobile" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIGoGaD8XLQHWfEMrwzH13M%2FMyPetPal%3Fpage-id%3D60%253A526%26node-id%3D61%253A1172%26viewport%3D241%252C48%252C0.13%26scaling%3Dscale-down%26starting-point-node-id%3D61%253A1172" allowFullScreen></iframe>
                        </div>
                        <div className="text" id="text-wireframing">
                            <h2 className="text-title">Wireframing</h2>
                            <p className="text-desc-1col">We found a few apps that let users keep track of pet care or set reminders for completion of tasks. We investigated them, and discovered no app does all pet care, reminding, and task list functionality together. To design our wireframes, we focused on just the "add a task" functionality because we figured it was the most important function to have in MyPetPal. If a user wants to add a task, they can press an add button, fill out a form, then see the new task added in the calendar view. We created a user flow, sketched screens individually, then combined them into a design that we created a low fidelity prototype from. We refined that into create a mid fidelity prototype and refined that.</p>
                        </div>
                    </div>
                    <div className="content" id="content-testing">
                        <div className="img" id="img-testing">
                            <iframe title="mpp-testing-mobile" className="img-figma-mobile" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIGoGaD8XLQHWfEMrwzH13M%2FMyPetPal%3Fpage-id%3D120%253A1015%26node-id%3D120%253A2650%26viewport%3D241%252C48%252C0.32%26scaling%3Dcontain%26starting-point-node-id%3D120%253A2650%26hotspot-hints%3D0" allowFullScreen></iframe>
                        </div>
                        <div className="text" id="text-testing">
                            <h2 className="text-title">Testing</h2>
                            <p className="text-desc-1col">We wouldn't have been sure that our design worked if we just designed and didn't test our design. We asked pet owners to test our prototype, and six testers gave us many insights into issues with our prototype. The testing informed us that pet owners wanted the keyboard to disappear, saved locations to avoid typing in the locations every time, and clearer language. We collected insights into our tests, sorted them by priority, and iterated our prototype. We created a high fidelity prototype with those insights.</p>
                        </div>
                    </div>
                    <div className="content-textonly" id="content-textonly-final">
                        <div className="text">
                            <h2 className="text-title">Final Thoughts & Conclusion</h2>
                            <p className="text-desc-2col">Looking at the future of this app, we would like to focus on expanding the app. A few features we would focus on would be a way to connect with other pet owners with similar interests. For example, maybe a group for canary lovers of Cobb County. Another feature would be a map of local pet spots, whether that'd be a great pet store, or a dog friendly restaurant.</p>
                            <p className="text-desc-2col">We also definitely learned a lot from this project. One of the main takeaways we have is that everyone thinks differently. What makes sense to one person might not make sense to another. One example of this was using the words “daily” vs “weekly” when choosing to repeat an event in our app. For some, weekly meant once a week, and for others weekly meant to choose specific days of the week. Not only did we experience this with our user tests, but even with each other on our team. When one of us would suggest a way of doing something, thinking it's a great idea, might not make sense to the rest of us.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CaseStudyMyPetPal;