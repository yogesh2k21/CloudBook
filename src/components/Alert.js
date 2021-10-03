import React from "react";

function Alert(props) {
  return (
    <>
    <div id="alertComp" className="w-full" style={{height:'45px'}}>
      {props.alert && (
        <div
          className={`bg-${props.alert.color}-200 px-4 py-2 ounded-md text-lg flex items-center mx-auto`}
        >
          <svg
            viewBox="0 0 24 24"
            className={`text-${props.alert.color}-600 w-5 h-5 sm:w-5 sm:h-5 mr-3`}
          >
            <path fill="currentColor" d={props.alert.icon}></path>
          </svg>
          <span className={`text-${props.alert.color}-800`}>{props.alert.msg}</span>
        </div>
      )}
      </div>
    </>
  );
}
export default Alert;
