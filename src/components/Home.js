import React,{useContext} from 'react'
import noteContext from '../context/notes/NoteContext'
import Noteitem from './Noteitem'

export const Home = () => {
    const context = useContext(noteContext)
    const {notes,setnotes}=context
    return (
        <>
            <section>
                <div className=" px-12 ">
                    <div className="flex flex-col text-center w-full my-3">
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Title</label>
                            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 p-1 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        </div>
                        <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Tag</label>
                            <select type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 p-2 leading-8 transition-colors duration-200 ease-in-out">
                            <option>Personal</option>
                            <option>Meeting</option>
                            <option>Lecture</option>
                            <option>Call</option>
                            <option>Event</option>
                            <option>Cleaning</option>
                            <option>Groceries</option>
                            <option>Party</option>
                            </select>
                        </div>
                        </div>
                        <div className="p-2 w-full">
                        <div className="relative">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        </div>
                        <div className="p-2 w-full">
                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add</button>
                        </div>
                    </div>
                    </div>
                </div>
                
                <p className="text-center text-2xl font-semibold my-5">Your Notes</p>
                    <div className="container px-5 py-5 mx-auto">
                        <div className="flex flex-col text-center w-full">
                            <div className="flex flex-wrap">
                                {notes.map((note)=>{
                                    return <Noteitem note={note}/>
                                })}
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}
export default Home