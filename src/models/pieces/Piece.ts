import {Board} from "../Board";
import {Color, Position} from "../types";

export enum Category {
  PAWN = "pawn",
  ROOK = "rook",
  KNIGHT = "knight",
  BISHOP = "bishop",
  QUEEN = "queen",
  KING = "king",
}

export enum Symbol {
  ROOK = "R",
  KNIGHT = "N",
  BISHOP = "B",
  QUEEN = "Q",
  KING = "K",
}

export abstract class Piece {
  category: Category;
  color: Color;
  position: Position;
  lastPosition: Position | null = null;
  symbol: string | null;

  constructor(
    category: Category,
    color: Color,
    position: Position,
    symbol: Symbol | null = null
  ) {
    this.category = category;
    this.color = color;
    this.position = position;
    this.symbol = symbol;
  }

  move(to: Position): void {
    this.lastPosition = this.position;
    this.position = to;
  }

  abstract getValidMoves(board: Board): Position[];
}
