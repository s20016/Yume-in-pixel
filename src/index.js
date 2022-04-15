import Phaser from 'phaser';

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.spritesheet('rebel', './src/assets/rebel.png', {
      frameWidth: 500,
      frameHeight: 500
    });
  }

  create() {
    this.rebel = this.add.sprite(300, 300, 'rebel');

    this.anims.create({
      key: 'rebel_anim',
      frames: this.anims.generateFrameNumbers('rebel'),
      frameRate: 10,
      repeat: -1
    });

    this.rebel.play('rebel_anim');
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1200,
  height: 600,
  scene: MyGame
};

const game = new Phaser.Game(config);
