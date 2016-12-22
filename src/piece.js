var BlackChecker = function(position) {
  this.color = "black";
  this.position = position;
};
var RedChecker = function(position) {
  this.color = "red";
  this.position = position;
};
var PlayerOne = function() {
  this.checkers = [];
};
var PlayerTwo = function () {
  this.checkers = [];
};
PlayerOne.prototype.loadCheckers = function() {
  for(var i = 0; i < 2; i ++) {this.checkers.push(new BlackChecker(24));}
  for( i = 0; i < 5; i ++) {this.checkers.push(new BlackChecker(13));}
  for( i = 0; i < 3; i ++) {this.checkers.push(new BlackChecker(8));}
  for( i = 0; i < 5; i ++) {this.checkers.push(new BlackChecker(6));}
};
PlayerTwo.prototype.loadCheckers = function() {
  for(var i = 0; i < 2; i ++) {this.checkers.push(new RedChecker(1));}
  for( i = 0; i < 5; i ++) {this.checkers.push(new RedChecker(12));}
  for( i = 0; i < 3; i ++) {this.checkers.push(new RedChecker(17));}
  for( i = 0; i < 5; i ++) {this.checkers.push(new RedChecker(19));}
};
PlayerOne.prototype.moveChecker = function(position, moves) {
  var checker = this.checkers.find(function(checker) {
    return checker.position === position;
  });
  if(checker.position - moves > 1) {
    checker.position -= moves;
  }
  else {
    checker.position = "finished";
  }
};
PlayerTwo.prototype.moveChecker = function(position, moves) {
  var checker = this.checkers.find(function(checker){
    return checker.position === position;
  });
  if(checker.position + moves < 24) {
    checker.position += moves;
  }
  else {
    checker.position = "finished";
  }
};
function fullBoard() {
  var arr = [];
  for(var i = 1; i < 25; i ++) {
    arr.push(new BlackChecker(i));
  }
  return arr;
}
