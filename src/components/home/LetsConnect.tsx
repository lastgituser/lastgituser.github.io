import "../../css/home/letsconnect.css";
import linkedin from "../../images/icons/social/linkedin.png";
import instagram from "../../images/icons/social/instagram.png";
import dribbble from "../../images/icons/social/dribbble.png";
import behance from "../../images/icons/social/behance.png";
import github from "../../images/icons/social/github-big-logo.png";

const LetsConnect = () => {
    return (
        <div className="letsconnect">
            <h1 className="heading-letsconnect">Let's Connect</h1>
            <div className="letsconnect-links">
                <a className="letsconnect-link" href="https://linkedin.com/in/akhilkikkeri/" target="_blank" rel="noopener noreferrer">
                    <img className="letsconnect-img" src={linkedin} alt="LinkedIn" />
                    <h3 className="letsconnect-title">LinkedIn</h3>
                </a>
                {/* <a className="letsconnect-link" href="https://instagram.com/anirvidux" target="_blank" rel="noopener noreferrer">
                    <img className="letsconnect-img" src={instagram} alt="Instagram" />
                    <h3 className="letsconnect-title">Instagram</h3>
                </a> */}
                <a className="letsconnect-link" href="https://dribbble.com/anirvid" target="_blank" rel="noopener noreferrer">
                    <img className="letsconnect-img" src={dribbble} alt="Dribbble" />
                    <h3 className="letsconnect-title">Dribbble</h3>
                </a>
                <a className="letsconnect-link" href="https://behance.net/akhilkikkeri" target="_blank" rel="noopener noreferrer">
                    <img className="letsconnect-img" src={behance} alt="Behance" />
                    <h3 className="letsconnect-title">Behance</h3>
                </a>
                <a className="letsconnect-link" href="https://github.com/lastgituser" target="_blank" rel="noopener noreferrer">
                    <img className="letsconnect-img" src={github} alt="Github" id="img-github" />
                    <h3 className="letsconnect-title">Github</h3>
                </a>
            </div>
        </div>
    );
};

export default LetsConnect;