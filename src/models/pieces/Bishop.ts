import {Color, Position} from "../types";
import {Piece, Category, Symbol} from "./Piece";
import {Board} from "../Board";

export class Bishop extends Piece {
  constructor(color: Color, position: Position) {
    super(Category.BISHOP, color, position, Symbol.BISHOP);
  }

  getValidMoves(board: Board): Position[] {
    // TODO: Think about castling

    let moves = [];
    const {x, y} = this.position;
    const directions = [];

    for (let dx of [1, -1]) {
      for (let dy of [1, -1]) {
        directions.push({dx, dy});
      }
    }

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
          console.log("bishop", {x: nextX, y: nextY});
          console.log("bishop next square", targetSquare.piece.color);
          if (targetSquare.piece.color === this.color) break;
          // Capture and get blocked
          else {
            moves.push({x: nextX, y: nextY});
            console.log("bishop", moves);
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
