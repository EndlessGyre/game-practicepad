class StartScene extends Phaser.Scene {
    constructor() {
      super({
        key: 'StartScene'
      });
    }
  
    preload(){
      this.load.image('sky', './img/sky.png');
    }

    create(){
      this.add.sprite(250, 250, 'sky');
      gameState.startText = this.add.text(25, 100, 'START WITH MOUSE CLICK!', {fontSize: '15px', fill: '#000000'});      

      this.input.on('pointerup', () => {
        // Add logic to transition from StartScene to GameScene:
        this.scene.stop('StartScene');
        this.scene.start('GameScene');
      });
    }
    

  }
