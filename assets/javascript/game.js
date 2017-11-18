$(document).ready(function() {
  //random numbers
  var targetNum;
  var crystalNum;
  var crystals = [];
  //each crystal random # 1-12, !repeats, >1 odd
  var red;
  var blue;
  var yellow;
  var green;
  //guess variables
  var guessSum = 0;
  //win-loss
  var win = 0;
  var loss = 0;

  //game functions
  function startGame() {
    crystals = [];
    targetNum = Math.floor(Math.random()*102) + 19;
    guessSum = 0;
    $("#randomNumber").text(targetNum);
    $("#win").html(win);
    $("#loss").html(loss);
    $("#score").html(0);
    while (crystals.length < 4) { 
      rCrystals();
      if (crystals.indexOf(crystalNum) === -1) {
        crystals.push(crystalNum);
        red = crystals[0];
        blue = crystals[1];
        yellow = crystals[2];
        green = crystals[3];
      }
    }
  }

  function rCrystals() {
    crystalNum = Math.floor(Math.random()*12) + 1;
  }

  function crystalClick(color) {
      if (guessSum === targetNum) {
        win++;
        startGame();
      } else if (guessSum > targetNum) {
        loss++;
        startGame();
      } else {
      guessSum = guessSum + color;
      $("#score").html(guessSum);
    }
  }

    $("#red").on("click", function() {
      crystalClick(red);
    });

    $("#blue").on("click", function() {
      crystalClick(blue);
    });

    $("#yellow").on("click", function() {
      crystalClick(yellow);
    });

    $("#green").on("click", function() {
      crystalClick(green);
    });
  startGame();
})