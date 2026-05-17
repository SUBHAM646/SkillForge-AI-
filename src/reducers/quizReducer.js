export const initialState = {
  currentQuestion: 0,
  answers: {},
  score: 0,
  showResults: false,
};

export function quizReducer(state, action) {
  switch (action.type) {
    case "ANSWER_QUESTION":
      return {
        ...state,
        answers: { ...state.answers, [action.payload.questionId]: action.payload.answer },
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case "PREV_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1,
      };
    case "CALCULATE_SCORE":
      return {
        ...state,
        score: action.payload,
      };
    case "SHOW_RESULTS":
      return {
        ...state,
        showResults: true,
      };
    case "RESTART_QUIZ":
      return initialState;
    case "SET_QUESTION":
      return {
        ...state,
        currentQuestion: action.payload,
      };
    default:
      return state;
  }
}
