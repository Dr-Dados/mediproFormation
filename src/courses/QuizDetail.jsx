import { useState } from "react";
import { useParams } from "react-router-dom";

function QuizDetail({ quizes }) {
  const [answers, setAnswers] = useState([]);
  const id = useParams();
  const quiz = quizes.find((quiz) => quiz.title != id);
  const [index, setIndex] = useState(0);
  const userInput = answers[index] ? answers[index].answer : "";
  const [userAnswer, setUserAnswer] = useState(userInput);

  function nextHandler(e) {
    e.preventDefault();
    const answer = {
      id: index + 1,
      question: quiz.questions[index].question,
      answer: userAnswer,
    };
    setAnswers((prevArray) => {
      // Check if the object is already in the array
      const index = prevArray.findIndex((obj) => obj.id === answer.id);

      if (index !== -1) {
        // If found, replace the object at the index
        const newArray = [...prevArray];
        newArray[index] = answer;
        return newArray;
      } else {
        // If not found, add the new object to the array
        return [...prevArray, answer];
      }
    });
    setUserAnswer("");
    setIndex((index) => index + 1);
  }
  console.log(answers);

  function previousHandler(e) {
    e.preventDefault();
    setIndex((index) => index - 1);
    setUserAnswer(answers[index - 1].answer);
    if (index == 0) return;
  }
  const nbQuestions = quiz.questions.length;
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">{quiz.title}</h2>
      <p className="text-lg font-semibold my-5">Question {index + 1} :</p>
      <form>
        <p className="my-6">{quiz.questions[index].question}</p>
        <textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          name=""
          id=""
          cols="140"
          rows="10"
          className="outline-none p-4"
        ></textarea>
        <div className="flex justify-between w-full my-10">
          {index == 0 ? (
            ""
          ) : (
            <button
              onClick={previousHandler}
              className="bg-transparent text-black py-3 px-5 ring-0 ring-gray-400 rounded-xl"
            >
              ⬅ précedent
            </button>
          )}
          {index == nbQuestions - 1 ? (
            <button
              onClick={nextHandler}
              className="bg-green-500 py-3 px-5 text-white rounded-xl"
            >
              Terminer ➡
            </button>
          ) : (
            <button
              onClick={nextHandler}
              className="bg-blue-500 py-3 px-5 text-white rounded-xl"
            >
              Suivant ➡
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default QuizDetail;
