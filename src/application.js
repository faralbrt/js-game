$(document).ready(function()  {
  var playerOne = new PlayerOne();
  var playerTwo = new PlayerTwo();
  playerOne.loadCheckers();
  playerTwo.loadCheckers();
  var totalCheckers = playerOne.checkers.concat(playerTwo.checkers);
  totalCheckers.forEach(function(checker) {
    InsertPiece(checker);
  });
});
