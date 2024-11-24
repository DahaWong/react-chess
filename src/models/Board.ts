import {Square} from "./Square";
import {Rook} from "./Rook";
import {Color, Position} from "./types";
import {Pawn} from "./Pawn";

export class Board {
  squares: Square[] = [];

  constructor() {
    for (let row = 1; row <= 8; row++) {
      for (let col = 1; col <= 8; col++) {
        if (![1, 2, 7, 8].includes(row)) {
          this.squares.push(new Square({x: row, y: col}, null));
        } else if (row === 2 || row === 7) {
          this.squares.push(
            new Square(
              {x: row, y: col},
              new Pawn(row === 2 ? Color.BLACK : Color.WHITE, {x: row, y: col})
            )
          );
        } else if (row === 1 || row === 8) {
          this.squares.push(
            new Square(
              {x: row, y: col},
              new Rook(row === 1 ? Color.BLACK : Color.WHITE, {x: row, y: col})
            )
          );
        }
      }
    }
  }

  getSquare(position: Position): Square | null {
    return (
      this.squares.find((square) => {
        return (
          square.position.x === position.x && square.position.y === position.y
        );
      }) || null
    );
  }
}
