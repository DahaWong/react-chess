import {Color, Position} from "../types";
import {Piece, Category, Symbol} from "./Piece";
import {Board} from "../Board";

export class Knight extends Piece {
  constructor(color: Color, position: Position) {
    super(Category.KNIGHT, color, position, Symbol.KNIGHT);
  }

  static directions = [
    {dx: 2, dy: 1},
    {dx: 2, dy: -1},
    {dx: -2, dy: 1},
    {dx: -2, dy: -1},
    {dx: 1, dy: 2},
    {dx: 1, dy: -2},
    {dx: -1, dy: 2},
    {dx: -1, dy: -2},
  ];

  getValidMoves(board: Board): Position[] {
    let moves = [];
    const {x, y} = this.position;

    for (let direction of Knight.directions) {
      let {dx, dy} = direction;
      let nextX = x + dx;
      let nextY = y + dy;
      let targetSquare = board.getSquare({x: nextX, y: nextY});
      if (!targetSquare) continue;

      // Blocked by piece
      if (targetSquare.piece) {
        // Blocked by own piece
        if (targetSquare.piece.color === this.color) continue;
        else {
          // Capture
          moves.push({x: nextX, y: nextY});
          // console.log("knight", moves);
          continue;
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
