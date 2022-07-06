const gameState = {};

class GameScene extends Phaser.Scene {
    constructor() {
      super({
        key: 'GameScene'
      });
    }


    preload() {           
      this.load.image('bob', '../img/Bob+front.png');
      this.load.image('dude', '../img/little_dude.png');
      this.load.image('red-room', '../img/reddish_room.png', {
        width: 800, height: 600
      });
      this.load.image('platform', '../img/truss-platform.png');
      this.load.image('flower', '../img/flower.png');
      this.load.image('mushy', '../img/mushy.png');
    }// end preload
  
    create() {
      // C
      this.add.sprite(400, 300, 'red-room');
      const platforms = this.physics.add.staticGroup();
      platforms.create(64, 200, 'platform');
      platforms.create(184, 200, 'platform');
      platforms.create(302, 200, 'platform');
      platforms.create(256, 400, 'platform');
      platforms.create(400, 400, 'platform');
  
      // Create the sprite object, animation, and play the animation: 
      
      gameState.player = this.physics.add.sprite(100, 100, 'dude');
      //gameState.player.setCollideWorldBounds(true);
      this.physics.add.collider(gameState.player, platforms);
      

      gameState.enemy = this.physics.add.sprite(Math.random() * 500, 100, 'mushy');
      gameState.enemy.setCollideWorldBounds(true);
      this.physics.add.collider(gameState.enemy, platforms);

      this.physics.world.setBounds(0, 0,  config.width, config.height, true, true, true, false);

      gameState.cursors = this.input.keyboard.createCursorKeys();
        
    }// end create

    update(){
      // Key input events
      if(gameState.cursors.right.isDown){
        gameState.player.setVelocityX(50);
      }else if(gameState.cursors.left.isDown){
        gameState.player.setVelocityX(-50);
      }else{
        gameState.player.setVelocityX(0);
      }

      if(gameState.cursors.up.isDown){
        gameState.player.setVelocityY(-75);
      }else{
        gameState.player.setVelocityY(0);
      }

      this.physics.world.wrap(gameState.player);
      
    }// end update
    







}