import { useContext } from "react";
import Quiz from "./Quiz";
import StyledQuizCard from "../styles/StyledQuizCard";
import StyledQuizHomeScreen from "../styles/StyledQuizHomeScreen";
import Result from "./Results";
import { QuizStateContext } from "../contexts/QuizStateProvider";

function Home() {
  const {state, dispatch, ACTIONS} = useContext(QuizStateContext);

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
    if (state.currQuestionIdx >= state.totalQuestions && state.step === 4) {
        return (
          <>
            <Result state={state} dispatch={dispatch} ACTIONS={ACTIONS} />
          </>
        );
    } else {
      return (
        <StyledQuizCard
          style={{ flexDirection: state.step < 4 ? "column" : "row" }}
        >
          <Quiz/>
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
