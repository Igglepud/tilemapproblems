let gameScene = new Phaser.Scene('Game');

gameScene.init = function(){

};
// create after preload
gameScene.create = function(){ 
        this.gameW = this.sys.game.config.width;
        this.gameH = this.sys.game.config.height;
 



this.cursors=this.input.keyboard.createCursorKeys();

var map = this.add.tilemap("map");
var tiles = map.addTilesetImage("frogatto-generic-bricks", 'bricks');

this.ground = map.createLayer("platforms", tiles, 0, 0);
this.ground = map.createLayer("background", tiles, 0, 0);
};


gameScene.update = function(){

        

if(this.player.body.touching.down){
        this.player.canDoubleJump=false;


}

if ( 
!this.player.body.touching.down &&
this.player.canDoubleJump == true &&
Phaser.Input.Keyboard.JustDown(this.cursors.up)
) {
   this.player.body.setVelocityY(-800);
   this.player.canDoubleJump = false;

this.player.moveTween = this.tweens.add({
        targets: this.player,
        duration: 1000,
        angle: 360,
});

} {

if ( 
Phaser.Input.Keyboard.JustDown(this.cursors.up) &&
this.player.body.touching.down
) {
  this.player.body.setVelocityY(-800);
  this.player.canDoubleJump = true;
}
  



        
}

if(this.cursors.left.isDown){


this.player.body.setVelocityX(-100)

}


if(this.cursors.right.isDown){

this.player.body.setVelocityX(100)


}
if(!this.cursors.left.isDown && !this.cursors.right.isDown){
  this.player.body.setVelocityX(0);

}





if(this.cursors.down.isDown){

this.player.body.setVelocityX(100)

}




};

       
       




