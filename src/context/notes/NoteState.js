import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialnote = [];
  const [notes, setNotes] = useState(initialnote);

  //Get all note
  const getallNote = async () => {
    //API CALL
    let url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem("token")
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json)
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    //API CALL
    let url = `${host}/api/notes/addnote`;
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem("token")
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    //console.log(json)

    //Logic to adding in client
    console.log("Adding new note");
    const note = json;
    setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = async (id) => {
    //API CALL
    let url = `${host}/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem("token")
      },
    });
    // eslint-disable-next-line
    const json = response.json();
    //console.log(json)

    console.log("Deleting " + id);
    const NewNotesAfterDeletion = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(NewNotesAfterDeletion);
  };

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    let url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem("token")
      },
      body: JSON.stringify({ id, title, description, tag }),
    });
    // eslint-disable-next-line
    const json = response.json();
    //console.log(json)

    let NewUpdatedNote=JSON.parse(JSON.stringify(notes))
    //Logic to edit in client
    for (let index = 0; index < NewUpdatedNote.length; index++) {
      const element = NewUpdatedNote[index];
      if (element._id === id) {
        NewUpdatedNote[index]._id = id;
        NewUpdatedNote[index].title = title;
        NewUpdatedNote[index].description = description;
        break;
      }
    }
    setNotes(NewUpdatedNote);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getallNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
