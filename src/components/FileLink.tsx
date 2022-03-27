const FileLink = (props:any) => {
    return (
        <a className="font-display text-body font-bold text-accent-dark dark:text-accent hover:text-primary dark:hover:text-secondary" download href={props.file}>{props.title}</a>
    );
};

export default FileLink;