import React,{useContext} from "react";
import noteContext from '../context/notes/NoteContext';

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote}=context;
  const { note,updateNote } = props;

  const imageFunction=(tag)=>{
    switch(tag) {
      case "General":
        return "https://img-premium.flaticon.com/png/512/4014/premium/4014943.png?token=exp=1632908702~hmac=510fd3a5795706395237f2ed126dc5a0"
      case "Meeting":
        return "https://w7.pngwing.com/pngs/687/710/png-transparent-conference-centre-meeting-convention-table-computer-icons-program-development-blue-text-symmetry-thumbnail.png"
      case "Lecture":
        return "https://cdn-icons-png.flaticon.com/512/432/432413.png"
      case "Important":
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC2vU1hcijFwYYUGyizgC_I55j6wT26XPFUA&usqp=CAU"
      case "Call":
        return "https://cdn-icons-png.flaticon.com/512/1782/1782886.png"
      case "Event":
        return "https://sustainablecortland00.files.wordpress.com/2013/07/event-icon.png"
      case "Cleaning":
        return "https://data.apksum.com/7d/com.a8.acf.atm.free.app/2.0.1.1230/icon.png"
      case "Groceries":
        return "https://www.buffalocitymission.org/wp-content/uploads/2012/09/groceries.png"
      case "Party":
        return "https://cdn.icon-icons.com/icons2/1859/PNG/512/partypoppers_117927.png"
    }
  }

  return (
    <>
      <div className="p-3 lg:w-1/3 md:max-w-1/2 w-full ">
        <div className={note.tag==='Important'?"h-full flex border-gray-200 border border-red-500 shadow-xl p-5 rounded-lg":"h-full flex border-gray-200 border shadow-xl p-5 rounded-lg"}>
          <div className="mb-2 flex-1">
            <p className={note.tag==='Important'?"text-red-500 float-left title-font font-medium visited:text-red-600":"text-indigo-500 float-left title-font font-medium visited:text-purple-600"}>
            {note.title.slice(0,15)}{note.title.length>15?"...":''}
            </p>
            <br />
            <div className="text-left">
            <p className="text-gray-500 text-xs overflow-ellipsis overflow-hidden">{note.description.slice(0,40)}{note.description.length>40?"...":''}</p>
            </div>
          </div>

          <div  className="flex mr-5 flex-wrap content-center">
            <img style={{"boxShadow": "0 0px 15px 8px rgba(0, 0, 0, 0.3)"}}
              className={note.tag==='Important'?"w-16 h-16 rounded-full border-2 border-red-500":"w-16 h-16 border-2 border-indigo-500 rounded-full"}
              src={imageFunction(note.tag)}
              alt=""
            />
            {/* "https://cdn.iconscout.com/icon/free/png-256/meeting-1543488-1305981.png" */}
          </div>

          <div className="flex flex-wrap content-center flex-col">
          <i className="material-icons my-2" onClick={()=>{updateNote(note)}}>edit</i>
          <i className="material-icons my-2" onClick={()=>{return deleteNote(note._id)}}>delete</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
