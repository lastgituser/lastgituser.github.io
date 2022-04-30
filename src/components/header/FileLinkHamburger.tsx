const FileLinkHamburger = (props:any) => {
    return (
        <a className="font-display text-heading font-bold text-accent-dark hover:text-primary dark:text-accent dark:hover:text-secondary" download href={props.file}>{props.title}</a>
    );
};

export default FileLinkHamburger;