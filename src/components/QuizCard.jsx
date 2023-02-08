import { useEffect, useState, useContext, useRef } from "react";
import Choice from "./Choice";
import "../styles/quiz-card.css";
import StyledProgress from "../styles/StyledProgress";
import { QuizStateContext } from "../contexts/QuizStateProvider";

const QuizCard = () => {
  const {
    state: {
      currQuestionIdx,
      totalQuestions,
      questions,
      difficulty,
      categories,
    },
    dispatch,
    ACTIONS,
  } = useContext(QuizStateContext);
  const [questionData, setQuestionData] = useState({
    incorrectAnswers: [],
    correctAnswer: "",
    question: "",
  });
  const [disableChoices, setDisableChoices] = useState(false);
  const [progressBarWidth, setProgressBarWidth] = useState("0%");

  const questionTextRef = useRef();
  const choicesRef = useRef();

  const handleClickChoice = (selectedChoice) => {
    const correctAnswer = questionData.correctAnswer.toString().toLowerCase();
    if (correctAnswer === selectedChoice) {
      dispatch({
        type: ACTIONS.INCREASE_SCORE,
      });
    }
    if (currQuestionIdx === totalQuestions - 1) {
      setTimeout(() => {
        dispatch({
          type: ACTIONS.SET_NEXT_QUESTION,
        });
      }, 800);
    } else {
      dispatch({
        type: ACTIONS.SET_NEXT_QUESTION,
      });
    }
  };

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await fetch(
          `https://the-trivia-api.com/api/questions?limit=${totalQuestions}&categories=${categories}&difficulty=${difficulty}`
        );
        const data = await response.json();
        dispatch({
          type: ACTIONS.SET_QUESTIONS,
          payload: data,
        });
      } catch (error) {
        console.log("error in getting questions ", error);
      }
    };
    getQuestions();
  }, []);

  const scale = (number, [inMin, inMax], [outMin, outMax]) => {
    return ((number - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
  };

  useEffect(() => {
    if (questions.length) {
      const questionDataObj = questions[currQuestionIdx];
      if (questionDataObj) {
        const randIdx = Math.floor(
          Math.random() * questionDataObj.incorrectAnswers.length
        );
        questionDataObj.incorrectAnswers.splice(
          randIdx,
          null,
          questionDataObj.correctAnswer
        );
        setQuestionData(questionDataObj);
        questionTextRef.current.style.animation =
          "slide .6s ease-in-out forwards";
        choicesRef.current.style.animation = "fade 1.4s ease-out forwards";

        setProgressBarWidth(
          `${scale(currQuestionIdx, [0, totalQuestions], [0, 100])}%`
        );

        setDisableChoices(true);
        setTimeout(() => {
          questionTextRef.current.style.animation = "";
        }, 650);
        setTimeout(() => {
          choicesRef.current.style.animation = "";
          setDisableChoices(false);
        }, 1600);
      }
    }
  }, [questions, currQuestionIdx, totalQuestions]);

  return (
    <>
      <div className="left" ref={questionTextRef}>
        <h1>
          Question No {currQuestionIdx + 1}
          <span>/{totalQuestions}</span>
        </h1>
        <p>{questionData.question}</p>
      </div>
      <div className="right" ref={choicesRef}>
        {questionData.incorrectAnswers.map((choice, idx) => {
          return (
            <Choice
              onClick={() => handleClickChoice(choice.toString().toLowerCase())}
              key={idx}
              text={choice}
              disabled={disableChoices}
            />
          );
        })}
      </div>

      <StyledProgress width={progressBarWidth}>
        <div></div>
      </StyledProgress>
    </>
  );
};

export default QuizCard;
