import { LetsConnectLinkInfo } from "../classes/LetsConnectLinkInfo";

const LetsConnectLink = (props:LetsConnectLinkInfo) => {
    const invert = props.invert ? " dark:invert" : "";
    return (
        <a className="p-4 no-underline transition ease-out hover:scale-110" href={props.link} target="_blank" rel="noopener noreferrer">
            <img className={"h-8 w-8 dark:brightness-200" + invert} src={require("../images/icons/social/" + props.img)} alt={props.title} />
            <div className="m-0 no-underline text-primary dark:text-secondary font-display text-body font-bold">{props.title}</div>
        </a>
    );
};

export default LetsConnectLink;