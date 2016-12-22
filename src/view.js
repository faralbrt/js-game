function InsertPiece(checker) {
  var color = checker.color + "-piece";
  var position = checker.position;
  $("tbody tr:nth-child("+ position +")").append("<div class=" + color + "></div>");
}
