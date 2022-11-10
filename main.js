// set game configuration
let config = {
    type: Phaser.AUTO,
    width: 2000,
    height: 2000,
    scene: [preloadScene,gameScene],
    pixelArt: false,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 1000},
            //debug: true,
        }
    }
};


//create new game and send configuration
let game = new Phaser.Game(config)