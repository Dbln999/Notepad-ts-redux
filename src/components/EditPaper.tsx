import React, { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { INote } from "../interfaces/INote";
import useDebounce from "../hooks/useDebounce";
import { useDispatch } from "react-redux";
import { titleChange } from "../store/noteSlice";
import EachPaper from "./EachPaper";

const EditPaper = () => {
  const notes = useAppSelector((state) => state.notes.notes);

  return (
    <>
      {notes
        .filter((note) => note.active)
        ?.map((note) => {
          return <EachPaper note={note}></EachPaper>;
        })}
    </>
  );
};

export default EditPaper;
