$(document).ready(function()  {
  var playerOne = new PlayerOne();
  var playerTwo = new PlayerTwo();
  playerOne.loadCheckers();
  playerTwo.loadCheckers();
  refreshBoard(playerOne, playerTwo);
  $(".update-board").on("submit", function(e) {
    e.preventDefault();
    var position = parseInt($(e.target).find("input[name='position']").val());
    var move = parseInt($(e.target).find("input[name='move']").val());
    playerOne.moveChecker(position, move);
    refreshBoard(playerOne, playerTwo);
  });
});
