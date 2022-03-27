import Sketch from "react-p5";

const HeroIllustrationLight = () => {

    let clouds:Cloud[] = [];

    function cloudRandomHeight(p: any) {
        return p.random(p.windowHeight * 0.5) + p.windowHeight * 0.1;
    }

    class Cloud {
        x: number;
        y: number;
        p: any;

        constructor(p: any) {
            this.p = p;
            this.x = this.p.random(p.windowWidth);
            this.y = cloudRandomHeight(p);
        }

        draw(p: any) {
            this.p.noStroke();
            this.p.fill(0, 0, 94);
            this.p.ellipse(this.x, this.y, 50, 50);
            this.p.ellipse(this.x + 40, this.y - 10, 70, 70);
            this.p.ellipse(this.x + 40 + 60, this.y - 10 - 10, 90, 90);
            this.p.ellipse(this.x + 40 + 60 + 50, this.y, 50, 50);
            this.p.rect(this.x, this.y, 150, 25);
        }
    }

    function setupClouds(p: any) {
        for (let i = 0; i < 5; i++) {
            clouds.push(new Cloud(p));
        }
    }

    function drawClouds(p: any) {
        for (let i = 0; i < 5; i++) {
            let speed = 5;
            clouds[i].x = (clouds[i].x + speed) % p.windowWidth;
            if (clouds[i].x < speed) {
                clouds[i].y = cloudRandomHeight(p);
            }
            clouds[i].draw(p);
        }
    }

    function skyBackground(p: any) {
        p.background(203, 59, 100);
    }

    const setup = function(p: any, ref: Element) {
        let cnv = p.createCanvas(p.windowWidth, p.windowHeight).parent(ref);
        cnv.position(0, 0);
        cnv.style('position', 'fixed');
        cnv.style('z-index', '-5');
        p.colorMode(p.HSB);
        p.frameRate(20);
        skyBackground(p);
        setupClouds(p);
    }

    const windowResized = function(p: any) {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }

    const draw = function(p: any) {
        windowResized(p);
        skyBackground(p);
        drawClouds(p);
    }

    return <Sketch setup={setup} draw={draw} className="dark:hidden" />
};

export default HeroIllustrationLight;