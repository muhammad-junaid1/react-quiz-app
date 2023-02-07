import { useEffect, useState } from "react";
import data from "../data";
import StyledQuizCard from "../styles/StyledQuizCard";
import Choice from "./Choice";

const QuizCard = ({
  stateObj: { currQuestionIdx, totalQuestions, questions },
  dispatch,
  ACTIONS,
}) => {
  const [questionData, setQuestionData] = useState({
    incorrectAnswers: [],
    correctAnswer: "",
    question: "",
  });

  const handleClickChoice = (selectedChoice) => {
    const correctAnswer = questionData.correctAnswer.toString().toLowerCase();
    if (correctAnswer === selectedChoice) {
      dispatch({
        type: ACTIONS.INCREASE_SCORE,
      });
    }
    dispatch({
      type: ACTIONS.SET_NEXT_QUESTION,
    });
  };

  useEffect(() => {
    // const getQuestions = async () => {
    //   try {
    //     const response = await fetch(
    //       "https://the-trivia-api.com/api/questions?limit=5&categories=science&difficulty=easy"
    //     );
    //     const data = await response.json();
    //     dispatch({
    //       type: ACTIONS.SET_QUESTIONS,
    //       payload: data,
    //     });
    //   } catch (error) {
    //     console.log("error in getting questions ", error);
    //   }
    // };
    setTimeout(() => {
      dispatch({
        type: ACTIONS.SET_QUESTIONS,
        payload: data,
      });
    }, 2000);
    // getQuestions();
  }, []);

  useEffect(() => {
    if (questions.length) {
      const questionDataObj = questions[currQuestionIdx];
      const randIdx = Math.floor(
        Math.random() * questionDataObj.incorrectAnswers.length
      );
      questionDataObj.incorrectAnswers.splice(
        randIdx,
        null,
        questionDataObj.correctAnswer
      );
      setQuestionData(questionDataObj);
    }
  }, [questions, currQuestionIdx]);

  return (
    <>
      <StyledQuizCard>
        <div className="left">
          <h1>
            Question No {currQuestionIdx + 1}
            <span>/{totalQuestions}</span>
          </h1>
          <p>{questionData.question}</p>
        </div>
        <div className="right">
          {questionData.incorrectAnswers.map((choice, idx) => {
            return (
              <Choice
                onClick={() =>
                  handleClickChoice(choice.toString().toLowerCase())
                }
                key={idx}
                text={choice}
              />
            );
          })}
        </div>
      </StyledQuizCard>
    </>
  );
};

export default QuizCard;
