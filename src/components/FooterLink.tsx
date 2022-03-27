import { FooterLinkInfo } from "./header/FooterLinkInfo";

const FooterLink = (props:FooterLinkInfo) => {
    return (
        <a className="no-underline text-accent dark:text-accent-dark text-body font-display font-bold my-4 hover:text-secondary dark:hover:text-primary" href={props.link} target="_blank" rel="noopener noreferrer">
            {props.title}
        </a>
    );
};

export default FooterLink;