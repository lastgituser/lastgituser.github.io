export class LetsConnectLinkInfo {
    title: string;
    img: string;
    link: string;
    invert?: boolean;

    constructor(title = "", img = "", link = "", invert = false) {
        this.title = title;
        this.img = img;
        this.link = link;
        this.invert = invert;
    }
}