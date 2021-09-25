import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <>
      <div className="p-3 lg:w-1/3 md:max-w-1/2 w-full ">
        <div className="lg: h-full flex border-gray-200 border shadow-xl p-5 rounded-lg">
          <div className="mb-2 flex-1">
            <p className="text-indigo-500 float-left title-font font-medium visited:text-purple-600">
              {note.title}
            </p>
            <br />
            <div className="text-left">
            <p className="text-gray-500 text-xs overflow-ellipsis overflow-hidden">{note.description}</p>
            </div>
          </div>

          <div  className="flex mr-5 flex-wrap content-center">
            <img style={{"boxShadow": "0 0px 15px 8px rgba(0, 0, 0, 0.3)"}}
              className="w-16 h-16 rounded-full border-2 border-indigo-500"
              src="https://cdn.iconscout.com/icon/free/png-256/meeting-1543488-1305981.png"
              alt=""
            />
          </div>

          <div className="flex flex-wrap content-center flex-col">
          <i className="material-icons my-2">edit</i>
          <i className="material-icons my-2">delete</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
