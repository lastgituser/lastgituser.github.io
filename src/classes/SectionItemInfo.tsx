export class SectionItemInfo {
    src: string;
    desc: string;
    invert?: boolean;
    edu?: boolean;

    constructor(src: string, desc: string, invert = false, edu = false) {
        this.src = src;
        this.desc = desc;
        this.invert = invert;
        this.edu = edu;
    }
}