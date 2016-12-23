$(document).ready(function()  {
  var playerOne = new PlayerOne();
  var playerTwo = new PlayerTwo();
  var dice = new Dice();
  playerOne.loadCheckers();
  playerTwo.loadCheckers();
  refreshBoard(playerOne, playerTwo);
  $( function() {
    $(".draggable").draggable({
      containment: "#board",
      scroll: false,
      revert: "invalid",
      cursor: "move"
    });
  });
  $("tbody").on("mousedown", ".draggable", function() {
    $("div.droppable").remove();
    if($(event.target).attr('class').includes("black")) {
      dropPoints({moves: outcome.innerText, color: "black", checker: $(event.target), opponent: playerTwo});
    }
    else if($(event.target).attr('class').includes('red')) {
      dropPoints({moves: outcome.innerText, color: "red", checker: $(event.target), opponent: playerOne});
    }
    $(".droppable").droppable({
    drop: function(event, ui) {
      var oldPosition = $("tr").index(ui.draggable.parent().parent()) + 1;
      var newPosition = $("tr").index($(this).parent().parent()) + 1;
      var moves = Math.abs(oldPosition - newPosition);
      outcome.innerText = outcome.innerText.replace(moves.toString(), "");
      var item = ui.draggable.remove();
      var td = $(this).parent();
      item.css("position", "static");
      td.prepend(item);
      if(ui.draggable.attr('class').includes("black")) {playerOne.moveChecker(oldPosition, moves);}
      else if(ui.draggable.attr('class').includes("red")) {playerTwo.moveChecker(oldPosition, moves);}
      refreshBoard(playerOne, playerTwo);
    }});
  });
  $("#dice").on("click", function(e) {
    e.preventDefault();
    var outcome = dice.roll();
    $("#outcome").text(outcome);
  });
});
