const FooterLinkFile = (props:any) => {
    return (
        <a className="no-underline text-accent dark:text-accent-dark text-body font-display font-bold my-4 hover:text-secondary dark:hover:text-primary" download href={props.file}>{props.title}</a>
    );
};

export default FooterLinkFile;