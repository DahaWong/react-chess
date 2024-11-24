import {Board} from "./Board";
import {Color, Position} from "./types";

export enum Category {
  PAWN = "pawn",
  ROOK = "rook",
  KNIGHT = "knight",
  BISHOP = "bishop",
  QUEEN = "queen",
  KING = "king",
}

export abstract class Piece {
  category: Category;
  color: Color;
  position: Position;
  lastPosition: Position | null = null;

  constructor(category: Category, color: Color, position: Position) {
    this.category = category;
    this.color = color;
    this.position = position;
  }

  move(toPosition: Position): void {
    this.lastPosition = this.position;
    this.position = toPosition;
  }

  abstract getValidMoves(board: Board): Position[];
}
