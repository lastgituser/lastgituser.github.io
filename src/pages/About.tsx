import BTF from "../components/about/BTF";
import ExpItem from "../components/about/ExpItem";
import Hero from "../components/about/Hero";
import Section from "../components/about/Section";
import SectionItem from "../components/about/SectionItem";

const About = () => {
    return (
        <>
            <Hero />
            <BTF>
                <Section title="Proven Results" type="text">
                    Experience solving problems and implementing solutions for multiple clients has provides valuable experience that will help provide a stunning solution to challenging problems. Unique credentials, combining a Bachelor's Degree in Computer Science with a certificate in User Experience Design, both from Georgia Institute of Technology. Experience developing many kinds of software, including websites, apps, APIs, and deployment scripts, gives me knowledge in how to implement a variety of solutions for many problems. User Experience case studies proves crucial to understand people problem-solving at an intuitive level and developing useful products.
                </Section>
                <Section title="Experience" type="primary">
                    <div className="hidden bg-exp-casestudies"></div>
                    <div className="hidden bg-exp-development"></div>
                    <ExpItem img="exp-casestudies" num={4} desc="UX Case Studies" />
                    <ExpItem img="exp-development" num={1} desc="Years Dev Experience" />
                </Section>
                <Section title="Proven Results" type="primary">
                    <SectionItem src="graduation-hat.png" desc="Bachelor's of Science in Computer Science" invert={true} edu={true} />
                    <SectionItem src="certificate.png" desc="Certificate in User Experience Design" invert={true} edu={true} />
                    <div className="bg-gt-logo bg-contain bg-center bg-no-repeat w-64 h-48 col-span-2"></div>
                </Section>
                <Section title="Languages">
                    <SectionItem src="languages/javascript-original.svg" desc="Javascript" />
                    <SectionItem src="languages/java-original.svg" desc="Java" />
                    <SectionItem src="languages/css3-original.svg" desc="CSS3" />
                    <SectionItem src="languages/python-original.svg" desc="Python" />
                    <SectionItem src="languages/html5-original.svg" desc="HTML5" />
                    <SectionItem src="languages/cplusplus-original.svg" desc="C++" />
                    <SectionItem src="languages/typescript-original.svg" desc="Typescript" />
                    <SectionItem src="languages/swift-original.svg" desc="Swift" />
                    <SectionItem src="languages/go-original.svg" desc="Go" />
                </Section>
                <Section title="Polyglot" type="text">
                Knowledge of programming in multiple languages provides deeper understanding of software development at a conceptual level. Translating products from framework to framework or language to language, and develops products of consistent quality so clients never need to worry about the framework or language used. Learning new languages quickly, and picks up new technologies to meet constantly variable needs promptly. Knowledge in functional and object-oriented programming combine to form a well-rounded and complete understanding of programming paradigms.
                </Section>
                <Section title="Frameworks">
                    <SectionItem src="frameworks/react-original.svg" desc="React" />
                    <SectionItem src="frameworks/angularjs-original.svg" desc="AngularJS" />
                    <SectionItem src="frameworks/express-original.svg" desc="Express" invert={true} />
                    <SectionItem src="frameworks/bootstrap-original.svg" desc="Bootstrap" />
                    <SectionItem src="frameworks/flutter-original.svg" desc="Flutter" />
                    <SectionItem src="frameworks/jquery-original.svg" desc="jQuery" />
                    <SectionItem src="frameworks/numpy-original.svg" desc="Numpy" />
                    <SectionItem src="frameworks/flask-original.svg" desc="Flask" invert={true} />
                    <SectionItem src="frameworks/tensorflow-original.svg" desc="Tensorflow" />
                </Section>
                <Section title="Tech">
                    <SectionItem src="technologies/docker-original.svg" desc="Javascript" />
                    <SectionItem src="technologies/bitcoin.png" desc="Java" />
                    <SectionItem src="technologies/nodejs-original.svg" desc="Node.js" />
                    <SectionItem src="technologies/git-original.svg" desc="Git" />
                    <SectionItem src="technologies/kubernetes-plain.svg" desc="Kubernetes" />
                    <SectionItem src="technologies/mongodb-original.svg" desc="MongoDB" />
                    <SectionItem src="technologies/mysql-original.svg" desc="MySQL" />
                    <SectionItem src="technologies/firebase-plain.svg" desc="Firebase" />
                    <SectionItem src="technologies/jenkins-original.svg" desc="Jenkins" />
                </Section>
                <Section title="Platforms">
                    <SectionItem src="platforms/linux-original.svg" desc="Linux" />
                    <SectionItem src="platforms/app-store.png" desc="iOS" />
                    <SectionItem src="platforms/android-original.svg" desc="Android" />
                    <SectionItem src="platforms/windows8-original.svg" desc="Windows" />
                    <SectionItem src="platforms/redhat-original.svg" desc="RedHat" />
                    <SectionItem src="platforms/apple-original.svg" desc="Apple" invert={true} />
                    <SectionItem src="platforms/ubuntu-plain.svg" desc="Ubuntu" />
                    <SectionItem src="platforms/azure-original.svg" desc="Azure" />
                    <SectionItem src="platforms/centos-original.svg" desc="CentOS" />
                </Section>
                <Section title="Techtrotter" type="text">
                Well-traveled in the tech world and exposed to many different technologies and platforms. Involvement in blockchain development, artificial intelligence, machine learning, database development, and app and web development aids rapid skill evolution. Learning new software development paradigms constantly. Adaptable developer capable of switching between deep backend environments, servers hosting numerous extensive and feature-rich microservices, or decentralized application environments. Skilled and motivated developer devoted to meeting variable technical requirements effectively and efficiently.
                </Section>
                <Section title="Tools">
                    <SectionItem src="tools/figma-original.svg" desc="Figma" />
                    <SectionItem src="tools/trello-plain.svg" desc="Trello" />
                    <SectionItem src="tools/miro.png" desc="Miro" />
                    <SectionItem src="tools/inkscape-original.svg" desc="Inkscape" />
                    <SectionItem src="tools/invision.png" desc="InVision" />
                    <SectionItem src="tools/gimp-original.svg" desc="GIMP" />
                    <SectionItem src="tools/xd-plain.svg" desc="Adobe XD" />
                    <SectionItem src="tools/jira-original.svg" desc="Jira" />
                    <SectionItem src="tools/github-original.svg" desc="Github" invert={true} />
                </Section>
                <Section title="Empathizer" type="text">
                UX Design experience augments programming experience by ensuring software solutions solve real human problems effectively. Detailed and empathetic research provides personal understanding of problems to guide design and development into usable and delightful products. Proficiency in many UX and Graphic Design tools enormously improves look and feel of products. Meticulous usability testing experience dramatically enriches website and app interfaces to increase user involvement in many products. Information architecture and interaction design experience proves important to ease information access and increase engagement with products.
                </Section>
                <Section title="UX Skills">
                    <SectionItem src="skills/research.png" desc="Research" invert={true} />
                    <SectionItem src="skills/pencil.png" desc="Sketching" invert={true} />
                    <SectionItem src="skills/prototyping.png" desc="Prototyping" invert={true} />
                    <SectionItem src="skills/test.png" desc="Testing" invert={true} />
                    <SectionItem src="skills/wireframe.png" desc="Wireframing" invert={true} />
                    <SectionItem src="skills/interact.png" desc="Ixn Design" invert={true} />
                    <SectionItem src="skills/hierarchical-structure.png" desc="Info Arch" invert={true} />
                    <SectionItem src="skills/ui-design.png" desc="UI Design" invert={true} />
                    <SectionItem src="skills/branding.png" desc="Branding" invert={true} />
                </Section>
            </BTF>
        </>
    );
};

export default About;