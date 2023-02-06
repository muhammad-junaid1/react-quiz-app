import StyledContainer from "./styles/StyledContainer";
import { useReducer } from "react";
import StyledQuizCard from "./styles/StyledQuizCard";
import StyledQuizHomeScreen from "./styles/StyledQuizHomeScreen";

const ACTIONS = {
  SET_QUIZ_START: "SET_QUIZ_START",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_QUIZ_START:
      return { ...state, startQuiz: payload };

    default:
      return state;
  }
};

const initialState = {
  startQuiz: "",
};

function App() {
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
      <StyledContainer>
        <StyledQuizHomeScreen>
          <h1>Ready For The Quiz?</h1>
          <button id="no" onClick={handleClickNoBtn}>
            Nah, Never
            <div>
              <span>&#8599;</span>
              <p>Don't click this</p>
            </div>
          </button>
          <button id="yes" onClick={handleClickYesBtn}>Yes I'm in </button>
        </StyledQuizHomeScreen>
      </StyledContainer>
    );
  } else if (state.startQuiz === "yes") {
    return (
      <StyledContainer>
        <StyledQuizCard>
          <h1>Quiz</h1>
        </StyledQuizCard>
      </StyledContainer>
    );
  } else {
    return <></>;
  }
}

export default App;
