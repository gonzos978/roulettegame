import {Container, Sprite, Texture, Text} from "pixi.js";

export class Button extends Container{

    private scaleWhenDown:boolean = false;

    private skinsHolder:Array<Sprite>;

    private textFiled:Text;

    public buttonName:string;

    public buttonID:number;

    constructor(upSkin:Texture , downSkin:Texture) {
        super();

        const upSprite = new Sprite(upSkin);

        this.addChild(upSprite);
        const downSprite = new Sprite(downSkin);
        this.addChild(downSprite);
        downSprite.visible = false;
        downSprite.alpha = 0.5;


        this.skinsHolder = [upSprite,downSprite];

        this.addEventListener("pointerdown", () => {
            this.skinsHolder[0].visible = false;
            this.skinsHolder[1].visible = true;
        });

        this.addEventListener("pointerup", () => {
            this.skinsHolder[0].visible = true;
            this.skinsHolder[1].visible = false;
        });

        this.addEventListener("pointerupoutside", () => {
            this.skinsHolder[0].visible = true;
        });

        this.addEventListener("pointerupoutside", () => {
            this.skinsHolder[0].visible = true;
        });
        this.interactive = true;
    }

    public initButtonText(text:string){

        this.textFiled = new Text({text: text, style: {fontFamily: 'Arial', fontSize: 22, fontWeight: 'bold', fill: 'white', align: 'center'}});
        this.addChild(this.textFiled);
        this.textFiled.anchor.set(0.5);
        this.textFiled.x = this.width/2-this.textFiled.width/2;
        this.textFiled.y = this.height/2-this.textFiled.height/2;
    }


    public setAnchor(){
        this.skinsHolder[0].anchor.set(0.5);
        this.skinsHolder[1].anchor.set(0.5);
    }

    public setButtonID(id:number){
        this.buttonID = id;
    }
    public getButtonID(){
        return this.buttonID;
    }



}