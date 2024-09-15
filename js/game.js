// const { Phaser } = require("./phaser")

// create a new scene
let gameScene = new Phaser.Scene('Game')

// set the configuration
let config = {
    type: Phaser.AUTO, // will use webgl if available, otherwise canvas
    width: 640,
    height: 360,
    scene: gameScene
}

// create a new game, pass the configuration
let game = new Phaser.Game(config)