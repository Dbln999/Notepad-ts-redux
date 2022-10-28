import React from "react";
import { useDispatch } from "react-redux";
import { INote } from "../interfaces/INote";
import { removeNote, showModal } from "../store/noteSlice";

type noteId = {
  id: number;
};

const RemoveModal = ({ id }: noteId) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50"></div>
      <div className="w-[500px] p-5 bg-white rounded absolute top-10 left-1/2 -translate-x-1/2">
        <p className="text-center">
          Are you sure that you want to remove this note?
        </p>
        <div className="flex justify-center p-3">
          <button
            className="bg-red-500 w-20 rounded mx-2"
            onClick={() => dispatch(removeNote(id))}
          >
            Yes
          </button>
          <button
            className="bg-green-400 w-20 rounded "
            onClick={() => dispatch(showModal(false))}
          >
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default RemoveModal;
