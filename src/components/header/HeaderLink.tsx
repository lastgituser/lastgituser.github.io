import { Link } from "react-router-dom";

const HeaderLink = (props:any) => {
    return (
        <Link className="font-display text-body font-bold text-accent-dark dark:text-accent hover:text-primary hover:dark:text-secondary" to={props.dest}>{props.title}</Link>
    );
};

export default HeaderLink;