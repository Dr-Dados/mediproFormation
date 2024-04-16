import { Link } from "react-router-dom";
import QuizItem from ".";
function Quizes({ quizes }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Quiz</h2>
      <div className="grid grid-cols-3 gap-2">
        {quizes.map((quiz) => (
          <Link key={quiz.id} to={`${quiz.title}`}>
            <QuizItem color={quiz.color}>{quiz.title}</QuizItem>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Quizes;
