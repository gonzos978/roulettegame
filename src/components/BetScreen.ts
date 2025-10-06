import {Container, Sprite} from "pixi.js";
import {GameGlobals} from "../GameGlobals";
import {Globals} from "my-pixi-coffee-pixi-game-framework";
import {PotButton} from "./PotButton";

export class BetScreen extends Container {

    private screenOneHolder: Container;

    private screenTwoHolder: Container;

    private screenOneData: Array<Sprite>;

    constructor() {
        super();

        this.screenOneHolder = new Container();
        this.addChild(this.screenOneHolder);

        this.screenTwoHolder = new Container();
        this.addChild(this.screenTwoHolder);


        this.initScreenOne();

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

    public switchScreen(screenMode:number) {
        if(screenMode === 1) {
            this.screenOneHolder.visible = true;
            this.screenTwoHolder.visible = false;
        }else if(screenMode === 2) {
            this.screenOneHolder.visible = false;
            this.screenTwoHolder.visible = true;
        }
    }

    private initScreenTwo() {


    }



    private handlePotButtons(e: any) {
        console.log(e.target.getID());
    }
}