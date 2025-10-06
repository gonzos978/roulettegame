import {BaseGameScene} from "my-pixi-coffee-pixi-game-framework/dist/components/BaseGameScene";
import {AnimatedSprite, Container, Graphics, Sprite, Text} from "pixi.js";
import {GameGlobals} from "../GameGlobals";
import {GameProperties, Globals} from "my-pixi-coffee-pixi-game-framework";

export class WinPanel extends BaseGameScene {

    private shadowLayer: Graphics;

    private ball: AnimatedSprite;

    private winTf: Text;

    constructor(sceneName: string, container: Container) {
        super(sceneName, container);
        this.init();
    }

    override init() {

        this.shadowLayer = new Graphics();
        this.shadowLayer.beginFill(0x000000, 0.5);
        this.shadowLayer.drawRect(0, 0, GameProperties.STAGE_WIDTH, GameProperties.STAGE_HEIGHT);
        this.shadowLayer.endFill();
        this.addChild(this.shadowLayer);


        const bcg = new Sprite(Globals.assetsLibrary["bigballsBCG"]);
        this.addChild(bcg);
        GameGlobals.positionManager.setItemPositionAndScale(bcg, "gfx_bigballsBCG__gameitem");

        const curtainL = new Sprite(Globals.assetsLibrary["zavesaLeft1"]);
        GameGlobals.positionManager.setItemPositionAndScale(curtainL, "gfx_zavesaLeft1__gameitem");
        this.addChild(curtainL);

        const curtainR = new Sprite(Globals.assetsLibrary["zavesaRight2"]);
        GameGlobals.positionManager.setItemPositionAndScale(curtainR, "gfx_zavesaRight2__gameitem");
        this.addChild(curtainR);

        const curtainT1 = new Sprite(Globals.assetsLibrary["zavesaTop1"]);
        GameGlobals.positionManager.setItemPositionAndScale(curtainT1, "gfx_zavesaTop1__gameitem");
        this.addChild(curtainT1);

        const curtainT2 = new Sprite(Globals.assetsLibrary["zavesaTop2"]);
        GameGlobals.positionManager.setItemPositionAndScale(curtainT2, "gfx_zavesaTop2__gameitem");
        this.addChild(curtainT2);

        this.ball = Globals.spritesheetFactory.getSpriteSheetAnimation("bigBalls_json", "BigBallColors");
        this.ball.anchor = 0.5;
        GameGlobals.positionManager.setItemPositionAndScale(this.ball, "roundNumberBalls__MC");
        this.addChild(this.ball);

        this.winTf = new Text({text: "36", style: {fontFamily: "Arial", fontSize: 80, fill: "white", align: "center"}});
        this.winTf.anchor = 0.5;
        const pd = GameGlobals.positionManager.getItemPosition("bigWin_txt");
        this.winTf.x = this.ball.width / 2 - this.winTf.width;
        this.winTf.y = this.ball.height / 2 - this.winTf.height;

        this.ball.addChild(this.winTf);

        this.onHide();

    }

    onHide(): void {
        this.visible = false;
    }

    onShow(): void {

        this.visible = true;
    }


}