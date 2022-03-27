import { FooterHeaderInfo } from "../classes/FooterHeaderInfo";

const FooterHeading = (props:FooterHeaderInfo) => {
    return (
        <h4 className="text-body font-display text-secondary dark:text-primary my-4">{props.title}</h4>
    );
};

export default FooterHeading;