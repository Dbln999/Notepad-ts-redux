import React from "react";
import { INote } from "../interfaces/INote";
import { useDispatch } from "react-redux";
import { setActive, showModal } from "../store/noteSlice";
import RemoveModal from "./RemoveModal";
import { useAppSelector } from "../store/hooks";

type noteProps = {
  note: INote;
};

const Note = ({ note }: noteProps) => {
  const dispatch = useDispatch();
  const isActive = note.active && "bg-stone-200";
  const modal = useAppSelector((state) => state.notes.modal);

  return (
    <div
      className={`border-zinc-300 rounded my-3 h-24 w-11/12 hover:bg-stone-200 ${isActive} flex flex-col justify-center items-center cursor-pointer`}
      onClick={() => dispatch(setActive(note.id))}
    >
      <div className="w-3/4 my-1 flex flex-col">
        <div className="flex justify-between">
          <h1 className="font-mono text-l">
            {note.title.length > 15
              ? note.title.slice(0, 15) + "..."
              : note.title}
          </h1>
        </div>
        <p className="text-xs">
          {note.text.length < 35 ? note.text : note.text.slice(0, 15) + "..."}
        </p>
        <p className="self-end text-xs italic my-1 text-slate-500">
          {note.date.getDate()}.{note.date.getMonth()}.{note.date.getFullYear()}
          , {note.date.getHours()}:{note.date.getMinutes()}
        </p>
      </div>
    </div>
  );
};

export default Note;
