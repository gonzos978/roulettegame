import {AnimatedSprite, Container, Sprite, Text} from "pixi.js";
import {Globals} from "my-pixi-coffee-pixi-game-framework";
import {GameGlobals} from "../GameGlobals";
import {mainStyle, setTextWidthFixed} from "../textstyles/Styles";

export class Chip extends Sprite {

    private animSprite: AnimatedSprite;

    private ID: number = 0;

    private value: number = 0;

    private valueTf: Text;

    private chipPosition:{x: number, y: number} = {x: 0, y: 0};

    private chipGlow:Sprite;

    private isButtonActive:boolean = false;

    constructor(positionId: string) {
        super();

        this.chipGlow = new Sprite(Globals.assetsLibrary["chipGlow"]);
        this.chipGlow.anchor.set(0.5);
        this.addChild(this.chipGlow);
        this.chipGlow.visible = false;

        this.animSprite = Globals.spritesheetFactory.getSpriteSheetAnimation("jetons_json", "jeton")
        this.addChild(this.animSprite);
        this.animSprite.anchor.set(0.5);

        if (positionId) {
            const pos = GameGlobals.positionManager.getItemPosition(positionId);
            this.x = pos.x;
            this.y = pos.y;
        }

        this.valueTf = new Text({text: "0", style: mainStyle});
        this.valueTf.anchor.set(0.5);
        this.addChild(this.valueTf);

        setTextWidthFixed(this.valueTf, 200);



    }

    private changeChipFrame() {

        switch (this.value) {


            case 5:
                this.animSprite.gotoAndStop(0);
                break;
            case 10:
                this.animSprite.gotoAndStop(1);
                break;
            case 25:
                this.animSprite.gotoAndStop(2);
                break;
            case 100:
                this.animSprite.gotoAndStop(3);
                break;
            case 500:
                this.animSprite.gotoAndStop(4);
                break;
            case 1000:
                this.animSprite.gotoAndStop(5);
                break;

        }
    }

    public setID(id: number) {
        this.ID = id;
    }

    public getID() {
        return this.ID;
    }

    public setValue(value: number) {
        this.value = value;

        this.valueTf.text = value.toString();

        this.changeChipFrame();
    }

    public getValue() {
        return this.value;
    }

    public setPosition(x: number, y: number) {
        this.chipPosition.x = x;
        this.chipPosition.y = y;
    }

    public getPosition() {
        return this.chipPosition;
    }

    public reset() {
        this.value = 0;
        this.valueTf.text = "0";
        this.chipPosition.x = 0;
        this.chipPosition.y = 0;
    }

    public setButtonActive(active:boolean) {
        this.isButtonActive = active;

        if(active) {
            this.chipGlow.visible = true;
        } else {
            this.chipGlow.visible = false;
        }
    }

    public getButtonActive() {
        return this.isButtonActive;
    }
}