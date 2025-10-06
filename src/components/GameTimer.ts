import {BaseGameScene} from "my-pixi-coffee-pixi-game-framework/dist/components/BaseGameScene";
import {Container, Graphics, Renderer} from "pixi.js";
import { gsap } from "gsap";

export class GameTimer extends BaseGameScene{

    private progressFill:Graphics;

    private barWidth = 1920;

    private tween?: gsap.core.Tween;

    constructor(sceneName: string, container: Container) {
        super(sceneName, container);
        this.init();
    }

    override init() {


        this.progressFill = new Graphics();
        this.progressFill.beginFill(0xcc0000);
        this.progressFill.drawRect(0, 0, this.barWidth, 5); // start with width = 0
        this.progressFill.endFill();
        this.addChild(this.progressFill);

    }

    public startTimer(time:number) {

        this.stopTimer(); // clear any previous animation

        // animate from 0 → 1 over given time (seconds)
        this.tween = gsap.to(this.progressFill.scale, {
            x: 0,
            duration: time,
            ease: "none",
            onComplete: () => {
                console.log("Timer completed!");
            },
        });
    }

    public stopTimer() {

        if (this.tween) {
            this.tween.kill();
            this.tween = undefined;
            // reset bar
            this.progressFill.scale.x = 1;
        }
    }



    onHide(): void {

        this.stopTimer();
    }

    onShow(): void {
    }


}