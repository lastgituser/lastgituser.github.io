import "../css/footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <div className="footer-linkgroup" id="social">
                    <h4 className="footer-heading">Social</h4>
                    <a className="footer-link" href="https://github.com/lastgituser" target="_blank" rel="noopener noreferrer">
                        <h3 className="footer-link-text">Github</h3>
                    </a>
                    <a className="footer-link" href="https://behance.net/akhilkikkeri" target="_blank" rel="noopener noreferrer">
                        <h3 className="footer-link-text">Behance</h3>
                    </a>
                    <a className="footer-link" href="https://dribbble.com/anirvid" target="_blank" rel="noopener noreferrer">
                        <h3 className="footer-link-text">Dribbble</h3>
                    </a>
                    {/* <a className="footer-link" href="https://instagram.com/anirvidux" target="_blank" rel="noopener noreferrer">
                        <h3 className="footer-link-text">Instagram</h3>
                    </a> */}
                    <a className="footer-link" href="https://linkedin.com/in/akhilkikkeri/" target="_blank" rel="noopener noreferrer">
                        <h3 className="footer-link-text">LinkedIn</h3>
                    </a>
                </div>
                <div className="footer-linkgroup" id="contact">
                    <h4 className="footer-heading">Contact</h4>
                    <a className="footer-link" href="Resume-UXExp.pdf" target="_blank">
                        <h3 className="footer-link-text">Resume</h3>
                    </a>
                    <a className="footer-link" href="mailto:akhil.kikkeri.uxdev@gmail.com" target="_blank" rel="noopener noreferrer">
                        <h3 className="footer-link-text" id="footer-link-email-text">akhil.kikkeri.uxdev@gmail.com</h3>
                    </a>
                </div>
                <div className="footer-linkgroup" id="credits">
                    <h4 className="footer-heading">Credits</h4>
                    <a className="footer-link" href="https://flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer">
                        <h3 className="footer-link-text">Freepik</h3>
                    </a>
                    <a className="footer-link" href="https://devicon.dev/" target="_blank" rel="noopener noreferrer">
                        <h3 className="footer-link-text">Devicons</h3>
                    </a>
                    <a className="footer-link" href="https://capiche.com/miro" target="_blank" rel="noopener noreferrer">
                        <h3 className="footer-link-text">Capiche</h3>
                    </a>
                    <a className="footer-link" href="https://threed.io" target="_blank" rel="noopener noreferrer">
                        <h3 className="footer-link-text">Threed</h3>
                    </a>
                    <a className="footer-link" href="https://www.pexels.com/photo/scenic-view-of-a-starry-night-sky-6470652/" target="_blank" rel="noopener noreferrer">
                        <h3 className="footer-link-text">Jeremy Muller</h3>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-email">akhil.kikkeri.uxdev@gmail.com</p>
                <div className="footer-social">
                    <a className="footer-social-link" href="https://linkedin.com/in/akhilkikkeri" target="_blank" rel="noopener noreferrer">
                        <div className="footer-social-img" id="footer-img-linkedin"></div>
                    </a>
                    {/* <a className="footer-social-link" href="https://instagram.com/anirvidux" target="_blank" rel="noopener noreferrer">
                        <div className="footer-social-img" id="footer-img-ig"></div>
                    </a> */}
                    <a className="footer-social-link" href="https://dribbble.com/anirvid" target="_blank" rel="noopener noreferrer">
                        <div className="footer-social-img" id="footer-img-dribbble"></div>
                    </a>
                    <a className="footer-social-link" href="https://behance.net/akhilkikkeri" target="_blank" rel="noopener noreferrer">
                        <div className="footer-social-img" id="footer-img-behance"></div>
                    </a>
                    <a className="footer-social-link" href="https://github.com/lastgituser" target="_blank" rel="noopener noreferrer">
                        <div className="footer-social-img" id="footer-img-gh"></div>
                    </a>
                </div>
                <p className="footer-copyright">Copyright 2022</p>
            </div>
        </footer>
    );
};

export default Footer;