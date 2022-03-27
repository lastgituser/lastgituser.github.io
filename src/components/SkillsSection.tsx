import { SkillsSectionInfo } from "../classes/SkillsSectionInfo";

const SkillsSection = (props:SkillsSectionInfo) => {
    return (
        <div className="max-w-[20rem] text-primary dark:text-secondary">
            <div className="font-body text-heading font-bold mt-8 mb-4">{props.name}</div>
            <div className="font-body text-body">{props.description}</div>
        </div>
    );
};

export default SkillsSection;