import BTF from "../../components/casestudies/BTF";
import Content from "../../components/casestudies/Content";
import Hero from "../../components/casestudies/Hero";
import Text from "../../components/casestudies/Text";
import Title from "../../components/casestudies/Title";
import TwoCol from "../../components/casestudies/TwoCol";
import OneCol from "../../components/casestudies/OneCol";
import Bold from "../../components/casestudies/Bold";
import Numbers from "../../components/casestudies/Numbers";
import Number from "../../components/casestudies/Number";
import Img from "../../components/casestudies/Img";
import Prototype from "../../components/casestudies/Prototype";
import ContentFiller from "../../components/casestudies/ContentFiller";

const CaseStudyMyPetPal = () => {
    return (
        <>
            <div className="bg-mockup-img-mpp-1 hidden"></div>
            <div className="bg-mockup-img-mpp-2 hidden"></div>
            <div className="bg-casestudy-mpp-light hidden"></div>
            <div className="dark:bg-casestudy-mpp-dark hidden"></div>
            <div className="bg-casestudy-mpp-empathymap hidden"></div>
            <div className="bg-casestudy-mpp-userjourney hidden"></div>
            <Hero title="MyPetPal" titleWidth="30rem" mockup="mpp" />
            <BTF>
                    <Content colorCode="mpp" textOnly={true}>
                        <Text>
                            <Title>About the Project</Title>
                            <TwoCol>This project was my second project for the the Georgia Tech & Trilogy Ed Bootcamp. We were split into groups of three or four and tasked with brainstorming ideas for an app. I was in a group of three, and I mainly worked on the ideation, but we all worked on every stage of the project. We decided to create an app for pet owners to schedule and assign pet care to friends. For research, we interviewed five pet owners about what pet care they engage in and what they would like to be able to do to take care of their pets. To let pet owners better manage pet care, we designed an app to schedule, track, and assign tasks for pet care.</TwoCol>
                            <TwoCol>Our design for the app came as inspiration from scheduling apps. Our competitor analysis informed us that there weren't many apps that provided pet care task sharing, so we designed one. People use calendar apps for making schedules, so we designed our app after calendar apps. Calendar apps can't assign tasks to people in a social network, so we decided to change that.</TwoCol>
                        </Text>
                    </Content>
                    <Content colorCode="mpp" problem={true}>
                        <Text>
                            <TwoCol><Bold>Problem</Bold></TwoCol>
                            <TwoCol>Pet owners have issues digitally sharing, tracking, and assigning, the daily task and responsibilities of pet ownership with other caretakers.</TwoCol>
                        </Text>
                        <Text>
                            <TwoCol><Bold>Solution</Bold></TwoCol>
                            <TwoCol>The solution is a social media app to allow quick communication, agreement, and purchase of trip expenses for group trips.</TwoCol>
                        </Text>
                        <Text>
                            <TwoCol><Bold>Role</Bold></TwoCol>
                            <TwoCol>I was the sole UX researcher and designer on the project.</TwoCol>
                        </Text>
                        <Text>
                            <TwoCol><Bold>Tools</Bold></TwoCol>
                            <TwoCol>I used Miro for my ideation and Figma for the prototype.</TwoCol>
                        </Text>
                        <Text>
                            <TwoCol><Bold>Team</Bold></TwoCol>
                            <TwoCol>My team was Keenan Poll, Andrew Puckett, and Akhil Kikkeri</TwoCol>
                        </Text>
                    </Content>
                    <Content colorCode="mpp">
                        <ContentFiller />
                        <Text>
                            <Title>Research</Title>
                            <OneCol>We began by brainstorming who our users would look like, and we imagined an older woman with several pets who lives with someone who takes care of her, so we filled out a proto-persona accordingly. To verify how realistic that model was, we drafted research objectives and questions to interview people.</OneCol>
                            <OneCol>We interviewed five pet owners, and they expressed anxieties about <Bold>keeping track of the completion of the tasks and ensuring the tasks get assigned appropriately</Bold>. We collected the interview insights into an affinity diagram in a Miro board. We narrowed down our potential users' motivation to <Bold>wanting to take care of their pets</Bold>. Pet owners were frustrated about <Bold>tight schedules, people not completing tasks, and losing freedom in their life</Bold>. We collected the insights into the pet owners' pain points and goals into an empathy map, then we concluded what the average user must be like into a user persona.</OneCol>
                        </Text>
                        <Numbers>
                            <Number colorCode="mpp" number={2} desc="prototypes" />
                            <Number colorCode="mpp" number={5} desc="one-to-one interviews" />
                            <Number colorCode="mpp" number={5} desc="usability tests" />
                        </Numbers>
                    </Content>
                    <Content colorCode="mpp">
                        <ContentFiller />
                        <Img src="casestudy-mpp-empathymap" dim="h-[12rem] w-[16rem] sm:h-[20rem] sm:w-[30rem]"></Img>
                        <Text>
                            <Title>Definition</Title>
                            <OneCol title={true}><Bold>User Insight</Bold></OneCol>
                            <OneCol>Pet owners with busy schedules and families need an organized way to tend to their pets' needs and split work evenly between family members, because taking care of pets and sharing responsibilities can be cumbersome and lead to pet neglect.</OneCol>
                            <OneCol title={true}><Bold>Problem Statement</Bold></OneCol>
                            <OneCol>The constant balancing act of everyday life for pet owners can be difficult. While the extra effort of caring for your pet is well worth the time, maintaining a healthy balance for both pets and their owners is never an easy task. Our app looks to provide a detailed schedule with customized reminders to ensure everyone's well-being.</OneCol>
                        </Text>
                    </Content>
                    <Content colorCode="mpp">
                        <ContentFiller />
                        <Text>
                            <Title>Ideation</Title>
                            <OneCol>Our interviewees reported wanting to delegate work to others, so we figured assignment of tasks to people would be important functionality to add to MyPetPal. To keep track of the tasks, we would need to add task list functionality, and to sort the tasks by date, we would need a calendar functionality. We decided to prioritize calendar, task list, and task assignment functionality and made all our wishful functionality later on the priority matrix.</OneCol>
                            <OneCol>MyPetPal will provide users a way to give people tasks for pet care, keep track of them, and organize them by date. With that information, we created a user scenario, storyboard and user journey map keeping in mind that users will feel frustrated by their lives, schedule a task for someone, and feels happy when they see that task completed.</OneCol>
                            <OneCol title={true}><Bold>Value Proposition</Bold></OneCol>
                            <OneCol>MyPetPal is the quick and easy way for busy pet owners to manage their pet’s care. From scheduling reminders, to assigning responsibilities, and even tracking your pet care progress, MyPetPal puts it all in one easy to use app. MyPetPal aims to improve the well being of both pets and their owners.</OneCol>
                        </Text>
                        <Img src="casestudy-mpp-userjourney" dim="h-[12rem] w-[16rem] sm:h-[20rem] sm:w-[30rem]"></Img>
                    </Content>
                    <Content colorCode="mpp">
                        <ContentFiller />
                        <Img>
                            <Prototype title="mpp-wireframing-mobile" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIGoGaD8XLQHWfEMrwzH13M%2FMyPetPal%3Fpage-id%3D60%253A526%26node-id%3D61%253A1172%26viewport%3D241%252C48%252C0.13%26scaling%3Dscale-down%26starting-point-node-id%3D61%253A1172"></Prototype>
                        </Img>
                        <Text>
                            <Title>Wireframing</Title>
                            <OneCol>We found a few apps that let users keep track of pet care or set reminders for completion of tasks. We investigated them, and discovered no app does all pet care, reminding, and task list functionality together. To design our wireframes, we focused on just the "add a task" functionality because we figured it was the most important function to have in MyPetPal. If a user wants to add a task, they can press an add button, fill out a form, then see the new task added in the calendar view. We created a user flow, sketched screens individually, then combined them into a design that we created a low fidelity prototype from. We refined that into create a mid fidelity prototype and refined that.</OneCol>
                        </Text>
                    </Content>
                    <Content colorCode="mpp">
                        <ContentFiller />
                        <Text>
                            <Title>Testing</Title>
                            <OneCol>We wouldn't have been sure that our design worked if we just designed and didn't test our design. We asked pet owners to test our prototype, and six testers gave us many insights into issues with our prototype. The testing informed us that pet owners wanted the keyboard to disappear, saved locations to avoid typing in the locations every time, and clearer language. We collected insights into our tests, sorted them by priority, and iterated our prototype. We created a high fidelity prototype with those insights.</OneCol>
                        </Text>
                        <Img>
                            <Prototype title="mpp-testing-mobile" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIGoGaD8XLQHWfEMrwzH13M%2FMyPetPal%3Fpage-id%3D120%253A1015%26node-id%3D120%253A2650%26viewport%3D241%252C48%252C0.32%26scaling%3Dcontain%26starting-point-node-id%3D120%253A2650%26hotspot-hints%3D0"></Prototype>
                        </Img>
                    </Content>
                    <Content colorCode="mpp" textOnly={true}>
                        <ContentFiller />
                        <Text>
                            <Title>Final Thoughts & Conclusion</Title>
                            <TwoCol>Looking at the future of this app, we would like to focus on expanding the app. A few features we would focus on would be a way to connect with other pet owners with similar interests. For example, maybe a group for canary lovers of Cobb County. Another feature would be a map of local pet spots, whether that'd be a great pet store, or a dog friendly restaurant.</TwoCol>
                            <TwoCol>We also definitely learned a lot from this project. One of the main takeaways we have is that everyone thinks differently. What makes sense to one person might not make sense to another. One example of this was using the words “daily” vs “weekly” when choosing to repeat an event in our app. For some, weekly meant once a week, and for others weekly meant to choose specific days of the week. Not only did we experience this with our user tests, but even with each other on our team. When one of us would suggest a way of doing something, thinking it's a great idea, might not make sense to the rest of us.</TwoCol>
                        </Text>
                    </Content>
            </BTF>
        </>
    );
};

export default CaseStudyMyPetPal;