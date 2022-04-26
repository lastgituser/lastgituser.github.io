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

const CaseStudyHope2Restoration = () => {
    return (
        <>
            <div className="bg-mockup-img-h2r-1 hidden"></div>
            <div className="bg-mockup-img-h2r-2 hidden"></div>
            <div className="bg-casestudy-h2r-light hidden"></div>
            <div className="dark:bg-casestudy-h2r-dark hidden"></div>
            <div className="bg-casestudy-h2r-prioritymatrix hidden"></div>
            <div className="bg-casestudy-h2r-userpersona hidden"></div>
            <Hero title="Hope2Restoration" titleWidth="36rem" mockup="h2r" />
            <BTF>
                    <Content colorCode="h2r" textOnly={true}>
                        <Text>
                            <Title>About the Project</Title>
                            <TwoCol>This project was my fifth project for the Georgia Tech Bootcamp. We were all tasked with redesigning a website for a cause or create a new app or website. The project was a group project, and I worked with Kelly Jewell and Johnny Thomas. All three of us were responsible for empathizing and ideating, prototyping, and testing, and we developed the website. We decided to redesign the website for a non-profit for homeless people named Hope2Restoration. For research, we conducted usability tests to learn how to improve the functionality. To help donators donate to Hope2Restoration faster, we streamlined donate path and redesigned the website.</TwoCol>
                            <TwoCol>Our final design for the app came as inspiration from other nonprofit websites. Our research informed me that people wanted an easy option to donate and volunteer. People also found the website difficult to navigate and information hard to find. We decided to reorganize the information in the website and designed pages to streamline the navigation.</TwoCol>
                        </Text>
                    </Content>
                    <Content colorCode="h2r" problem={true}>
                        <Text>
                            <TwoCol><Bold>Problem</Bold></TwoCol>
                            <TwoCol>The Hope2Restoration website isn't easy to use nor is it easy to access crucial information to volunteer and donate, and Hope2Restoration isn't getting enough volunteers and donations.</TwoCol>
                        </Text>
                        <Text>
                            <TwoCol><Bold>Solution</Bold></TwoCol>
                            <TwoCol>We added a Donate button on the homepage, an easier and simpler volunteer path, and redesigned the information to make it easier to find a way to donate and learn about Hope2Restoration's mission to help homeless people.</TwoCol>
                        </Text>
                        <Text>
                            <TwoCol><Bold>Role</Bold></TwoCol>
                            <TwoCol>I performed research, prototyping, testing, and development of the website and prototypes with both my team members.</TwoCol>
                        </Text>
                        <Text>
                            <TwoCol><Bold>Tools</Bold></TwoCol>
                            <TwoCol>We used Zoom to conduct the research and testing, Miro to ideate, and Figma to create our prototypes, and Visual Studio Code to develop the website.</TwoCol>
                        </Text>
                    </Content>
                    <Content colorCode="h2r">
                        <ContentFiller />
                        <Text>
                            <Title>Research</Title>
                            <OneCol>We started research by brainstorming who could use the website. We figured that users would be donators who had experience being homeless and empathized with the homeless experience. We contacted the stakeholder to get a firsthand account of what the organization needs, who mainly volunteers, and who uses the website. We then tested the original website with six people, and they found three main issues: the website is <Bold>difficult to use</Bold>, there is <Bold>no Donation button</Bold>, and the website's <Bold>information is written and organized poorly</Bold>. We decided to focus our new prototype on a design that keeps the Donator persona in mind.</OneCol>
                        </Text>
                        <Numbers>
                            <Number number={1} desc="stakeholder interview" colorCode="h2r" />
                            <Number number={4} desc="prototypes" colorCode="h2r" />
                            <Number number={6} desc="usability tests" colorCode="h2r" />
                        </Numbers>
                    </Content>
                    <Content colorCode="h2r">
                        <ContentFiller />
                        <Img src="casestudy-h2r-userpersona" dim="h-[16rem] w-[16rem] sm:h-[20rem] sm:w-[30rem]"></Img>
                        <Text>
                            <Title>Definition</Title>
                            <OneCol title={true}><Bold>User Insight</Bold></OneCol>
                            <OneCol>Dale, a formerly homeless donator who cares about helping the homeless, needs to trust H2R and an easy way to donate or volunteer because people who empathize with difficulties want to quickly help out without too many hurdles.</OneCol>
                            <OneCol title={true}><Bold>Problem Statement</Bold></OneCol>
                            <OneCol>H2R aids the homeless population, domestic violence survivors, and people coming out of incarceration through donations, resume assessments, or advocacy in the job and house search. They need donations and volunteers, and rely on word of mouth. Testers described the website as busy and frustrating, and were unsure of how to volunteer for and contact them. How might we create more direct and humanizing navigation, an intuitive user flow, and a clean layout, to display H2R's authenticity, compassion, and abilities?</OneCol>
                        </Text>
                    </Content>
                    <Content colorCode="h2r">
                        <ContentFiller />
                        <Text>
                            <Title>Ideation</Title>
                            <OneCol>Users noted that the website wasn't easy to navigate, so we figured that reorganizing the information would help users the best. Users liked knowing where the money was going, but didn't like that the information about the donations was difficult to find. We decided to add a Donate and Volunteer button in the front of the website, clean up the interface of the website, and reorganize the information on the website.</OneCol>
                        </Text>
                        <Img src="casestudy-h2r-prioritymatrix" dim="h-[12rem] w-[16rem] sm:w-[30rem] sm:h-[20rem]"></Img>
                    </Content>
                    <Content colorCode="h2r">
                        <ContentFiller />
                        <Img>
                            <Prototype title="h2r-proto-desktop" desktop={true} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FM5BM55E4loMk1ZoIkH7VpB%2FH2R-GROUP-PROJECT-(Copy)%3Fpage-id%3D118%253A475%26node-id%3D118%253A592%26viewport%3D241%252C48%252C0.05%26scaling%3Dscale-down-width%26starting-point-node-id%3D118%253A592"></Prototype>
                        </Img>
                        <Text>
                            <Title>Prototyping</Title>
                            <OneCol>To prototype, we decided to make the color scheme lighter to change the tone of the website from dreary to hopeful and friendly, and simplified the information. We split up the information into pages that made it easier to access volunteer and donate options. We built out a style guide with the elements we put in the prototype. We built out a flow to volunteer for Hope2Restoration.</OneCol>
                        </Text>
                    </Content>
                    <Content colorCode="h2r">
                        <ContentFiller />
                        <Text>
                            <Title>Testing</Title>
                            <OneCol>Our testers noted the website was unintuitive, so we tested the same tasks on the new prototype. We built out flows to volunteer, donate, and call for H2R, and tested them with new testers. Testing was very useful and helped find issues to fix. Testers liked the information organization and site design. Users more easily completed the tasks with the new layout, which increased our confidence regarding how we designed the website.</OneCol>
                        </Text>
                        <Img>
                            <Prototype title="h2r-test-desktop" desktop={true} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FM5BM55E4loMk1ZoIkH7VpB%2FH2R-GROUP-PROJECT-(Copy)%3Fpage-id%3D183%253A251%26node-id%3D179%253A270%26viewport%3D241%252C48%252C0.03%26scaling%3Dscale-down-width%26starting-point-node-id%3D179%253A270"></Prototype>
                        </Img>
                    </Content>
                    <Content colorCode="h2r" textOnly={true}>
                        <Text>
                            <Title>Final Thoughts & Conclusion</Title>
                            <TwoCol>Hope2Restoration works incredibly hard to help homeless people, and they've gained a reputation among many other reputable organizations. The current website is in need of a redesign. In the future, we'd like to build out the entire site in a CMS so H2R doesn't need to contact a dev team to manage content. We will present our new design to Hope2Restoration.</TwoCol>
                        </Text>
                    </Content>
            </BTF>
        </>
    );
};

export default CaseStudyHope2Restoration;