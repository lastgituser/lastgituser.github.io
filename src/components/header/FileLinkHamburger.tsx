const FileLinkHamburger = (props:any) => {
    return (
        <a className="font-display text-heading font-bold text-accent hover:text-secondary" download href={props.file}>{props.title}</a>
    );
};

export default FileLinkHamburger;