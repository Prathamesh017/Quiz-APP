import React from "react";
import SelectQuiz from "./SelectQuiz";


function Homepage() {
  return (
    <div
      className="w-screen h-screen bg-cyan-800 p-10 
    flex flex-col items-center gap-y-8"
    >
      <div className="home-page-header text-center">
        <h1 className="text-2xl lg:text-4xl italic">Quiz Master</h1>
      </div>

      <SelectQuiz></SelectQuiz>
      {/* <div className="quiz-box w-screen  flex  justify-center"> */}
      {/* <QuizBox></QuizBox> */}
      {/* <UserPage></UserPage> */}
  
    </div>
  );
}

export default Homepage;
