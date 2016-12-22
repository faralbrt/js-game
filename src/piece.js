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
  for(var i = 0; i < 2; i ++) {this.checkers.push(new RedChecker(24));}
  for( i = 0; i < 5; i ++) {this.checkers.push(new RedChecker(13));}
  for( i = 0; i < 3; i ++) {this.checkers.push(new RedChecker(8));}
  for( i = 0; i < 5; i ++) {this.checkers.push(new RedChecker(6));}
};
