import {Color, Position} from "./types";
import {Piece, Category} from "./Piece";
import {Board} from "./Board";

export class Rook extends Piece {
  constructor(color: Color, position: Position) {
    super(Category.ROOK, color, position);
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

        // Block by piece
        if (targetSquare.piece) {
          console.log({x: nextX, y: nextY});

          // Blocked by own piece
          if (targetSquare.piece.color === this.color) break;
          // Capture and get blocked
          else {
            moves.push({x: nextX, y: nextY});
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
    console.log(moves);

    return moves;
  }
}
