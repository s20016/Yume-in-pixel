import Phaser from 'phaser';

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.audio('bgm', [ './src/assets/bgm.ogg', './src/assets/bgm.mp3' ]);
    this.load.image('asphalt', './src/assets/asphalt.png');
    this.load.image('beach', './src/assets/beach.png');
    this.load.image('ocean', './src/assets/ocean.png');
    this.load.image('cloud', './src/assets/cloud.png');
    this.load.image('crowd', './src/assets/crowd.png');

    this.load.spritesheet('rebel', './src/assets/rebel.png', {
      frameWidth: 500,
      frameHeight: 500
    });
  }



  create() {
    this.music = this.sound.add('bgm');
    // this.cache.isSoundDecoded("bgm");
    this.music.play();

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.rebel = this.add.sprite(300, 200, 'rebel').setDepth(5);

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('rebel', {start: 0, end: 0}),
      frameRate: 1,
    })

    this.anims.create({
      key: 'move_anim',
      frames: this.anims.generateFrameNumbers('rebel', {start: 3, end: 5}),
      frameRate: 12,
      repeat: -1,
    });

    this.anims.create({
      key: 'back_anim',
      frames: this.anims.generateFrameNumbers('rebel', {start: 1, end: 2}),
      frameRate: 3,
      repeat: -1,
    });

    this.anims.create({
      key: 'kato_anim',
      frames: this.anims.generateFrameNumbers('rebel', {start: 6, end: 7}),
      frameRate: 10,
      repeat: -1
    }); 

    this.asphalt = this.add.tileSprite(0, 400, game.config.width, game.config.height, 'asphalt')
      .setOrigin(0, 0).setScrollFactor(0).setDepth(4);
    
    this.beach = this.add.tileSprite(0, 355, game.config.width, game.config.height, 'beach')
      .setOrigin(0, 0).setScrollFactor(0).setDepth(3);

    this.ocean = this.add.tileSprite(0, 325, game.config.width, game.config.height, 'ocean')
      .setOrigin(0, 0).setScrollFactor(0).setDepth(2);
    
    this.cloud = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'cloud')
      .setOrigin(0, 0).setScrollFactor(0).setDepth(1);

    this.crowd = this.add.tileSprite(0, 0, game.config.width, 500, 'crowd')
      .setOrigin(0, 0).setScrollFactor(0).setDepth(3);
  }

  update() {
    if (this.cursorKeys.up.isDown) {
      if (this.cursorKeys.shift.isDown) {
        this.rebel.play('kato_anim', true)
        this.forwardMove();
      } else {
        this.rebel.play('move_anim', true);
        this.forwardMove();
      }
    } else if (this.cursorKeys.down.isDown) {
        this.rebel.play('back_anim', true);
        this.backwardMove();
    } else {
      this.rebel.play('idle', true);
      // this.add.text(game.config.width - 230, 20, 'Press Up or Down. Shift for surprise').setDepth(7);
    }

  }

  forwardMove() {
    this.asphalt.tilePositionX += 8;
    this.beach.tilePositionX += 6;
    this.crowd.tilePositionX += 4;
    this.ocean.tilePositionX += 3;
    this.cloud.tilePositionX += .2;
  }

  backwardMove() {
    this.asphalt.tilePositionX -= 1;
    this.beach.tilePositionX -= .6;
    this.crowd.tilePositionX -= .8;
    this.ocean.tilePositionX -= .5;
    this.cloud.tilePositionX -= .1;
  }
}

const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1200,
  height: 500,
  backgroundColor: '#88d0ef',
  scene: MyGame
});
