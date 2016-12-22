$(document).ready(function()  {
  var playerOne = new PlayerOne();
  var playerTwo = new PlayerTwo();
  playerOne.loadCheckers();
  playerTwo.loadCheckers();
  var totalCheckers = playerOne.checkers.concat(playerTwo.checkers);
  refreshBoard(totalCheckers);
  playerOne.moveChecker(24, 10);
  playerOne.moveChecker(24, 10);
  refreshBoard(totalCheckers);

});
