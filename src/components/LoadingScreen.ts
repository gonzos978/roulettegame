// src/screens/LoadingScene.ts

import {Container, Graphics, Text} from "pixi.js";
import {BaseGameScene} from "my-pixi-coffee-pixi-game-framework/dist/components/BaseGameScene";
import {GameProperties, Globals} from "my-pixi-coffee-pixi-game-framework";

export class LoadingScreen extends BaseGameScene {

    private container: Container;
    private pBarContainer: Container;
    private progressBar: Graphics;
    private progressFill: Graphics;
    private progressText: Text;
    private barWidth = 1200;
    private barHeight = 5;

    constructor(sceneName: string, container: Container) {
        super(sceneName, container);

        this.container = new Container();
        this.gameContainer.addChild(this.container);

        const bcg = new Graphics();
        bcg.beginFill(0x000000);
        bcg.drawRect(0, 0, 1920, 1080);
        bcg.endFill();
        this.container.addChild(bcg);

        this.pBarContainer = new Container();
        this.gameContainer.addChild(this.pBarContainer);



        this.progressBar = new Graphics();
        this.progressBar.beginFill(0x333333);
        this.progressBar.drawRect(0, 0, this.barWidth, this.barHeight);
        this.progressBar.endFill();
        this.pBarContainer.addChild(this.progressBar);
        this.pBarContainer.x = GameProperties.STAGE_WIDTH / 2 - this.barWidth / 2;
        this.pBarContainer.y = GameProperties.STAGE_HEIGHT / 2;

        // Add the filled part (dynamic)
        this.progressFill = new Graphics();
        this.progressFill.beginFill(0xcc0000);
        this.progressFill.drawRect(0, 0, 0, this.barHeight); // start with width = 0
        this.progressFill.endFill();

        this.progressBar.addChild(this.progressFill);

        this.progressText = new Text("Loading 0%", {fill: 0xffffff, fontSize: 28});
        this.progressText.x = GameProperties.STAGE_WIDTH / 2;
        this.progressText.y = 500;
        this.container.addChild(this.progressText);

    }

    onShow(): void {
        console.log("LoadingScene active");
    }

    onHide(): void {
        console.log("LoadingScene hidden");
    }

    updateProgress(progress: number) {

        this.progressFill.clear();
        this.progressFill.beginFill(0xcc0000);
        this.progressFill.drawRect(0, 0, this.barWidth * progress, this.barHeight);
        this.progressFill.endFill();
        this.progressText.text = `Loading ${(progress * 100).toFixed(0)}%`;
    }
}
