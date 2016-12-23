var Dice = function() {};
Dice.prototype.roll = function() {
  return [1 + Math.floor(Math.random() * 6),  1 + Math.floor(Math.random() * 6)];
};
