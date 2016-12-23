function refreshBoard(playerOne, playerTwo) {
  var totalCheckers = playerOne.checkers.concat(playerTwo.checkers);
  $("tr div").remove();
  totalCheckers.forEach(function(checker) {
    insertPiece(checker);
  });
  $( function() {
   $(".draggable").draggable({containment: ".board",revert: "invalid", cursor: "move" });
   $(".droppable").droppable({});
  });
}


function insertPiece(checker) {
  var color = checker.color + "-piece";
  var position = checker.position;
  var div = $("tbody tr:nth-child("+ position +")").children().append("<div class=" + color  +  "></div>");
  div.find("div").addClass("draggable");
}
