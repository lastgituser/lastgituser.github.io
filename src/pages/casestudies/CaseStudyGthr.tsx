import Content from "../../components/casestudies/Content";
import Hero from "../../components/casestudies/Hero";
import OneCol from "../../components/casestudies/OneCol";
import Text from "../../components/casestudies/Text";
import Title from "../../components/casestudies/Title";
import TwoCol from "../../components/casestudies/TwoCol";
import Bold from "../../components/casestudies/Bold";
import BTF from "../../components/casestudies/BTF";
import Img from "../../components/casestudies/Img";
import Number from "../../components/casestudies/Number";
import Prototype from "../../components/casestudies/Prototype";
import Numbers from "../../components/casestudies/Numbers";
import ContentFiller from "../../components/casestudies/ContentFiller";
import { useEffect } from "react";

const CaseStudyGthr = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <div className="bg-mockup-img-gthr-1 hidden"></div>
            <div className="bg-mockup-img-gthr-2 hidden"></div>
            <div className="bg-casestudy-gthr-light hidden"></div>
            <div className="dark:bg-casestudy-gthr-dark hidden"></div>
            <div className="bg-casestudy-gthr-userjourney hidden"></div>
            <Hero title="gthr" titleWidth="20rem" mockup="gthr" />
            <BTF>
                <Content colorCode="gthr" textOnly={true}>
                    <Text>
                        <Title>About the Project</Title>
                        <TwoCol>This project was my first project for the Georgia Tech Bootcamp. We were all tasked with coming up with an idea for a travel app. The project was individual, and each of us were responsible for empathizing, ideating, prototyping, and testing. I decided to design a product to help people who want to travel in a group more quickly, cheaply, and easily gather and travel. For research, I interviewed 5 travelers about their travel motivations, cohorts and destinations. To help people find trips to help their loneliness, I designed a travel social media app that provides a feed of trips sorted by preference. My design for the app came as inspiration from social media, travel, and ride-sharing apps. My research informed me that people traveled in groups to help their loneliness. People generally visit social media apps for their loneliness, but the apps also fail to provide a meaningful connection and instead feed into insecurities. I decided to challenge that by letting people join a trip to feel connected.</TwoCol>
                    </Text>
                </Content>
                <Content colorCode="gthr" problem={true}>
                    <Text>
                        <TwoCol><Bold>Problem</Bold></TwoCol>
                        <TwoCol>Travelers who prefer to travel in groups to many locations need a way to gather and go there efficiently. Travelers are often concerned with the collective costs, agreement on the destination and trip, and scheduling the trip.</TwoCol>
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
                </Content>
                <Content colorCode="gthr">
                    <ContentFiller />
                    <Text>
                        <Title>Research</Title>
                        <OneCol>I started by brainstorming potential users of an app for group travel, and I imagined users would be young adults who want to travel the world with friends and family, so I filled out a proto-persona accordingly. To verify how realistic that model was and learn what group travelers realistically want, I drafted an interview plan to find out how group travelers decide to travel, choose their cohort, and choose their destinations. I interviewed five people to learn about group travelers, and they expressed two main anxieties: <span className="bold">deciding where to travel and finding the cheapest way to travel</span>. I organized my interview insights by category into a Miro board into an affinity diagram. I narrowed down the interviewees' motivation to <span className="font-bold">taking a meaningful trip to connect with people</span>. Users were mainly frustrated by <span className="font-bold">strict schedules, travel costs, and indecision of trip details</span>. I collected the insights into goals and pain points into an empathy map, then extrapolated demographics and psychographics into a user persona.</OneCol>
                    </Text>
                    <Numbers>
                        <Number number={5}
                                desc="one-to-one interviews"
                                colorCode="gthr" />
                        <Number number={3}
                                desc="prototypes"
                                colorCode="gthr" />
                        <Number number={5}
                                desc="usability tests"
                                colorCode="gthr" />
                    </Numbers>
                </Content>
                <Content colorCode="gthr">
                    <ContentFiller />
                    <Img src="casestudy-gthr-userjourney" dim="sm:h-[30rem] sm:w-[30rem] h-[12rem] w-[16rem]"></Img>
                    <Text>
                        <Title>Definition & Ideation</Title>
                        <OneCol>The interviewees wanted to find good places to visit quickly and cheaply with their friends, so I thought gthr would include Uber and Meetup functionality. The social aspect of the app would require Facebook's social feed functionality including travel app functionality for the travel details. I decided to prioritize the functions already from Uber, Meetup, and Facebook first, wishful functions next, then functions that I thought few people would use. I slimmed the feature prioritization matrix down to focus on what I could realistically get done for a minimum viable product.</OneCol>
                    </Text>
                </Content>
                <Content colorCode="gthr">
                    <ContentFiller />
                    <Text>
                        <Title>Wireframing</Title>
                        <OneCol>If users weren't going to travel with friends with gthr, they'd probably use travel apps, social media apps, meetup apps, or ride-sharing apps.</OneCol>
                        <OneCol>To design the wireframe, I focused on the "book a trip" functionality. If a user wished to join a trip, they can choose one from their feed, which is sorted by preferences, press a button, pay if needed, and jump into navigation for the trip. I made sketches of an app with a social feed of trips that can be joined with a ride-sharing-like functionality, then refined them into a low fidelity prototype in InVision. I then refined it into a slightly refined prototype in Figma.</OneCol>
                    </Text>
                    <Img>
                        <Prototype title="gthr-wireframing-mobile"
                                   src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJrHxQ7XhzabbbR9XM9cxLT%2FWireframing-(Copy)%3Fpage-id%3D400569%253A448%26node-id%3D400569%253A462%26viewport%3D241%252C48%252C0.05%26scaling%3Dscale-down%26starting-point-node-id%3D400569%253A462" />
                    </Img>
                </Content>
                <Content colorCode="gthr">
                    <ContentFiller />
                    <Img>
                        <Prototype title="gthr-testing-mobile"
                                   src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOtdYUzvbxOKOCjwuqFgJiX%2Fgthr%3Fpage-id%3D1042%253A4039%26node-id%3D1042%253A4040%26viewport%3D241%252C48%252C0.15%26scaling%3Dscale-down%26starting-point-node-id%3D1042%253A4040" />
                    </Img>
                    <Text>
                        <Title>Testing</Title>
                        <OneCol>I moved on to testing whether users found it useful. After creating the wireframe and prototype, I recruited users to test my prototype. Testing from five testers informed me that the testers wanted an indicator of the user's progress, to see trip info before payment info, and a way to switch travel method during a trip. I collected insights from the tests, sorted them into priority, and iterated my user flow and prototype. I then made some design improvements to the high fidelity prototype.</OneCol>
                    </Text>
                </Content>
                <Content colorCode="gthr" textOnly={true}>
                    <Text>
                        <Title>Final Thoughts & Conclusion</Title>
                        <TwoCol>I've learned that my idea is much bigger than I thought it was going to be, and one set of iterations won't be enough to fix all the issues and add all the features. I'm not as good at user interviews or user tests as prototyping or ideation, and I can improve by practicing interviewing people and talking to more people for tests. Travel social media has a potential to become a bigger project involving multiple designers and developers, but I will add to it soon.</TwoCol>
                    </Text>
                </Content>
            </BTF>
        </>
    );
};

export default CaseStudyGthr;