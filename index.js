var arr = [0];
var tap = x = i = 0;


$(".green").click(function() {
  pressed(1);
  results(1);
});
$(".red").click(function() {
  pressed(2);
  results(2);
});
$(".yellow").click(function() {
  pressed(3);
  results(3);
});
$(".blue").click(function() {
  pressed(4);
  results(4);
});

$("body").keypress(function() {
  $("body").removeClass("game-over");
  arr.pop();
  comp_turn();
});


//LOGIC CODE
function comp_turn() {
  // var btn = 1;
  var btn = Math.floor(Math.random() * 4) + 1;
  arr.push(btn);
  x = arr.length;
    $("h1").text("Level " + x);
  pressed(btn);
}

function pressed(btn) {
  switch (btn) {
    case 1:
      $(".green").addClass("pressed");
      var tone_1 = new Audio("sounds/green.mp3");
      unpress(tone_1);
      break;

    case 2:
      $(".red").addClass("pressed");
      var tone_2 = new Audio("sounds/red.mp3");
      unpress(tone_2);
      break;

    case 3:
      $(".yellow").addClass("pressed");
      var tone_3 = new Audio("sounds/yellow.mp3");
      unpress(tone_3);
      break;

    case 4:
      $(".blue").addClass("pressed");
      var tone_4 = new Audio("sounds/blue.mp3");
      unpress(tone_4);
      break;
  }
}

function unpress(tone) {
  setTimeout(function() {
    tone.play();
    $(".btn").removeClass("pressed");
  }, 100);

}

function results(tap) {
  if (x > 0) {
    // check more
    if (tap === arr[i]) {
      //correct
      i++;
    } else {
      // incorrect
      $("h1").text("Game Over");
      $("body").addClass("game-over");
      var wrong = new Audio("sounds/wrong.mp3");
      wrong.play();
      arr = [0];
      i=0;
    }
    x--;
    if (i===arr.length) {
      results(0);
    }
  } else {
    setTimeout(function(){
        comp_turn();
    },500)
    i=0;
  }

}
