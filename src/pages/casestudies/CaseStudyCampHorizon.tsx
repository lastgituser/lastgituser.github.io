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

const CaseStudyCampHorizon = () => {
    return (
        <>
            <div className="bg-mockup-img-ch-1 hidden"></div>
            <div className="bg-mockup-img-ch-2 hidden"></div>
            <div className="bg-casestudy-ch-light hidden"></div>
            <div className="dark:bg-casestudy-ch-dark hidden"></div>
            <div className="bg-casestudy-ch-prioritymatrix hidden"></div>
            <div className="bg-casestudy-ch-userpersona hidden"></div>
            <Hero title="Camp Horizon" titleWidth="18rem" mockup="ch" />
            <BTF>
                    <Content colorCode="ch" textOnly={true}>
                        <Text>
                            <Title>About the Project</Title>
                            <TwoCol>This project was my fourth project for the Georgia Tech Bootcamp. We were all tasked with redesigning a non-profit website. The project was a group project, and I worked with Courtney Williams and Ryan Fitzpatrick. All three of us were responsible for empathizing and ideating, prototyping, and testing. We decided to each redesign the Camp Horizon website. For research, we conducted usability tests to learn how to improve the functionality. To help donators donate to Camp Horizon more easily, we added a donate button and redesigned the website.</TwoCol>
                            <TwoCol>Our final design for the app came as inspiration from other nonprofit websites. Our research informed me that people wanted an easy option to donate and volunteer. People also found the information on each webpage confusing and the website too wordy. We decided to put volunteer and donate options in the home page and make the information easier to read and access.</TwoCol>
                        </Text>
                    </Content>
                    <Content colorCode="ch" problem={true}>
                        <Text>
                            <TwoCol><Bold>Problem</Bold></TwoCol>
                            <TwoCol>The Camp Horizon website isn't easy to use, and Camp Horizon isn't getting enough volunteers and donations.</TwoCol>
                        </Text>
                        <Text>
                            <TwoCol><Bold>Solution</Bold></TwoCol>
                            <TwoCol>We added Volunteer and Donate buttons on the homepage and redesigned the information to make it easier to find information on donation tiers and Camp Horizon's mission to help foster children.</TwoCol>
                        </Text>
                        <Text>
                            <TwoCol><Bold>Role</Bold></TwoCol>
                            <TwoCol>I performed research, prototyping, and testing with both my team members.</TwoCol>
                        </Text>
                        <Text>
                            <TwoCol><Bold>Tools</Bold></TwoCol>
                            <TwoCol>We used Zoom to conduct the research and testing, Miro to ideate, and Figma to create our prototypes.</TwoCol>
                        </Text>
                    </Content>
                    <Content colorCode="ch">
                        <ContentFiller />
                        <Text>
                            <Title>Research</Title>
                            <OneCol>We started research by brainstorming who could use the website. We figured that users would either be a guardian who wants to adopt a kid who wants to know if Camp Horizon helps kids, a donator who wants to donate to support Camp Horizon, and a volunteer who wants to volunteer at Camp Horizon to care for the foster kids. We then tested the original website with five people, and they found three main issues: the website is <Bold>too wordy</Bold>, there is <Bold>no Donation button</Bold>, and the website's <Bold>information is organized poorly</Bold>. We decided to focus our new prototype given the Donator persona.</OneCol>
                        </Text>
                        <Numbers>
                            <Number colorCode="ch" number={5} desc="one-to-one interviews" />
                            <Number colorCode="ch" number={4} desc="prototypes" />
                            <Number colorCode="ch" number={7} desc="usability tests" />
                        </Numbers>
                    </Content>
                    <Content colorCode="ch">
                        <ContentFiller />
                        <Img src="casestudy-ch-userpersona" dim="h-[16rem] w-[16rem] sm:h-[30rem] sm:w-[30rem]"></Img>
                        <Text>
                            <Title>Definition</Title>
                            <OneCol title={true}><Bold>User Insight</Bold></OneCol>
                            <OneCol>When researching organizations that help foster children, a potential donor/volunteer finds the Camp Horizon website confusing and he fears the organization may be untrustworthy. He worries that the money that he donates won't reach the children that he wants to help. How might we redesign the Camp Horizon website to be more intuitive, actionable, and trustworthy for potential donors and volunteers?</OneCol>
                            <OneCol title={true}><Bold>Problem Statement</Bold></OneCol>
                            <OneCol>A philanthropist who grew up as a foster child now wants to give back by volunteering or donating to an organization that helps foster kids. He discovered Camp Horizon online but finds the website confusing and he fears the organization may be untrustworthy. He worries that the money that he donates won't reach the children that he wants to help. He wishes the website was more clear and concise and the volunteer and donate actions were more easily accessible.</OneCol>
                        </Text>
                    </Content>
                    <Content colorCode="ch">
                        <ContentFiller />
                        <Text>
                            <Title>Ideation</Title>
                            <OneCol>Users noted that the website wasn't easy to navigate, so we figured that reorganizing the information would help users the best. Users liked knowing where the money was going, but didn't like that the information about the donations was difficult to find. We decided to add a Donate and Volunteer button in the front of the website, clean up the interface of the website, and reorganize the information on the website.</OneCol>
                        </Text>
                        <Img src="casestudy-ch-prioritymatrix" dim="h-[16rem] w-[16rem] sm:h-[30rem] sm:w-[30rem]"></Img>
                    </Content>
                    <Content colorCode="ch">
                        <ContentFiller />
                        <Img>
                            <Prototype title="ch-proto-desktop" desktop={true} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTA8Zeq39hwxJ1s54nRVpkW%2FPrototypes%3Fnode-id%3D71%253A2471%26starting-point-node-id%3D71%253A2471%26scaling%3Dscale-down"></Prototype>
                            <Prototype title="ch-proto-mobile" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTA8Zeq39hwxJ1s54nRVpkW%2FPrototypes%3Fnode-id%3D71%253A2471%26starting-point-node-id%3D71%253A2471%26scaling%3Dscale-down"></Prototype>
                        </Img>
                        <Text>
                            <Title>Prototyping</Title>
                            <OneCol>To prototype, we decided to make the color scheme darker to make it look more authoritative, but keep most of the information the same. We made the donation tier information prominent on the donations page, and we made both the mobile and desktop have a Donation modal to donate. We built out a style guide with the elements we put in the prototype. We built out a flow to donate to Camp Horizon.</OneCol>
                        </Text>
                    </Content>
                    <Content colorCode="ch">
                        <ContentFiller />
                        <Text>
                            <Title>Testing</Title>
                            <OneCol>Our testers noted the donation option to be the most useful, so we tested that improvement. We built out a flow to donate $600 to Camp Horizon to test with users. Testing was very useful and helped find issues to fix. Testers liked the site structure and design. Every user successfully completed the task, which made us confident about how we designed the homepage.</OneCol>
                        </Text>
                        <Img>
                            <Prototype title="ch-test-desktop" desktop={true} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTA8Zeq39hwxJ1s54nRVpkW%2FPrototypes%3Fnode-id%3D71%253A2471%26starting-point-node-id%3D71%253A2471%26scaling%3Dscale-down"></Prototype>
                            <Prototype title="ch-test-mobile" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTA8Zeq39hwxJ1s54nRVpkW%2FPrototypes%3Fkind%3D%26node-id%3D135%253A1089%26page-id%3D132%253A759%26scaling%3Dscale-down%26starting-point-node-id%3D135%253A1089%26viewport%3D241%252C48%252C0.2"></Prototype>
                        </Img>
                    </Content>
                    <Content colorCode="ch" textOnly={true}>
                        <Text>
                            <Title>Final Thoughts & Conclusion</Title>
                            <TwoCol>Camp Horizon is an incredibly noble and worthwhile organization. The current Camp Horizon site is in need of a redesign. In the future, we’d like to build out the entire site and present this to Camp Horizon as a free potential design upgrade.</TwoCol>
                        </Text>
                    </Content>
            </BTF>
        </>
    );
};

export default CaseStudyCampHorizon;