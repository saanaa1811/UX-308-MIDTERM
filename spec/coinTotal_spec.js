import { coinTotal } from "../src/coinTotal";

describe("coinTotal()", function () {

  it("returns 0 when no coins are provided", function () {
    expect(coinTotal(0, 0, 0, 0, 0)).toBe(0);
  });

  it("calculates value with only nickels and dimes", function () {
    // 4 nickels = 0.20
    // 3 dimes = 0.30
    expect(coinTotal(4, 3, 0, 0, 0)).toBe(0.50);
  });

  it("calculates value of mixed coins", function () {
    // 2 nickels (0.10)
    // 1 dime (0.10)
    // 3 quarters (0.75)
    // 1 loonie (1.00)
    // 1 toonie (2.00)
    expect(coinTotal(2, 1, 3, 1, 1)).toBe(3.95);
  });

  it("calculates value with only loonies", function () {
    expect(coinTotal(0, 0, 0, 5, 0)).toBe(5);
  });

});
