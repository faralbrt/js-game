function refreshBoard(checkers) {
  $("tr div").remove();
  checkers.forEach(function(checker) {
    insertPiece(checker);
  });
}


function insertPiece(checker) {
  var color = checker.color + "-piece";
  var position = checker.position;
  $("tbody tr:nth-child("+ position +")").append("<div class=" + color + "></div>");
}
