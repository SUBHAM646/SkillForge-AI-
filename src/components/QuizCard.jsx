import { motion } from "framer-motion";
import { FaChevronRight, FaChevronLeft, FaRedo } from "react-icons/fa";
import { useReducer, useEffect } from "react";
import { quizReducer, initialState } from "../reducers/quizReducer";
import quizQuestions from "../data/quizQuestions";
import useLocalStorage from "../hooks/useLocalStorage";

export default function QuizCard() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [savedScores, setSavedScores] = useLocalStorage("quizScores", []);

  const questions = quizQuestions;
  const currentQ = questions[state.currentQuestion];
  const totalQuestions = questions.length;

  useEffect(() => {
    if (state.showResults) {
      let correct = 0;
      questions.forEach((q, i) => {
        if (state.answers[i] === q.correct) correct++;
      });
      dispatch({ type: "CALCULATE_SCORE", payload: correct });
      const newScore = {
        date: new Date().toISOString().split("T")[0],
        score: correct,
        total: totalQuestions,
        percentage: Math.round((correct / totalQuestions) * 100),
      };
      setSavedScores([newScore, ...savedScores].slice(0, 10));
    }
  }, [state.showResults]);

  const handleAnswer = (optionIndex) => {
    if (state.answers[state.currentQuestion] !== undefined) return;
    dispatch({
      type: "ANSWER_QUESTION",
      payload: { questionId: state.currentQuestion, answer: optionIndex },
    });
  };

  const handleNext = () => {
    if (state.currentQuestion < totalQuestions - 1) {
      dispatch({ type: "NEXT_QUESTION" });
    } else {
      dispatch({ type: "SHOW_RESULTS" });
    }
  };

  const handlePrev = () => {
    if (state.currentQuestion > 0) {
      dispatch({ type: "PREV_QUESTION" });
    }
  };

  const restartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  const answeredCount = Object.keys(state.answers).length;

  if (state.showResults) {
    const percentage = Math.round((state.score / totalQuestions) * 100);
    const grade = percentage >= 90 ? "A+" : percentage >= 80 ? "A" : percentage >= 70 ? "B" : percentage >= 60 ? "C" : "D";

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card max-w-2xl mx-auto text-center"
      >
        <div className="mb-6">
          <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center text-3xl font-bold mb-4 ${
            percentage >= 70 ? "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400" : "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400"
          }`}>
            {grade}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Quiz Complete!</h2>
          <p className="text-gray-600 dark:text-gray-400">Here's how you performed</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <p className="text-2xl font-bold text-accent-600">{state.score}/{totalQuestions}</p>
            <p className="text-sm text-gray-500">Correct</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <p className="text-2xl font-bold text-green-600">{percentage}%</p>
            <p className="text-sm text-gray-500">Percentage</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <p className="text-2xl font-bold text-yellow-600">{grade}</p>
            <p className="text-sm text-gray-500">Grade</p>
          </div>
        </div>

        <button onClick={restartQuiz} className="btn-primary flex items-center gap-2 mx-auto">
          <FaRedo /> Retake Quiz
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Question {state.currentQuestion + 1} of {totalQuestions}
        </span>
        <span className="text-sm font-medium text-accent-600">
          {answeredCount}/{totalQuestions} answered
        </span>
      </div>

      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-accent-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((state.currentQuestion + 1) / totalQuestions) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <motion.div
        key={state.currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="card mb-4"
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          {currentQ.question}
        </h3>
        <div className="space-y-3">
          {currentQ.options.map((option, i) => {
            const selected = state.answers[state.currentQuestion] === i;
            const isCorrect = currentQ.correct === i;
            const showResult = state.answers[state.currentQuestion] !== undefined;

            let optionStyle = "border-gray-200 dark:border-gray-600 hover:border-accent-400 hover:bg-accent-50 dark:hover:bg-accent-900/20";
            if (showResult && selected) {
              optionStyle = isCorrect
                ? "border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-500"
                : "border-red-500 bg-red-50 dark:bg-red-900/20 dark:border-red-500";
            } else if (showResult && isCorrect) {
              optionStyle = "border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-500";
            } else if (selected) {
              optionStyle = "border-accent-500 bg-accent-50 dark:bg-accent-900/20";
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={state.answers[state.currentQuestion] !== undefined}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${optionStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    selected ? "bg-accent-600 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-gray-800 dark:text-gray-200">{option}</span>
                </div>
              </button>
            );
          })}
        </div>
      </motion.div>

      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={state.currentQuestion === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <FaChevronLeft /> Previous
        </button>
        <button
          onClick={handleNext}
          className="btn-primary flex items-center gap-2 text-sm"
        >
          {state.currentQuestion < totalQuestions - 1 ? <>Next <FaChevronRight /></> : "Submit Quiz"}
        </button>
      </div>
    </div>
  );
}
