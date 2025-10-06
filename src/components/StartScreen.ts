import {Container, Sprite, Text} from "pixi.js";
import {BaseGameScene, Globals} from "my-pixi-coffee-pixi-game-framework";
import {baseTextStyle} from "../textstyles/Styles";
import {GameGlobals} from "../GameGlobals";
import {MainButton} from "./MainButton";

export class StartScreen extends BaseGameScene {


    private userPanel: Container;
    private userText: Text;
    private creditPanel: Container;
    private creditText: Text;

    constructor(sceneName: string, container: Container) {
        super(sceneName, container);

        console.log("START SCREEN");

        this.init();
    }

    public init() {

        const bcg = new Sprite(Globals.assetsLibrary["lobbyBcg"]);
        this.addChild(bcg);


        this.userPanel = new Container();
        this.addChild(this.userPanel);

        const userPanelBcg = new Sprite(Globals.assetsLibrary["userBcg"]);
        this.userPanel.addChild(userPanelBcg);
        this.userText = new Text({text: "hi!", style: baseTextStyle});
        let pos = GameGlobals.positionManager.getItemPosition("username_txt");
        this.userText.x = pos.x;
        this.userText.y = pos.y;
        this.userPanel.addChild(this.userText);

        this.creditPanel = new Container();
        this.addChild(this.creditPanel);

        const creditPanelBcg = new Sprite(Globals.assetsLibrary["coinsIcon"]);
        this.creditPanel.addChild(creditPanelBcg);
        this.creditText = new Text({text: "hi!", style: baseTextStyle});
        let pos1 = GameGlobals.positionManager.getItemPosition("credit_lobby_txt");
        this.creditText.x = pos1.x;
        this.creditText.y = pos1.y;
        this.creditPanel.addChild(this.creditText);
        this.creditPanel.x = 1300;
       GameGlobals.positionManager.setItemPositionAndScale(this.creditPanel,"gfx_creditLabel_box__gameitem");

        const panelButton = new MainButton("MainButton", this.gameContainer);
        this.addChild(panelButton);

        GameGlobals.positionManager.setItemPositionAndScale(panelButton,"gfx_gameIcon_box__gameitem");

    }

    public updatePosition() {


    }

    onShow(): void {
        console.log("Start screen active");
    }

    onHide(): void {
        console.log("Start Scene hidden");
    }


}