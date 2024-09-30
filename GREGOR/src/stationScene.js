import Phaser from "phaser";
import { Asset } from "./Asset";

export default class stationScene extends Phaser.Scene{
    constructor(){
        super({key:'stationScene'});
        this.assets =[
            new Asset('station','./assets/station.png')
        ];
    }

    preload(){
        this.assets.forEach(asset => asset.load(this));
    }

    create(){
        if (this.fadeIn) {
            this.cameras.main.fadeIn(1000, 0, 0, 0); // 1초 동안 페이드인
        }
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'station').setOrigin(0.5, 0.55).setScale(0.99);

        this.input.keyboard.on('keydown-SPACE',()=>{
            this.scene.start('intro');
        })
    }

    update(){

    }

}