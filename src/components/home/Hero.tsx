import "../../css/home/hero.css"

const Hero = () => {
    return (
        <>
            <div className="hero-background-gradient"></div>
            <section id="home-hero">
                <div className="intro">
                    <div className="name">
                        <span className="firstname">Akhil</span>
                        <span className="lastname">Kikkeri</span>
                    </div>
                    <div className="profession">
                        <span className="uxui">UX/UI</span>
                        <span className="developer">Developer</span>
                    </div>
                </div>
                <div className="description">
                    <p className="description-text">Full Stack Developer and small business advocate designing and building websites to solve tomorrow's problems.</p>
                </div>
                <div className="mockups">
                    <div className="mockup1"></div>
                    <div className="mockup2"></div>
                </div>
                <a className="cta" href="mailto:akhil.kikkeri.uxdev@gmail.com">Let's talk</a>
            </section>
        </>
    );
};

export default Hero;