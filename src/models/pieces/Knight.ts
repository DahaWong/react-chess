import {Color, Position} from "../types";
import {Piece, Category, Symbol} from "./Piece";
import {Board} from "../Board";

export class Knight extends Piece {
  constructor(color: Color, position: Position) {
    super(Category.KNIGHT, color, position, Symbol.KNIGHT);
  }

  getValidMoves(board: Board): Position[] {
    let moves = [];
    const {x, y} = this.position;
    const directions = [];

    for (let dx of [-2, -1, 1, 2]) {
      for (let dy of [-2, -1, 1, 2]) {
        if (Math.abs(dx) !== Math.abs(dy)) {
          directions.push({dx, dy});
        }
      }
    }

    for (let direction of directions) {
      let {dx, dy} = direction;
      let nextX = x + dx;
      let nextY = y + dy;
      let targetSquare = board.getSquare({x: nextX, y: nextY});
      if (!targetSquare) break;

      // Blocked by piece
      if (targetSquare.piece) {
        if (targetSquare.piece.color === this.color) break; // Blocked by own piece
        else { // Capture
          moves.push({x: nextX, y: nextY});
          // console.log("knight", moves);
          break;
        }
      }

      // Move
      moves.push({x: nextX, y: nextY});

      // Move to next square for not getting blocked
      nextX += dx;
      nextY += dy;
    }
    return moves;
  }
}
