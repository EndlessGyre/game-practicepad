const config = {
    width: 512,
    height: 512,
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
            gravity: {y: 5000}
        }
    }    
}



const game = new Phaser.Game(config);