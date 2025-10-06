import {Container} from "pixi.js";
import {Button} from "./UI/Button";
import {Globals} from "my-pixi-coffee-pixi-game-framework";
import {GameGlobals} from "../GameGlobals";

export class NighbourMeni extends Container{


    constructor() {
        super();

        this.init();

        this.switchBcg(1);
    }

    private init() {


        for(let i = 0; i < 6; i++){
            var btt = new Button(Globals.assetsLibrary["neighBttSkin"], Globals.assetsLibrary["neighBttSkin"]);
            btt.setAnchor();
            GameGlobals.positionManager.setItemPositionAndScale(btt, `neighbour${i}Btt_box__button`);
            btt.on("pointerdown", this.handleButtons);
            btt.setButtonID(i);
            this.addChild(btt);
        }

    }

    public switchBcg(screenMode: number) {
        if (screenMode === 1) {
            this.visible = false;
        } else if (screenMode === 2) {
            this.visible = true;
        }

    }

    private handleButtons(e) {

    }




}