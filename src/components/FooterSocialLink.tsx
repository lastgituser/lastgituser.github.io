import { FooterSocialLinkInfo } from "../classes/FooterSocialLinkInfo";

const FooterSocialLink = (props:FooterSocialLinkInfo) => {
    return (
        <a className="no-underline transition ease-out hover:scale-110" href={props.link} target="_blank" rel="noopener noreferrer">
            <img className="h-8 w-8 invert dark:filter-none" src={require("../images/icons/social/" + props.img)} alt={props.name} />
        </a>
    );
};

export default FooterSocialLink;