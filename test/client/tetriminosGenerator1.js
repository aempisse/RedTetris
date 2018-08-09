import chai from "chai";
import * as test from "../../src/client/constants/TetriminosGenerator.js";

chai.should();

describe("function newTetriminos", () => {
    it("should generate a new random Tetriminos object", () => {
        let     tetriminos1 = test.newTetriminos();
        let     tetriminos2 = test.newTetriminos();
        tetriminos1.should.not.equal(tetriminos2);
    })
})