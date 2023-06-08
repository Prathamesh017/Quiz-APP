import React, { useState } from "react";
import { useNavigate } from "react-router";

function UserPage() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    difficulty: "",
  });
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const navigate = useNavigate();

  const submitDetails = () => {
    if (!(userDetails.name && userDetails.difficulty)) {
      setError({
        status: true,
        message: "Please Enter All Details",
      });
      return;
    }
    if (userDetails.name.length <= 2) {
      setError({
        status: true,
        message: "Please enter Valid Name",
      });
      return;
    }

    console.log(userDetails);
    localStorage.setItem("user", JSON.stringify(userDetails.name));
    localStorage.setItem("difficulty", JSON.stringify(userDetails.difficulty));
    setError({
      status: false,
      message: "",
    });
    navigate("quiz");
  };
  return (
    <div className="w-10/12 lg:w-2/6 bg-white p-4 flex flex-col gap-y-4 rounded-md shadow-lg mt-16">
      <p className="block">Enter Name</p>
      <input
        type="text"
        placeholder="please enter name"
        className="p-2 rounded border-2"
        onChange={(e) => {
          setUserDetails((details) => ({ ...details, name: e.target.value }));
          setError({
            status: false,
            message: "",
          });
        }}
      ></input>
      <p className="block">Select Difficulty</p>
      <div className="flex  w-full justify-around">
        <div>
          <input
            type="radio"
            value="easy"
            name="level"
            onClick={(e) => {
              setUserDetails((details) => ({
                ...details,
                difficulty: e.target.value,
              }));
              setError({
                status: false,
                message: "",
              });
            }}
          />
          Easy
        </div>
        <div>
          <input
            type="radio"
            value="medium"
            name="level"
            onClick={(e) => {
              setUserDetails((details) => ({
                ...details,
                difficulty: e.target.value,
              }));
              setError({
                name: "",
                difficulty: "",
              });
            }}
          />
          Medium
        </div>
        <div>
          <input
            type="radio"
            value="hard"
            name="level"
            onClick={(e) => {
              setUserDetails((details) => ({
                ...details,
                difficulty: e.target.value,
              }));
              setError({
                name: "",
                difficulty: "",
              });
            }}
          />
          Hard
        </div>
      </div>
      {error.status && (
        <h2 className="text-red-700  text-base lg:text-xl">{error.message}</h2>
      )}

      <button
        className="bg-slate-600 w-3/12 p-2 rounded text-white align-center w-full  hover:text-black "
        onClick={submitDetails}
      >
        Submit
      </button>
    </div>
  );
}

export default UserPage;
