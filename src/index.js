import Phaser from 'phaser';

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.audio('bgm', ['./src/assets/bgm.mp3']);

    this.load.spritesheet('rebel', './src/assets/rebel.png', {
      frameWidth: 500,
      frameHeight: 500
    });

    this.load.spritesheet('road', './src/assets/road.png', {
      frameWidth: 500,
      frameHeight: 500
    })

    this.load.spritesheet('bg', './src/assets/bg.png', {
      frameWidth: 500,
      frameHeight: 500
    })
  }

  create() {
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
      key: 'rebel_anim',
      frames: this.anims.generateFrameNumbers('rebel',
        {start: 0, end: 2}),
      frameRate: 10,
      repeat: -1
    }); 

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

    this.rebel.play('rebel_anim');
    // this.road.play('road_anim');
    // this.road2.play('road_anim');
    // this.road3.play('road_anim');
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1200,
  height: 500,
  transparent: true,
  scene: MyGame
};

const game = new Phaser.Game(config);
