import { createContext, useReducer } from "react";

const initialState = {
  startQuiz: "",
  currQuestionIdx: 0,
  questions: [],
  totalQuestions: null,
  score: 0,
  step: 1,
  difficulty: "",
  categories: "",
};

export const QuizStateContext = createContext(initialState);

const ACTIONS = {
  SET_QUIZ_START: "SET_QUIZ_START",
  SET_QUESTIONS: "SET_QUESTIONS",
  INCREASE_SCORE: "INCREASE_SCORE",
  SET_NEXT_QUESTION: "SET_NEXT_QUESTIONS",
  SET_NEXT_STEP: "SET_NEXT_STEP",
  SET_DIFFICULTY_LEVEL: "SET_DIFFICULTY_LEVEL",
  SET_CATEGORIES: "SET_CATEGORIES",
  SET_TOTAL_QUESTIONS: "SET_TOTAL_QUESTIONS",
  RESTART_QUIZ: "RESTART_QUIZ",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_QUIZ_START:
      return { ...state, startQuiz: payload };

    case ACTIONS.SET_QUESTIONS:
      return { ...state, questions: payload };

    case ACTIONS.INCREASE_SCORE:
      return { ...state, score: state.score + 1 };

    case ACTIONS.SET_NEXT_QUESTION:
      return { ...state, currQuestionIdx: state.currQuestionIdx + 1 };

    case ACTIONS.SET_NEXT_STEP:
      return { ...state, step: state.step + 1 };

    case ACTIONS.SET_DIFFICULTY_LEVEL:
      return { ...state, difficulty: payload };

    case ACTIONS.SET_CATEGORIES:
      return { ...state, categories: payload };

    case ACTIONS.SET_TOTAL_QUESTIONS:
      return { ...state, totalQuestions: payload };

    case ACTIONS.RESTART_QUIZ:
      return {
        ...initialState,
        step: 1,
        startQuiz: "yes",
      };

    default:
      return state;
  }
};

const QuizStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuizStateContext.Provider value={{ state, dispatch, ACTIONS }}>
      {children}
    </QuizStateContext.Provider>
  );
};

export default QuizStateProvider;
