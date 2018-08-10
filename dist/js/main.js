const WIDTH = 800;
const HEIGHT = 600;

var config = {
  type: Phaser.AUTO,  //rendering context of game (options are .CANVAS or .WEBGL
  width: WIDTH,
  height: HEIGHT,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

function preload() {

}

function create() {

}

function update() {

}
