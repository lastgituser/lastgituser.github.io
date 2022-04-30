import { Link } from "react-router-dom";

const HamburgerLink = (props:any) => {
    return (
        <Link className="font-display text-heading font-bold text-accent-dark hover:text-primary dark:text-accent dark:hover:text-secondary" to={props.dest}>{props.title}</Link>
    );
};

export default HamburgerLink;