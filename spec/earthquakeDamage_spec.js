import { earthquakeDamage } from "../src/earthquakeDamage";

describe("earthquakeDamage()", function () {

  it("returns little or no damage when intensity is below 5", function () {
    expect(earthquakeDamage(3.8)).toBe("Little or no damage");
  });

  it("returns some damage when intensity is between 5 and 5.5", function () {
    expect(earthquakeDamage(5.3)).toBe("Some damage");
  });

  it("returns serious damage when intensity is between 5.5 and 6.5", function () {
    expect(earthquakeDamage(6.2)).toBe("Serious damage: walls may crack or fall");
  });

  it("returns disaster when intensity is between 6.5 and 7.5", function () {
    expect(earthquakeDamage(6.8)).toBe("Disaster: buildings may collapse");
  });

  it("returns catastrophe when intensity is 7.5 or higher", function () {
    expect(earthquakeDamage(9.0)).toBe("Catastrophe: most buildings destroyed");
  });

});
