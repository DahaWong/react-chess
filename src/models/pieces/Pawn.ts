import {Color, Position} from "../types";
import {Category, Piece} from "./Piece";
import {Board} from "../Board";

export class Pawn extends Piece {
  constructor(color: Color, position: Position) {
    super(Category.PAWN, color, position);
  }

  getValidMoves(board: Board): Position[] {
    let moves = [];
    const {x, y} = this.position;
    const direction = this.color === Color.WHITE ? 1 : -1;

    const movements = [
      {dx: -1 * direction, dy: 0},
      {dx: -2 * direction, dy: 0},
      {dx: -1 * direction, dy: -1 * direction},
      {dx: 1 * direction, dy: -1 * direction},
    ];

    for (let movement of movements) {
      let {dx, dy} = movement;
      let nextX = x + dx;
      let nextY = y + dy;
      if (nextX < 1 && nextX > 8 && nextY < 1 && nextY > 8) break;
      let square = board.getSquare({x: nextX, y: nextY});
      if (!square) break;

      if (dy === 0) {
        if (dx === -2 && this.lastPosition !== null) break;
        // Move forward
        if (!square.piece) {
          moves.push({x: nextX, y: nextY});
        }
      } else if (square.piece) {
        // Capture
        if (square.piece.color !== this.color) {
          moves.push({x: nextX, y: nextY});
        }
      } else if (dy === -1) {
        // En passant
        let enPassantSquare = board.getSquare({x: nextX, y: y});
        if (
          enPassantSquare &&
          enPassantSquare.piece &&
          enPassantSquare.piece.category === Category.PAWN &&
          enPassantSquare.piece.color !== this.color
        ) {
          moves.push({x: nextX, y: nextY});
        }
      }
    }
    console.log("pawn", moves);
    return moves;
  }
}
