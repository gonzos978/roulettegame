import {BaseGameScene} from "my-pixi-coffee-pixi-game-framework/dist/components/BaseGameScene";
import {Container, Renderer, Sprite} from "pixi.js";
import {Globals} from "my-pixi-coffee-pixi-game-framework";

export class Background extends BaseGameScene {


    private bcg1: Sprite;

    private bcg2: Sprite;

    private screenMode = 1;


    constructor(sceneName: string, container: Container) {
        super(sceneName, container);
        this.init();
    }

    override init() {
        this.bcg1 = new Sprite(Globals.assetsLibrary["table1"]);
        this.addChild(this.bcg1);

        this.bcg2 = new Sprite(Globals.assetsLibrary["table2"]);
        this.addChild(this.bcg2);

        this.bcg2.visible = false;

    }

    public switchBcg() {
        if (this.screenMode === 1) {
            this.bcg1.visible = false;
            this.bcg2.visible = true;
            this.screenMode = 2;
        } else {
            this.bcg1.visible = true;
            this.bcg2.visible = false;
            this.screenMode = 1;
        }
    }

    public getScreenMode() {
        return this.screenMode;
    }

    onHide(): void {
    }

    onShow(): void {
    }


}