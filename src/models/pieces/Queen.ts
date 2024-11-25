import {Color, Position} from "../types";
import {Piece, Category, Symbol} from "./Piece";
import {Board} from "../Board";

export class Queen extends Piece {
  constructor(color: Color, position: Position) {
    super(Category.QUEEN, color, position, Symbol.QUEEN);
  }

  getValidMoves(board: Board): Position[] {
    // TODO: Think about castling

    let moves = [];
    const {x, y} = this.position;
    const directions = [];

    for (let dx of [1, -1, 0]) {
      for (let dy of [1, -1, 0]) {
        if (dx === 0 && dy === 0) continue;
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
          console.log("queen", {x: nextX, y: nextY});
          console.log("queen next square", targetSquare.piece.color);
          if (targetSquare.piece.color === this.color) break;
          // Capture and get blocked
          else {
            moves.push({x: nextX, y: nextY});
            console.log("queen", moves);
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
