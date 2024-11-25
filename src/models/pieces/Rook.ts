import {Color, Position} from "../types";
import {Piece, Category, Symbol} from "./Piece";
import {Board} from "../Board";

export class Rook extends Piece {
  constructor(color: Color, position: Position) {
    super(Category.ROOK, color, position, Symbol.ROOK);
  }

  getValidMoves(board: Board): Position[] {
    // TODO: Think about castling

    let moves = [];
    const {x, y} = this.position;

    const directions = [
      {dx: 1, dy: 0},
      {dx: -1, dy: 0},
      {dx: 0, dy: 1},
      {dx: 0, dy: -1},
    ];

    for (let direction of directions) {
      let {dx, dy} = direction;
      let nextX = x + dx;
      let nextY = y + dy;

      while (nextX >= 1 && nextX <= 8 && nextY >= 1 && nextY <= 8) {
        let targetSquare = board.getSquare({x: nextX, y: nextY});
        if (!targetSquare) break;

        // Blocked by piece
        if (targetSquare.piece) {
          // Blocked by own piece
          console.log("rook", {x: nextX, y: nextY});
          console.log("rook next square", targetSquare.piece.color);
          if (targetSquare.piece.color === this.color) break;
          // Capture and get blocked
          else {
            moves.push({x: nextX, y: nextY});
            console.log("rook", moves);
            break;
          }
        }

        // Move
        moves.push({x: nextX, y: nextY});

        // Move to next square for not getting blocked
        nextX += dx;
        nextY += dy;
      }
    }

    return moves;
  }
}
