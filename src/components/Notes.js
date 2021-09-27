import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
const context = useContext(noteContext);
const { notes, getallNote } = context;
const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" });

useEffect(() => {
getallNote();
}, []);

const ref = useRef(null);

const updateNote = (currentNote) => {
ref.current.click();
setNote({etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
};

const [showModal, setShowModal] = React.useState(false);

return (
<>
  <button ref={ref}
    className="bg-pink-500 hidden text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    type="button" onClick={()=> setShowModal(true)}
    >
    Open regular modal
  </button>
  {showModal ? (
  <>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div
          className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-2xl justify-center font-semibold">Edit Task</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={()=> setShowModal(false)}
              ></button>
          </div>
          {/*body*/}
          <div className=" px-12 ">
            <div className="flex flex-col text-center w-full my-3"></div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="title" className="leading-7 text-sm text-gray-600">
                      Title<span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <input type="text" onChange={onchange} id="etitle" value={note.etitle} name="etitle"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="tag" className="leading-7 text-sm text-gray-600">
                      Tag<span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <select type="text" onChange={onchange} id="etag" name="etag" value={note.etag}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 p-2 leading-8 transition-colors duration-200 ease-in-out">
                      <option selected disabled>
                        Select tag
                      </option>
                      <option value="General">General</option>
                      <option value="Meeting">Meeting</option>
                      <option value="Lecture">Lecture</option>
                      <option value="Call">Call</option>
                      <option value="Event">Event</option>
                      <option value="Cleaning">Cleaning</option>
                      <option value="Groceries">Groceries</option>
                      <option value="Party">Party</option>
                    </select>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="description" className="leading-7 text-sm text-gray-600">
                      Description
                      <span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <textarea id="edescription" onChange={onchange} value={note.edescription} name="edescription"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-2 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                {/* <div className="p-2 w-full">
                  <button onClick={handleClick}
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Add
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-4 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button" onClick={()=> setShowModal(false)}
              >
              Close
            </button>
            <button
              className="bg-emerald-500 text-green-500 text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-8 mb-1 ease-linear transition-all duration-150"
              type="button" onClick={ (updateNote, ()=> {
              setShowModal(false);
              })
              }
              >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
  ) : null}
  <p className="text-center text-2xl font-semibold my-5">Your Notes</p>
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-col text-center w-full">
      <div className="flex flex-wrap">
        {notes.map((note) => {
        return (
        <Noteitem key={note._id} note={note} updateNote={updateNote} />
        );
        })}
      </div>
    </div>
  </div>
</>
);
};

export default Notes;