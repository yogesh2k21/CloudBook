import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const initialnote = [
    {
      _id: "61497a74bb0f44df8cc1f0fd",
      user: "6144e6586c1de384c66b654f",
      title: "ReactJs",
      description: "Learn ReactJs before December",
      tag: "Education",
      date: "2021-09-21T06:23:48.467Z",
      __v: 0,
    },
    {
      _id: "61498657ab567bcc4921d195",
      user: "6144e6586c1de384c66b654f",
      title: "testing",
      description: "testing",
      tag: "Education",
      date: "2021-09-21T07:14:31.672Z",
      __v: 0,
    },
    {
      _id: "61498673631a38f13f51ffdb",
      user: "6144e6586c1de384c66b654f",
      title: "testing",
      description: "testing",
      tag: "Education",
      date: "2021-09-21T07:14:59.979Z",
      __v: 0,
    },
    {
      _id: "6149919e0416432b14ee74c8",
      user: "6144e6586c1de384c66b654f",
      title: "testing",
      description: "testing",
      tag: "Education",
      date: "2021-09-21T08:02:38.235Z",
      __v: 0,
    },
    {
      _id: "614992a50416432b14ee74cc",
      user: "6144e6586c1de384c66b654f",
      title: "testing1111",
      description: "testing",
      tag: "Education",
      date: "2021-09-21T08:07:01.469Z",
      __v: 0,
    },{
        "_id": "61497a74bb0f44df8cc1f0fd",
        "user": "6144e6586c1de384c66b654f",
        "title": "ReactJs",
        "description": "Learn ReactJs before December",
        "tag": "Education",
        "date": "2021-09-21T06:23:48.467Z",
        "__v": 0
      },
      {
        "_id": "61498657ab567bcc4921d195",
        "user": "6144e6586c1de384c66b654f",
        "title": "testing",
        "description": "testing",
        "tag": "Education",
        "date": "2021-09-21T07:14:31.672Z",
        "__v": 0
      },
      {
        "_id": "61498673631a38f13f51ffdb",
        "user": "6144e6586c1de384c66b654f",
        "title": "testing",
        "description": "testing",
        "tag": "Education",
        "date": "2021-09-21T07:14:59.979Z",
        "__v": 0
      },
      {
        "_id": "6149919e0416432b14ee74c8",
        "user": "6144e6586c1de384c66b654f",
        "title": "testing",
        "description": "testing",
        "tag": "Education",
        "date": "2021-09-21T08:02:38.235Z",
        "__v": 0
      },
      {
        "_id": "614992a50416432b14ee74cc",
        "user": "6144e6586c1de384c66b654f",
        "title": "testing1111",
        "description": "testing",
        "tag": "Education",
        "date": "2021-09-21T08:07:01.469Z",
        "__v": 0
      },
      {
        "_id": "614db849ff2887803392bfdf",
        "user": "6144e6586c1de384c66b654f",
        "title": "frontend",
        "description": "testingis  sia dakd sa  dskal dsal ldanlf lsdf  sdlflds flds l flsldk f dslf",
        "tag": "Education",
        "date": "2021-09-24T11:36:41.914Z",
        "__v": 0
      },
      {
        "_id": "614db855ff2887803392bfe1",
        "user": "6144e6586c1de384c66b654f",
        "title": "frontend",
        "description": "testingis  sia dakd sa  dskal dsal ldanlf lsdf  sdlflds flds l flsldk f dslf",
        "tag": "Education",
        "date": "2021-09-24T11:36:53.010Z",
        "__v": 0
      },
      {
        "_id": "614db855ff2887803392bfe3",
        "user": "6144e6586c1de384c66b654f",
        "title": "frontend",
        "description": "testingis  sia dakd sa  dskal dsal ldanlf lsdf  sdlflds flds l flsldk f dslf",
        "tag": "Education",
        "date": "2021-09-24T11:36:53.727Z",
        "__v": 0
      },
      {
        "_id": "614db856ff2887803392bfe5",
        "user": "6144e6586c1de384c66b654f",
        "title": "frontend",
        "description": "testingis  sia dakd sa  dskal dsal ldanlf lsdf  sdlflds flds l flsldk f dslf",
        "tag": "Education",
        "date": "2021-09-24T11:36:54.303Z",
        "__v": 0
      },
      {
        "_id": "614db856ff2887803392bfe7",
        "user": "6144e6586c1de384c66b654f",
        "title": "frontend",
        "description": "testingis  sia dakd sa  dskal dsal ldanlf lsdf  sdlflds flds l flsldk f dslf",
        "tag": "Education",
        "date": "2021-09-24T11:36:54.776Z",
        "__v": 0
      }
  ];
  const [notes, setNotes] = useState(initialnote);

  return (
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
