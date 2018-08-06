import chai from "chai"
import Piece from "../../src/server/data/piece/Piece.js"


chai.should()

describe('class Piece', function() {

    it('should generate the same pattern for the same instance of Piece', function() {
        const piece = new Piece()

        let firstPattern = []
        for (let i = 0; i < 20; i++) {
            firstPattern[i] = piece.generatePiece(i);
        }
        let secondPattern = []
        for (let i = 0; i < 20; i++) {
            secondPattern[i] = piece.generatePiece(i);
        }

        firstPattern.toString().should.equal(secondPattern.toString())
    })

    it('should generate a different pattern for two instances of Piece', function() {
        const piece1 = new Piece()
        const piece2 = new Piece()

        let patternPiece1 = []
        for (let i = 0; i < 20; i++) {
            patternPiece1[i] = piece1.generatePiece(i);
        }

        let patternPiece2 = []
        for (let i = 0; i < 20; i++) {
            patternPiece2[i] = piece2.generatePiece(i);
        }

        patternPiece1.should.not.equal(patternPiece2)
    })
})