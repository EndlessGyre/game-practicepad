const config = {
    width: 400,
    height: 400,
    backgroundColor: '#333333',
    type: Phaser.AUTO,
    parent: 'platform',
    scene: [StartScene, GameScene],
    scale: {
        zoom: 2
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {y: 50}
        }
    }    
}



const game = new Phaser.Game(config);