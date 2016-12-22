var WhiteChecker = function(position) {
  this.color = "white";
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
  for(var i = 0; i < 2; i ++) {this.checkers.push(new WhiteChecker(24));}
  for( i = 0; i < 5; i ++) {this.checkers.push(new WhiteChecker(13));}
  for( i = 0; i < 3; i ++) {this.checkers.push(new WhiteChecker(8));}
  for( i = 0; i < 5; i ++) {this.checkers.push(new WhiteChecker(6));}
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
