function refreshBoard(playerOne, playerTwo) {
  var totalCheckers = playerOne.checkers.concat(playerTwo.checkers);
  $("tbody").find("div:not(.droppable)").remove();
  totalCheckers.forEach(function(checker) {
    insertPiece(checker);
  });
  $(".draggable").draggable({containment: "#board",scroll: false, revert: "invalid", cursor: "move" });
}



function insertPiece(checker) {
  var color = checker.color + "-piece";
  var position = checker.position;
  var div = $("tbody tr:nth-child("+ position +")").children().append("<div class=" + color  +  "></div>");
  div.find("div").addClass("draggable");
}

function dropPoints(args) {
  var opponent = args.opponent;
  var position = $("tr").index(args.checker.parent().parent()) + 1;
  var color = args.color;
  var opponentPoints = opponent.checkers.map(function(checker) {return checker.position;});
  for(var i = 0; i < 25; i ++) {
    if (!opponentPoints.includes(i)) {
      if(color === "black" && i < position) {dropPoint(i);}
      if(color === "red" && i > position) {dropPoint(i);}
    }
  }
}

function dropPoint(point) {
  var div;
  if(point <= 12 && point > 0) {
    div = "<div class=\"droppable\" style=\"position: absolute; bottom: 0; right: 0; width: 20px;height: 175px; margin: 0px; padding: 0px; border: 1px solid yellow; z-index: 0;\"></div>";
    $("tbody tr:nth-child("+ point +")").find("td").prepend(div);
  }
  else if(point >= 13 && point < 25) {
    div = "<div class=\"droppable\" style=\"position: absolute; top: 0; left: 0; width: 20px;height: 175px; margin: 0px; padding: 0px; border: 1px solid yellow; z-index: 0;\"></div>";
    $("tbody tr:nth-child("+ point +")").find("td").prepend(div);
  }
}
