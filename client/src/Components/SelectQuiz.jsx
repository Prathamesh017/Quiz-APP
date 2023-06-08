import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SelectQuiz() {
  const [fetchQuizCategory, setFetchQuizCategory] = useState([]);
  const [quizName, setQuizName] = useState("");
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllQuizes();
  });
  const startQuiz = () => {
    if (!quizName) {
      setError((err) => ({ status: true, message: "Please Choose An Quiz" }));
      return;
    }
    localStorage.setItem("category", JSON.stringify(quizName));
    navigate("user");
  };
  const fetchAllQuizes = async () => {
    const quiz = await axios.get(
      "http://localhost:3000/api/user/quiz/category"
    );
    setFetchQuizCategory(quiz.data.data);
  };
  return (
    <>
      <div className="w-3/4 lg:w-1/2  flex flex-col mt-4 lg:mt-0  gap-y-4">
        <div className="flex flex-col lg:flex-row justify-between text-xs lg:text-xl">
          <p className="">Select A Quiz</p>
          {quizName && (
            <p className="text-green-400 ">Quiz Selected : {quizName}</p>
          )}
        </div>
        {fetchQuizCategory.map((quizName) => {
          return (
            <div
              className="w-full bg-white text-xs lg:text-xl py-1 px-2 lg:p-4 text-black shadow-lg rounded-md hover:bg-pink"
              onClick={() => {
                setQuizName(quizName);
                setError((err) => ({
                  status: false,
                  message: "",
                }));
              }}
            >
              <p>{quizName} Quiz</p>
            </div>
          );
        })}

        {error.status && (
          <h2 className="text-red-700  text-base lg:text-xl">
            {error.message}
          </h2>
        )}
        <button
          className="bg-orange-500 mt-2 p-1 lg:p-2 hover:text-white"
          onClick={startQuiz}
        >
          Start Quiz
        </button>
      </div>
    </>
  );
}

export default SelectQuiz;
