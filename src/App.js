import StyledContainer from "./styles/StyledContainer";
import { useReducer, useEffect } from "react";
import QuizCard from "./components/QuizCard";
import StyledQuizHomeScreen from "./styles/StyledQuizHomeScreen";

const ACTIONS = {
  SET_QUIZ_START: "SET_QUIZ_START",
  SET_QUESTIONS: "SET_QUESTIONS"
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_QUIZ_START:
      return { ...state, startQuiz: payload };

    case ACTIONS.SET_QUESTIONS:
      return {...state, questions: payload}; 

    default:
      return state;
  }
};

const initialState = {
  startQuiz: "",
  currQuestionIdx: 0,
  questions: [],
  totalQuestions: 5
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

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await fetch("https://the-trivia-api.com/api/questions?limit=5&categories=science&difficulty=easy");
        const data = await response.json();
        dispatch({
          type: ACTIONS.SET_QUESTIONS,
          payload: data,
        });
      } catch (error) {
        console.log("error in getting questions ", error);
      }
    }
    getQuestions();
  }, []);

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
          {state.questions.length ?
              <QuizCard currQuestionIdx={state.currQuestionIdx} totalQuestions={state.totalQuestions} questionData={state.questions[state.currQuestionIdx]}/>
              : <></>
          }
        </StyledContainer>
    );
  } else {
    return <></>;
  }
}

export default App;