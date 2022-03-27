import FooterHeading from "./FooterHeading";
import FooterLink from "./FooterLink";
import FooterLinkFile from "./FooterLinkFile";
import FooterSocialLink from "./FooterSocialLink";

const Footer = () => {
    return (
        <footer className="grid grid-rows-[auto_auto] bg-primary dark:bg-secondary w-full justify-items-center">
            <div className="flex flex-col items-center sm:items-start sm:grid sm:grid-cols-3 gap-8 content-center m-8 w-[80vw] max-w-[90rem] justify-items-center">
                <div className="flex flex-col items-start" id="social">
                    <FooterHeading title="Social" />
                    <FooterLink title="Github" 
                                link="https://github.com/lastgituser" />
                    <FooterLink title="Behance" 
                                link="https://behance.net/akhilkikkeri" />
                    <FooterLink title="Dribbble" 
                                link="https://dribbble.com/anirvid" />
                    <FooterLink title="LinkedIn" 
                                link="https://linkedin.com/in/akhilkikkeri/" />
                </div>
                <div className="flex flex-col items-start" id="contact">
                    <FooterHeading title="Contact" />
                    <FooterLinkFile title="Resume"
                              file={require("../pages/Resume-UXExp.pdf")} />
                    <FooterLink title="Email" 
                                link="mailto:akhil.kikkeri.uxdev@gmail.com" />
                </div>
                <div className="flex flex-col items-start" id="credits">
                    <FooterHeading title="Credits" />
                    <FooterLink title="Freepik" 
                                link="https://flaticon.com/authors/freepik" />
                    <FooterLink title="Devicons" 
                                link="https://devicon.dev/" />
                    <FooterLink title="Capiche" 
                                link="https://capiche.com/miro" />
                    <FooterLink title="Threed" 
                                link="https://threed.io" />
                </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-3 xl:grid-cols-3 xl:grid-rows-1 my-8 items-center justify-center max-w-[100rem] w-full text-secondary dark:text-primary">
                <div className="text-body font-body justify-self-center">akhil.kikkeri.uxdev@gmail.com</div>
                <div className="flex flex-row flex-wrap gap-8 justify-self-center my-4">
                    <FooterSocialLink name="LinkedIn"
                                      link="https://linkedin.com/in/akhilkikkeri"
                                      img="linkedin-black.png" />
                    <FooterSocialLink name="Dribbble"
                                      link="https://dribbble.com/anirvid"
                                      img="dribbble-black.png" />
                    <FooterSocialLink name="Behance"
                                      link="https://behance.net/akhilkikkeri"
                                      img="behance-logo.png" />
                    <FooterSocialLink name="Github"
                                      link="https://github.com/lastgituser"
                                      img="github-big-logo.png" />
                </div>
                <div className="text-body font-body justify-self-center">Copyright 2022</div>
            </div>
        </footer>
    );
};

export default Footer;