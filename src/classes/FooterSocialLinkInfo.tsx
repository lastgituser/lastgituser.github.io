export class FooterSocialLinkInfo {
    img: string;
    link: string;
    name: string;

    constructor(img = "", link = "", name = "") {
        this.img = img;
        this.link = link;
        this.name = name;
    }
}