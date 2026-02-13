import { cubeVolume } from "../src/cubeVolume";

describe("cubeVolume()", function () {

  it("calculates volume for a 4 meter cube", function () {
    expect(cubeVolume(4)).toBe(64);
  });

  it("calculates volume for a 5 meter cube", function () {
    expect(cubeVolume(5)).toBe(125);
  });

  it("calculates volume for a 2 meter cube", function () {
    expect(cubeVolume(2)).toBe(8);
  });

});