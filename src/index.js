import Phaser from 'phaser';

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    // this.load.audio('bgm', ['./src/assets/bgm.mp3']);
    this.load.image('asphalt', './src/assets/asphalt.png');

    this.load.spritesheet('rebel', './src/assets/rebel.png', {
      frameWidth: 500,
      frameHeight: 500
    });

    // this.load.spritesheet('road', './src/assets/road.png', {
    //   frameWidth: 500,
    //   frameHeight: 500
    // })

    // this.load.spritesheet('bg', './src/assets/bg.png', {
    //   frameWidth: 500,
    //   frameHeight: 500
    // })
  }

  create() {

    // Key input
    this.cursorKeys = this.input.keyboard.createCursorKeys();

    // BGM
    // this.bgm = this.sound.add('bgm');
    // let musicConfig = {
    //   mute: false,
    //   volume: 1,
    //   rate: 1, 
    //   detune: 0,
    //   seek: 90,
    //   loop: true,
    //   delay: 0
    // };

    // this.bgm.play();

    // Rebel
    this.rebel = this.add.sprite(300, 200, 'rebel').setDepth(5);

    this.anims.create({
      key: 'move_anim',
      frames: this.anims.generateFrameNumbers('rebel', {start: 1, end: 3}),
      frameRate: 18,
      repeat: -1
    });

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('rebel', {start: 0, end: 0}),
      frameRate: 1,
    })

    // this.anims.create({
    //   key: 'kato_anim',
    //   frames: this.anims.generateFrameNumbers('rebel',
    //     {start: 3, end: 4}),
    //   frameRate: 10,
    //   repeat: -1
    // }); 
    
    // Road
    // this.road = this.add.sprite(100, 360, 'road').setDepth(4);
    // this.road2 = this.add.sprite(500, 360, 'road').setDepth(4);
    // this.road3 = this.add.sprite(1000, 360, 'road').setDepth(4);

    // this.asphalt = this.add.image(50, 450, 'asphalt').setDepth(4);
    this.asphalt = this.add.tileSprite(0, 400, game.config.width, game.config.height, 'asphalt')
      .setOrigin(0, 0).setScrollFactor(0);

    // this.anims.create({
    //   key: 'road_anim',
    //   frames: this.anims.generateFrameNumbers('road'),
    //   frameRate: 5,
    //   repeat: -1
    // });

    // BG
    // this.bg = this.add.image(250, 240, 'bg').setDepth(0);
    // this.bg = this.add.image(700, 240, 'bg').setDepth(0);
    // this.bg = this.add.image(1000, 240, 'bg').setDepth(0);

    // this.rebel.play('move_anim');
    // this.road.play('road_anim');
    // this.road2.play('road_anim');
    // this.road3.play('road_anim');
    // this.cameras.main.startFollow(this.rebel);
  }

  update() {
    // this.cameras.main.startFollow(this.rebel);
    // this.asphalt.tilePositionX = this.cameras.x * -1;

    if (this.cursorKeys.up.isDown) {
      this.rebel.play('move_anim', true);
      this.asphalt.tilePositionX += 8;
      // this.cameras.main.startFollow(this.rebel);
      // this.asphalt.tilePositionX = this.cameras.x * .00000000000000002;
      // this.cameras.main.startFollow(this.rebel);
      // this.asphalt.tilePositionX = this.cameras.main.scrollX * .3;
      // this.rebel.anims.msPerFrame = 20;
    } else {
      this.rebel.play('idle', true);
    }
  }
}

const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1200,
  height: 500,
  backgroundColor: '#99d6f0',
  scene: MyGame
});
