"use client";

import {cn} from "@/lib/utils/cn";
import {Board} from "@/models/Board";
import {Category} from "@/models/Piece";
import {Square} from "@/models/Square";
import {CrownSimple, HouseSimple} from "phosphor-react";
import {atom, useAtom} from "jotai";
import {Position} from "@/models/types";

const selectedPieceAtom = atom<number | null>(null);
const possibleMovesAtom = atom<Position[]>([]);

const SquareCell = ({
  index,
  square,
  board,
}: {
  index: number;
  square: Square;
  board: Board;
}) => {
  const [selectedPiece, setSelectedPiece] = useAtom(selectedPieceAtom);
  const [possibleMoves, setPossibleMoves] = useAtom(possibleMovesAtom);

  function handleClick() {
    setSelectedPiece(index);
    setPossibleMoves(square.piece?.getValidMoves(board) || []);
  }

  return (
    <div
      key={index}
      onClick={handleClick}
      className={cn("w-20 h-20 grid place-items-center", {
        "bg-zinc-200": (square.position.x + square.position.y) % 2 === 0,
        "bg-zinc-100": (square.position.x + square.position.y) % 2 !== 0,
        "border-2 border-green-500": selectedPiece === index,
        "border-2 border-blue-500": possibleMoves.some(
          (move) => move.x === square.position.x && move.y === square.position.y
        ),
      })}>
      {square.piece &&
        (square.piece.category === Category.PAWN ? (
          <>
            <HouseSimple />
            <span>{square.position.x + ", " + square.position.y}</span>
          </>
        ) : (
          <>
            <CrownSimple />
            <span>{square.position.x + ", " + square.position.y}</span>
          </>
        ))}
    </div>
  );
};

export default function Page() {
  const board = new Board();
  return (
    <div className="grid place-items-center w-full h-screen">
      <div className="grid grid-rows-8 grid-cols-8 w-fit gap-[1px] bg-zinc-300 border border-zinc-300">
        {board.squares.map((square, i) => (
          <SquareCell key={i} index={i + 1} square={square} board={board} />
        ))}
        {/* // <Piece key={i} index={i + 1} /> */}
      </div>
    </div>
  );
}
