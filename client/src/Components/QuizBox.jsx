import React from "react";
function QuizBox() {

  return (
    <div className="w-10/12 lg:w-1/2 bg-white p-4 flex flex-col gap-y-4 rounded-md shadow-lg">
      <div>
        <h1 className="text-sky-400"> Select Any Language For Quix</h1>
      </div>
      <p className="p-4  border-2 border-black rounded-md hover:bg-green-400 cursor-pointer">
        Javacript
      </p>
      <p className="p-4  border-2 border-black rounded-md hover:bg-green-400 cursor-pointer">
        Java
      </p>
      <p className="p-4  border-2 border-black rounded-md hover:bg-green-400 cursor-pointer">
        CPP
      </p>
      <p className="p-4  border-2 border-black rounded-md hover:bg-green-400 cursor-pointer">
        Python
      </p>
      {/* <p className="p-4  border-2 border-black rounded-md hover:bg-green-400 cursor-pointer">
        CSharp
      </p> */}

      <div className="button w-full flex justify-center">
        <button className="bg-regal-blue w-3/12 p-2 rounded text-white align-center hover:bg-cyan-600">
          Submit
        </button>
      </div>
    </div>
  );
}

export default QuizBox;
