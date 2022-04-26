import { PrototypeInfo } from "../../classes/casestudy/PrototypeInfo";

const Prototype = (props: PrototypeInfo) => {
    const classes = props.desktop ? "w-[16rem] h-[12rem] lg:w-[40rem] lg:h-[30rem]" :
                                    "w-[16rem] h-[40rem]";
    return (
        <iframe title={props.title}
                className={classes}
                src={props.src}
                allowFullScreen></iframe>
    );
};

export default Prototype;