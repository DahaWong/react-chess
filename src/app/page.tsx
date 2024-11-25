"use client";

import {cn} from "@/lib/utils/cn";
import {Board} from "@/models/Board";
import {Category, Piece as PieceModel} from "@/models/pieces/Piece";
import {Square as SquareModel} from "@/models/Square";
import {
  Crown,
  Diamond,
  Horse,
  HouseSimple,
  SquareLogo,
  Triangle,
} from "phosphor-react";
import {atom, useAtom, useAtomValue, useSetAtom} from "jotai";
import {Position} from "@/models/types";

const selectedPieceAtom = atom<PieceModel | null>(null);
const nextPosistionsAtom = atom<Position[]>([]);

const Piece = ({piece, board}: {piece: PieceModel; board: Board}) => {
  const [selectedPiece, setSelectedPiece] = useAtom(selectedPieceAtom);
  const setNextPositions = useSetAtom(nextPosistionsAtom);
  const isSelected =
    selectedPiece &&
    selectedPiece.position.x === piece.position.x &&
    selectedPiece.position.y === piece.position.y;

  function handleClick() {
    if (!isSelected) setSelectedPiece(piece);
    else setSelectedPiece(null);

    setNextPositions(piece.getValidMoves(board) || []);
  }

  let Icon;
  switch (piece.category) {
    case Category.PAWN:
      Icon = HouseSimple;
      break;
    case Category.ROOK:
      Icon = SquareLogo;
      break;
    case Category.KNIGHT:
      Icon = Horse;
      break;
    case Category.BISHOP:
      Icon = Triangle;
      break;
    case Category.QUEEN:
      Icon = Crown;
      break;
    case Category.KING:
      Icon = Diamond;
      break;
  }

  return (
    <div
      onClick={handleClick}
      style={{gridRow: piece.position.x, gridColumn: piece.position.y}}
      className={cn(
        "w-20 h-20 grid place-items-center pointer-events-auto text-zinc-700",
        {}
      )}>
      {Icon && <Icon size={36} />}
    </div>
  );
};

const Square = ({square, board}: {square: SquareModel; board: Board}) => {
  const [selectedPiece, setSelectedPiece] = useAtom(selectedPieceAtom);
  const nextPositions = useAtomValue(nextPosistionsAtom);

  const isNext = nextPositions.some(
    (nextPosition) =>
      nextPosition.x === square.position.x &&
      nextPosition.y === square.position.y
  );

  const isSelected =
    selectedPiece &&
    selectedPiece.position.x === square.position.x &&
    selectedPiece.position.y === square.position.y;

  function handleClick() {
    if (selectedPiece && isNext) {
      selectedPiece.move(square.position);
      square.piece = null;
      setSelectedPiece(null);
    }
  }

  return (
    <div
      onClick={handleClick}
      className={cn("w-20 h-20 grid place-items-center", {
        "bg-zinc-200": (square.position.x + square.position.y) % 2 === 0,
        "bg-zinc-100": (square.position.x + square.position.y) % 2 !== 0,
        "border-2 border-green-500": isSelected,
        "border-2 border-blue-500": selectedPiece && isNext,
        "cursor-not-allowed": selectedPiece && !isNext,
      })}
    />
  );
};

export default function Page() {
  const board = new Board();
  return (
    <div className="grid place-items-center w-full h-screen">
      <div className="relative w-full h-full">
        {/* Board/Squares Grid*/}
        <div className="absolute grid grid-rows-8 grid-cols-8 w-fit gap-[1px] bg-zinc-300 border border-zinc-300">
          {board.squares.map((square, i) => (
            <Square key={i} square={square} board={board} />
          ))}
        </div>
        {/* Pieces Grid */}
        <div className="absolute grid grid-rows-8 grid-cols-8 w-fit gap-[1px] pointer-events-none">
          {board.squares.map(
            (square, i) =>
              square.piece && (
                <Piece key={i} piece={square.piece} board={board} />
              )
          )}
        </div>
      </div>
    </div>
  );
}
