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

function dropPoints() {
  var div = "<div class=\"droppable\" style=\"position: absolute; bottom: 0; right: 0; width: 20px;height: 175px; margin: 0px; padding: 0px; border: 2px solid black; z-index: -1;\"></div>";
  $("td").slice(0,12).prepend(div);
  div = "<div class=\"droppable\" style=\"position: absolute; top: 0; left: 0; width: 20px;height: 175px; margin: 0px; padding: 0px; border: 2px solid black; z-index: -1;\"></div>";
  $("td").slice(12).prepend(div);
}
