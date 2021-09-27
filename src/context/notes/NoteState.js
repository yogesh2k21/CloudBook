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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0NGU2NTg2YzFkZTM4NGM2NmI2NTRmIn0sImlhdCI6MTYzMjIwNDIzNH0.zYBkNjXBU1odzkTTjwhLPgSo7uG0BhhIrlwQ1kYE5-Y",
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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0NGU2NTg2YzFkZTM4NGM2NmI2NTRmIn0sImlhdCI6MTYzMjIwNDIzNH0.zYBkNjXBU1odzkTTjwhLPgSo7uG0BhhIrlwQ1kYE5-Y",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json)

    //Logic to adding in client
    console.log("Adding new note");
    const note = {
      _id: "614db856ff2887803392bfe7",
      user: "6144e6586c1de384c66b654f",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-24T11:36:54.776Z",
      __v: 0,
    };
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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0NGU2NTg2YzFkZTM4NGM2NmI2NTRmIn0sImlhdCI6MTYzMjIwNDIzNH0.zYBkNjXBU1odzkTTjwhLPgSo7uG0BhhIrlwQ1kYE5-Y",
      },
    });
    const json = response.json();
    console.log(json)

    console.log("Deleting" + id);
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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0NGU2NTg2YzFkZTM4NGM2NmI2NTRmIn0sImlhdCI6MTYzMjIwNDIzNH0.zYBkNjXBU1odzkTTjwhLPgSo7uG0BhhIrlwQ1kYE5-Y",
      },
      body: JSON.stringify({ id, title, description }),
    });
    const json = response.json();
    console.log(json)

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element._id = id;
        element.title = title;
        element.description = description;
      }
    }
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
