import {Color, Position} from "../types";
import {Piece, Category, Symbol} from "./Piece";
import {Board} from "../Board";

export class Bishop extends Piece {
  // 將方向定義為靜態變量
  static directions = [
    {dx: 1, dy: 1},
    {dx: 1, dy: -1},
    {dx: -1, dy: 1},
    {dx: -1, dy: -1},
  ];

  constructor(color: Color, position: Position) {
    super(Category.BISHOP, color, position, Symbol.BISHOP);
  }

  getValidMoves(board: Board): Position[] {
    // TODO: Think about castling

    let moves = [];
    const {x, y} = this.position;

    for (let direction of Bishop.directions) {
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
