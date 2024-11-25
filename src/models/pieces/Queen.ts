import {Color, Position} from "../types";
import {Piece, Category, Symbol} from "./Piece";
import {Board} from "../Board";

export class Queen extends Piece {
  static directions = [
    {dx: 1, dy: 1}, {dx: 1, dy: -1}, {dx: -1, dy: 1}, {dx: -1, dy: -1}, // Diagonal directions
    {dx: 1, dy: 0}, {dx: -1, dy: 0}, {dx: 0, dy: 1}, {dx: 0, dy: -1}    // Straight directions
  ];

  constructor(color: Color, position: Position) {
    super(Category.QUEEN, color, position, Symbol.QUEEN);
  }

  getValidMoves(board: Board): Position[] {
    let moves = [];
    const {x, y} = this.position;

    for (let direction of Queen.directions) {
      let {dx, dy} = direction;
      let nextX = x + dx;
      let nextY = y + dy;

      while (nextX >= 1 && nextX <= 8 && nextY >= 1 && nextY <= 8) {
        let targetSquare = board.getSquare({x: nextX, y: nextY});
        if (!targetSquare) break;

        // Blocked by piece
        if (targetSquare.piece) {
          if (targetSquare.piece.color === this.color) break; // Blocked by own piece
          else {
            moves.push({x: nextX, y: nextY}); // Capture opponent piece
            break;
          }
        }

        // Add valid move
        moves.push({x: nextX, y: nextY});

        // Continue to the next square in the same direction
        nextX += dx;
        nextY += dy;
      }
    }

    return moves;
  }
}