const config = {
    width: 256,
    height: 240,
    backgroundColor: '#333333',
    type: Phaser.AUTO,
    parent: 'platform',
    scene: [StartScene, GameScene],
    scale: {
        zoom: 2.5
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {y: 500}
        }
    }    
}



const game = new Phaser.Game(config);