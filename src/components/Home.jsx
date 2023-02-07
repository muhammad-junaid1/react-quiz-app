import { useReducer } from "react";
import QuizCard from "./QuizCard";
import StyledQuizHomeScreen from "../styles/StyledQuizHomeScreen";
import Result from "./Result";

const ACTIONS = {
  SET_QUIZ_START: "SET_QUIZ_START",
  SET_QUESTIONS: "SET_QUESTIONS",
  INCREASE_SCORE: "INCREASE_SCORE",
  SET_NEXT_QUESTION: "SET_NEXT_QUESTIONS",
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

    default:
      return state;
  }
};

const initialState = {
  startQuiz: "",
  currQuestionIdx: 0,
  questions: [],
  totalQuestions: 5,
  score: 0,
  step: 1,
  difficulty: "",
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
    if (state.currQuestionIdx === state.totalQuestions) {
      return (
        <>
          <Result score={state.score} totalQuestions={state.totalQuestions} />
        </>
      );
    } else {
      return (
        <QuizCard stateObj={state} dispatch={dispatch} ACTIONS={ACTIONS} />
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
