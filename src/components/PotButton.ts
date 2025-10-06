import {Sprite, Texture} from "pixi.js";

export class PotButton extends Sprite {

    private id: number;

    private value: number;

    constructor(texture, id: number) {
        super(texture);

        this.anchor.set(0.5);

        this.id = id;
    }

    public setID(id: number) {
        this.id = id;
    }

    public getValue() {
        return this.value;
    }

    public setValue(value: number) {
        this.value = value;
    }

    public getID() {
        return this.id;
    }

}