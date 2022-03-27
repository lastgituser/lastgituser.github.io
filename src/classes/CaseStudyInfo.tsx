export class CaseStudyInfo {
    title: string;
    skills: string;
    description: string;
    mockup: string;
    desktop: boolean;

    constructor(title = "", skills = "", description = "", mockup = "", desktop = false) {
        this.title = title;
        this.skills = skills;
        this.description = description;
        this.mockup = mockup;
        this.desktop = desktop;
    }
}