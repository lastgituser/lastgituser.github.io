import { Link } from "react-router-dom";
import "../css/casestudies.css";

const CaseStudyList = () => {
    return (
        <div className="list-casestudies">
            <Link className="case-study regular" to="/work/gthr">
                <div className="case-study-img">
                    <div className="mockup" id="mockup-gthr-1"></div>
                    <div className="mockup" id="mockup-gthr-2"></div>
                </div>
                <div className="case-study-text">
                    <h2 className="case-study-title">gthr</h2>
                    <h3 className="case-study-skills">Research, Prototyping, Testing</h3>
                    <p className="case-study-desc">Travelers who prefer to travel in groups need a way to gather and go there efficiently. Travelers are often concerned with the collective costs, agreement on the destination and trip, and scheduling the trip. The solution is a social media app to allow quick communication, agreement, and purchase of trip expenses for group trips.</p>
                    <span className="case-study-button"><h3>Check it out</h3></span>
                </div>
            </Link>
            <a className="case-study reverse" href="mpp/">
                <div className="case-study-text">
                    <h2 className="case-study-title">MyPetPal</h2>
                    <h3 className="case-study-skills">Research, Prototyping, Testing</h3>
                    <p className="case-study-desc">Pet owners have issues digitally sharing, tracking, and assigning, the daily task and responsibilities of pet ownership with other caretakers. We created a calendar app that lets pet owners assign and schedule tasks to trusted caretakers.</p>
                    <span className="case-study-button"><h3>Check it out</h3></span>
                </div>
                <div className="case-study-img">
                    <div className="mockup" id="mockup-mpp-1"></div>
                    <div className="mockup" id="mockup-mpp-2"></div>
                </div>
            </a>
            <a className="case-study regular" href="dhs/">
                <div className="case-study-img">
                    <div className="mockup" id="mockup-dhs-1"></div>
                    <div className="mockup" id="mockup-dhs-2"></div>
                </div>
                <div className="case-study-text">
                    <h2 className="case-study-title">DHS Web Redesign</h2>
                    <h3 className="case-study-skills">Research, Prototyping, Testing</h3>
                    <p className="case-study-desc">The DHS website is unintuitive to navigate, and information on the website is difficult to find. The solution devised was to redesign the website and reorganize the information.</p>
                    <span className="case-study-button"><h3>Check it out</h3></span>
                </div>
            </a>
            <a className="case-study reverse" href="ch/">
                <div className="case-study-text">
                    <h2 className="case-study-title">Camp Horizon</h2>
                    <h3 className="case-study-skills">Research, Prototyping, Testing</h3>
                    <p className="case-study-desc">The Camp Horizon website isn't easy to use and Camp Horizon isn't getting enough volunteers and donations. We redesigned the homepage and reorganized the information to make it easier to find information on donation tiers and Camp Horizon's mission.</p>
                    <span className="case-study-button"><h3>Check it out</h3></span>
                </div>
                <div className="case-study-img">
                    <div className="mockup" id="mockup-ch-1"></div>
                    <div className="mockup" id="mockup-ch-2"></div>
                </div>
            </a>
            <a className="case-study regular" href="h2r/">
                <div className="case-study-img">
                    <div className="mockup" id="mockup-h2r"></div>
                </div>
                <div className="case-study-text">
                    <h2 className="case-study-title">Hope2Restoration</h2>
                    <h3 className="case-study-skills">Research, Prototyping, Testing</h3>
                    <p className="case-study-desc">The Hope2Restoration website isn't easy to use nor is it easy to access crucial information to volunteer and donate, and Hope2Restoration isn't getting enough volunteers and donations. We added a Donate button on the homepage, an easier and simpler volunteer path, and redesigned the information to make it easier to find a way to donate and learn about Hope2Restoration's mission to help homeless people.</p>
                    <span className="case-study-button"><h3>Check it out</h3></span>
                </div>
            </a>
        </div>
    );
};

export default CaseStudyList;