import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../interfaces/INote";

type noteState = {
  notes: INote[];
  modal: boolean;
};

interface Ititle {
  id: number;
  title: string;
  text: string;
}

const initialState: noteState = {
  notes: [
    {
      title: "History",
      text: "bla bla bla blagrwegwregwregwergwregweggrwegwergwregwergwergwergewgerw",
      id: 0,
      date: new Date(),
      active: false,
    },
  ],
  modal: false,
};

const noteSlice = createSlice({
  name: "noteSlice",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<INote>) {
      state.notes.map((note) => (note.active ? (note.active = false) : ""));
      state.notes.push(action.payload);
    },
    setActive(state, action: PayloadAction<number>) {
      state.notes.map((note) => {
        if (note.active) note.active = false;

        if (note.id === action.payload) {
          note.active = true;
        }
        return note;
      });
    },
    titleChange(state, action: PayloadAction<Ititle>) {
      state.notes.map((note) => {
        if (note.id === action.payload.id) {
          note.title = action.payload.title;
          note.text = action.payload.text;
        }
      });
    },
    removeNote(state, action: PayloadAction<number>) {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.modal = false;
    },
    showModal(state, action: PayloadAction<boolean>) {
      state.modal = action.payload;
    },
  },
});

export default noteSlice.reducer;
export const { setActive, titleChange, addNote, removeNote, showModal } =
  noteSlice.actions;
