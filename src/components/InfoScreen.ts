import {BaseGameScene} from "my-pixi-coffee-pixi-game-framework/dist/components/BaseGameScene";
import {Container, Renderer, Text} from "pixi.js";
import {mainStyle} from "../textstyles/Styles";
import {GameGlobals} from "../GameGlobals";

export class InfoScreen extends BaseGameScene {

    private winTf: Text;
    private betTf: Text;
    private gameMsgTf: Text;
    private creditTf: Text;

    constructor(sceneName: string, container: Container) {
        super(sceneName, container);
        this.init();
    }

    override init() {

        const winLabel = new Text({text: "WIN", style: mainStyle});
        let pos = GameGlobals.positionManager.getItemPosition("win_txt_label");
        winLabel.x = pos.x;
        winLabel.y = pos.y;
        this.addChild(winLabel);


        const betLabel = new Text({text: "BET", style: mainStyle});
        pos = GameGlobals.positionManager.getItemPosition("bet_txt_label");
        betLabel.x = pos.x;
        betLabel.y = pos.y;
        this.addChild(betLabel);

        this.winTf = new Text({text: "000000", style: mainStyle});
        pos = GameGlobals.positionManager.getItemPosition("win_txt");
        this.winTf.x = pos.x;
        this.winTf.y = pos.y;
        this.addChild(this.winTf);

        this.betTf = new Text({text: "000000", style: mainStyle});
        pos = GameGlobals.positionManager.getItemPosition("bet_txt");
        this.betTf.x = pos.x;
        this.betTf.y = pos.y;
        this.addChild(this.betTf);

        this.gameMsgTf = new Text({text: "test game message", style: mainStyle});
        pos = GameGlobals.positionManager.getItemPosition("msg_txt");
        this.gameMsgTf.x = pos.x;
        this.gameMsgTf.y = pos.y;
        this.addChild(this.gameMsgTf);


        const creditLabel = new Text({text: "CREDIT", style: mainStyle});
        pos = GameGlobals.positionManager.getItemPosition("bet_txt_label");
        creditLabel.x = pos.x;
        creditLabel.y = pos.y;
       // this.addChild(creditLabel);

        this.creditTf = new Text({text: "000000", style: mainStyle});
        pos = GameGlobals.positionManager.getItemPosition("credit_txt");
        this.creditTf.x = pos.x;
        this.creditTf.y = pos.y;
        this.addChild(this.creditTf);



    }

    onHide(): void {
    }

    onShow(): void {
    }
}