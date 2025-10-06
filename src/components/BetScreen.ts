import {Container, Sprite} from "pixi.js";
import {GameGlobals} from "../GameGlobals";
import {Globals} from "my-pixi-coffee-pixi-game-framework";
import {PotButton} from "./PotButton";

export class BetScreen extends Container {

    private screenOneHolder: Container;

    private screenTwoHolder: Container;

    private screenOneData: Array<PotButton>;

    private screenTwoData: Array<PotButton>;

    constructor() {
        super();

        this.screenOneHolder = new Container();
        this.addChild(this.screenOneHolder);

        this.screenTwoHolder = new Container();
        this.addChild(this.screenTwoHolder);


        this.initScreenOne();
        this.initScreenTwo();

        this.switchScreen(1);

    }

    private initScreenOne() {

        this.screenOneData = [];
        for (let i = 0; i < 13; i++) {


            const item = new PotButton(Globals.assetsLibrary["betBtt_little"], i);
            GameGlobals.positionManager.setItemPositionAndScale(item, `betID${i}_btn`)
            this.screenOneHolder.addChild(item);
            item.alpha = 0.3;
            item.interactive = true;
            item.on("click", this.handlePotButtons);
            this.screenOneData.push(item);
        }

        const data: number[] = [];

        for (let row = 1; row <= 6; row++) { // for example 5 rows
            for (let i = 1; i <= 24; i++) {
                data.push(row * 100 + i);
            }
        }

        for (let i = 0; i < data.length; i++) {
            const item = new PotButton(Globals.assetsLibrary["potBtt"], i);
            GameGlobals.positionManager.setItemPositionAndScale(item, `betID${data[i]}_btn`)
            item.alpha = 0.3;
            this.screenOneHolder.addChild(item);
            item.on("click", this.handlePotButtons);
            this.screenOneData.push(item);
        }

    }

    public switchScreen(screenMode: number) {
        if (screenMode === 1) {
            this.screenOneHolder.visible = true;
            this.screenTwoHolder.visible = false;
        } else if (screenMode === 2) {
            this.screenOneHolder.visible = false;
            this.screenTwoHolder.visible = true;
        }
    }

    private initScreenTwo() {

        this.screenTwoData = [];
        const data: number[] = [0, 422, 610, 214, 204, 614, 402, 218, 412, 224, 604, 618, 210, 624, 408, 620, 406, 416, 208, 404, 616, 212, 622, 202, 414, 410, 222, 606, 216, 612,
            420, 206, 220, 608, 424, 602, 418];

        for (let i = 0; i < data.length; i++) {
            const item = new PotButton(Globals.assetsLibrary["potBtt"], i);
            GameGlobals.positionManager.setItemPositionAndScale(item, `betID${data[i]}_btn_t`)
            item.alpha = 0.3;
            this.screenTwoHolder.addChild(item);
            item.on("click", this.handlePotButtons);
            item.interactive = true;
            this.screenTwoData.push(item);
        }

        const bigBtns = ["serie58_btn", "orphelins59_btn", "serie60_btn", "seriezero61_btn"];
        for (let i = 0; i < bigBtns.length; i++) {
            const item = new PotButton(Globals.assetsLibrary["historyBcgColors_003"], i);
            GameGlobals.positionManager.setItemPositionAndScale(item, bigBtns[i]);
            item.alpha = 0.3;
            this.screenTwoHolder.addChild(item);
            item.interactive = true;
            item.on("click", this.handlePotButtons);
            this.screenTwoData.push(item);
        }

    }


    private handlePotButtons(e: any) {
        console.log(e.target.getID());
    }
}