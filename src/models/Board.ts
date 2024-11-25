import {Square} from "@/models/Square";
import {Rook} from "./pieces/Rook";
import {Color, Position} from "./types";
import {Pawn} from "./pieces/Pawn";
import {Knight} from "./pieces/Knight";
import {Bishop} from "./pieces/Bishop";
import {Queen} from "./pieces/Queen";
import {King} from "./pieces/King";

export class Board {
  squares: Square[] = [];

  constructor() {
    for (let row = 1; row <= 8; row++) {
      for (let col = 1; col <= 8; col++) {
        if (![1, 2, 7, 8].includes(row)) {
          this.squares.push(new Square({x: row, y: col}, null));
        } else {
          const color = row === 1 || row === 2 ? Color.BLACK : Color.WHITE;
          if (row === 2) {
            // for testing
            // if (row === 2 || row === 7) {
            this.squares.push(
              new Square({x: row, y: col}, new Pawn(color, {x: row, y: col}))
            );
          } else {
            switch (col) {
              case 1:
              case 8:
                this.squares.push(
                  new Square(
                    {x: row, y: col},
                    new Rook(color, {x: row, y: col})
                  )
                );
                break;
              case 2:
              case 7:
                this.squares.push(
                  new Square(
                    {x: row, y: col},
                    new Knight(color, {x: row, y: col})
                  )
                );
                break;
              case 3:
              case 6:
                this.squares.push(
                  new Square(
                    {x: row, y: col},
                    new Bishop(color, {x: row, y: col})
                  )
                );
                break;
              case 4:
                this.squares.push(
                  new Square(
                    {x: row, y: col},
                    new Queen(color, {x: row, y: col})
                  )
                );
                break;
              case 5:
                this.squares.push(
                  new Square(
                    {x: row, y: col},
                    new King(color, {x: row, y: col})
                  )
                );
                break;
            }
          }
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
