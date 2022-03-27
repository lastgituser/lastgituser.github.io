import Sketch from "react-p5";

const HeroIllustrationDark = () => {

    function drawStars(p: any) {
        p.background(210, 100, 36);
        for (let i = 0; i < 50; i++) {
            stars[i].draw();
        }
        for (let i = 0; i < 50; i++) {
            let rand = p.random([0, 1]);
            if (rand) {
                stars[i].twinkle();
            }
        }
    }

    var stars: Star[] = [];

    class Star {
        x: number;
        y: number;
        w: number;
        h: number;
        p: any;

        constructor(p: any) {
            this.p = p;
            this.x = this.p.random(this.p.windowWidth);
            this.y = this.p.random(this.p.windowHeight * 0.6);
            this.w = 2;
            this.h = 2;
        }

        twinkle() {
            if (this.w === 2) {
                this.w = 3;
                this.h = 3;
            } else {
                this.w = 2;
                this.h = 2;
            }
        }

        draw() {
            this.p.colorMode(this.p.HSB);
            this.p.noStroke();
            this.p.fill(0, 0, 94);
            this.p.ellipse(this.x, this.y, this.w, this.h);
        }
    }

    const setup = function(p: any) {
        var cnv = p.createCanvas(p.windowWidth, p.windowHeight);
        cnv.position(0, 0);
        cnv.style('position', 'fixed');
        cnv.style('z-index', '-15');
        for (var i = 0; i < 50; i++) {
            stars.push(new Star(p));
        }
        p.colorMode(p.HSB);
        p.background(210, 100, 36);
        p.frameRate(1);
    }

    const windowResized = function(p: any) {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }

    const draw = function(p: any) {
        windowResized(p);
        drawStars(p);
    }

    return <Sketch setup={setup} draw={draw} className="hidden dark:block" />
}

export default HeroIllustrationDark;