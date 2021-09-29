import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";

const AddNote = () => {
const context = useContext(noteContext);
const { addNote } = context;
const [note, setNote] = useState({ title: "", description: "", tag: "Select tag" });

const handleClick = (e) => {
    e.preventDefault(); //it prevents the page to be reload
    addNote(note.title, note.description, note.tag); //it add the new note to the notes Array
    setNote({ title: "", description: "", tag: "Select tag" });
};

const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
};

return (
<>
    <section>
        <div className=" px-12 ">
            <div className="flex flex-col text-center w-full my-3"></div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="title" className="leading-7 text-sm text-gray-600">
                                Title<span style={{ color: "#ff0000" }}>*</span>
                            </label>
                            <input placeholder="Minimum 3 characters" value={note.title} type="text" minLength={3} onChange={onchange} id="title" name="title"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 p-1 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="tag" className="leading-7 text-sm text-gray-600">
                                Tag<span style={{ color: "#ff0000" }}>*</span>
                            </label>
                            <select value={note.tag} type="text" onChange={onchange} id="tag" name="tag"
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
                                Description<span style={{ color: "#ff0000" }}>*</span>
                            </label>
                            <textarea placeholder="Minimum 5 characters" id="description" value={note.description} minLength={3} onChange={onchange} name="description"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 p-2  resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <button disabled={note.title.length<3 || note.description.length<5} onClick={handleClick}
                            className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
);
};

export default AddNote;