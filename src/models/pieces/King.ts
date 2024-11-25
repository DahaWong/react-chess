import {Color, Position} from "../types";
import {Category, Piece} from "./Piece";
import {Board} from "../Board";

export class King extends Piece {
  constructor(color: Color, position: Position) {
    super(Category.KING, color, position);
  }

  getValidMoves(board: Board): Position[] {
    let moves = [];
    const {x, y} = this.position;
    const direction = this.color === Color.WHITE ? 1 : -1;
    const steps = [];
    const stepUnits = [-1 * direction, 0, 1 * direction];

    for (let dx of stepUnits) {
      for (let dy of stepUnits) {
        if (dx !== 0 || dy !== 0) {
          steps.push({dx, dy});
        }
      }
    }

    for (let step of steps) {
      let {dx, dy} = step;
      let nextX = x + dx;
      let nextY = y + dy;

      let square = board.getSquare({x: nextX, y: nextY});
      if (!square) continue;

      if (square?.piece?.color === this.color) continue;
      moves.push({x: nextX, y: nextY});
    }
    console.log("king", moves);
    return moves;
  }
}
