import { useReducer } from "react";
import Quiz from "./Quiz";
import StyledQuizCard from "../styles/StyledQuizCard";
import StyledQuizHomeScreen from "../styles/StyledQuizHomeScreen";
import Result from "./Results";

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

const reducer = (state, { type, payload }) => {
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
          startQuiz: "yes"
      };

    default:
      return state;
  }
};

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

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClickNoBtn = () => {
    dispatch({
      type: ACTIONS.SET_QUIZ_START,
      payload: "no",
    });
  };

  const handleClickYesBtn = () => {
    dispatch({
      type: ACTIONS.SET_QUIZ_START,
      payload: "yes",
    });
  };

  if (!state.startQuiz) {
    return (
      <StyledQuizHomeScreen>
        <h1>Ready For The Quiz?</h1>
        <button id="no" onClick={handleClickNoBtn}>
          Nah, Never
          <div>
            <span>&#8599;</span>
            <p>Don't click this</p>
          </div>
        </button>
        <button id="yes" onClick={handleClickYesBtn}>
          Yes I'm in{" "}
        </button>
      </StyledQuizHomeScreen>
    );
  } else if (state.startQuiz === "yes") {
    if (state.currQuestionIdx === state.totalQuestions && state.step === 4) {
      return (
        <>
          <Result dispatch={dispatch} ACTIONS={ACTIONS} score={state.score} totalQuestions={state.totalQuestions} />
        </>
      );
    } else {
      return (
        <StyledQuizCard
          style={{ flexDirection: state.step < 4 ? "column" : "row" }}
        >
          <Quiz state={state} dispatch={dispatch} ACTIONS={ACTIONS} />
        </StyledQuizCard>
      );
    }
  } else {
    return (
      <>
        <h1 style={{ color: "white" }}>¯\_(ツ)_/¯</h1>
      </>
    );
  }
}

export default Home;
