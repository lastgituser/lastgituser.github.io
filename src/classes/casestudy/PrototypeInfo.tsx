export class PrototypeInfo {
    title: string;
    src: string;
    desktop?: boolean;

    constructor(title: string, src: string, desktop = false) {
        this.title = title;
        this.src = src;
        this.desktop = desktop;
    }
}