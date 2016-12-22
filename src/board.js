var Board = function() {
  this.points = this.loadPoints();
};

Board.prototype.loadPoints = function() {
  var obj = {};
  for (var i = 0; i < 24; i ++) {
    obj[i + 1] = [];
  }
  return obj;
};
