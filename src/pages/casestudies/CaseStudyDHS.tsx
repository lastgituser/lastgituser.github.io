import "../../css/work/casestudies/hero.css";
import "../../css/work/casestudies/content.css";
import "../../css/work/casestudies/index.css";
import "../../css/work/casestudies/dhs/hero.css";
import "../../css/work/casestudies/dhs/content.css";

const CaseStudyDHS = () => {
    return (
        <>
            <section className="hero hero-cs" id="hero-dhs">
                <div className="mockup" id="mockup-left"></div>
                <div className="hero-title-back" id="hero-dhs-title-back"></div>
                <h1 className="hero-title" id="hero-dhs-title">DHS</h1>
                <div className="mockup" id="mockup-right"></div>
            </section>
            <section className="btf btf-cs" id="btf-dhs">
                <div className="btf-container">
                    <div className="content-textonly">
                        <div className="text">
                            <h2 className="text-title">About the Project</h2>
                            <p className="text-desc-2col">(Icons from <a href="https://flaticon.com">Flaticon</a>)</p>
                            <p className="text-desc-2col">This project was my third project for the Georgia Tech Bootcamp. We were all tasked with redesigning a government website. The project was mostly individual, but I collaborated with Logan Crumbley and Ellie Dobson for a portion of the project. All three of us were responsible for empathizing and ideating, and we individually prototyped, and tested. We decided to each redesign the Department of Homeland Security website. For research, we conducted usability tests to learn what was wrong with the organization of the information. To help visitors to the website access information easier, I reorganized the information and redesigned the DHS website.</p>
                            <p className="text-desc-2col">My final design for the app came as inspiration from shopping websites. My research informed me that people preferred to search for information than navigate the navigation. People also found the information on each webpage confusing even when organized better. I decided to use the search capability to its fullest extent and model the website after a shopping website where the user can shop for information on the DHS.</p>
                        </div>
                    </div>
                    <div className="content" id="content-problem">
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Problem</span></p>
                            <p className="text-desc-2col">The DHS website is unintuitive to navigate, and information is difficult to find.</p>
                        </div>
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Solution</span></p>
                            <p className="text-desc-2col">Redesign the website and reorganize the information for ease-of-access.</p>
                        </div>
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Role</span></p>
                            <p className="text-desc-2col">I worked with Logan Crumbley and Ellie Dobson on the initial usability testing and card sorting, but we split off to create prototypes and test those prototypes.</p>
                        </div>
                        <div className="text">
                            <p className="text-desc-2col"><span className="bold">Tools</span></p>
                            <p className="text-desc-2col">I used Miro for keeping track of ideas and Figma for the prototype.</p>
                        </div>
                    </div>
                    <div className="content" id="content-research">
                        <div className="text" id="text-research">
                            <h2 className="text-title">Research</h2>
                            <p className="text-desc-1col">I started by brainstorming potential users of the DHS website, and I imagined users would be young adults without much knowledge about the DHS, so I filled out a proto-persona accordingly. To verify how realistic that model was and learn what visitors to the DHS actually want, I drafted an interview plan to find out how DHS website visitors view the information on the website. We also brainstormed a few paths the user could take that we could test to find out how to make it easier. We analyzed the website for design issues. We also each made a moodboard, although I abandoned it for a similar palette to the original website later.</p>
                            <p className="text-desc-1col">We conducted five usability tests, and gathered notes from those tests. We found that our users were jumping straight to searching for the answer rather than looking for the answer by navigating the website. Our user testers were confused at the organization of the website and couldn’t find information quickly. We conducted 4 more usability tests to test navigation issues on mobile and desktop, and found similarly mentioned issues to the first few usability tests.</p>
                            <p className="text-desc-1col">We reorganized the information with a card sort then made a sitemap with the new organization of information. We agreed on a sorting of information that made the most sense, then made a prototype for mobile and desktop based on that sorting.</p>
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
                    <div className="content" id="content-ia">
                        <div className="img" id="img-ia"></div>
                        <div className="text" id="text-ia">
                            <h2 className="text-title">Information Architecture</h2>
                            <p className="text-desc-1col">After designing prototypes for homepage navigation, we split up to create our own prototypes. I made a homepage with commonly visited information buttons and a dropdown menu to decide to visit all the other pages. I tested that design with five users, and the tests informed me that the homepage color scheme was too obnoxious and the navigation in the header to be slightly unintuitive. As a result, I redesigned the homepage to have cards with the most commonly visited links and made the buttons blue and rounded. I also created an information page for pages with the information that the users will access. I then created a Style Tile to have a good idea of how to style the homepage and information page and styled each page with those in mind. Unfortunately, I didn't save the prototype, so an image of the design is all that remains. I iterated on that prototype to clean up the look and saved that prototype. I iterated on that prototype to clean up some other issues I had with how the website looked.</p>
                        </div>
                    </div>
                    <div className="content" id="content-rd">
                        <div className="text" id="text-rd">
                            <h2 className="text-title">Responsive Design</h2>
                            <p className="text-desc-1col">I then set about to create a full Style Guide complete with UI elements, text styles, and color styles. I also decided to make the website more responsive so I wouldn't need to change much about the website between mobile and desktop. I iterated on the homepage and information page with that styling and settled at another version of my prototype.</p>
                        </div>
                        <div className="img" id="img-rd">
                            <iframe title="dhs-rd-desktop" className="img-figma-desktop" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FH3oHbVqtHkwttJMKQTjTzi%2FDHS-Prototypes%3Fnode-id%3D166%253A3404%26starting-point-node-id%3D166%253A3404%26scaling%3Dcontain" allowFullScreen></iframe>
                            <iframe title="dhs-rd-mobile" className="img-figma-mobile" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FH3oHbVqtHkwttJMKQTjTzi%2FDHS-Prototypes%3Fpage-id%3D166%253A3530%26node-id%3D166%253A3531%26viewport%3D241%252C48%252C0.24%26scaling%3Dcontain%26starting-point-node-id%3D166%253A3531" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="content" id="content-ixd">
                        <div className="img" id="img-ixd"></div>
                        <div className="text" id="text-ixd">
                            <h2 className="text-title">Interaction Design</h2>
                            <p className="text-desc-1col">I tested that prototype with seven users and found that the text had strange proportions and the navigation to get to information pages and on information pages was unintuitive. I decided to iterate my prototype again with that in mind. I have also made a sitemap of what the website would look like next.</p>
                        </div>
                    </div>
                    <div className="content" id="content-fp">
                        <div className="img" id="img-fp">
                            <iframe title="dhs-fp-mobile" className="img-figma-mobile" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FH3oHbVqtHkwttJMKQTjTzi%2FDHS-Prototypes%3Fpage-id%3D605%253A6557%26node-id%3D606%253A6558%26viewport%3D241%252C48%252C0.13%26scaling%3Dcontain%26starting-point-node-id%3D606%253A6558" allowFullScreen></iframe>
                            <iframe title="dhs-fp-desktop" className="img-figma-desktop" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FH3oHbVqtHkwttJMKQTjTzi%2FDHS-Prototypes%3Fpage-id%3D645%253A9478%26node-id%3D645%253A9479%26viewport%3D241%252C48%252C0.09%26scaling%3Dscale-down-width%26starting-point-node-id%3D645%253A9479" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="content-textonly" id="content-textonly-final">
                        <div className="text">
                            <h2 className="text-title">Final Thoughts & Conclusion</h2>
                            <p className="text-desc-2col">This project turned out to be much bigger than I anticipated. I plan to test both my mobile and desktop prototypes more in the future, then iterating both. My graphic design needs improvement, so I will redesign the homepage to be more detailed and have better graphics. The biggest issue with the old DHS website was that information was difficult to access. If I emphasize searchability in my prototype, I might get better insights when testing my prototypes. I will focus on information and less on creating massive navigation systems.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CaseStudyDHS;