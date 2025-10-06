import {BaseGameScene} from "my-pixi-coffee-pixi-game-framework/dist/components/BaseGameScene";
import {Container} from "pixi.js";
import {eventBus} from "my-pixi-coffee-pixi-game-framework";
import {BottomMenu} from "./BottomMenu";
import {BetScreen} from "./BetScreen";
import {ButtonsEnum} from "./data/ButtonsEnum";
import {Background} from "./Background";
import {NighbourMeni} from "./NighbourMeni";
import {GameTimer} from "./GameTimer";
import {GameGlobals} from "../GameGlobals";
import {InfoScreen} from "./InfoScreen";
import {WinPanel} from "./WinPanel";

export class GameScene extends BaseGameScene {


    private gameModeOne: Container;

    private background: Background;

    private betScreen: BetScreen;

    private nighbourMeni:NighbourMeni;

    private gameTimer:GameTimer;

    private infoScreen:InfoScreen;

    private winPanel:WinPanel;

    constructor(sceneName: string, container: Container) {
        super(sceneName, container);
        this.init();
    }

    override init() {

        this.gameModeOne = new Container();
        this.addChild(this.gameModeOne);

        this.background = new Background("BCG", this.gameContainer);
        this.addChild(this.background);

        const bottomMenu = new BottomMenu("BottomMenu", this.gameContainer);
        this.addChild(bottomMenu);

        this.betScreen = new BetScreen();
        this.addChild(this.betScreen);

        this.nighbourMeni = new NighbourMeni();
        this.addChild(this.nighbourMeni);

        this.gameTimer = new GameTimer("GameTimer", this.gameContainer);
        GameGlobals.positionManager.setItemPositionAndScale(this.gameTimer,"timer__gameitem");
        this.addChild(this.gameTimer);

        this.infoScreen = new InfoScreen("InfoScreen", this.gameContainer);
        this.addChild(this.infoScreen);

        this.winPanel = new WinPanel("WinPanel", this.gameContainer);

        this.addChild(this.winPanel);

        /*setTimeout(()=>{
            this.gameTimer.startTimer(35);
        }, 3000);*/


        eventBus.on("BOTTOM_MENU_ACTION", this.handleBottomMenuActions.bind(this));
    }

    onHide(): void {
    }

    onShow(): void {
    }


    private handleBottomMenuActions(data: ButtonsEnum) {

        if (data === ButtonsEnum.LOBBY) {

        } else if (data === ButtonsEnum.REBET) {

        }else if (data === ButtonsEnum.CLEAR_ALL) {

        }else if (data === ButtonsEnum.CLEARE_LAST) {

        }else if (data === ButtonsEnum.CHANGE_SCREEN) {

            this.background.switchBcg();
            this.betScreen.switchScreen(this.background.getScreenMode());
        }

    }


}