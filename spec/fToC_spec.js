import { fToC } from "../src/fToC";

describe("fToC()", function () {

    it("converts freezing point (32F) correctly", function () {
        expect(fToC(32)).toBe(0);
    });

    it("converts body temperature (98.6F)", function () {
        expect(fToC(98.6)).toBeCloseTo(37, 0);
    });
});
