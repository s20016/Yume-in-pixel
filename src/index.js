import Phaser from 'phaser';

class MyGame extends Phaser.Scene {
  constructor() {
    super();
    var instruction;
  }

  preload() {
    // this.load.audio('bgm', [ './src/assets/bgm.ogg', './src/assets/bgm.mp3' ]);
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
    // this.music = this.sound.add('bgm');
    // this.cache.isSoundDecoded("bgm");
    // this.music.play();

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.rebel = this.add.sprite(300, 200, 'rebel').setDepth(5);

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('rebel', {start: 0, end: 0}),
      frameRate: 1,
    })

    this.anims.create({
      key: 'move_anim',
      frames: this.anims.generateFrameNumbers('rebel', {start: 1, end: 3}),
      frameRate: 12,
      repeat: -1,
    });

    this.anims.create({
      key: 'kato_anim',
      frames: this.anims.generateFrameNumbers('rebel', {start: 4, end: 5}),
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

    this.crowd = this.add.tileSprite(0, 210, game.config.width, game.config.height, 'crowd')
      .setOrigin(0, 0).setScrollFactor(0).setDepth(3);
  }

  update() {
    if (this.cursorKeys.up.isDown) {
      if (this.cursorKeys.shift.isDown) {
        this.rebel.play('kato_anim', true)
        this.settingMove();
      } else {
        this.rebel.play('move_anim', true);
        this.settingMove();
      }
    } else {
      this.rebel.play('idle', true);
      this.add.text(game.config.width - 160, 20, 'Up, Up + Shift').setDepth(6);
    }

  }

  settingMove() {
    this.asphalt.tilePositionX += 8;
    this.beach.tilePositionX += 6;
    this.crowd.tilePositionX += 4;
    this.ocean.tilePositionX += 3;
    this.cloud.tilePositionX += 0.2;
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
