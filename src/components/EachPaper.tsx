import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useDebounce from "../hooks/useDebounce";
import { INote } from "../interfaces/INote";
import { useAppSelector } from "../store/hooks";
import { showModal, titleChange } from "../store/noteSlice";
import RemoveModal from "./RemoveModal";

type noteProp = {
  note: INote;
};

const EachPaper = ({ note }: noteProp) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>(note.title);
  const [text, setText] = useState<string>(note.text);
  const debouncedValue = useDebounce<string>(value, 500);
  const debouncedText = useDebounce<string>(text, 500);
  useEffect(() => {
    setValue(note.title);
    setText(note.text);
  }, [note]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const noteHanlder = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    dispatch(
      titleChange({
        title: debouncedValue,
        text: debouncedText,
        id: note.id,
      })
    );
  }, [debouncedValue, debouncedText]);

  const modal = useAppSelector((state) => state.notes.modal);

  return (
    <div className="w-full flex flex-col items-center" key={note.id}>
      <p
        className="absolute right-10 top-10 text-2xl cursor-pointer"
        onClick={() => dispatch(showModal(!modal))}
      >
        🗑️
      </p>
      <input
        type="text"
        className="border-0 w-3/4 my-2 focus:outline-none text-2xl h-20"
        placeholder="Enter heading here"
        value={value}
        onChange={changeHandler}
      />
      <textarea
        value={text}
        className="border-0 w-3/4 my-2 focus:outline-none text-lg h-full"
        placeholder="Enter note here"
        onChange={noteHanlder}
      />
        {modal && <RemoveModal id={note.id}></RemoveModal>}
    </div>
  );
};

export default EachPaper;
