function refreshBoard(playerOne, playerTwo) {
  var totalCheckers = playerOne.checkers.concat(playerTwo.checkers);
  $("tr div").remove();
  totalCheckers.forEach(function(checker) {
    insertPiece(checker);
  });
}


function insertPiece(checker) {
  var color = checker.color + "-piece";
  var position = checker.position;
  $("tbody tr:nth-child("+ position +")").append("<div class=" + color + "></div>");
}
