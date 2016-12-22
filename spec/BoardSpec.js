describe("Hello world", function() {
  it("says hello", function() {
    expect(helloWorld()).toEqual("Hello world!");
  });
});
describe("Board", function() {
  it("has 24 points", function() {
    expect(board.points.length).toEqual(24);
  });
});
