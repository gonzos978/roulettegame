import {
    EventsManager,
    GameApplication, GameStatus, LoadingScene,
    PreloaderEvents, eventBus, Preloader, pause, SceneNames, PositionManager,
} from 'my-pixi-coffee-pixi-game-framework';

import {LoadingScreen} from "./components/LoadingScreen";
import {StartScreen} from "./components/StartScreen";
import {GameGlobals} from "./GameGlobals";
import {GameScene} from "./components/GameScene";



export class Main extends GameApplication {
    constructor() {
        super(1920, 1080, 0x000000);

        const p = async ()=>{

            await pause(1000);
            main.start();

        }
        p();
    }

    override async start(){

        GameGlobals.positionManager = new PositionManager("/");
        await GameGlobals.positionManager.loadPositionData();


        console.log(GameGlobals.positionManager);

        EventsManager.getInstance().addEvent(
            PreloaderEvents.LOADING_COMPLETE,
            this.setupGame,
            this
        );

        this.createMainScreens();

        eventBus.on("START_GAME", () => {
            this.screenManager.changeScene(SceneNames.GameScene);
        });

        // Show Loading first
        this.screenManager.changeScene(SceneNames.LoadingScene);

        eventBus.on(GameStatus.LOADING, (progress:{value:number})=>{
            const loadScene = this.screenManager.getSceneById(SceneNames.LoadingScene) as LoadingScene;
            loadScene.updateProgress(progress.value);
        });

        // @ts-ignore
        const preload: Preloader = new Preloader();

    }

    override createMainScreens(){

        const loadingScene = new LoadingScreen(SceneNames.LoadingScene,this.gameContainer);
        this.screenManager.registerScene(loadingScene);


    }

    override setupGame(){


        super.setupGame();
    }

    override async gameReady(){

        const startScene = new StartScreen(SceneNames.StartScreen,this.gameContainer);
        this.screenManager.registerScene(startScene);

        const gameScene = new GameScene(SceneNames.GameScene,this.gameContainer);
        this.screenManager.registerScene(gameScene);


        super.gameReady();

        console.log("Game started!");
    }
}

const main = new Main();



