var Board = function() {
  this.points = {};
};

Board.prototype.loadPoints = function() {
  for (var i = 0; i < 24; i ++) {
    this.points[i + 1] = [];
  }
  this.points.finished = [];
  this.points.ate = [];
};
