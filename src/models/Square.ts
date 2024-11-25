import {Piece} from "@/models/pieces/Piece";
import {Position} from "./types";

export class Square {
  position: Position;
  piece: Piece | null;

  constructor(position: Position, piece: Piece | null) {
    this.position = position;
    this.piece = piece;
  }
}
