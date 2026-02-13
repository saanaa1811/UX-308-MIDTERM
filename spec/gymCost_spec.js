import { gymCost } from "../src/gymCost";

describe("gymCost()", function () {

  it("applies 5% discount for 1 friend", function () {
    expect(gymCost(120, 1)).toBe(114);
  });

  it("applies 10% discount for 2 friends", function () {
    expect(gymCost(200, 2)).toBe(180);
  });

  it("applies 15% discount for 3 friends", function () {
    expect(gymCost(80, 3)).toBe(68);
  });

  it("applies 15% discount for 4 friends", function () {
    expect(gymCost(150, 4)).toBe(127.5);
  });

});
