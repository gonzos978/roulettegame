import {BaseGameScene} from "my-pixi-coffee-pixi-game-framework/dist/components/BaseGameScene";
import {Container, Renderer, Sprite, Text} from "pixi.js";
import {eventBus, Globals} from "my-pixi-coffee-pixi-game-framework";
import {baseTextStyle, mainStyle} from "../textstyles/Styles";
import {GameGlobals} from "../GameGlobals";

export class MainButton extends BaseGameScene{

    private topLabel: Text;
    private gameModeTitle: Text;
    private gameModeTypes: Text;
    private gameModeValues: Text;

    constructor(sceneName: string, container: Container) {
        super(sceneName, container);

        this.init()
    }

    override init() {
        const bcg = new Sprite(Globals.assetsLibrary["panelBcg"]);
        this.addChild(bcg);

        this.topLabel = new Text({text: "hi!", style: mainStyle});
        let pos = GameGlobals.positionManager.getItemPosition("gameIconMode_txt");
        this.topLabel.x = pos.x;
        this.topLabel.y = pos.y;
        this.addChild(this.topLabel);

        this.gameModeTitle = new Text({text: "hi!", style: mainStyle});
        pos = GameGlobals.positionManager.getItemPosition("gamemodeTitle_txt");
        this.gameModeTitle.x = pos.x;
        this.gameModeTitle.y = pos.y;
        this.addChild(this.gameModeTitle);

        this.gameModeTypes = new Text({text: "hi!", style: mainStyle});
        pos = GameGlobals.positionManager.getItemPosition("gamemode_txt");
        this.gameModeTypes.x = pos.x;
        this.gameModeTypes.y = pos.y;
        this.addChild(this.gameModeTypes);

        this.gameModeValues = new Text({text: "hi!", style: mainStyle});
        pos = GameGlobals.positionManager.getItemPosition("gamemode_txt2");
        this.gameModeValues.x = pos.x;
        this.gameModeValues.y = pos.y;
        this.addChild(this.gameModeValues);

        this.on("pointerdown", () => {
            this.onStartClick();
        });
        this.interactive = true;

    }


    private onStartClick() {
        console.log("Start button clicked!");
        // Dispatch an event, or call ScreenManager to switch to GameScreen
        eventBus.emit("START_GAME");
    }


    onHide(): void {
    }

    onShow(): void {
    }

}