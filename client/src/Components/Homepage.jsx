import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectQuiz from "./SelectQuiz";
import QuizBox from "./QuizBox";
import UserPage from "./UserPage";

function Homepage() {
  return (
    <div
      className="w-screen h-screen bg-regal-blue p-10 
    flex flex-col items-center gap-y-8"
    >
      <div className="home-page-header text-center">
        <h1 className="text-2xl lg:text-4xl italic">Quiz Master</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<SelectQuiz />} />
          <Route path="user" element={<UserPage />} />
          <Route path="user/quiz" element={<QuizBox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Homepage;
