import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
function QuizBox() {
  const category = JSON.parse(localStorage.getItem("category"));
  const difficulty = JSON.parse(localStorage.getItem("difficulty"));
  //data fetched by backend
  const [quizData, setQuizData] = useState([]);
  //keeping tally of questions
  const [questionNo, setQuestionNo] = useState({
    currentNo: 0,
    lastNo: 0,
  });
  //showing message according to situation
  const [message, showMessage] = useState({
    show: false,
    message: "",
    isError: false,
  });
  //showing selected option
  const [selectedOption, showselectedOption] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
  });
  //set answer
  const [answer, setAnswer] = useState({
    selectedAns: "",
    answerSubmitted: false,
  });
  //keep score
  const [score, setScore] = useState(0);
  const [isDisable, setisDisable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const quiz = await axios.get("http://localhost:3000/api/user/quiz", {
      params: {
        difficulty: difficulty,
        category: category,
      },
    });
    setQuizData(quiz.data.data);
    console.log(quiz.data.data);
    setQuestionNo((questionNo) => ({
      ...questionNo,
      lastNo: quiz.data.data.length,
    }));
  };
  const submitAnswer = () => {
    if (!answer.selectedAns) {
      return setMessage(true, "Please Select an Answer", true);
    }
    if (answer.selectedAns === quizData[questionNo.currentNo].correct_answer) {
      setScore((score) => score + 1);
      setMessage(true, "Correct Answer", false);
    } else {
      setMessage(true, "Wrong Answer", true);
    }
    setisDisable(true);
    setAnswer((ans) => ({
      ...ans,
      answerSubmitted: true,
    }));
  };
  const nextQuestion = () => {
    if (questionNo.currentNo === questionNo.lastNo - 1) {
      return;
    }
    setisDisable(false);
    if (!answer.selectedAns) {
      return setMessage(true, "Please Select an Answer", true);
    }
    if (!answer.answerSubmitted) {
      return setMessage(true, "Please Submit  Answer", true);
    }
    clearStates();
  };
  const setMessage = (show, message, isError) => {
    showMessage({
      show,
      message,
      isError,
    });
  };
  const clearStates = () => {
    showMessage({
      show: false,
      message: "",
      isError: false,
    });
    setAnswer({
      selectedAns: "",
      answerSubmitted: false,
    });
    setQuestionNo((quesNo) => ({
      ...quesNo,
      currentNo: quesNo.currentNo + 1,
    }));
  };
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      {quizData.length > 0 && (
        <div className="w-11/12 lg:w-1/2">
          {questionNo.currentNo !== questionNo.lastNo - 1 ? (
            <div className=" bg-white p-4 flex flex-col gap-y-4 rounded-md shadow-lg">
              <div>
                {quizData.length > 0 && (
                  <h1 className="text-sky-400">
                    {quizData[questionNo.currentNo].question}
                  </h1>
                )}
              </div>
              <p
                className={`p-4  border-2 border-black rounded-md hover:bg-green-400 cursor-pointer  ${
                  selectedOption.a ? "bg-green-400" : "bg-white"
                }`}
                onClick={() => {
                  setAnswer((ans) => ({
                    ...ans,
                    selectedAns: quizData[questionNo.currentNo].answers[0],
                  }));
                  showselectedOption({ a: true });
                }}
              >
                {quizData[questionNo.currentNo].answers[0]}
              </p>
              <p
                className={`p-4  border-2 border-black rounded-md hover:bg-green-400 cursor-pointer  ${
                  selectedOption.b ? "bg-green-400" : "bg-white"
                }`}
                onClick={() => {
                  setAnswer((ans) => ({
                    ...ans,
                    selectedAns: quizData[questionNo.currentNo].answers[1],
                  }));
                  showselectedOption({ b: true });
                }}
              >
                {quizData[questionNo.currentNo].answers[1]}
              </p>
              <p
                className={`p-4  border-2 border-black rounded-md hover:bg-green-400 cursor-pointer  ${
                  selectedOption.c ? "bg-green-400" : "bg-white"
                }`}
                onClick={() => {
                  setAnswer((ans) => ({
                    ...ans,
                    selectedAns: quizData[questionNo.currentNo].answers[2],
                  }));
                  showselectedOption({ c: true });
                }}
              >
                {quizData[questionNo.currentNo].answers[2]}
              </p>
              <p
                className={`p-4  border-2 border-black rounded-md hover:bg-green-400 cursor-pointer  ${
                  selectedOption.d ? "bg-green-400" : "bg-white"
                }`}
                onClick={() => {
                  setAnswer((ans) => ({
                    ...ans,
                    selectedAns: quizData[questionNo.currentNo].answers[3],
                  }));
                  showselectedOption({ d: true });
                }}
              >
                {quizData[questionNo.currentNo].answers[3]}
              </p>

              <p
                className={`${
                  message.isError ? "text-red-700" : "text-green-700"
                }`}
              >
                {message.show && message.message}
              </p>
              <p className="text-green-700 ">
                {message.show &&
                  answer.answerSubmitted &&
                  answer.selectedAns &&
                  "Answer:" + quizData[questionNo.currentNo].correct_answer}
              </p>

              <div className="button w-full flex flex-col lg:flex-row gap-y-4 items-center lg:justify-around">
                <button
                  disabled={isDisable}
                  className="bg-regal-blue w-1/2 lg:w-3/12 p-2 rounded text-white align-center hover:bg-cyan-600"
                  onClick={submitAnswer}
                >
                  Submit
                </button>
                <button
                  className="bg-regal-blue w-1/2  lg:w-3/12 p-2 rounded text-white align-center hover:bg-cyan-600"
                  onClick={nextQuestion}
                >
                  {questionNo.currentNo === questionNo.lastNo - 1
                    ? "Submit Quiz"
                    : "Next Question"}
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white p-4 flex flex-col gap-y-4 rounded-md shadow-lg mt-10">
              <h1 className="text-center text-xl text-slate-700">
                Congratulations !!
              </h1>
              <p className="text">Your Score is: {score}</p>
              <button
                className="bg-regal-blue w-6/12 lg:w-3/12 p-2 rounded text-white align-center hover:bg-cyan-600"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default QuizBox;
