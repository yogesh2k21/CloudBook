import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;
  return (
    <>
      <p className="text-center text-2xl font-semibold my-5">Your Notes</p>
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-col text-center w-full">
          <div className="flex flex-wrap">
            {notes.map((note) => {
              return <Noteitem note={note} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
