import {BaseGameScene} from "my-pixi-coffee-pixi-game-framework/dist/components/BaseGameScene";
import {Container, Sprite} from "pixi.js";
import {eventBus, Globals, SpriteSheetFactory} from "my-pixi-coffee-pixi-game-framework";
import {GameGlobals} from "../GameGlobals";
import {Chip} from "./Chip";
import {Button} from "./UI/Button";
import {ButtonsEnum} from "./data/ButtonsEnum";

export class BottomMenu extends BaseGameScene {

    constructor(sceneName: string, container: Container) {
        super(sceneName, container);

        this.init();
    }


    override init() {

        const names = ["chip5__MC", "chip10__MC", "chip25__MC", "chip100__MC", "chip500__MC", "chip1000__MC"];
        const values = [5, 10, 25, 100, 500, 1000];

        names.forEach((id, index) => {

            const chip = new Chip(id);
            chip.setID(index);
            chip.setValue(values[index]);
            this.addChild(chip);
        });

        var btt = new Button(Globals.assetsLibrary["bbBtt2Skin_001"], Globals.assetsLibrary["bbBtt2Skin_002"]);
        GameGlobals.positionManager.setItemPositionAndScale(btt, "LobbyBtt_box__button");
        btt.buttonName = "LobbyBtt";
        btt.initButtonText("LOBBY");
        btt.on("pointerdown", this.handleButtons);
        this.addChild(btt);

        var btt1 = new Button(Globals.assetsLibrary["bbBtt2Skin_001"], Globals.assetsLibrary["bbBtt2Skin_002"]);
        GameGlobals.positionManager.setItemPositionAndScale(btt1, "ChangeViewBtt_box__button");
        btt1.buttonName = "ChangeBtt";
        btt1.initButtonText("CHANGE");
        btt1.on("pointerdown", this.handleButtons);
        this.addChild(btt1);

        var btt2 = new Button(Globals.assetsLibrary["bbBttSkin_001"], Globals.assetsLibrary["bbBttSkin_001"]);
        btt2.setAnchor();
        btt2.buttonName = "RebetBtt"
        GameGlobals.positionManager.setItemPositionAndScale(btt2, "RebetBtt_box__button");
        btt2.on("pointerdown", this.handleButtons);
        this.addChild(btt2);

        var btt3 = new Button(Globals.assetsLibrary["bbBttSkin_001"], Globals.assetsLibrary["bbBttSkin_001"]);
        btt3.setAnchor();
        GameGlobals.positionManager.setItemPositionAndScale(btt3, "ClearAllBtt_btt_box__button");
        btt3.on("pointerdown", this.handleButtons);
        btt3.buttonName = "ClearAllBtt";
        this.addChild(btt3);

        var btt4 = new Button(Globals.assetsLibrary["bbBttSkin_001"], Globals.assetsLibrary["bbBttSkin_001"]);
        btt4.setAnchor();
        btt4.buttonName = "ClearLastBtt";
        GameGlobals.positionManager.setItemPositionAndScale(btt4, "ClearLastBtt_box__button");
        btt4.on("pointerdown", () => {

        });
        this.addChild(btt4);

    }

    onHide(): void {
    }

    onShow(): void {
    }


    private handleButtons(e) {

        console.log(e.target.buttonName);

        switch (e.target.buttonName) {

            case "LobbyBtt":

                break;
            case "ChangeBtt":

                eventBus.emit("BOTTOM_MENU_ACTION", ButtonsEnum.CHANGE_SCREEN)

                break;
            case "RebetBtt":
                break;
            case "ClearAllBtt":
                break;
            case "ClearLastBtt":
                break;
            default:
                break;

        }


    }

}