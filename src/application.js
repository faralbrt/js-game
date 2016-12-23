$(document).ready(function()  {
  var playerOne = new PlayerOne();
  var playerTwo = new PlayerTwo();
  playerOne.loadCheckers();
  playerTwo.loadCheckers();
  refreshBoard(playerOne, playerTwo);
  $( function() {
    $(".draggable").draggable({
      containment: "#board",
      scroll: false,
      revert: "invalid",
      cursor: "move",
      start: function(event) {
        if($(event.target).attr('class').includes("black")) {
          dropPoints({opponent: playerTwo});
        }
      }
    });
  });
  $(".droppable").droppable({
    drop: function( event, ui ) {
    var oldPosition = $("tr").index(ui.draggable.parent().parent()) + 1;
    var newPosition = $("tr").index($(this).parent().parent()) + 1;
    var moves = Math.abs(oldPosition - newPosition);
    var item = ui.draggable.remove();
    var td = $(this).parent();
    item.css("position", "static");
    td.prepend(item);
    if(ui.draggable.attr('class').includes("black")) {playerOne.moveChecker(oldPosition, moves);}
    else if(ui.draggable.attr('class').includes("red")) {playerTwo.moveChecker(oldPosition, moves);}
    refreshBoard(playerOne, playerTwo);
  }});
});
