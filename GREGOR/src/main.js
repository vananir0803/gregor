import Phaser from "phaser";
import introScene from "./introScene.js";
import talk1Scene from "./talk1Scene.js";
import mainScnene from "./mainScene.js";
import officeScene from "./officeScene.js";
import stationScene from "./stationScene.js";
import firstNumPuzzle from "./firstNumPuzzle.js";
import talk2Scene from "./talk2Scene.js";

const config = {
    type: Phaser.AUTO,
    width : 1900,
    height : 910,
    scene : [introScene,
         talk1Scene, talk2Scene,
         officeScene, 
         stationScene,
         firstNumPuzzle]
    /*{

        preload : preload,
        create : create,
        update : update
    }*/

};

const game = new Phaser.Game(config);

/*
function preload(){
    //자원로드
}

function create(){
    //게임 오브젝트 및 초기 로직 생성
}

function update(){
    //게임 루프에 실행되는 코드
}
*/