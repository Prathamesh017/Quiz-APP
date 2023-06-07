import React from "react";
function UserPage() {
  return (
    <div className="w-10/12 lg:w-2/6 bg-white p-4 flex flex-col gap-y-4 rounded-md shadow-lg mt-16">
      <p className="block">Enter Name</p>
      <input
        type="text"
        placeholder="please enter name"
        className="p-2 rounded"
      ></input>
      <p className="block">Select Difficulty</p>
      <div className="flex  w-full justify-around">
        <div>
          <input type="radio" value="easy" name="level" /> Easy
        </div>
        <div>
          <input type="radio" value="medium" name="level" /> Medium
        </div>
        <div>
          <input type="radio" value="hard" name="level" /> Hard
        </div>
      </div>
      <button className="bg-slate-600 w-3/12 p-2 rounded text-white align-center w-full mt-10 hover:text-black">
        Submit
      </button>
    </div>
  );
}

export default UserPage;
