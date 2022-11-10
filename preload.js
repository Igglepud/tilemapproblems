// create a new scene
let preloadScene = new Phaser.Scene("Preload");

//init

// load assets
preloadScene.preload = function () {
  this.load.image("title", "novemberimages/gremlin1.png");
  this.load.image("bricks", "novemberimages/frogatto-generic-bricks.png");
  this.load.tilemapTiledJSON("map", "mapfornovember.json");
};

preloadScene.create = function () {
  this.scene.start("Game");
};
