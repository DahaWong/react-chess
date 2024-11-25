import {Pawn} from "./pieces/Pawn";
import {Piece} from "./pieces/Piece";
import {Position} from "./types";

export class Move {
  piece: Piece;
  from: Position;
  to: Position;
  // isEnpassant: boolean;
  // isCheck: boolean;
  // isCheckmate: boolean;
  capture?: Piece;
  promotion?: Piece;
  castling?: "kingside" | "queenside";

  constructor(piece: Piece, from: Position, to: Position, capture?: Piece) {
    this.piece = piece;
    this.from = from;
    this.to = to;
    this.capture = capture;
  }

  toAlgebraicNotation() {
    // if (this.castling) {
    //   return this.to.file === File.G &&
    //     (this.to.rank === Rank.EIGHT || this.to.rank === Rank.ONE)
    //     ? "O-O"
    //     : "O-O-O";
    // }
    // let notation = "";
    // if (this.piece && !(this.piece instanceof Pawn))
    //   notation += this.piece.symbol; // 如果不是兵，顯示棋子代號
    // if (this.capture)
    //   notation += this.piece instanceof Pawn ? `${this.from.file}x` : "x"; // 兵的吃子需要加上起始列
    // notation += this.to; // 目標格子
    // if (this.promotion) notation += `=${this.promotion}`; // 升變
    // if (this.isCheckmate) notation += "#"; // 將死
    // else if (this.isCheck) notation += "+"; // 將軍
    // return notation;
  }
}
