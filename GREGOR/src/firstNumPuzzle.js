import Phaser from "phaser";
import { Asset } from "./Asset";
import { Modal } from "./Modal";

export default class firstNumPuzzle extends Phaser.Scene{
    constructor() {
        super({ key: 'firstNumPuzzle' });
        this.assets = [
            new Asset('numPuzzle','./assets/numPuzzle.png')
        ];
        this.numPuzzleAnswer = "14";// 정답 설정
    }

    preload() {
        this.assets.forEach(asset => asset.load(this));
    }

    create() {
        this.cameras.main.fadeIn(1000);

        this.add.image(this.scale.width/2, this.scale.height / 2 -100, 'numPuzzle').setOrigin(0.5, 0.5).setScale(0.7);

        this.numPuzzleAnsewerSheet = new Modal(this, this.scale.width/2 -100, 800, 300, 50,'#000000','80%',false);
        this.numPuzzleAnsewerSheet.show();

    }

    checkAnswer(answer) {
        if (answer === this.numPuzzleAnswer) {
            this.numPuzzleAnsewerSheet.hide();
            this.time.delayedCall(100, () => this.scene.start('talk2Scene',{fadeIn:true}));
        } else {
            // 정답이 틀린 경우 처리 (예: 메시지 표기)
            console.log('틀린 답변입니다.');
        }
    }
}