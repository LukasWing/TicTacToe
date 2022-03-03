const gameSketchInstruction = gameSketch => {

    gameSketch.setup = () => {
      var canvas = gameSketch.createCanvas(450, 450);
      canvas.parent("game");
      gameSketch.background(100);

    };

    gameSketch.draw = () => {

    };
  };
let myp5 = new p5(gameSketchInstruction);