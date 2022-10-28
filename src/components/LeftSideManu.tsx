import React from "react";
import Note from "./Note";
import { useAppSelector } from "../store/hooks";
import { useDispatch } from "react-redux";
import { addNote } from "../store/noteSlice";

const LeftSideManu = () => {
  const notes = useAppSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col w-1/5 h-[100vh] p-2 items-center border-r-4 border-stone-200">
      <button
        className="bg-emerald-400 text-white w-3/4 h-12 rounded text-l"
        onClick={() =>
          dispatch(
            addNote({
              title: "",
              text: "",
              id: notes.length,
              date: new Date(),
              active: true,
            })
          )
        }
      >
        Add note
      </button>
      {notes?.map((note) => (
        <Note key={note.id} note={note}></Note>
      ))}
    </div>
  );
};

export default LeftSideManu;
